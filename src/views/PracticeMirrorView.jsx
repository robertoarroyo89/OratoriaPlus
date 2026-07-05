// ─────────────────────────────────────────────────────────────────────────
//  PracticeMirrorView · el módulo de ejercicio en casa.
//
//  Flujo en 3 fases:
//   1) 'intro'    → instrucciones de coaching + botón para activar la cámara.
//   2) 'grabando' → espejo digital (webcam local vía useWebcam) + cuenta atrás.
//   3) 'coaching' → al parar, se oculta el vídeo y aparece la auto-evaluación
//                   (escala de emojis + checklist). "Finalizar" guarda en
//                   Firestore, actualiza la racha y lanza el confeti.
//
//  Privacidad: el vídeo se ve en tiempo real pero NUNCA se graba ni se sube.
//  Solo se guardan en Firestore las respuestas del formulario de coaching.
// ─────────────────────────────────────────────────────────────────────────
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { useWebcam } from '../hooks/useWebcam';
import { flattenLecciones } from '../data/courseData';
import ConfettiCelebration from '../components/ConfettiCelebration';
import LogroPopup from '../components/LogroPopup';
import { mensajeGuardado } from '../firebase/errores';

const EMOJIS = [
  { valor: 1, cara: '😣', etiqueta: 'Muy incómodo' },
  { valor: 2, cara: '😕', etiqueta: 'Dudoso' },
  { valor: 3, cara: '😐', etiqueta: 'Normal' },
  { valor: 4, cara: '🙂', etiqueta: 'Bien' },
  { valor: 5, cara: '🤩', etiqueta: 'Genial' },
];

