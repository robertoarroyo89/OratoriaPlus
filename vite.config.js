import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // necesario para que el preview funcione dentro de GitHub Codespaces
    port: 5173,
  },
});
