// ─────────────────────────────────────────────────────────────────────────
//  LessonPlayerView · reproductor de lecciones teóricas en formato tarjetas.
//  El usuario avanza tarjeta a tarjeta; al llegar al final, "Completar" marca
//  la lección en Firestore (racha + XP) y celebra con confeti.
// ─────────────────────────────────────────────────────────────────────────
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';
import { flattenLecciones } from '../data/courseData';
import ConfettiCelebration from '../components/ConfettiCelebration';
import LogroPopup from '../components/LogroPopup';
import { mensajeGuardado } from '../firebase/errores';

export default function LessonPlayerView() {
  const { leccionId } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useCourse();

  const leccion = useMemo(
    () => flattenLecciones().find((l) => l.id === leccionId),
    [leccionId]
  );

  const [i, setI] = useState(0);
  const [celebrar, setCelebrar] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [nuevosLogros, setNuevosLogros] = useState([]);
  const [mostrarLogros, setMostrarLogros] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!leccion || leccion.tipo !== 'teoria') {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center text-muted">
        Lección no encontrada.
        <div className="mt-4">
          <button className="btn-ghost" onClick={() => navigate('/')}>
            Volver al camino
          </button>
        </div>
      </div>
    );
  }

  const tarjetas = leccion.tarjetas;
  const esUltima = i === tarjetas.length - 1;
  const progreso = Math.round(((i + 1) / tarjetas.length) * 100);

  async function completar() {
    setErrorMsg('');
    setGuardando(true);
    try {
      const res = await completeLesson(leccion.id);
      setNuevosLogros(res?.nuevosLogros || []);
      setCelebrar(true);
    } catch (err) {
      console.error('Error al completar la lección:', err);
      setErrorMsg(mensajeGuardado(err));
    } finally {
      setGuardando(false);
    }
  }

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

      {/* Barra superior: cerrar + progreso de tarjetas */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:bg-elevated"
          aria-label="Cerrar lección"
        >
          ✕
        </button>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-elevated">
          <div
            className="h-full rounded-full bg-violet transition-all duration-300"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <span className="text-xs text-muted">
          {i + 1}/{tarjetas.length}
        </span>
      </div>

      {/* Tarjeta actual */}
      <div className="flex flex-1 flex-col justify-center">
        <div key={i} className="card animate-pop p-7">
          <p className="eyebrow">{leccion.titulo}</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug">
            {tarjetas[i].titulo}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            {tarjetas[i].texto}
          </p>
        </div>
      </div>

      {/* Navegación */}
      {errorMsg && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-center text-sm text-red-300">
          {errorMsg}
        </p>
      )}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          className="btn-ghost"
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={i === 0}
        >
          Anterior
        </button>

        {esUltima ? (
          <button className="btn-success" onClick={completar} disabled={guardando}>
            {guardando ? 'Guardando…' : 'Completar lección ✓'}
          </button>
        ) : (
          <button className="btn-primary" onClick={() => setI((n) => n + 1)}>
            Siguiente →
          </button>
        )}
      </div>
    </div>
  );
}
