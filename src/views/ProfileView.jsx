// ─────────────────────────────────────────────────────────────────────────
//  ProfileView · página de perfil del alumno.
//  Nombre editable (se guarda en Firestore y en Firebase Auth), datos de la
//  cuenta, resumen de estadísticas, últimas insignias y cierre de sesión.
// ─────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { LOGROS } from '../data/logros';

function fechaLarga(ts) {
  try {
    const d = ts?.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return '—';
  }
}

export default function ProfileView() {
  const { user, logout } = useAuth();
  const {
    perfil,
    streakVigente,
    xp,
    nivel,
    nCompletadas,
    totalLecciones,
    progresoGlobal,
    logros,
  } = useCourse();

  const nombreActual = perfil?.displayName || user?.displayName || 'Orador/a';
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(nombreActual);
  const [guardando, setGuardando] = useState(false);
  const [msg, setMsg] = useState('');

  async function guardarNombre() {
    const limpio = nombre.trim();
    if (!limpio || limpio === nombreActual) {
      setEditando(false);
      return;
    }
    setGuardando(true);
    setMsg('');
    try {
      // Se guarda en el perfil de Firestore (fuente de la app)…
      await setDoc(doc(db, 'usuarios', user.uid), { displayName: limpio }, { merge: true });
      // …y en el perfil de Auth (para futuras sesiones).
      if (auth.currentUser) await updateProfile(auth.currentUser, { displayName: limpio });
      setMsg('Nombre actualizado ✓');
      setEditando(false);
    } catch (err) {
      console.error('Error al guardar el nombre:', err);
      setMsg('No se pudo guardar el nombre. Inténtalo de nuevo.');
    } finally {
      setGuardando(false);
    }
  }

  const insigniasGanadas = LOGROS.filter((l) => logros[l.id]);
  const ultimas = [...insigniasGanadas]
    .sort((a, b) => new Date(logros[b.id].desbloqueadoEn) - new Date(logros[a.id].desbloqueadoEn))
    .slice(0, 4);

  const stats = [
    { label: 'Racha actual', valor: `${streakVigente} 🔥` },
    { label: 'Nivel', valor: `${nivel} · ${xp} XP` },
    { label: 'Lecciones', valor: `${nCompletadas}/${totalLecciones}` },
    { label: 'Curso completado', valor: `${progresoGlobal}%` },
    { label: 'Días activos', valor: perfil?.diasCompletados ?? 0 },
    { label: 'Insignias', valor: `${insigniasGanadas.length}/${LOGROS.length}` },
  ];

  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="mx-auto max-w-3xl px-4">
        {/* Cabecera de perfil */}
        <section className="card mt-6 flex flex-col items-center p-6 text-center animate-fadeInUp">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-violet font-display text-3xl font-bold text-white shadow-glow">
            {nombreActual.trim().charAt(0).toUpperCase()}
          </div>

          {editando ? (
            <div className="mt-4 flex w-full max-w-xs items-center gap-2">
              <input
                className="input !py-2 text-center"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && guardarNombre()}
                maxLength={40}
                autoFocus
              />
              <button
                className="btn-primary !px-3 !py-2 text-sm"
                onClick={guardarNombre}
                disabled={guardando}
              >
                {guardando ? '…' : '✓'}
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setNombre(nombreActual);
                setEditando(true);
              }}
              className="mt-4 font-display text-xl font-bold transition hover:text-violet-soft"
              title="Editar nombre"
            >
              {nombreActual} <span className="text-sm text-faint">✎</span>
            </button>
          )}

          <p className="mt-1 text-sm text-muted">{user?.email}</p>
          <p className="mt-1 text-xs text-faint">
            Practicando desde el {fechaLarga(perfil?.creadoEn)}
          </p>
          {msg && <p className="mt-2 text-xs text-emerald">{msg}</p>}
        </section>

        {/* Estadísticas */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="card p-4">
              <p className="text-xs text-muted">{s.label}</p>
              <p className="mt-1 font-display text-lg font-bold">{s.valor}</p>
            </div>
          ))}
        </section>

        {/* Últimas insignias */}
        {ultimas.length > 0 && (
          <section className="card mt-6 p-5">
            <p className="eyebrow text-amber">Últimos logros</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {ultimas.map((l) => (
                <span
                  key={l.id}
                  className="flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1.5 text-sm"
                  title={l.descripcion}
                >
                  <span className="text-lg">{l.icono}</span> {l.titulo}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Privacidad y sesión */}
        <section className="card mt-6 p-5">
          <p className="eyebrow">Tu privacidad</p>
          <p className="mt-2 text-sm text-muted">
            Los vídeos de tus prácticas nunca se graban ni se suben: la cámara solo se usa
            como espejo en tu navegador. En tu cuenta solo se guarda el progreso y tus
            respuestas de auto-coaching.
          </p>
        </section>

        <button
          onClick={logout}
          className="btn-ghost mt-6 w-full !border-red-500/30 !text-red-300 hover:!bg-red-500/10"
        >
          Cerrar sesión
        </button>
      </main>

      <BottomNav />
    </div>
  );
}
