// ─────────────────────────────────────────────────────────────────────────
//  NextLessonCard · atajo destacado a la próxima lección pendiente.
//  Reduce la fricción: el alumno entra y de un toque sigue donde lo dejó.
// ─────────────────────────────────────────────────────────────────────────
export default function NextLessonCard({ leccion, onIr }) {
  const esPractica = leccion.tipo === 'practica';
  return (
    <button
      onClick={onIr}
      className="group mt-4 flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-terra/40 bg-gradient-to-br from-terra/25 to-surface p-5 text-left shadow-glow transition hover:-translate-y-0.5 animate-slideUp"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-terra text-2xl animate-float">
        {esPractica ? '🎤' : '📇'}
      </span>
      <div className="min-w-0 flex-1">
        <p className="eyebrow">Continúa aquí</p>
        <p className="mt-0.5 truncate font-display text-lg font-bold">{leccion.titulo}</p>
        <p className="text-sm text-muted">
          {esPractica ? 'Práctica' : 'Teoría'} · {leccion.duracionMin} min
        </p>
      </div>
      <span className="text-2xl text-terra-soft transition group-hover:translate-x-1">→</span>
    </button>
  );
}
