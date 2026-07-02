// ─────────────────────────────────────────────────────────────────────────
//  AuthContext · estado global de sesión (Firebase Authentication)
//  Expone: user, loading, register(), login(), logout().
//  Al registrar un usuario nuevo, crea su documento de perfil en Firestore
//  con los valores iniciales de gamificación (racha, XP, nivel…).
// ─────────────────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';

const AuthContext = createContext(null);

// Hook de acceso cómodo: const { user, login } = useAuth();
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}

/** Perfil inicial que se crea en Firestore para cada usuario nuevo. */
function perfilInicial(nombre, email) {
  return {
    displayName: nombre || 'Orador/a',
    email,
    streak: 0, // días consecutivos con actividad
    diasCompletados: 0, // total de días con al menos una lección
    xp: 0,
    nivel: 1,
    ultimaActividad: null, // 'YYYY-MM-DD' del último día activo
    leccionesCompletadas: {}, // { [leccionId]: { completadaEn, autoCoaching } }
    logros: {}, // { [logroId]: { desbloqueadoEn } }
    creadoEn: serverTimestamp(),
  };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Suscripción al estado de autenticación (se limpia al desmontar).
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function register(nombre, email, password) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    // Guardamos el nombre en el perfil de Auth…
    await updateProfile(cred.user, { displayName: nombre });
    // …y creamos el documento de perfil en Firestore si aún no existe.
    const ref = doc(db, 'usuarios', cred.user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, perfilInicial(nombre, email));
    }
    return cred.user;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  const value = { user, loading, register, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {/* No renderizamos la app hasta saber si hay sesión, para evitar parpadeos. */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
