// ─────────────────────────────────────────────────────────────────────────
//  DashboardView · "El Camino de la Oratoria".
//  Muestra el progreso global y un timeline serpenteante de bloques → semanas
//  → lecciones. Cada lección se pinta según su estado (completada/disponible/
//  bloqueada). El desbloqueo lo decide CourseContext (secuencial).
// ─────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import LessonNode from '../components/LessonNode';
import StreakAlert from '../components/StreakAlert';
import NextLessonCard from '../components/NextLessonCard';
import { useCourse } from '../context/CourseContext';

export default function DashboardView() {
  const navigate = useNavigate();
  const {
    course,
    isCompleted,
    isUnlocked,
    progresoGlobal,
    nCompletadas,
    totalLecciones,
    rachaEnPeligro,
    streakVigente,
    proximaLeccion,
  } = useCourse();

  // Índice global para alternar el lado de los nodos (serpenteo continuo).
  let indiceGlobal = -1;

  function estadoDe(leccion) {
    if (isCompleted(leccion.id)) return 'completada';
    if (isUnlocked(leccion.id)) return 'disponible';
    return 'bloqueada';
  }

  // Navega a una lección respetando su tipo (teoría o práctica).
  function irA(leccion) {
    if (!leccion) return;
    navigate(leccion.tipo === 'practica' ? `/practica/${leccion.id}` : `/leccion/${leccion.id}`);
  }

  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="mx-auto max-w-3xl px-4">
        {/* Resumen de progreso */}
        <section className="card mt-6 p-5">
          <p className="eyebrow">Tu progreso</p>
          <div className="mt-2 flex items-end justify-between">
            <h2 className="font-display text-xl font-bold">El Camino de la Oratoria</h2>
            <span className="font-display text-sm text-muted">
              {nCompletadas}/{totalLecciones}
            </span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-forest to-terra transition-all duration-700"
              style={{ width: `${progresoGlobal}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted">{progresoGlobal}% completado</p>
        </section>

        {/* Aviso de racha en peligro (solo si aplica) */}
        {rachaEnPeligro && (
          <StreakAlert dias={streakVigente} onIr={() => irA(proximaLeccion)} />
        )}

        {/* Atajo a la próxima lección pendiente */}
        {proximaLeccion && (
          <NextLessonCard leccion={proximaLeccion} onIr={() => irA(proximaLeccion)} />
        )}

        {/* Timeline de bloques */}
        {course.map((bloque) => (
          <section key={bloque.id} className="mt-10">
            {/* Cabecera de bloque */}
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-elevated font-display text-sm font-bold text-terra-soft">
                {bloque.mes}
              </span>
              <div>
                <p className="eyebrow">Mes {bloque.mes}</p>
                <h3 className="font-display text-lg font-bold leading-tight">
                  {bloque.titulo}
                </h3>
              </div>
            </div>
            <p className="mb-5 pl-12 text-sm text-muted">{bloque.enfoque}</p>

            {/* Semanas */}
            {bloque.semanas.map((semana) => (
              <div key={semana.id} className="mb-4">
                <p className="mb-3 pl-2 text-xs font-semibold uppercase tracking-wider text-faint">
                  {semana.titulo}
                </p>
                <div className="space-y-3">
                  {semana.lecciones.map((leccion) => {
                    indiceGlobal += 1;
                    const lado = indiceGlobal % 2 === 0 ? 'izq' : 'der';
                    return (
                      <LessonNode
                        key={leccion.id}
                        leccion={leccion}
                        estado={estadoDe(leccion)}
                        lado={lado}
                        delay={Math.min(indiceGlobal * 40, 480)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      <BottomNav />
    </div>
  );
}
