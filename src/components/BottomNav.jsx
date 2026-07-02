// ─────────────────────────────────────────────────────────────────────────
//  BottomNav · navegación inferior (solo en las vistas "de estar", no en las
//  vistas de foco como lección/práctica).
// ─────────────────────────────────────────────────────────────────────────
import { NavLink } from 'react-router-dom';

const ITEMS = [
  { to: '/', label: 'Camino', icono: '🗺️' },
  { to: '/progreso', label: 'Progreso', icono: '📈' },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl">
        {ITEMS.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition ${
                isActive ? 'text-violet-soft' : 'text-faint hover:text-muted'
              }`
            }
          >
            <span className="text-lg">{it.icono}</span>
            {it.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
