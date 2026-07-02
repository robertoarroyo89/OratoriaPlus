// ─────────────────────────────────────────────────────────────────────────
//  App · enrutado de la SPA con React Router.
//  /auth es pública; el resto está protegido por <ProtectedRoute>.
// ─────────────────────────────────────────────────────────────────────────
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AuthView from './views/AuthView';
import DashboardView from './views/DashboardView';
import ProgressView from './views/ProgressView';
import LessonPlayerView from './views/LessonPlayerView';
import PracticeMirrorView from './views/PracticeMirrorView';

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthView />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/progreso"
        element={
          <ProtectedRoute>
            <ProgressView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/leccion/:leccionId"
        element={
          <ProtectedRoute>
            <LessonPlayerView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practica/:leccionId"
        element={
          <ProtectedRoute>
            <PracticeMirrorView />
          </ProtectedRoute>
        }
      />

      {/* Cualquier otra ruta vuelve al camino. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
