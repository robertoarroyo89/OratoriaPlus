// ─────────────────────────────────────────────────────────────────────────
//  Traduce errores de escritura de Firestore a mensajes claros para el usuario.
// ─────────────────────────────────────────────────────────────────────────
export function mensajeGuardado(err) {
  const code = err?.code || '';
  if (code.includes('permission-denied')) {
    return 'No se pudo guardar: permisos denegados. Revisa que hayas publicado las reglas de Firestore.';
  }
  if (code.includes('unavailable')) {
    return 'Sin conexión con el servidor. Comprueba tu conexión e inténtalo de nuevo.';
  }
  return 'No se pudo guardar tu progreso. Inténtalo de nuevo.';
}
