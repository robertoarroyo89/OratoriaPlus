// ─────────────────────────────────────────────────────────────────────────
//  LogroPopup · overlay que celebra logros recién desbloqueados.
//  Aparece tras el confeti de completar y, al cerrar, continúa la navegación.
// ─────────────────────────────────────────────────────────────────────────
export default function LogroPopup({ logros, onClose }) {
  if (!logros?.length) return null;
  const varios = logros.length > 1;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-base/85 p-6 backdrop-blur animate-fadeIn">
      <div className="card w-full max-w-sm p-6 text-center animate-pop">
        <p className="eyebrow text-amber">
          {varios ? `¡${logros.length} logros nuevos!` : '¡Logro desbloqueado!'}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {logros.map((l, i) => (
            <span
              key={l.id}
              className="grid h-20 w-20 place-items-center rounded-full bg-elevated text-4xl shadow-glow animate-badgePop"
              style={{ animationDelay: `${i * 120}ms` }}
              title={l.descripcion}
            >
              {l.icono}
            </span>
          ))}
        </div>

        <h3 className="mt-5 font-display text-xl font-bold">
          {varios ? logros.map((l) => l.titulo).join(' · ') : logros[0].titulo}
        </h3>
        {!varios && <p className="mt-1 text-sm text-muted">{logros[0].descripcion}</p>}

        <button onClick={onClose} className="btn-primary mt-6 w-full">
          ¡Genial! 🎉
        </button>
      </div>
    </div>
  );
}
