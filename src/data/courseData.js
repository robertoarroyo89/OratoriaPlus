// ─────────────────────────────────────────────────────────────────────────
//  Estructura pedagógica del curso (3–4 meses)
//  Escalable: añade bloques/semanas/lecciones y todo lo demás se recalcula solo.
//
//  Tipos de lección:
//   · 'teoria'   → tarjetas de micro-learning (LessonPlayerView)
//   · 'practica' → ejercicio con espejo digital + cronómetro (PracticeMirrorView)
//
//  Cada lección otorga XP al completarse. El desbloqueo es secuencial:
//  una lección se abre cuando la anterior (en orden lineal) está completada.
// ─────────────────────────────────────────────────────────────────────────

export const XP_POR_LECCION = 20;
export const XP_POR_NIVEL = 100; // 5 lecciones = 1 nivel

export const COURSE = [
  {
    id: 'b1',
    mes: 1,
    titulo: 'Rompiendo el Hielo y Mentalidad',
    enfoque: 'Gestión del miedo escénico, respiración y autodiálogo.',
    color: 'violet',
    semanas: [
      {
        id: 'b1-s1',
        titulo: 'Semana 1 · Tu punto de partida',
        lecciones: [
          {
            id: 'b1-s1-l1',
            tipo: 'teoria',
            titulo: 'El miedo no es tu enemigo',
            duracionMin: 8,
            tarjetas: [
              {
                titulo: 'La adrenalina juega a tu favor',
                texto:
                  'Ese nudo en el estómago no es una señal de que lo harás mal. Es tu cuerpo preparándose para rendir. Los mejores oradores no eliminan los nervios: aprenden a montarlos como una ola.',
              },
              {
                titulo: 'Reencuadra la sensación',
                texto:
                  'Deja de decirte "estoy nervioso" y prueba con "estoy activado". Es el mismo cuerpo, distinta historia. El lenguaje que usas contigo cambia tu fisiología.',
              },
              {
                titulo: 'Tu misión de hoy',
                texto:
                  'Antes de la próxima vez que hables en público (aunque sea pedir un café), respira hondo y repítete: "Esto es energía útil". Nada más. Observa qué cambia.',
              },
            ],
          },
          {
            id: 'b1-s1-l2',
            tipo: 'teoria',
            titulo: 'Respiración diafragmática',
            duracionMin: 10,
            tarjetas: [
              {
                titulo: 'De dónde sale tu voz',
                texto:
                  'Una voz que tiembla casi siempre nace de una respiración alta y corta. Bajar el aire al diafragma estabiliza el sonido y te da presencia.',
              },
              {
                titulo: 'La técnica 4-4-6',
                texto:
                  'Inhala 4 segundos por la nariz, retén 4, exhala 6 por la boca. Repite 3 veces. Es un botón de "reset" para tu sistema nervioso antes de hablar.',
              },
            ],
          },
          {
            id: 'b1-s1-l3',
            tipo: 'practica',
            titulo: 'Práctica: 60 segundos sin muletillas',
            duracionMin: 5,
            ejercicio: {
              objetivo:
                'Habla durante 1 minuto sobre tu comida favorita sin usar muletillas como "ehhh", "o sea" o "¿vale?".',
              consejo:
                'Cuando notes que va a salir una muletilla, haz una pausa en silencio. El silencio proyecta seguridad; el "ehhh", duda.',
              segundos: 60,
              checklist: [
                'He sustituido las muletillas por pausas silenciosas',
                'He mantenido la mirada al frente (a la cámara)',
                'He respirado antes de empezar',
              ],
            },
          },
        ],
      },
      {
        id: 'b1-s2',
        titulo: 'Semana 2 · El autodiálogo',
        lecciones: [
          {
            id: 'b1-s2-l1',
            tipo: 'teoria',
            titulo: 'La voz crítica interior',
            duracionMin: 9,
            tarjetas: [
              {
                titulo: 'Identifica al saboteador',
                texto:
                  '"Voy a quedarme en blanco", "se van a reír de mí". Esa voz no dice la verdad: dice tus miedos. Reconocerla ya le quita la mitad del poder.',
              },
              {
                titulo: 'Cámbiale el guion',
                texto:
                  'Por cada frase saboteadora, escribe una alternativa realista: "Puede que me trabe, y sabré recuperarme". No es positividad tóxica, es entrenamiento mental.',
              },
            ],
          },
          {
            id: 'b1-s2-l2',
            tipo: 'practica',
            titulo: 'Práctica: preséntate con seguridad',
            duracionMin: 5,
            ejercicio: {
              objetivo:
                'Preséntate en 45 segundos como si estuvieras en un evento importante. Nombre, a qué te dedicas y una cosa que te apasione.',
              consejo:
                'Empieza con los pies firmes y una sonrisa breve antes de la primera palabra. Ese medio segundo de calma marca el tono de todo.',
              segundos: 45,
              checklist: [
                'He empezado con postura firme y calmada',
                'He hablado a un ritmo pausado',
                'He terminado sin disculparme ni restar valor',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'b2',
    mes: 2,
    titulo: 'Lenguaje No Verbal y Corporal',
    enfoque: 'Postura, contacto visual, gesticulación y uso del espacio.',
    color: 'emerald',
    semanas: [
      {
        id: 'b2-s1',
        titulo: 'Semana 1 · Tu cuerpo habla primero',
        lecciones: [
          {
            id: 'b2-s1-l1',
            tipo: 'teoria',
            titulo: 'La postura del orador',
            duracionMin: 8,
            tarjetas: [
              {
                titulo: 'Ancla los pies',
                texto:
                  'Pies al ancho de las caderas, peso repartido. Dejas de balancearte y tu mensaje gana estabilidad. El público lee tu cuerpo antes que tus palabras.',
              },
              {
                titulo: 'Abre el pecho',
                texto:
                  'Hombros atrás y abajo, esternón ligeramente arriba. No es marcialidad: es ocupar tu espacio sin pedir permiso.',
              },
            ],
          },
          {
            id: 'b2-s1-l2',
            tipo: 'practica',
            titulo: 'Práctica: postura frente al espejo',
            duracionMin: 5,
            ejercicio: {
              objetivo:
                'Habla 1 minuto sobre tu fin de semana ideal manteniendo una postura anclada y abierta todo el tiempo.',
              consejo:
                'Usa el espejo digital para revisar: ¿te balanceas? ¿cierras los brazos? Corrige en directo, es tu gimnasio.',
              segundos: 60,
              checklist: [
                'He mantenido los pies anclados sin balancearme',
                'He mantenido el pecho abierto y los hombros relajados',
                'No he cruzado los brazos ni me he encogido',
              ],
            },
          },
        ],
      },
      {
        id: 'b2-s2',
        titulo: 'Semana 2 · Manos y mirada',
        lecciones: [
          {
            id: 'b2-s2-l1',
            tipo: 'teoria',
            titulo: 'Qué hacer con las manos',
            duracionMin: 9,
            tarjetas: [
              {
                titulo: 'Las manos ilustran',
                texto:
                  'Gesticular no es un defecto: es un refuerzo. Las manos abiertas y visibles transmiten honestidad. Escóndelas y proyectas que ocultas algo.',
              },
              {
                titulo: 'La zona de gesto',
                texto:
                  'Mueve las manos entre la cintura y el pecho. Por debajo pierden fuerza; por encima de los hombros, distraen.',
              },
            ],
          },
          {
            id: 'b2-s2-l2',
            tipo: 'practica',
            titulo: 'Práctica: cuenta una anécdota con las manos',
            duracionMin: 5,
            ejercicio: {
              objetivo:
                'Narra en 1 minuto una anécdota divertida usando las manos para ilustrar lo que cuentas.',
              consejo:
                'Deja que el gesto acompañe a la palabra clave, no a todas. Menos es más: un gesto intencionado vale por diez nerviosos.',
              segundos: 60,
              checklist: [
                'He usado las manos en la zona pecho-cintura',
                'He acompañado las ideas clave con gestos, no todo',
                'He mantenido el contacto visual con la cámara',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'b3',
    mes: 3,
    titulo: 'Estructura del Discurso e Impacto',
    enfoque: 'Storytelling, ganchos de inicio, cierres memorables y claridad.',
    color: 'amber',
    semanas: [
      {
        id: 'b3-s1',
        titulo: 'Semana 1 · Empezar y terminar fuerte',
        lecciones: [
          {
            id: 'b3-s1-l1',
            tipo: 'teoria',
            titulo: 'El gancho de los primeros 10 segundos',
            duracionMin: 9,
            tarjetas: [
              {
                titulo: 'Nunca empieces con "hola, hoy voy a hablar de…"',
                texto:
                  'Es el modo más rápido de perder a tu público. Empieza con una pregunta, un dato sorprendente o una micro-historia. Gánate su atención antes de pedirla.',
              },
              {
                titulo: 'Promete un destino',
                texto:
                  'En la primera frase, deja claro qué se llevará el oyente. La gente presta atención cuando sabe qué gana escuchando.',
              },
            ],
          },
          {
            id: 'b3-s1-l2',
            tipo: 'practica',
            titulo: 'Práctica: tres ganchos distintos',
            duracionMin: 6,
            ejercicio: {
              objetivo:
                'Presenta el mismo tema (tu trabajo) con tres inicios distintos en 90 segundos: una pregunta, un dato y una historia.',
              consejo:
                'Grábate y quédate con el gancho que más te enganche a ti al revisarlo. Si a ti no te atrapa, al público tampoco.',
              segundos: 90,
              checklist: [
                'He probado tres tipos de gancho diferentes',
                'Ninguno ha empezado con "hoy voy a hablar de…"',
                'He mantenido energía en la voz en los tres',
              ],
            },
          },
        ],
      },
      {
        id: 'b3-s2',
        titulo: 'Semana 2 · Contar historias',
        lecciones: [
          {
            id: 'b3-s2-l1',
            tipo: 'teoria',
            titulo: 'La estructura mínima de una historia',
            duracionMin: 10,
            tarjetas: [
              {
                titulo: 'Contexto → Conflicto → Cambio',
                texto:
                  'Toda buena historia cabe en tres tiempos: cómo eran las cosas, qué las rompió y qué aprendiste. Simple y potente.',
              },
              {
                titulo: 'El detalle concreto convence',
                texto:
                  '"Estaba nervioso" no emociona. "Se me quedó la boca seca a mitad de la frase" sí. Lo específico es lo que hace que te crean.',
              },
            ],
          },
          {
            id: 'b3-s2-l2',
            tipo: 'practica',
            titulo: 'Práctica: una historia en 2 minutos',
            duracionMin: 6,
            ejercicio: {
              objetivo:
                'Cuenta una historia real de un momento en que aprendiste algo, usando la estructura Contexto → Conflicto → Cambio.',
              consejo:
                'Incluye al menos un detalle sensorial concreto. Eso es lo que separa una anécdota olvidable de una memorable.',
              segundos: 120,
              checklist: [
                'He seguido la estructura de tres tiempos',
                'He incluido un detalle concreto y sensorial',
                'He cerrado con el aprendizaje claro',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'b4',
    mes: 4,
    titulo: 'Dominio Escénico y Persuasión',
    enfoque: 'Improvisación, debates y modulación de la voz (ritmo, tono, pausas).',
    color: 'violet',
    semanas: [
      {
        id: 'b4-s1',
        titulo: 'Semana 1 · Tu voz como instrumento',
        lecciones: [
          {
            id: 'b4-s1-l1',
            tipo: 'teoria',
            titulo: 'Ritmo, tono y pausa',
            duracionMin: 10,
            tarjetas: [
              {
                titulo: 'La pausa es tu superpoder',
                texto:
                  'Un silencio bien colocado antes de una idea clave la hace resonar. No temas al vacío: la gente se inclina hacia él.',
              },
              {
                titulo: 'Rompe la monotonía',
                texto:
                  'Cambia de velocidad y de volumen a propósito. Baja la voz para crear intimidad, súbela para energizar. Un tono plano duerme a cualquiera.',
              },
            ],
          },
          {
            id: 'b4-s1-l2',
            tipo: 'practica',
            titulo: 'Práctica: la misma frase, cinco intenciones',
            duracionMin: 6,
            ejercicio: {
              objetivo:
                'Di la frase "esto lo cambia todo" con cinco intenciones distintas en 1 minuto: emoción, duda, ironía, calma y urgencia.',
              consejo:
                'Exagera. En el ejercicio te parecerá demasiado; en el escenario se verá justo. Estás calibrando tu rango.',
              segundos: 60,
              checklist: [
                'He variado tono y volumen de forma clara',
                'He usado pausas deliberadas',
                'Las cinco versiones han sonado distintas',
              ],
            },
          },
        ],
      },
      {
        id: 'b4-s2',
        titulo: 'Semana 2 · Pensar de pie',
        lecciones: [
          {
            id: 'b4-s2-l1',
            tipo: 'teoria',
            titulo: 'El arte de improvisar',
            duracionMin: 9,
            tarjetas: [
              {
                titulo: 'Estructura de rescate: PPP',
                texto:
                  'Cuando te pillen sin guion: Punto (tu idea), Prueba (un ejemplo) y Propuesta (qué hacer). Tres pasos que ordenan cualquier respuesta improvisada.',
              },
              {
                titulo: 'Gana tiempo con elegancia',
                texto:
                  'Repite la pregunta o di "es una gran pregunta, déjame pensarlo un segundo". Un par de segundos de silencio valen más que mil muletillas.',
              },
            ],
          },
          {
            id: 'b4-s2-l2',
            tipo: 'practica',
            titulo: 'Práctica final: discurso improvisado',
            duracionMin: 6,
            ejercicio: {
              objetivo:
                'Improvisa 2 minutos defendiendo esta idea: "El silencio es la herramienta más infravalorada al hablar en público". Usa la estructura PPP.',
              consejo:
                'Este es tu examen final del curso. Reúne todo: postura, gancho, historia, pausas. Confía en lo que has entrenado.',
              segundos: 120,
              checklist: [
                'He usado la estructura Punto-Prueba-Propuesta',
                'He mantenido postura y contacto visual',
                'He usado el silencio a mi favor sin muletillas',
              ],
            },
          },
        ],
      },
    ],
  },
];

// ─── Utilidades derivadas de la estructura ───────────────────────────────

/** Devuelve todas las lecciones en orden lineal (para desbloqueo secuencial). */
export function flattenLecciones(course = COURSE) {
  const out = [];
  course.forEach((bloque) =>
    bloque.semanas.forEach((semana) =>
      semana.lecciones.forEach((leccion) =>
        out.push({ ...leccion, bloqueId: bloque.id, semanaId: semana.id })
      )
    )
  );
  return out;
}

/** Total de lecciones del curso. */
export const TOTAL_LECCIONES = flattenLecciones().length;
