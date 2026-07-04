// ─────────────────────────────────────────────────────────────────────────
//  CalendarView · calendario de actividad.
//  Marca con 🔥 los días en que se completó al menos una lección (derivado de
//  las fechas de `leccionesCompletadas`, sin colecciones nuevas). Permite
//  navegar entre meses y resume la actividad del mes visible.
// ─────────────────────────────────────────────────────────────────────────
import { useMemo, useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCourse } from '../context/CourseContext';

const DIAS_SEMANA = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

function claveDia(d) {
  // 'YYYY-MM-DD' en hora local (coherente con la lógica de rachas).
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function CalendarView() {
  const { leccionesCompletadas, streakVigente } = useCourse();
  const [cursor, setCursor] = useState(() => {
    const hoy = new Date();
    return new Date(hoy.getFullYear(), hoy.getMonth(), 1);
  });

  // Mapa de actividad: { 'YYYY-MM-DD': nº de lecciones completadas ese día }.
  const actividad = useMemo(() => {
    const map = {};
    Object.values(leccionesCompletadas).forEach((reg) => {
      if (!reg?.completadaEn) return;
      const k = claveDia(new Date(reg.completadaEn));
      map[k] = (map[k] || 0) + 1;
    });
    return map;
  }, [leccionesCompletadas]);

  // Celdas del mes visible (lunes como primer día de la semana).
  const celdas = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const primerDia = new Date(year, month, 1);
    const diasEnMes = new Date(year, month + 1, 0).getDate();
    const offset = (primerDia.getDay() + 6) % 7; // 0 = lunes
    const out = [];
    for (let i = 0; i < offset; i++) out.push(null);
    for (let d = 1; d <= diasEnMes; d++) out.push(new Date(year, month, d));
    return out;
  }, [cursor]);

  const hoyKey = claveDia(new Date());
  const tituloMes = cursor.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  // Resumen del mes visible.
  const prefijoMes = claveDia(cursor).slice(0, 7); // 'YYYY-MM'
  const diasActivosMes = Object.keys(actividad).filter((k) => k.startsWith(prefijoMes)).length;
  const leccionesMes = Object.entries(actividad)
    .filter(([k]) => k.startsWith(prefijoMes))
    .reduce((acc, [, n]) => acc + n, 0);

  function moverMes(delta) {
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + delta, 1));
  }

  return (
    <div className="min-h-screen pb-24">
      <Header />

      <main className="mx-auto max-w-3xl px-4">
        <section className="mt-6">
          <p className="eyebrow">Tu constancia</p>
          <h2 className="font-display text-xl font-bold">Calendario de práctica</h2>
        </section>

        {/* Resumen del mes */}
        <section className="mt-4 grid grid-cols-3 gap-3">
          <div className="card p-4 text-center">
            <p className="font-display text-2xl font-extrabold text-amber">{streakVigente}</p>
            <p className="text-xs text-muted">racha 🔥</p>
          </div>
          <div className="card p-4 text-center">
            <p className="font-display text-2xl font-extrabold text-emerald">{diasActivosMes}</p>
            <p className="text-xs text-muted">días activos</p>
          </div>
          <div className="card p-4 text-center">
            <p className="font-display text-2xl font-extrabold text-violet-soft">{leccionesMes}</p>
            <p className="text-xs text-muted">lecciones</p>
          </div>
        </section>

        {/* Calendario */}
        <section className="card mt-6 p-5 animate-fadeInUp">
          <div className="flex items-center justify-between">
            <button
              onClick={() => moverMes(-1)}
              className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:bg-elevated"
              aria-label="Mes anterior"
            >
              ←
            </button>
            <h3 className="font-display text-base font-bold capitalize text-ink">{tituloMes}</h3>
            <button
              onClick={() => moverMes(1)}
              className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition hover:bg-elevated"
              aria-label="Mes siguiente"
            >
              →
            </button>
          </div>

          {/* Cabecera de días */}
          <div className="mt-4 grid grid-cols-7 gap-1 text-center">
            {DIAS_SEMANA.map((d) => (
              <span key={d} className="py-1 text-xs font-semibold text-muted">
                {d}
              </span>
            ))}
          </div>

          {/* Celdas */}
          <div className="mt-1 grid grid-cols-7 gap-1">
            {celdas.map((fecha, idx) => {
              if (!fecha) return <span key={`v-${idx}`} />;
              const k = claveDia(fecha);
              const n = actividad[k] || 0;
              const esHoy = k === hoyKey;
              const esFuturo = k > hoyKey;
              return (
                <div
                  key={k}
                  title={n ? `${n} ${n === 1 ? 'lección' : 'lecciones'}` : undefined}
                  className={[
                    'relative grid aspect-square place-items-center rounded-xl text-sm transition',
                    n > 0
                      ? 'bg-amber/15 font-semibold text-amber'
                      : esFuturo
                        ? 'text-faint'
                        : 'text-ink/85',
                    esHoy ? 'ring-2 ring-violet' : '',
                  ].join(' ')}
                >
                  {n > 0 ? '🔥' : fecha.getDate()}
                  {n > 1 && (
                    <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-amber text-[0.55rem] font-bold text-base">
                      {n}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-center text-xs text-faint">
            🔥 = día con al menos una lección · el número indica cuántas
          </p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
