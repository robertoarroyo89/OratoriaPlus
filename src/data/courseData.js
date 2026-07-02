// ─────────────────────────────────────────────────────────────────────────
//  Estructura pedagógica del curso (4 meses · 4 semanas/mes · 5 lecciones/semana)
//  El contenido vive en bloque1..4.js; aquí solo se ensambla y se derivan
//  utilidades. Añadir lecciones = editar el bloque correspondiente.
//
//  Tipos de lección:
//   · 'teoria'   → tarjetas de micro-learning (LessonPlayerView)
//   · 'practica' → ejercicio con espejo digital + cronómetro (PracticeMirrorView)
//  La duración de teoría incluye la micro-tarea "Aplícalo ahora" de la última
//  tarjeta; la de práctica incluye preparación + ejercicio + auto-coaching.
// ─────────────────────────────────────────────────────────────────────────
import { BLOQUE1 } from './bloque1';
import { BLOQUE2 } from './bloque2';
import { BLOQUE3 } from './bloque3';
import { BLOQUE4 } from './bloque4';

export const XP_POR_LECCION = 20;
export const XP_POR_NIVEL = 100; // 5 lecciones = 1 nivel

export const COURSE = [BLOQUE1, BLOQUE2, BLOQUE3, BLOQUE4];

// ─── Utilidades derivadas de la estructura ───────────────────────────────

/** Devuelve todas las lecciones en orden lineal (para desbloqueo secuencial). */
export function flattenLecciones(course = COURSE) {
  const out = [];
  course.forEach((bloque) =>
    bloque.semanas.forEach((semana) =>
      semana.lecciones.forEach((leccion) =>
        out.push({ ...leccion, bloqueId: bloque.id, semanaId: semana.id })
      )
    )
  );
  return out;
}

/** Total de lecciones del curso. */
export const TOTAL_LECCIONES = flattenLecciones().length;
