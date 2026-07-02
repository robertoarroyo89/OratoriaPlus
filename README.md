# 🎤 Oratoria · Curso con Coaching

SPA de un curso de oratoria (3–4 meses) con gamificación estilo Duolingo:
rachas 🔥, camino de aprendizaje por bloques, tarjetas de micro-learning y un
**espejo digital** con webcam local + auto-coaching.

**Stack:** React + Vite · React Router · Tailwind CSS · Firebase (Auth + Firestore).

---

## 🚀 Puesta en marcha

```bash
npm install
cp .env.example .env.local   # y rellena tus credenciales de Firebase
npm run dev
```

> **Node 22.** El proyecto incluye `.devcontainer/devcontainer.json` fijando Node 22
> para evitar los fallos habituales de `firebase` / Vercel CLI en Codespaces.
> Si trabajas fuera del devcontainer: `nvm use 22`.

### Configurar Firebase
1. Crea un proyecto en la [consola de Firebase](https://console.firebase.google.com/).
2. **Authentication** → activa el proveedor **Correo/Contraseña**.
3. **Firestore Database** → crea la base de datos.
4. Pega la config web en `.env.local` (ver `.env.example`).
5. **Publica las reglas** de `firestore.rules`
   (Firestore → Reglas → Publicar, o `firebase deploy --only firestore:rules`).
   ⚠️ Recuerda: las reglas hay que **re-publicarlas manualmente** cada vez que cambian.

---

## ☁️ Subir a GitHub y desplegar

```bash
git init
git add .
git commit -m "Curso de oratoria con coaching"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/curso-oratoria.git
git push -u origin main
```

> `.env.local` está en `.gitignore`: tus credenciales **no** se suben.

**Vercel** (import del repo → deploy automático):
- Framework: **Vite**. Build: `npm run build`. Output: `dist`.
- Añade las variables `VITE_FIREBASE_*` en *Project → Settings → Environment Variables*.
- El `vercel.json` incluye el *rewrite* SPA para que rutas como `/progreso` no
  den 404 al recargar.
- En Firebase → Authentication → Settings → **Dominios autorizados**, añade el
  dominio de Vercel (`tu-app.vercel.app`).

**Reglas de Firestore** con la CLI (opcional):
```bash
firebase use tu-proyecto-id      # edita antes .firebaserc
firebase deploy --only firestore:rules
```

---

## 🗂️ Estructura

```
oratoria-coaching/
├─ .github/workflows/ci.yml    # CI: compila en cada push/PR
├─ .devcontainer/
│  └─ devcontainer.json        # Node 22 pinneado para Codespaces
├─ .nvmrc                      # Node 22 (nvm / Vercel)
├─ package-lock.json           # dependencias bloqueadas (build reproducible)
├─ vercel.json                 # rewrite SPA (evita 404 al recargar rutas)
├─ firebase.json               # deploy de reglas/índices con la CLI
├─ firestore.rules             # cada usuario solo accede a su perfil
├─ firestore.indexes.json
├─ .firebaserc                 # id de proyecto (editar)
├─ .env.example
├─ LICENSE
├─ index.html                  # carga fuentes Sora + Inter
├─ tailwind.config.js          # paleta "Escenario" + animaciones
├─ postcss.config.js
├─ vite.config.js
└─ src/
   ├─ main.jsx                 # Router → AuthProvider → CourseProvider → App
   ├─ App.jsx                  # rutas protegidas
   ├─ index.css                # base Tailwind + componentes (.card, .btn-*, .input)
   ├─ firebase/
   │  └─ firebaseConfig.js     # init modular (auth, db)
   ├─ context/
   │  ├─ AuthContext.jsx       # sesión + creación de perfil inicial
   │  └─ CourseContext.jsx     # progreso, rachas, XP/nivel, Firestore en vivo
   ├─ hooks/
   │  └─ useWebcam.js          # getUserMedia local-first (no sube nada)
   ├─ data/
   │  └─ courseData.js         # 4 bloques · semanas · micro-lecciones (editable)
   ├─ components/
   │  ├─ Header.jsx            # racha 🔥 + barra de nivel
   │  ├─ LessonNode.jsx        # nodo del camino (estados)
   │  ├─ ProtectedRoute.jsx
   │  └─ ConfettiCelebration.jsx  # confeti en canvas, sin dependencias
   └─ views/
      ├─ AuthView.jsx
      ├─ DashboardView.jsx     # el "Camino de la Oratoria"
      ├─ LessonPlayerView.jsx  # reproductor de tarjetas
      └─ PracticeMirrorView.jsx  # espejo + cronómetro + auto-coaching
```

---

## 🧠 Cómo funciona la gamificación

- **Racha (`streak`):** al completar la primera lección del día, si la última
  actividad fue *ayer* la racha sube; si fue hace más de un día, se reinicia a 1.
  La cabecera muestra la racha "vigente" (0 si se rompió). Lógica en `CourseContext`.
- **XP y nivel:** cada lección suma 20 XP; 100 XP = 1 nivel (editable en `courseData.js`).
- **Desbloqueo secuencial:** una lección se abre cuando la anterior (en orden lineal)
  está completada.

## 🔒 Privacidad de la cámara

`useWebcam` abre la webcam solo en el navegador con `getUserMedia`. El vídeo se ve
en tiempo real (espejado) pero **no se graba ni se sube** a Firebase Storage ni a
ningún servidor. Solo se guardan en Firestore las respuestas del auto-coaching.

## ➕ Añadir contenido

Todo el temario vive en `src/data/courseData.js`. Añade objetos de lección
(`tipo: 'teoria'` con `tarjetas`, o `tipo: 'practica'` con `ejercicio`) y el
camino, el desbloqueo y el progreso se recalculan solos.

---

## 📄 Modelo de datos (Firestore)

Colección `usuarios/{uid}`:

```jsonc
{
  "displayName": "Rober",
  "email": "…",
  "streak": 5,
  "diasCompletados": 7,
  "xp": 140,
  "nivel": 2,
  "ultimaActividad": "2026-07-02",
  "leccionesCompletadas": {
    "b1-s1-l1": { "completadaEn": "2026-07-02T…", "autoCoaching": null },
    "b1-s1-l3": {
      "completadaEn": "2026-07-02T…",
      "autoCoaching": {
        "sensacion": 4,
        "checklist": [{ "objetivo": "…", "logrado": true }]
      }
    }
  }
}
```
