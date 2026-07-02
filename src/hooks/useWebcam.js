// ─────────────────────────────────────────────────────────────────────────
//  useWebcam · acceso local a la cámara (privacidad "local-first")
//  Abre la webcam con getUserMedia y la conecta a un <video>. El stream NUNCA
//  se sube a ningún servidor ni a Firebase Storage: vive solo en el navegador
//  y se detiene (liberando la cámara) al parar o al desmontar el componente.
// ─────────────────────────────────────────────────────────────────────────
import { useCallback, useEffect, useRef, useState } from 'react';

export function useWebcam() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [activa, setActiva] = useState(false);
  const [error, setError] = useState(null);

  const detener = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setActiva(false);
  }, []);

  const iniciar = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false, // no necesitamos grabar audio; solo el "espejo" visual
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
      }
      setActiva(true);
    } catch (err) {
      // Mensajes claros según el motivo (permiso denegado, sin cámara…).
      if (err?.name === 'NotAllowedError') {
        setError('Has bloqueado el acceso a la cámara. Actívalo en el navegador para practicar.');
      } else if (err?.name === 'NotFoundError') {
        setError('No hemos detectado ninguna cámara en este dispositivo.');
      } else {
        setError('No hemos podido acceder a la cámara. Revisa los permisos e inténtalo de nuevo.');
      }
      setActiva(false);
    }
  }, []);

  // Seguridad: liberar la cámara si el componente se desmonta con ella abierta.
  useEffect(() => detener, [detener]);

  return { videoRef, activa, error, iniciar, detener };
}
