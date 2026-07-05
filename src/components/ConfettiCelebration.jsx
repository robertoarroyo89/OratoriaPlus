// ─────────────────────────────────────────────────────────────────────────
//  ConfettiCelebration · animación de celebración sin dependencias.
//  Se monta cuando `activo` es true y se autolimpia. Ligero: dibuja en un
//  <canvas> a pantalla completa con requestAnimationFrame durante ~2.2s.
// ─────────────────────────────────────────────────────────────────────────
import { useEffect, useRef } from 'react';

const COLORES = ['#EA580C', '#10B981', '#F59E0B', '#F97316', '#FFFFFF'];

export default function ConfettiCelebration({ activo, onDone }) {
  const canvasRef = useRef(null);

  // onDone vive en un ref para que el efecto NO dependa de él: si dependiera,
  // cada re-render (p. ej. cuando Firestore refresca el perfil) recrearía la
  // función y reiniciaría la animación desde cero.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!activo) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { innerWidth: w, innerHeight: h } = window;
    canvas.width = w;
    canvas.height = h;

    // Partículas lanzadas desde la parte superior central.
    const piezas = Array.from({ length: 140 }, () => ({
      x: w / 2 + (Math.random() - 0.5) * 200,
      y: -20,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * 4 + 3,
      size: Math.random() * 8 + 4,
      color: COLORES[(Math.random() * COLORES.length) | 0],
      rot: Math.random() * Math.PI,
      vrot: (Math.random() - 0.5) * 0.3,
    }));

    let raf;
    let terminado = false;
    const inicio = performance.now();
    const DURACION = 2200;

    function frame(t) {
      const transcurrido = t - inicio;
      ctx.clearRect(0, 0, w, h);
      piezas.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12; // gravedad
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - transcurrido / DURACION);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (transcurrido < DURACION) {
        raf = requestAnimationFrame(frame);
      } else if (!terminado) {
        terminado = true;
        ctx.clearRect(0, 0, w, h);
        onDoneRef.current?.();
      }
    }
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [activo]);

  if (!activo) return null;
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
    />
  );
}
