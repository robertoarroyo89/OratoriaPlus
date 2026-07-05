// ─────────────────────────────────────────────────────────────────────────
//  useWebcam · acceso local a la cámara (privacidad "local-first")
//  Abre la webcam con getUserMedia y la conecta a un <video>. El stream NUNCA
//  se sube a ningún servidor ni a Firebase Storage: vive solo en el navegador
//  y se detiene (liberando la cámara) al parar o al desmontar el componente.
//
//  `videoRef` es un CALLBACK ref: conecta el stream en cuanto el elemento
//  <video> aparece en el DOM. Esto es clave porque el vídeo puede montarse
//  DESPUÉS de que getUserMedia resuelva (p. ej. cuando la vista cambia de fase
//  tras abrir la cámara); con un ref normal, el stream se quedaba sin conectar.
// ─────────────────────────────────────────────────────────────────────────
import { useCallback, useEffect, useRef, useState } from 'react';

function conectar(video, stream) {
  if (!video || !stream || video.srcObject === stream) return;
  video.srcObject = stream;
  video.play().catch(() => {}); // autoplay puede rechazar; muted+playsInline lo evita
}

export function useWebcam() {
  const videoElRef = useRef(null); // el elemento <video> real (si está montado)
  const streamRef = useRef(null);
  const [activa, setActiva] = useState(false);
  const [error, setError] = useState(null);

  // Callback ref: React lo llama con el nodo al montar y con null al desmontar.
  const videoRef = useCallback((node) => {
    videoElRef.current = node;
    conectar(node, streamRef.current);
  }, []);

  const detener = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoElRef.current) videoElRef.current.srcObject = null;
    setActiva(false);
  }, []);

  /** Abre la cámara. Devuelve true si se pudo, false si hubo error. */
  const iniciar = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false, // no necesitamos grabar audio; solo el "espejo" visual
      });
      streamRef.current = stream;
      conectar(videoElRef.current, stream); // si el <video> ya está montado
      setActiva(true);
      return true;
    } catch (err) {
      // Mensajes claros según el motivo (permiso denegado, sin cámara…).
      if (err?.name === 'NotAllowedError') {
        setError('Has bloqueado el acceso a la cámara. Actívalo en el navegador para practicar.');
      } else if (err?.name === 'NotFoundError') {
        setError('No hemos detectado ninguna cámara en este dispositivo.');
      } else if (err?.name === 'NotReadableError') {
        setError('Otra aplicación está usando la cámara. Ciérrala e inténtalo de nuevo.');
      } else {
        setError('No hemos podido acceder a la cámara. Revisa los permisos e inténtalo de nuevo.');
      }
      setActiva(false);
      return false;
    }
  }, []);

  // Seguridad: liberar la cámara si el componente se desmonta con ella abierta.
  useEffect(() => detener, [detener]);

  return { videoRef, activa, error, iniciar, detener };
}
