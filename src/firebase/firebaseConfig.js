// ─────────────────────────────────────────────────────────────────────────
//  Firebase · inicialización modular (v9+)
//  Las credenciales se leen de variables de entorno de Vite (import.meta.env).
//  Copia .env.example a .env.local y rellena tus valores del panel de Firebase.
// ─────────────────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Una sola instancia de la app para toda la SPA.
const app = initializeApp(firebaseConfig);

// Servicios exportados de forma modular (tree-shaking friendly).
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
