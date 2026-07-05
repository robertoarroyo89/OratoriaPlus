// ─────────────────────────────────────────────────────────────────────────
//  ProgressView · estadísticas del alumno.
//  Lee lo que ya guarda CourseContext en Firestore (leccionesCompletadas +
//  autoCoaching) y lo transforma en:
//   · Tarjetas de resumen (racha, nivel, días, % del curso).
//   · Gráfico de evolución de "cómo te has sentido" en las prácticas.
//   · Avance por bloque del temario.
//   · Historial de prácticas con su checklist de auto-coaching.
//  No requiere nuevas colecciones: todo se deriva del perfil existente.
// ─────────────────────────────────────────────────────────────────────────
import { useMemo } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCourse } from '../context/CourseContext';
import { COURSE, flattenLecciones } from '../data/courseData';
import { LOGROS } from '../data/logros';

const EMOJI = { 1: '😣', 2: '😕', 3: '😐', 4: '🙂', 5: '🤩' };

function fechaCorta(iso) {
  try {
    return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  } catch {
    return '';
  }
}

export default function ProgressView() {
  const {
    perfil,
    leccionesCompletadas,
    streakVigente,
    xp,
    nivel,
    nCompletadas,
    totalLecciones,
    progresoGlobal,
    logros,
  } = useCourse();

  const lineal = useMemo(() => flattenLecciones(COURSE), []);

  // Prácticas con auto-coaching, en orden cronológico (para el gráfico).
  const practicas = useMemo(() => {
    const items = [];
    for (const [id, reg] of Object.entries(leccionesCompletadas)) {
      const meta = lineal.find((l) => l.id === id);
      if (!meta || meta.tipo !== 'practica' || !reg?.autoCoaching) continue;
      items.push({
        id,
        titulo: meta.titulo,
        completadaEn: reg.completadaEn,
        ...reg.autoCoaching,
      });
    }
    items.sort((a, b) => new Date(a.completadaEn) - new Date(b.completadaEn));
    return items;
  }, [leccionesCompletadas, lineal]);

  const historialDesc = useMemo(() => [...practicas].reverse(), [practicas]);
  const ultimas = practicas.slice(-8); // el gráfico muestra las 8 más recientes

  // Avance por bloque.
  const porBloque = useMemo(
    () =>
      COURSE.map((b) => {
        const ids = b.semanas.flatMap((s) => s.lecciones.map((l) => l.id));
        const done = ids.filter((id) => leccionesCompletadas[id]).length;
        return { id: b.id, titulo: b.titulo, mes: b.mes, done, total: ids.length };
      }),
    [leccionesCompletadas]
  );

  const diasCompletados = perfil?.diasCompletados ?? 0;

  const stats = [
    { label: 'Racha', valor: streakVigente, sufijo: streakVigente === 1 ? 'día seguido' : 'días seguidos', icono: '🔥', color: 'text-gold' },
    { label: 'Nivel', valor: nivel, sufijo: `${xp} XP acumulados`, icono: '⭐', color: 'text-terra-soft' },
    { label: 'Días activos', valor: diasCompletados, sufijo: 'en total', icono: '📅', color: 'text-forest' },
    { label: 'Curso', valor: `${progresoGlobal}%`, sufijo: `${nCompletadas}/${totalLecciones} lecciones`, icono: '🎯', color: 'text-ink' },
  ];

  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="mx-auto max-w-3xl px-4">
        <section className="mt-6">
          <p className="eyebrow">Tu evolución</p>
          <h2 className="font-display text-xl font-bold">Progreso y estadísticas</h2>
        </section>

        {/* Tarjetas de resumen */}
        <section className="mt-4 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="card p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{s.label}</span>
                <span>{s.icono}</span>
              </div>
              <p className={`mt-1 font-display text-2xl font-extrabold ${s.color}`}>{s.valor}</p>
              <p className="text-xs text-faint">{s.sufijo}</p>
            </div>
          ))}
        </section>

        {/* Insignias / logros */}
        <section className="mt-6">
          <p className="eyebrow text-gold">Logros</p>
          <h3 className="mb-3 mt-1 font-display text-lg font-bold">
            Insignias {Object.keys(logros).length}/{LOGROS.length}
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {LOGROS.map((l) => {
              const got = logros[l.id];
              return (
                <div
                  key={l.id}
                  title={l.descripcion}
                  className={`card flex flex-col items-center gap-1 p-4 text-center transition ${
                    got ? 'border-gold/40' : 'opacity-60'
                  }`}
                >
                  <span className={`text-3xl ${got ? '' : 'grayscale'}`}>
                    {got ? l.icono : '🔒'}
                  </span>
                  <span className="text-xs font-medium leading-tight">{l.titulo}</span>
                  <span className="text-[0.6rem] text-faint">
                    {got ? fechaCorta(got.desbloqueadoEn) : 'Bloqueado'}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Evolución de sensaciones */}
        <section className="card mt-6 p-5">
          <p className="eyebrow text-forest">Cómo te has sentido</p>
          <h3 className="mt-1 font-display text-lg font-bold">Evolución de tus prácticas</h3>
          {ultimas.length === 0 ? (
            <p className="mt-4 text-sm text-muted">
              Aún no has completado ninguna práctica con auto-evaluación. Cuando lo hagas,
              verás aquí cómo evoluciona tu confianza.
            </p>
          ) : (
            <div className="mt-5 flex h-40 items-end justify-between gap-2">
              {ultimas.map((p, idx) => (
                <div key={idx} className="flex flex-1 flex-col items-center justify-end gap-1">
                  <span className="text-lg">{EMOJI[p.sensacion]}</span>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-terra-deep to-terra-soft transition-all duration-500"
                    style={{ height: `${(p.sensacion / 5) * 100}%` }}
                    title={`Sensación ${p.sensacion}/5`}
                  />
                  <span className="text-[0.6rem] text-faint">{fechaCorta(p.completadaEn)}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Avance por bloque */}
        <section className="card mt-6 p-5">
          <p className="eyebrow">Por bloques</p>
          <h3 className="mt-1 font-display text-lg font-bold">Avance del temario</h3>
          <div className="mt-4 space-y-4">
            {porBloque.map((b) => {
              const pct = Math.round((b.done / b.total) * 100);
              return (
                <div key={b.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="min-w-0 truncate font-medium">
                      Mes {b.mes} · {b.titulo}
                    </span>
                    <span className="ml-2 shrink-0 text-muted">
                      {b.done}/{b.total}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-elevated">
                    <div
                      className="h-full rounded-full bg-forest transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Historial de prácticas */}
        <section className="mt-6">
          <p className="eyebrow">Historial</p>
          <h3 className="mb-3 mt-1 font-display text-lg font-bold">Tus prácticas</h3>
          {historialDesc.length === 0 ? (
            <div className="card p-6 text-center text-sm text-muted">
              Todavía no hay prácticas registradas. Ve al camino y estrena tu primer ejercicio 🎤
            </div>
          ) : (
            <div className="space-y-3">
              {historialDesc.map((p, idx) => {
                const total = p.checklist?.length ?? 0;
                const logrados = p.checklist?.filter((c) => c.logrado).length ?? 0;
                return (
                  <div key={`${p.id}-${idx}`} className="card p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-display text-sm font-semibold">{p.titulo}</p>
                        <p className="text-xs text-faint">{fechaCorta(p.completadaEn)}</p>
                      </div>
                      <span className="text-2xl" title={`Sensación ${p.sensacion}/5`}>
                        {EMOJI[p.sensacion]}
                      </span>
                    </div>

                    {total > 0 && (
                      <div className="mt-3 space-y-1.5">
                        {p.checklist.map((c, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <span className={c.logrado ? 'text-forest' : 'text-faint'}>
                              {c.logrado ? '✓' : '○'}
                            </span>
                            <span className={c.logrado ? 'text-muted' : 'text-faint'}>
                              {c.objetivo}
                            </span>
                          </div>
                        ))}
                        <p className="pt-1 text-[0.65rem] text-faint">
                          {logrados}/{total} objetivos logrados
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
