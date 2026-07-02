/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ─── Paleta "Escenario" ──────────────────────────────────────────────
      // Fondo cálido-carbón (no slate genérico) + violeta foco motivacional
      // + ámbar de luz de escenario para la racha + esmeralda para el éxito.
      colors: {
        base: '#161320',      // fondo profundo (sala a oscuras)
        surface: '#211C2E',   // tarjetas / superficies elevadas
        elevated: '#2C2540',  // hover / superficies sobre superficies
        line: '#3A3350',      // bordes sutiles
        violet: {
          DEFAULT: '#8B7CFF', // acento principal (foco motivacional)
          soft: '#A99CFF',
          deep: '#6C5CE7',
        },
        amber: '#F5B841',     // luz de escenario / racha 🔥
        emerald: '#34D399',   // progreso / éxito
        ink: '#F4F2FA',       // texto principal (blanco cálido)
        muted: '#A29DB5',     // texto secundario
        faint: '#6E6883',     // texto terciario / deshabilitado
      },
      fontFamily: {
        // Sora para display (carácter, moderno) · Inter para lectura cómoda.
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,124,255,0.35), 0 8px 30px -8px rgba(139,124,255,0.45)',
        card: '0 12px 40px -18px rgba(0,0,0,0.6)',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '60%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(139,124,255,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(139,124,255,0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%,100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-12deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-8deg)' },
          '80%': { transform: 'rotate(6deg)' },
        },
        badgePop: {
          '0%': { opacity: '0', transform: 'scale(0.4) rotate(-12deg)' },
          '55%': { transform: 'scale(1.15) rotate(6deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pop: 'pop 0.35s ease-out both',
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out both',
        fadeInUp: 'fadeInUp 0.5s ease-out both',
        slideUp: 'slideUp 0.4s ease-out both',
        shake: 'shake 0.8s ease-in-out infinite',
        badgePop: 'badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
