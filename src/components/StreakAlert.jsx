// ─────────────────────────────────────────────────────────────────────────
//  StreakAlert · aviso cuando la racha está en peligro (última actividad ayer,
//  aún sin practicar hoy). Llama la atención con un llama animada.
// ─────────────────────────────────────────────────────────────────────────
export default function StreakAlert({ dias, onIr }) {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-amber/40 bg-amber/10 p-4 animate-slideUp">
      <span className="text-3xl animate-shake">🔥</span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-bold text-amber">Tu racha está en peligro</p>
        <p className="text-xs text-muted">
          Llevas {dias} {dias === 1 ? 'día' : 'días'} seguidos. Completa una lección hoy
          para no perderla.
        </p>
      </div>
      <button onClick={onIr} className="btn-primary shrink-0 !px-4 !py-2 text-sm">
        Practicar
      </button>
    </div>
  );
}
