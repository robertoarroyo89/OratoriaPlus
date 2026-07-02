// ─────────────────────────────────────────────────────────────────────────
//  BLOQUE 1 · Mentalidad y gestión del miedo escénico (Mes 1)
//  Basado en técnicas contrastadas: reencuadre de la ansiedad como activación
//  (investigación de Alison Wood Brooks, Harvard), respiración táctica,
//  ensayo mental de deportistas de élite y exposición progresiva.
// ─────────────────────────────────────────────────────────────────────────

export const BLOQUE1 = {
  id: 'b1',
  mes: 1,
  titulo: 'Rompiendo el Hielo y Mentalidad',
  enfoque: 'Gestión del miedo escénico, respiración, autodiálogo y rituales de confianza.',
  semanas: [
    {
      id: 'b1-s1',
      titulo: 'Semana 1 · Entender tu miedo',
      lecciones: [
        {
          id: 'b1-s1-l1',
          tipo: 'teoria',
          titulo: 'Por qué tu cuerpo hace eso',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El miedo escénico es universal',
              texto:
                'Encuestas clásicas sitúan hablar en público entre los miedos más extendidos, por delante incluso de miedos físicos. No eres raro: tu cerebro interpreta a un grupo mirándote como una amenaza social, herencia de cuando ser expulsado de la tribu era peligro de muerte.',
            },
            {
              titulo: 'Qué pasa dentro de ti',
              texto:
                'Corazón acelerado, boca seca, manos frías, mente en blanco. Es tu sistema simpático liberando adrenalina: sangre a los músculos grandes, menos recursos a la memoria. Entenderlo ya lo cambia: no estás "fallando", tu cuerpo está haciendo exactamente su trabajo.',
            },
            {
              titulo: 'La curva de la activación',
              texto:
                'La psicología del rendimiento (ley de Yerkes-Dodson) muestra que un nivel medio de activación mejora el desempeño: demasiado relajado = plano, demasiado activado = bloqueado. Tu objetivo no es eliminar los nervios, es surfearlos en la zona útil.',
            },
            {
              titulo: 'Los mejores también lo sienten',
              texto:
                'Actores, cantantes y conferenciantes veteranos confiesan nervios antes de salir. La diferencia no es lo que sienten: es la historia que se cuentan sobre lo que sienten. Ese será tu entrenamiento este mes.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Piensa en tu última vez hablando ante gente. Escribe (de verdad, en papel o notas) las 3 sensaciones físicas que notaste. Ponerles nombre las convierte de "pánico difuso" en señales concretas que aprenderás a manejar.',
            },
          ],
        },
        {
          id: 'b1-s1-l2',
          tipo: 'teoria',
          titulo: 'Respiración táctica: tu botón de calma',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El nervio que lo frena todo',
              texto:
                'La exhalación larga activa el sistema parasimpático (vía nervio vago) y baja las pulsaciones en menos de un minuto. Es la herramienta anti-nervios más rápida que existe, y la usan desde cirujanos hasta fuerzas especiales.',
            },
            {
              titulo: 'Respiración de caja (box breathing)',
              texto:
                'Popularizada por los Navy SEALs: inhala 4 segundos por la nariz, retén 4, exhala 4, retén 4. Repite 4 ciclos. Úsala en los minutos previos a hablar, cuando la ansiedad anticipatoria aprieta.',
            },
            {
              titulo: 'El suspiro fisiológico',
              texto:
                'Doble inhalación por la nariz (una larga + una corta encima) y exhalación larga por la boca. Estudios de Stanford lo señalan como el reset más rápido en tiempo real. Es discreto: puedes hacerlo mientras te presentan.',
            },
            {
              titulo: 'Respira desde el diafragma',
              texto:
                'Mano en el pecho, mano en la tripa: al inhalar debe moverse la de abajo. La respiración baja estabiliza la voz (deja de temblar) y te da caudal para frases largas. Es la base de la proyección que veremos en el mes 4.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Haz 4 ciclos de respiración de caja ahora mismo, con los ojos cerrados. Nota el antes y el después en tus hombros y mandíbula. Este será tu ritual de entrada a cada práctica del curso.',
            },
          ],
        },
        {
          id: 'b1-s1-l3',
          tipo: 'practica',
          titulo: 'Práctica: tu línea base',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Graba tu punto de partida: habla 60 segundos sobre tu comida favorita. Antes de empezar, haz 4 ciclos de respiración de caja frente a la cámara.',
            consejo:
              'Hoy no busques hacerlo bien: busca OBSERVARTE. Esta es tu foto del "antes". Dentro de 4 meses repetirás este mismo tema y no te vas a reconocer.',
            segundos: 60,
            checklist: [
              'He hecho la respiración de caja antes de empezar',
              'He llegado al minuto sin cortar la grabación',
              'He observado mis sensaciones sin juzgarme',
            ],
          },
        },
        {
          id: 'b1-s1-l4',
          tipo: 'teoria',
          titulo: 'El foco: de ti al público',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El error de foco nº 1',
              texto:
                'El orador nervioso piensa en sí mismo: "¿cómo me veo?, ¿qué pensarán de mí?". Los grandes comunicadores piensan en el público: "¿qué necesitan?, ¿cómo les ayudo?". El miedo escénico es, en gran parte, un problema de dirección del foco.',
            },
            {
              titulo: 'La ilusión de transparencia',
              texto:
                'La psicología lo ha medido: creemos que nuestros nervios se notan mucho más de lo que realmente se ven. Tu corazón a 140 es invisible desde la tercera fila. Saberlo reduce la ansiedad por sí solo (se comprobó en estudios con estudiantes antes de exponer).',
            },
            {
              titulo: 'Hablar es un regalo, no un examen',
              texto:
                'Cambia el marco: no estás siendo evaluado, estás entregando algo útil. Un profesor no se examina ante sus alumnos; les sirve. Cuando tu misión es dar, el juez imaginario pierde la silla.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Completa esta frase para tu próxima intervención (aunque sea una reunión pequeña): "Mi público se irá con ______". Si tienes claro el regalo, el foco ya no está en ti.',
            },
          ],
        },
        {
          id: 'b1-s1-l5',
          tipo: 'practica',
          titulo: 'Práctica: preséntate pensando en ellos',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Preséntate durante 45 segundos como si fuera un evento: quién eres, qué haces y qué puedes aportar a quien te escucha. Termina la frase "puedo ayudarte con…".',
            consejo:
              'Antes de empezar, decide el "regalo": ¿qué se lleva quien te escuche? Si el foco está en aportar, notarás que la autocrítica baja el volumen.',
            segundos: 45,
            checklist: [
              'He definido mi "regalo" antes de grabar',
              'He terminado con "puedo ayudarte con…"',
              'He mantenido la mirada a la cámara la mayor parte del tiempo',
            ],
          },
        },
      ],
    },
    {
      id: 'b1-s2',
      titulo: 'Semana 2 · Reprograma tu autodiálogo',
      lecciones: [
        {
          id: 'b1-s2-l1',
          tipo: 'teoria',
          titulo: 'La voz crítica: conócela para desactivarla',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El comentarista interior',
              texto:
                'Antes de hablar en público, casi todos escuchamos una radio interna: "vas a quedarte en blanco", "no eres tan bueno como X". En coaching se trabaja como una voz automática, no como la verdad. El primer paso es escucharla con distancia, como quien oye la radio.',
            },
            {
              titulo: 'Ponle nombre',
              texto:
                'Técnica de coaching clásica: bautiza a tu crítico interior ("el Sr. Pero", "la Jueza"). Suena infantil y funciona: crea distancia psicológica. No eres tú; es un programa antiguo que intentaba protegerte del ridículo.',
            },
            {
              titulo: 'De juicio a dato',
              texto:
                'Cada frase del crítico esconde un miedo concreto. "Se van a aburrir" = "no sé si mi contenido interesa" → eso es accionable: mejora el gancho. Traducir el juicio a necesidad convierte la ansiedad en lista de tareas.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Escribe las 3 frases que más te repite tu crítico antes de hablar. Al lado de cada una, tradúcela a una necesidad accionable. Guárdalas: las usaremos en la práctica de pasado mañana.',
            },
          ],
        },
        {
          id: 'b1-s2-l2',
          tipo: 'teoria',
          titulo: 'El reencuadre: "estoy emocionado"',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Calmarse es casi imposible',
              texto:
                'Pasar de ansioso a tranquilo exige frenar todo el sistema de activación: muy difícil en caliente. La investigadora Alison Wood Brooks (Harvard) demostró un atajo mejor: pasar de ansiedad a ENTUSIASMO, que comparte la misma activación fisiológica.',
            },
            {
              titulo: 'El experimento',
              texto:
                'En sus estudios, quienes decían en voz alta "estoy emocionado" antes de cantar, negociar o hablar en público rendían mejor y eran percibidos como más competentes que quienes intentaban calmarse. Tres palabras que reetiquetan la misma energía.',
            },
            {
              titulo: 'Por qué funciona',
              texto:
                'Ansiedad y entusiasmo son fisiológicamente gemelos (corazón rápido, alerta alta); cambia la interpretación: amenaza vs. oportunidad. Al declararte emocionado, tu cerebro busca razones para la oportunidad, y el foco pasa de "qué puede salir mal" a "qué puede salir bien".',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Di en voz alta, ahora: "Estoy emocionado por mi próxima oportunidad de hablar". Sí, en voz alta: la verbalización es parte del efecto medido. Hazlo tu frase de entrada antes de cada práctica.',
            },
          ],
        },
        {
          id: 'b1-s2-l3',
          tipo: 'practica',
          titulo: 'Práctica: habla de un reto con energía',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Di en voz alta "estoy emocionado" y, sin pausa, habla 60 segundos sobre un reto que tengas ahora mismo y por qué puede salir bien.',
            consejo:
              'No apagues los nervios: móntalos. Deja que la energía suba el volumen y el gesto. Es la misma gasolina; hoy la usamos para avanzar, no para frenar.',
            segundos: 60,
            checklist: [
              'He dicho "estoy emocionado" en voz alta antes de empezar',
              'He hablado del reto en clave de oportunidad',
              'He notado la energía como impulso, no como freno',
            ],
          },
        },
        {
          id: 'b1-s2-l4',
          tipo: 'teoria',
          titulo: 'Ensayo mental: entrena como un atleta',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'La visualización no es magia',
              texto:
                'Deportistas olímpicos ensayan mentalmente cada gesto antes de competir: la neurociencia muestra que imaginar una acción activa circuitos parecidos a ejecutarla. Es entrenamiento real, gratis y sin escenario.',
            },
            {
              titulo: 'Visualiza el PROCESO, no solo el aplauso',
              texto:
                'Error común: imaginar solo el éxito final. Lo eficaz es ensayar el proceso: te ves entrando, respirando, diciendo tu primera frase con calma, recuperándote de un tropiezo. Prepara al cerebro para el camino completo, incluidos los baches.',
            },
            {
              titulo: 'Con todos los sentidos',
              texto:
                'Cuanto más vívido, más efecto: la luz de la sala, el peso de tus pies en el suelo, el sonido de tu primera frase. Dos minutos de ensayo mental multisensorial valen más que veinte de preocupación difusa.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Cierra los ojos 90 segundos y ensaya mentalmente la práctica de mañana: te ves activando la cámara, respirando, sonriendo y diciendo tu primera frase con voz firme. Mañana comprobarás que ya "has estado ahí".',
            },
          ],
        },
        {
          id: 'b1-s2-l5',
          tipo: 'practica',
          titulo: 'Práctica: lo que visualizaste, en real',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Repite en real lo ensayado mentalmente: 60 segundos sobre un lugar que te haga feliz, empezando con una primera frase firme y una sonrisa.',
            consejo:
              'Antes de activar la cámara, cierra los ojos 30 segundos y visualiza tu entrada una última vez. Luego ejecútala tal cual. Nota la diferencia entre improvisar la entrada y haberla ensayado.',
            segundos: 60,
            checklist: [
              'He visualizado la entrada antes de grabar',
              'Mi primera frase ha sonado firme y preparada',
              'He sonreído de forma natural en la apertura',
            ],
          },
        },
      ],
    },
    {
      id: 'b1-s3',
      titulo: 'Semana 3 · Confianza basada en evidencia',
      lecciones: [
        {
          id: 'b1-s3-l1',
          tipo: 'teoria',
          titulo: 'La confianza no se piensa: se acumula',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El orden correcto',
              texto:
                'Mucha gente espera "sentirse seguro" para actuar. El coaching de rendimiento lo invierte: actúa pequeño → recoge evidencia → la confianza crece. La seguridad es la consecuencia de un historial de intentos, no un requisito previo.',
            },
            {
              titulo: 'Exposición progresiva',
              texto:
                'Es el mismo principio con el que la psicología trata las fobias: dosis crecientes y manejables. Hablar 45 segundos a una cámara → un audio a un amigo → intervenir en una reunión → presentar 5 minutos. Cada peldaño hace normal el siguiente.',
            },
            {
              titulo: 'Tu banco de evidencias',
              texto:
                'El cerebro ansioso recuerda los fallos y borra los logros. Contrarréstalo por escrito: después de cada práctica, apunta UNA cosa que hiciste bien. En semanas tendrás un historial innegable que tu crítico no podrá discutir.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Mira tu historial en la pestaña Progreso: cada práctica completada es evidencia. Escribe ahora tu primera entrada del banco: "Una cosa que ya hago mejor que hace dos semanas es ______".',
            },
          ],
        },
        {
          id: 'b1-s3-l2',
          tipo: 'teoria',
          titulo: 'Prepararse bien calma más que respirar',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El ansiolítico más infravalorado',
              texto:
                'Gran parte del miedo escénico es, en el fondo, miedo a no estar a la altura del contenido. La preparación ataca la raíz: cuando dominas lo que vas a decir, el sistema de alarma tiene mucho menos que vigilar.',
            },
            {
              titulo: 'Prepara ideas, no párrafos',
              texto:
                'Memorizar palabra por palabra es una trampa: un olvido y se cae todo. Los profesionales preparan un esqueleto de 3-5 ideas y ensayan hablarlas con palabras distintas cada vez. Así ningún olvido es fatal: siempre sabes a qué idea volver.',
            },
            {
              titulo: 'Ensaya en condiciones reales',
              texto:
                'Ensayar leyendo en silencio no cuenta. Hazlo de pie, en voz alta y con cronómetro: es otro deporte. Regla práctica de los ponentes profesionales: cada minuto de charla importante merece varios ensayos completos en voz alta.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Elige el tema de tu próxima práctica y escribe SOLO 3 palabras clave (no frases). Mañana hablarás desde ese esqueleto. Notarás la diferencia entre ir "en blanco" e ir con mapa.',
            },
          ],
        },
        {
          id: 'b1-s3-l3',
          tipo: 'practica',
          titulo: 'Práctica: habla con esqueleto de 3 ideas',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Prepara 3 palabras clave sobre "algo que sé enseñar a otros" y habla 90 segundos desarrollando una idea por palabra.',
            consejo:
              'Ten las 3 palabras a la vista (post-it junto a la cámara). Cuando termines una idea, pausa, mira la siguiente palabra y arranca. Las pausas entre ideas suenan a dominio, no a duda.',
            segundos: 90,
            checklist: [
              'He preparado el esqueleto de 3 palabras antes de grabar',
              'He desarrollado las 3 ideas en orden',
              'He usado pausas entre ideas sin rellenarlas con muletillas',
            ],
          },
        },
        {
          id: 'b1-s3-l4',
          tipo: 'teoria',
          titulo: 'El error como dato (y cómo recuperarte)',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Nadie recuerda tu tropiezo',
              texto:
                'El público olvida un tropiezo en segundos… si tú lo dejas pasar. Lo que se recuerda es la REACCIÓN: disculparse tres veces y descomponerse, o sonreír y seguir. La recuperación elegante es una habilidad entrenable, y de las que más seguridad proyectan.',
            },
            {
              titulo: 'El protocolo de recuperación',
              texto:
                'Si te trabas: pausa (2 segundos de silencio, no de "ehhh"), respira, retoma la última idea clara y sigue. Sin disculpas dramáticas. Un "como decía…" tranquilo borra el bache mejor que cualquier explicación.',
            },
            {
              titulo: 'Los cómicos lo entrenan a propósito',
              texto:
                'En improvisación teatral se celebra el fallo ("¡he fallado!" con los brazos arriba) para desactivar su carga. No hace falta llegar ahí, pero sí adoptar la lógica: el error es información de entrenamiento, no una sentencia sobre tu valía.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Memoriza tu frase de rescate personal (por ejemplo: "como os decía…" o "la idea importante es…"). Mañana la vas a necesitar: provocaremos el error a propósito.',
            },
          ],
        },
        {
          id: 'b1-s3-l5',
          tipo: 'practica',
          titulo: 'Práctica: falla a propósito y recupérate',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Habla 60 segundos sobre tu película o serie favorita. A mitad, DETENTE en seco a propósito (simula quedarte en blanco), aplica el protocolo (pausa-respira-retoma) y termina con normalidad.',
            consejo:
              'Este ejercicio vacuna: cuando el blanco real llegue algún día, tu cuerpo ya sabrá que se sobrevive. La pausa te parecerá eterna; en la grabación verás que dura nada.',
            segundos: 60,
            checklist: [
              'He simulado el bloqueo y NO me he disculpado',
              'He usado mi frase de rescate para retomar',
              'He terminado el minuto con normalidad',
            ],
          },
        },
      ],
    },
    {
      id: 'b1-s4',
      titulo: 'Semana 4 · Tu ritual de confianza',
      lecciones: [
        {
          id: 'b1-s4-l1',
          tipo: 'teoria',
          titulo: 'Rutinas pre-escenario de los profesionales',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Por qué los rituales funcionan',
              texto:
                'Tenistas que botan la pelota igual antes de cada saque, actores con su secuencia entre bambalinas: los rituales pre-actuación reducen la ansiedad porque dan al cerebro algo conocido y controlable en un momento incierto.',
            },
            {
              titulo: 'Anatomía de un buen ritual',
              texto:
                'Corto (2-5 minutos), físico y mental a la vez, siempre igual. Ejemplo probado: 4 ciclos de respiración de caja → postura erguida 30 segundos → "estoy emocionado" en voz alta → repaso de las 3 ideas clave → primera frase ensayada una vez.',
            },
            {
              titulo: 'El cuerpo tira de la mente',
              texto:
                'Erguirte, abrir el pecho y ocupar tu espacio antes de hablar cambia cómo te sientes (y desde luego cómo te ven). Sin necesidad de teorías grandilocuentes: prueba a hablar encogido y luego erguido; tu propia voz te dirá cuál gana.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Diseña TU ritual por escrito: elige 3-4 pasos de los vistos este mes y ordénalos. Ese guion exacto es el que ejecutarás antes de cada práctica a partir de ahora, incluida la de mañana.',
            },
          ],
        },
        {
          id: 'b1-s4-l2',
          tipo: 'practica',
          titulo: 'Práctica: estrena tu ritual completo',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Ejecuta tu ritual completo (antes de activar la cámara) y habla 60 segundos sobre qué te trajo a este curso y qué quieres lograr.',
            consejo:
              'El ritual no es superstición: es un interruptor entrenado. Hazlo igual cada vez y en unas semanas tu cuerpo entenderá la señal: "toca hablar, modo activado".',
            segundos: 60,
            checklist: [
              'He ejecutado mi ritual completo antes de grabar',
              'He empezado con la primera frase ya decidida',
              'He notado más control que en la semana 1',
            ],
          },
        },
        {
          id: 'b1-s4-l3',
          tipo: 'teoria',
          titulo: 'Valor no es no tener miedo',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'La definición que lo cambia todo',
              texto:
                'Valor es actuar CON miedo, no sin él. Los oradores que admiras no esperaron a dejar de sentir nervios: construyeron una relación de trabajo con ellos. El objetivo del curso nunca fue eliminar el miedo: era quitarle el volante.',
            },
            {
              titulo: 'Tu miedo como brújula',
              texto:
                'Lo que te da miedo decir en público suele ser, precisamente, lo que más valor tiene: tu opinión propia, tu historia, tu propuesta. El miedo señala dónde está lo importante. Un discurso sin nada de vértigo probablemente no dice nada.',
            },
            {
              titulo: 'Revisa tu mes 1',
              texto:
                'Hace cuatro semanas quizá evitabas la cámara. Hoy tienes un ritual, un protocolo de recuperación, un reencuadre verbal y un banco de evidencias. Eso es arquitectura mental de orador. Los siguientes meses construiremos el cuerpo, el discurso y la voz encima.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Prepara la práctica final del mes: una historia personal de 2 minutos sobre una vez que hiciste algo con miedo. Esqueleto de 3 palabras, ritual completo. Mañana la grabas.',
            },
          ],
        },
        {
          id: 'b1-s4-l4',
          tipo: 'practica',
          titulo: 'Reto del mes: tu historia de valor',
          duracionMin: 8,
          ejercicio: {
            objetivo:
              'Cuenta en 2 minutos una historia real de una vez que hiciste algo con miedo (y qué pasó). Usa todo el arsenal del mes: ritual, esqueleto de 3 ideas, reencuadre y recuperación si te trabas.',
            consejo:
              'Las historias personales con vulnerabilidad honesta son las que más conectan. No la cuentes "perfecta": cuéntala verdadera. Este es tu examen del bloque 1.',
            segundos: 120,
            checklist: [
              'He ejecutado mi ritual antes de empezar',
              'La historia tiene inicio, momento de miedo y desenlace',
              'He hablado 2 minutos sin leer',
              'Me he recuperado con calma si me he trabado',
            ],
          },
        },
        {
          id: 'b1-s4-l5',
          tipo: 'teoria',
          titulo: 'Cierre del mes: consolida tu sistema',
          duracionMin: 4,
          tarjetas: [
            {
              titulo: 'Tu caja de herramientas mental',
              texto:
                'Este mes has instalado: respiración de caja y suspiro fisiológico (calma inmediata), reencuadre "estoy emocionado" (energía útil), foco en el regalo (menos autocrítica), ensayo mental, esqueleto de 3 ideas y protocolo de recuperación.',
            },
            {
              titulo: 'Cuándo usar cada una',
              texto:
                'Días antes: preparación y ensayo mental. Minutos antes: ritual + respiración + reencuadre. Durante: foco en el público y pausas. Si algo falla: protocolo de recuperación. Después: banco de evidencias. Un sistema completo, no trucos sueltos.',
            },
            {
              titulo: 'Lo que viene en el mes 2',
              texto:
                'Con la mente de tu lado, toca el cuerpo: postura que proyecta (y genera) seguridad, gestos que refuerzan el mensaje, mirada que conecta y movimiento con propósito. Tu comunicación no verbal habla antes que tú: vamos a ponerla a tu favor.',
            },
          ],
        },
      ],
    },
  ],
};