// Formatea segundos como m:ss.
function fmt(seg) {
  const m = Math.floor(seg / 60);
  const s = seg % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function PracticeMirrorView() {
  const { leccionId } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useCourse();
  const { videoRef, activa, error, iniciar, detener } = useWebcam();

  const leccion = useMemo(
    () => flattenLecciones().find((l) => l.id === leccionId),
    [leccionId]
  );

  const [fase, setFase] = useState('intro'); // 'intro' | 'grabando' | 'coaching'
  const [restante, setRestante] = useState(0);
  const [sensacion, setSensacion] = useState(null);
  const [checks, setChecks] = useState({});
  const [celebrar, setCelebrar] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [nuevosLogros, setNuevosLogros] = useState([]);
  const [mostrarLogros, setMostrarLogros] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const intervalRef = useRef(null);

  // Guardia: lección inexistente o de tipo incorrecto.
  if (!leccion || leccion.tipo !== 'practica') {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center text-muted">
        Ejercicio no encontrado.
        <div className="mt-4">
          <button className="btn-ghost" onClick={() => navigate('/')}>
            Volver al camino
          </button>
        </div>
      </div>
    );
  }

  const ej = leccion.ejercicio;

  // ─── Cronómetro (cuenta atrás mientras se graba) ────────────────────────
  useEffect(() => {
    if (fase !== 'grabando') return;
    intervalRef.current = setInterval(() => {
      setRestante((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          pararEjercicio(); // tiempo agotado → pasar a coaching
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  async function empezarEjercicio() {
    const ok = await iniciar();
    if (!ok) return; // sin cámara no arrancamos: el error se muestra en la intro
    setRestante(ej.segundos);
    setFase('grabando');
  }

  function pararEjercicio() {
    clearInterval(intervalRef.current);
    detener(); // libera la cámara: el vídeo desaparece
    setFase('coaching');
  }

  function toggleCheck(idx) {
    setChecks((c) => ({ ...c, [idx]: !c[idx] }));
  }

  async function finalizar() {
    setErrorMsg('');
    setGuardando(true);
    try {
      // Solo persistimos las respuestas de auto-coaching, jamás el vídeo.
      const autoCoaching = {
        sensacion,
        checklist: ej.checklist.map((texto, idx) => ({
          objetivo: texto,
          logrado: Boolean(checks[idx]),
        })),
      };
      const res = await completeLesson(leccion.id, autoCoaching);
      setNuevosLogros(res?.nuevosLogros || []);
      setCelebrar(true);
    } catch (err) {
      console.error('Error al finalizar la práctica:', err);
      setErrorMsg(mensajeGuardado(err));
    } finally {
      setGuardando(false);
    }
  }

  const tiempoBajo = restante <= 10 && restante > 0;

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-5">
      <ConfettiCelebration
        activo={celebrar}
        onDone={() => {
          setCelebrar(false);
          if (nuevosLogros.length) setMostrarLogros(true);
          else navigate('/');
        }}
      />
      {mostrarLogros && (
        <LogroPopup logros={nuevosLogros} onClose={() => navigate('/')} />
      )}

      {/* Barra superior */}
      <div className="mb-5 flex items-center gap-3">
        <button
          onClick={() => {
            detener();
            navigate('/');
          }}
          className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:bg-elevated"
          aria-label="Cerrar ejercicio"
        >
          ✕
        </button>
        <span className="chip">🎤 Práctica</span>
        <span className="ml-auto text-xs text-muted">{leccion.titulo}</span>
      </div>

      {/* ─── FASE 1: instrucciones de coaching ─────────────────────────── */}
      {fase === 'intro' && (
        <div className="animate-pop space-y-5">
          <div className="card border-l-4 border-l-terra p-5">
            <p className="eyebrow">Tu objetivo</p>
            <p className="mt-2 text-lg font-medium leading-relaxed">{ej.objetivo}</p>
          </div>

          <div className="card p-5">
            <p className="eyebrow text-forest">Consejo del coach</p>
            <p className="mt-2 leading-relaxed text-muted">{ej.consejo}</p>
          </div>

          <div className="card flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted">Duración</p>
              <p className="font-display text-2xl font-bold">{fmt(ej.segundos)}</p>
            </div>
            <span className="text-4xl">⏱️</span>
          </div>

          {error && (
            <p className="rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-sm text-gold">
              {error}
            </p>
          )}

          <button className="btn-primary w-full" onClick={empezarEjercicio}>
            Activar espejo y empezar 🎬
          </button>
          <p className="text-center text-xs text-faint">
            Tu cámara se abre solo en tu navegador. No se graba ni se sube nada.
          </p>
        </div>
      )}

      {/* ─── FASE 2: espejo digital + cronómetro ───────────────────────── */}
      {fase === 'grabando' && (
        <div className="animate-pop space-y-4">
          {/* Cronómetro */}
          <div
            className={`text-center font-display text-5xl font-extrabold tabular-nums transition-colors ${
              tiempoBajo ? 'animate-pulse text-gold' : 'text-ink'
            }`}
          >
            {fmt(restante)}
          </div>

          {/* Vídeo en espejo (espejado horizontalmente como un espejo real) */}
          <div className="card relative aspect-video overflow-hidden p-0">
            <video
              ref={videoRef}
              muted
              playsInline
              className="h-full w-full scale-x-[-1] object-cover"
            />
            {!activa && (
              <div className="absolute inset-0 grid place-items-center text-muted">
                Abriendo cámara…
              </div>
            )}
            <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-base/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              En directo · local
            </span>
          </div>

          {/* Recordatorio del objetivo mientras practica */}
          <div className="card p-4 text-sm text-muted">
            <span className="font-semibold text-ink">Recuerda: </span>
            {ej.objetivo}
          </div>

          <button className="btn-ghost w-full" onClick={pararEjercicio}>
            He terminado ⏹
          </button>
        </div>
      )}

      {/* ─── FASE 3: auto-coaching ─────────────────────────────────────── */}
      {fase === 'coaching' && (
        <div className="animate-pop space-y-5">
          <div className="text-center">
            <h2 className="font-display text-xl font-bold">¿Cómo ha ido?</h2>
            <p className="mt-1 text-sm text-muted">
              Sé honesto contigo. Aquí es donde de verdad se aprende.
            </p>
          </div>

          {/* Escala de emojis */}
          <div className="card p-5">
            <p className="mb-3 text-sm font-medium">¿Cómo te has sentido?</p>
            <div className="flex justify-between gap-2">
              {EMOJIS.map((e) => (
                <button
                  key={e.valor}
                  onClick={() => setSensacion(e.valor)}
                  aria-label={e.etiqueta}
                  className={`flex flex-1 flex-col items-center gap-1 rounded-xl border p-2 transition ${
                    sensacion === e.valor
                      ? 'border-terra bg-terra/15 scale-105'
                      : 'border-line hover:bg-elevated'
                  }`}
                >
                  <span className="text-2xl">{e.cara}</span>
                  <span className="text-[0.65rem] leading-tight text-muted">
                    {e.etiqueta}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Checklist de objetivos */}
          <div className="card p-5">
            <p className="mb-3 text-sm font-medium">¿Qué has logrado?</p>
            <div className="space-y-2">
              {ej.checklist.map((texto, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                    checks[idx]
                      ? 'border-forest bg-forest/10'
                      : 'border-line hover:bg-elevated'
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border text-sm ${
                      checks[idx]
                        ? 'border-forest bg-forest text-base'
                        : 'border-faint text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                  <span className={`text-sm ${checks[idx] ? 'text-ink' : 'text-muted'}`}>
                    {texto}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-center text-sm text-red-300">
              {errorMsg}
            </p>
          )}

          <button
            className="btn-success w-full"
            onClick={finalizar}
            disabled={guardando || sensacion === null}
          >
            {guardando
              ? 'Guardando…'
              : sensacion === null
                ? 'Elige cómo te has sentido'
                : 'Finalizar ejercicio 🎉'}
          </button>
        </div>
      )}
    </div>
  );
}
