// ─────────────────────────────────────────────────────────────────────────
//  LessonNode · un nodo del "Camino de la Oratoria".
//  Estados visuales: completado (✓ esmeralda), disponible (pulso violeta),
//  bloqueado (candado, no clicable). Alterna a izquierda/derecha (serpenteo).
// ─────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router-dom';

export default function LessonNode({ leccion, estado, lado, delay = 0 }) {
  const navigate = useNavigate();
  const bloqueada = estado === 'bloqueada';
  const completada = estado === 'completada';
  const esPractica = leccion.tipo === 'practica';

  function abrir() {
    if (bloqueada) return;
    navigate(esPractica ? `/practica/${leccion.id}` : `/leccion/${leccion.id}`);
  }

  // Icono según tipo y estado.
  const icono = completada ? '✓' : bloqueada ? '🔒' : esPractica ? '🎤' : '📇';

  return (
    <div
      className={`flex ${lado === 'izq' ? 'justify-start' : 'justify-end'} px-2 animate-fadeInUp`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={abrir}
        disabled={bloqueada}
        aria-label={`${leccion.titulo} — ${estado}`}
        className={[
          'group flex w-full max-w-[19rem] items-center gap-3 rounded-2xl border p-3 text-left transition',
          bloqueada
            ? 'cursor-not-allowed border-line/60 bg-surface/40 opacity-60'
            : 'border-line bg-surface hover:-translate-y-0.5 hover:border-violet hover:shadow-glow',
        ].join(' ')}
      >
        {/* Disco del nodo */}
        <span
          className={[
            'grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-bold',
            completada
              ? 'bg-emerald text-base'
              : bloqueada
                ? 'bg-elevated text-faint'
                : 'bg-violet text-white animate-pulseGlow',
          ].join(' ')}
        >
          {icono}
        </span>

        <span className="min-w-0">
          <span className="block truncate font-display text-sm font-semibold">
            {leccion.titulo}
          </span>
          <span className="mt-0.5 flex items-center gap-2 text-xs text-muted">
            <span className="chip !py-0.5">
              {esPractica ? 'Práctica' : 'Teoría'}
            </span>
            <span>{leccion.duracionMin} min</span>
          </span>
        </span>
      </button>
    </div>
  );
}
