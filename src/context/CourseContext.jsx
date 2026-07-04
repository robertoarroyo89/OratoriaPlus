// ─────────────────────────────────────────────────────────────────────────
//  CourseContext · progreso del curso + gamificación
//  Responsabilidades:
//   · Suscribirse en tiempo real al perfil del usuario en Firestore.
//   · Calcular y actualizar la racha (streak) con reglas de días consecutivos.
//   · Marcar lecciones como completadas y sumar XP / nivel.
//   · Exponer helpers de desbloqueo secuencial y progreso global.
// ─────────────────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from './AuthContext';
import {
  COURSE,
  TOTAL_LECCIONES,
  XP_POR_LECCION,
  XP_POR_NIVEL,
  flattenLecciones,
} from '../data/courseData';
import { logrosDesbloqueados, LOGRO_POR_ID } from '../data/logros';

const CourseContext = createContext(null);

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse debe usarse dentro de <CourseProvider>');
  return ctx;
}

// ─── Helpers de fecha (racha basada en días de calendario locales) ────────
function hoyISO() {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}

function diasEntre(isoA, isoB) {
  const a = new Date(`${isoA}T00:00:00`);
  const b = new Date(`${isoB}T00:00:00`);
  return Math.round((b - a) / 86_400_000);
}

export function CourseProvider({ children }) {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState(null);
  const [cargandoPerfil, setCargandoPerfil] = useState(true);

  // Suscripción en tiempo real al documento del usuario.
  useEffect(() => {
    if (!user) {
      setPerfil(null);
      setCargandoPerfil(false);
      return;
    }
    setCargandoPerfil(true);
    const ref = doc(db, 'usuarios', user.uid);
    const unsub = onSnapshot(
      ref,
      (snap) => {
        setPerfil(snap.exists() ? snap.data() : null);
        setCargandoPerfil(false);
      },
      (err) => {
        // Suele indicar reglas de Firestore sin publicar (permission-denied).
        console.error('No se pudo leer el perfil en Firestore:', err);
        setCargandoPerfil(false);
      }
    );
    return unsub;
  }, [user]);

  const leccionesCompletadas = perfil?.leccionesCompletadas ?? {};

  // ─── Helpers de estado de lecciones ─────────────────────────────────────
  const lineal = useMemo(() => flattenLecciones(COURSE), []);

  const isCompleted = (leccionId) => Boolean(leccionesCompletadas[leccionId]);

  /** Una lección está desbloqueada si es la primera o si la anterior (en orden
   *  lineal) ya está completada. */
  const isUnlocked = (leccionId) => {
    const idx = lineal.findIndex((l) => l.id === leccionId);
    if (idx <= 0) return true;
    return isCompleted(lineal[idx - 1].id);
  };

  // ─── Racha vigente para mostrar en cabecera ─────────────────────────────
  // Si la última actividad fue hoy o ayer, la racha guardada sigue viva.
  // Si es más antigua, visualmente se muestra 0 (se romperá al recalcular).
  const streakVigente = useMemo(() => {
    if (!perfil) return 0;
    if (!perfil.ultimaActividad) return 0;
    const d = diasEntre(perfil.ultimaActividad, hoyISO());
    return d <= 1 ? perfil.streak : 0;
  }, [perfil]);

  // ─── Racha en peligro ───────────────────────────────────────────────────
  // La última actividad fue AYER (y hay racha viva) → hoy hay que practicar
  // o la racha se romperá. Si fue hoy, no hay peligro; si fue hace más de un
  // día, la racha ya está rota (streakVigente = 0).
  const rachaEnPeligro = useMemo(() => {
    if (!perfil?.ultimaActividad || !perfil.streak) return false;
    return diasEntre(perfil.ultimaActividad, hoyISO()) === 1;
  }, [perfil]);

  // ─── Próxima lección (primera no completada, en orden lineal) ───────────
  const proximaLeccion = useMemo(
    () => lineal.find((l) => !leccionesCompletadas[l.id]) || null,
    [lineal, leccionesCompletadas]
  );

  // Logros ya desbloqueados guardados en el perfil.
  const logros = perfil?.logros ?? {};

  const nCompletadas = Object.keys(leccionesCompletadas).length;
  const progresoGlobal = Math.round((nCompletadas / TOTAL_LECCIONES) * 100);
  const xp = perfil?.xp ?? 0;
  const nivel = perfil?.nivel ?? 1;
  const xpEnNivel = xp % XP_POR_NIVEL; // XP dentro del nivel actual
  const progresoNivel = Math.round((xpEnNivel / XP_POR_NIVEL) * 100);

  // ─── Completar una lección (núcleo de la gamificación) ──────────────────
  /**
   * Marca la lección como completada, recalcula la racha y suma XP/nivel.
   * @param {string} leccionId
   * @param {object} [autoCoaching] respuestas del formulario de auto-coaching
   * @returns {{ subioNivel: boolean, nuevaRacha: number }}
   */
  async function completeLesson(leccionId, autoCoaching = null) {
    if (!user) throw new Error('No hay sesión activa.');

    // Leemos el documento FRESCO de Firestore (no el estado de React, que
    // puede no estar al día en el momento del clic). Así el cálculo de
    // "logros nuevos" y de la racha siempre parte de la verdad guardada.
    const ref = doc(db, 'usuarios', user.uid);
    const snap = await getDoc(ref);
    const base = snap.exists() ? snap.data() : {};
    const completadasActuales = base.leccionesCompletadas || {};
    const yaCompletada = Boolean(completadasActuales[leccionId]);
    const hoy = hoyISO();
    const ultima = base.ultimaActividad || null;

    // 1) Racha
    let nuevaRacha = base.streak || 0;
    let nuevosDias = base.diasCompletados || 0;
    if (ultima !== hoy) {
      const gap = ultima ? diasEntre(ultima, hoy) : null;
      nuevaRacha = gap === 1 ? nuevaRacha + 1 : 1; // ayer → sigue; si no, reinicia
      nuevosDias += 1;
    }

    // 2) XP y nivel (solo suma la primera vez que se completa la lección)
    const xpActual = base.xp || 0;
    const nivelActual = base.nivel || 1;
    const nuevoXp = yaCompletada ? xpActual : xpActual + XP_POR_LECCION;
    const nuevoNivel = Math.floor(nuevoXp / XP_POR_NIVEL) + 1;
    const subioNivel = nuevoNivel > nivelActual;

    // 3) Logros
    const leccionesProyectadas = { ...completadasActuales, [leccionId]: true };
    const desbloqueados = logrosDesbloqueados({
      leccionesCompletadas: leccionesProyectadas,
      streak: nuevaRacha,
    });
    const yaTenidos = base.logros || {};
    const nuevosIds = [...desbloqueados].filter((id) => !yaTenidos[id]);
    const logrosNuevos = {};
    nuevosIds.forEach((id) => {
      logrosNuevos[id] = { desbloqueadoEn: new Date().toISOString() };
    });

    // 4) Escritura con setDoc + merge (objetos anidados, sin rutas con puntos:
    //    los IDs llevan guiones y las field-paths con puntos no los admiten).
    //    Si el perfil se creó sin fecha (p. ej. registro con reglas sin
    //    publicar), la rellenamos aquí una única vez.
    await setDoc(
      ref,
      {
        displayName: base.displayName || user.displayName || 'Orador/a',
        email: base.email || user.email || null,
        ...(base.creadoEn ? {} : { creadoEn: serverTimestamp() }),
        streak: nuevaRacha,
        diasCompletados: nuevosDias,
        ultimaActividad: hoy,
        xp: nuevoXp,
        nivel: nuevoNivel,
        leccionesCompletadas: {
          [leccionId]: {
            completadaEn: new Date().toISOString(),
            autoCoaching: autoCoaching || null,
          },
        },
        logros: logrosNuevos,
      },
      { merge: true }
    );

    return {
      subioNivel,
      nuevaRacha,
      nuevosLogros: nuevosIds.map((id) => LOGRO_POR_ID[id]).filter(Boolean),
    };
  }

  const value = {
    // datos
    course: COURSE,
    perfil,
    cargandoPerfil,
    leccionesCompletadas,
    // métricas de gamificación
    streakVigente,
    rachaEnPeligro,
    proximaLeccion,
    logros,
    xp,
    nivel,
    progresoNivel,
    nCompletadas,
    totalLecciones: TOTAL_LECCIONES,
    progresoGlobal,
    // helpers
    isCompleted,
    isUnlocked,
    // acciones
    completeLesson,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}
