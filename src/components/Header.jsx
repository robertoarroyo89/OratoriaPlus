// ─────────────────────────────────────────────────────────────────────────
//  Header · cabecera persistente con racha 🔥, nivel/XP y salir.
// ─────────────────────────────────────────────────────────────────────────
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';

export default function Header() {
  const { user, logout } = useAuth();
  const { streakVigente, nivel, progresoNivel, perfil } = useCourse();
  const nombre = perfil?.displayName || user?.displayName || 'Orador/a';
  const inicial = nombre.trim().charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        {/* Avatar + nombre */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet font-display font-bold text-white">
            {inicial}
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold leading-tight">
              {nombre}
            </p>
            <p className="text-xs text-muted">Nivel {nivel}</p>
          </div>
        </div>

        {/* Barra de nivel (crece hacia la derecha) */}
        <div className="mx-1 hidden flex-1 sm:block">
          <div className="h-2 overflow-hidden rounded-full bg-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet to-violet-soft transition-all duration-500"
              style={{ width: `${progresoNivel}%` }}
            />
          </div>
        </div>

        {/* Racha */}
        <div
          className="flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5"
          title="Días seguidos practicando"
        >
          <span className={streakVigente > 0 ? '' : 'opacity-40 grayscale'}>🔥</span>
          <span className="font-display text-sm font-bold text-amber">{streakVigente}</span>
        </div>

        <button
          onClick={logout}
          className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition hover:bg-elevated hover:text-ink"
        >
          Salir
        </button>
      </div>
    </header>
  );
}
