// ─────────────────────────────────────────────────────────────────────────
//  ProtectedRoute · redirige a /auth si no hay sesión. Envuelve las vistas
//  privadas en el router.
// ─────────────────────────────────────────────────────────────────────────
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;
  return children;
}
