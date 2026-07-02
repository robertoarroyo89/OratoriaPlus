// ─────────────────────────────────────────────────────────────────────────
//  Logros / insignias.
//  Catálogo declarativo + un evaluador puro que, dado un "snapshot" del
//  progreso (lecciones completadas + racha), devuelve qué logros están
//  desbloqueados. Se persisten en el perfil bajo `logros: { [id]: {...} }`.
//  Añadir un logro nuevo = añadir una entrada aquí + su regla en el evaluador.
// ─────────────────────────────────────────────────────────────────────────
import { COURSE, flattenLecciones } from './courseData';

export const LOGROS = [
  { id: 'primera-leccion', titulo: 'Primer paso', descripcion: 'Completa tu primera lección', icono: '🌱' },
  { id: 'primera-practica', titulo: 'A escena', descripcion: 'Completa tu primer ejercicio de práctica', icono: '🎤' },
  { id: 'racha-3', titulo: 'Constancia', descripcion: '3 días seguidos practicando', icono: '🔥' },
  { id: 'racha-7', titulo: 'Imparable', descripcion: '7 días seguidos practicando', icono: '⚡' },
  { id: 'bloque-1', titulo: 'Mentalidad de acero', descripcion: 'Completa el Bloque 1', icono: '🧠' },
  { id: 'bloque-2', titulo: 'Cuerpo presente', descripcion: 'Completa el Bloque 2', icono: '🕺' },
  { id: 'bloque-3', titulo: 'Narrador/a', descripcion: 'Completa el Bloque 3', icono: '📖' },
  { id: 'bloque-4', titulo: 'Dominio escénico', descripcion: 'Completa el Bloque 4', icono: '👑' },
  { id: 'curso-completo', titulo: 'Orador/a', descripcion: 'Completa todo el curso', icono: '🏆' },
];

export const LOGRO_POR_ID = Object.fromEntries(LOGROS.map((l) => [l.id, l]));

/**
 * Evalúa qué logros están desbloqueados dado el estado del progreso.
 * Función pura → fácil de testear y de reusar en cliente/servidor.
 * @param {{ leccionesCompletadas?: object, streak?: number }} snapshot
 * @returns {Set<string>} ids de logros desbloqueados
 */
export function logrosDesbloqueados({ leccionesCompletadas = {}, streak = 0 }) {
  const ids = new Set();
  const lineal = flattenLecciones(COURSE);
  const completadas = Object.keys(leccionesCompletadas);

  // Primera lección de cualquier tipo.
  if (completadas.length > 0) ids.add('primera-leccion');

  // Primera práctica.
  const hayPractica = completadas.some(
    (id) => lineal.find((l) => l.id === id)?.tipo === 'practica'
  );
  if (hayPractica) ids.add('primera-practica');

  // Rachas.
  if (streak >= 3) ids.add('racha-3');
  if (streak >= 7) ids.add('racha-7');

  // Bloques completados (uno por mes).
  COURSE.forEach((b) => {
    const idsBloque = b.semanas.flatMap((s) => s.lecciones.map((l) => l.id));
    if (idsBloque.every((id) => leccionesCompletadas[id])) ids.add(`bloque-${b.mes}`);
  });

  // Curso completo.
  if (completadas.length >= lineal.length) ids.add('curso-completo');

  return ids;
}
