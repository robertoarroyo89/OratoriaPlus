// ─────────────────────────────────────────────────────────────────────────
//  main · punto de entrada. Orden de providers:
//  Router → AuthProvider → CourseProvider → App
//  (CourseProvider necesita saber quién es el usuario, de ahí el anidado.)
// ─────────────────────────────────────────────────────────────────────────
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
          <App />
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
