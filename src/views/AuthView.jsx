// ─────────────────────────────────────────────────────────────────────────
//  AuthView · login y registro (Firebase Auth). Un solo formulario que
//  alterna entre "entrar" y "crear cuenta".
// ─────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Traduce los errores de Firebase a mensajes claros en español.
function mensajeError(code) {
  const mapa = {
    'auth/invalid-email': 'El correo no tiene un formato válido.',
    'auth/user-not-found': 'No existe ninguna cuenta con ese correo.',
    'auth/wrong-password': 'La contraseña no es correcta.',
    'auth/invalid-credential': 'Correo o contraseña incorrectos.',
    'auth/email-already-in-use': 'Ya existe una cuenta con ese correo.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  };
  return mapa[code] || 'Algo ha fallado. Inténtalo de nuevo.';
}

export default function AuthView() {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [modoRegistro, setModoRegistro] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  async function onSubmit() {
    setError('');
    setEnviando(true);
    try {
      if (modoRegistro) await register(nombre, email, password);
      else await login(email, password);
      navigate('/');
    } catch (err) {
      setError(mensajeError(err.code));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-10">
      {/* Marca / promesa */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-terra text-3xl shadow-glow animate-float">
          🎤
        </div>
        <h1 className="font-display text-2xl font-extrabold tracking-tight">
          Encuentra tu voz
        </h1>
        <p className="mt-2 text-sm text-muted">
          Un curso de oratoria con coaching, en micro-lecciones diarias.
        </p>
      </div>

      <div className="card animate-pop p-6">
        <div className="mb-5 flex rounded-xl border border-line bg-base/60 p-1">
          <button
            onClick={() => setModoRegistro(false)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition ${
              !modoRegistro ? 'bg-terra text-white' : 'text-muted'
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setModoRegistro(true)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition ${
              modoRegistro ? 'bg-terra text-white' : 'text-muted'
            }`}
          >
            Crear cuenta
          </button>
        </div>

        <div className="space-y-3">
          {modoRegistro && (
            <input
              className="input"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          )}
          <input
            className="input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
          />

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button className="btn-primary w-full" onClick={onSubmit} disabled={enviando}>
            {enviando ? 'Un momento…' : modoRegistro ? 'Empezar el curso' : 'Entrar'}
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-faint">
        Tus grabaciones de práctica nunca salen de tu dispositivo.
      </p>
    </div>
  );
}
