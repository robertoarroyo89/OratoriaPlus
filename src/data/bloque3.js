// ─────────────────────────────────────────────────────────────────────────
//  BLOQUE 3 · Estructura del discurso e impacto (Mes 3)
//  Mensaje único, regla de tres, ganchos de apertura, storytelling
//  (estructura clásica + contraste "lo que es / lo que podría ser" al estilo
//  de Nancy Duarte), claridad y cierres memorables.
// ─────────────────────────────────────────────────────────────────────────

export const BLOQUE3 = {
  id: 'b3',
  mes: 3,
  titulo: 'Estructura del Discurso e Impacto',
  enfoque: 'Mensaje único, ganchos de inicio, storytelling, claridad y cierres memorables.',
  semanas: [
    {
      id: 'b3-s1',
      titulo: 'Semana 1 · Un mensaje, tres pilares',
      lecciones: [
        {
          id: 'b3-s1-l1',
          tipo: 'teoria',
          titulo: 'La idea única: tu frase de una línea',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El discurso que quiere decirlo todo no dice nada',
              texto:
                'El error nº 1 al preparar una intervención: meter todo lo que sabes. El público retiene poquísimo de lo que oye; si disparas veinte ideas, no acertará ninguna. Los discursos memorables se construyen alrededor de UNA idea central.',
            },
            {
              titulo: 'El test de la frase única',
              texto:
                'Antes de preparar nada, completa: "Si mi público solo recuerda una frase, que sea: ______". Si no cabe en una frase clara, todavía no sabes qué quieres decir. Esta disciplina, que usan desde guionistas hasta ponentes TED, es el 50% del trabajo.',
            },
            {
              titulo: 'Todo al servicio de la idea',
              texto:
                'Con la frase única definida, el filtro es brutal y liberador: cada dato, historia o argumento que no la refuerce, FUERA. Cortar duele, pero cada corte hace más nítida la idea que sí importa. Menos contenido, más impacto.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Elige un tema del que hablarías 5 minutos y escribe su frase única. Reescríbela hasta que un niño de 12 años la entienda. La usarás toda la semana.',
            },
          ],
        },
        {
          id: 'b3-s1-l2',
          tipo: 'teoria',
          titulo: 'La regla de tres',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El número mágico de la retórica',
              texto:
                'Desde "veni, vidi, vici" hasta "gobierno del pueblo, por el pueblo y para el pueblo": el tres es el patrón favorito del cerebro. Dos parece incompleto, cuatro ya no se recuerda. Tres ideas, tres argumentos, tres ejemplos: estructura y memoria a la vez.',
            },
            {
              titulo: 'El mapa mínimo de todo discurso',
              texto:
                'Apertura (gancho + frase única + qué van a llevarse), cuerpo (tres bloques que sostienen la idea) y cierre (resumen + llamada a la acción). Con este esqueleto puedes montar desde una intervención de 2 minutos hasta una conferencia de una hora.',
            },
            {
              titulo: 'Anuncia el mapa',
              texto:
                '"Voy a darte tres razones…" no es spoiler: es un regalo. El público que conoce el mapa se relaja y te sigue mejor; y tú tienes una red: si te pierdes, siempre sabes en qué punto del mapa estás. Ganáis los dos.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Toma tu frase única de ayer y apúntala con sus tres pilares (tres razones, pasos o ejemplos que la sostienen). Una palabra por pilar. Acabas de esbozar un discurso completo en cinco líneas.',
            },
          ],
        },
        {
          id: 'b3-s1-l3',
          tipo: 'practica',
          titulo: 'Práctica: tu primer discurso con mapa',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Desarrolla en 90 segundos tu frase única con sus tres pilares: anúnciala, di "por tres razones", desarrolla cada una con su dedo y cierra repitiendo la frase única.',
            consejo:
              'La estructura circular (abrir y cerrar con la misma frase) es un clásico porque funciona: el público sale con la idea grabada. Nota lo distinto que es hablar CON mapa: los nervios tienen dónde agarrarse.',
            segundos: 90,
            checklist: [
              'He abierto con mi frase única',
              'He desarrollado tres pilares, enumerando con los dedos',
              'He cerrado repitiendo la frase única',
            ],
          },
        },
        {
          id: 'b3-s1-l4',
          tipo: 'teoria',
          titulo: 'Conoce a tu público antes de escribir',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El mismo discurso no existe',
              texto:
                'Hablar de tu proyecto a inversores, a tu equipo o a tu familia son TRES discursos distintos, aunque el tema sea uno. Lo que cambia no es tu idea: es qué les importa a ellos, qué saben ya y qué necesitan oír para actuar.',
            },
            {
              titulo: 'Las tres preguntas del público',
              texto:
                'Antes de preparar, responde: ¿Qué saben ya del tema? (para no aburrir ni perder). ¿Qué les importa de verdad? (para conectar tu idea con SU interés). ¿Qué quiero que hagan al terminar? (para orientarlo todo a esa acción).',
            },
            {
              titulo: 'Traduce a su idioma',
              texto:
                'Los expertos hablan en jerga por comodidad y pierden a todo el que no la comparte. Regla: cada término técnico, o se explica en una frase, o se sustituye. Hablar claro no es simplificar tu idea: es respetar el tiempo del que escucha.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Piensa en tu próxima intervención real (reunión, presentación, brindis) y responde las tres preguntas del público por escrito. Mañana adaptarás un mismo mensaje a dos públicos distintos.',
            },
          ],
        },
        {
          id: 'b3-s1-l5',
          tipo: 'practica',
          titulo: 'Práctica: un mensaje, dos públicos',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Explica qué haces en tu trabajo dos veces (45 segundos cada una, seguidas): primero a un profesional de tu sector, después a un niño de 10 años.',
            consejo:
              'La segunda versión es la difícil y la valiosa: sin jerga, con comparaciones cotidianas. Einstein (se le atribuye) decía que si no puedes explicarlo simple, no lo entiendes suficiente. Comprueba cuál de tus dos versiones convence más.',
            segundos: 90,
            checklist: [
              'He hecho las dos versiones completas',
              'La versión "niño" no tiene ni un término técnico',
              'He usado al menos una comparación cotidiana',
            ],
          },
        },
      ],
    },
    {
      id: 'b3-s2',
      titulo: 'Semana 2 · Aperturas que capturan',
      lecciones: [
        {
          id: 'b3-s2-l1',
          tipo: 'teoria',
          titulo: 'Los primeros 30 segundos deciden',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'La ventana de atención',
              texto:
                'El público te concede unos segundos de atención gratis; después decide (inconscientemente) si te la sigue prestando o se va a su móvil mental. La apertura no es un trámite de cortesía: es la batalla más importante del discurso.',
            },
            {
              titulo: 'Los arranques que matan',
              texto:
                'Prohibidos: "Hola, hoy vengo a hablar de…" (nadie despierta), las gracias interminables, las disculpas ("no soy muy bueno en esto…" ¡nunca!), y leer el título de la diapositiva. Todos comunican lo mismo: "puedes desconectar".',
            },
            {
              titulo: 'Entra por la ventana, no por la puerta',
              texto:
                'Los mejores arranques empiezan EN MEDIO de algo: una pregunta que pica, un dato que descoloca, una escena de historia ya en marcha ("Eran las 3 de la mañana cuando sonó el teléfono…"). Primero captura, luego ya te presentas si hace falta.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Rescata tu discurso de la semana pasada (frase única + 3 pilares) y escribe cómo lo abrirías "por la ventana". Mañana verás los tres ganchos clásicos para elegir el mejor.',
            },
          ],
        },
        {
          id: 'b3-s2-l2',
          tipo: 'teoria',
          titulo: 'Los tres ganchos: pregunta, dato, historia',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Gancho 1: la pregunta',
              texto:
                'Una pregunta directa obliga al cerebro a responder (no puede evitarlo): "¿Cuántas horas de tu vida has perdido en reuniones inútiles?". Funciona mejor si es concreta, personal y algo incómoda. Deja dos segundos de silencio tras lanzarla.',
            },
            {
              titulo: 'Gancho 2: el dato que descoloca',
              texto:
                'Un número sorprendente y relevante rompe expectativas: "9 de cada 10 startups mueren antes de cinco años". Para que golpee: dilo, PAUSA, y tradúcelo a algo tangible ("de las diez que conoces, sobrevivirá una").',
            },
            {
              titulo: 'Gancho 3: la historia en marcha',
              texto:
                'Arrancar dentro de una escena concreta es el gancho más potente: "El lunes pasado, mi cliente más importante me colgó el teléfono". Persona + momento + tensión en la primera frase. El cerebro humano no sabe abandonar una historia empezada.',
            },
            {
              titulo: 'Elige según el objetivo',
              texto:
                'Pregunta: cuando quieres implicar y hacer reflexionar. Dato: cuando tu fuerza es la evidencia y quieres urgencia. Historia: cuando buscas conexión emocional. Los tres se pueden combinar, pero uno debe liderar.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Escribe los TRES ganchos posibles para tu discurso (una pregunta, un dato, una primera frase de historia). Mañana los pruebas en voz alta y decides cuál gana.',
            },
          ],
        },
        {
          id: 'b3-s2-l3',
          tipo: 'practica',
          titulo: 'Práctica: el torneo de ganchos',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Graba los tres arranques de tu discurso seguidos (unos 30 segundos cada uno): versión pregunta, versión dato y versión historia. Anuncia cada uno ("versión 1…") y ejecútalo con toda la intención.',
            consejo:
              'Al revisar, pregúntate cuál te haría soltar el móvil a TI. Fíjate también en cuál te salió con más energía natural: el gancho que te enciende a ti suele encender al público.',
            segundos: 90,
            checklist: [
              'He grabado las tres versiones completas',
              'He usado pausa tras la pregunta y tras el dato',
              'He elegido mi gancho ganador al revisar',
            ],
          },
        },
        {
          id: 'b3-s2-l4',
          tipo: 'teoria',
          titulo: 'De la captura a la promesa',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El gancho compra 30 segundos; la promesa, el resto',
              texto:
                'Tras capturar la atención, hay que darle una razón para quedarse: la promesa. "En los próximos cinco minutos vas a descubrir cómo ______". El público que sabe qué gana escuchando, escucha. El que no, se evade.',
            },
            {
              titulo: 'La promesa habla de ELLOS',
              texto:
                'Mal: "voy a contaros nuestro nuevo proceso" (habla de ti). Bien: "vais a salir sabiendo cómo ahorrar dos horas por semana" (habla de ellos). La diferencia entre información y beneficio es la diferencia entre oír y escuchar.',
            },
            {
              titulo: 'La secuencia de apertura completa',
              texto:
                'Ya tienes la fórmula entera: GANCHO (captura) → PROMESA (por qué quedarse) → MAPA ("y lo veremos en tres pasos"). Veinte-cuarenta segundos en total y el público está a bordo, orientado y con expectativa. Es la apertura profesional estándar.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Completa tu apertura por escrito: gancho ganador + promesa en clave "ellos" + anuncio del mapa. Mañana la grabas encadenada con el discurso completo.',
            },
          ],
        },
        {
          id: 'b3-s2-l5',
          tipo: 'practica',
          titulo: 'Práctica: apertura + discurso completo',
          duracionMin: 8,
          ejercicio: {
            objetivo:
              'Graba tu discurso completo en 2 minutos: gancho → promesa → mapa → tres pilares → cierre con la frase única. Todo encadenado y sin leer.',
            consejo:
              'Es la primera vez que ejecutas la arquitectura completa de un discurso profesional. Ensáyala una vez en voz alta antes de grabar. Y recuerda el mes 2: la frase clave del gancho, con los pies plantados y mirando a la lente.',
            segundos: 120,
            checklist: [
              'Gancho ejecutado con pausa e intención',
              'Promesa formulada en beneficio del público',
              'Mapa anunciado y cumplido (tres pilares)',
              'Cierre circular con la frase única',
            ],
          },
        },
      ],
    },
    {
      id: 'b3-s3',
      titulo: 'Semana 3 · Storytelling que conecta',
      lecciones: [
        {
          id: 'b3-s3-l1',
          tipo: 'teoria',
          titulo: 'Por qué las historias ganan a los datos',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El cerebro está hecho para historias',
              texto:
                'Los datos activan las zonas de procesamiento del lenguaje; las historias encienden además las sensoriales y emocionales: el oyente VIVE lo que cuentas. Por eso investigadores de la memoria encuentran que lo narrado se recuerda muchísimo más que lo enumerado.',
            },
            {
              titulo: 'La estructura mínima: CCC',
              texto:
                'Contexto (cómo eran las cosas: persona, lugar, momento), Conflicto (qué se rompió o qué obstáculo apareció) y Cambio (qué pasó y qué aprendimos). Sin conflicto no hay historia: solo una anécdota plana. El conflicto es el motor.',
            },
            {
              titulo: 'Historia + dato: el matrimonio perfecto',
              texto:
                'No es historia O datos: es historia PARA el dato. Primero la historia abre el corazón ("María perdió su empleo en marzo…"), luego el dato lo dimensiona ("…como otras 40.000 personas ese mes"). Emoción que conecta, evidencia que convence.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Haz tu inventario: apunta 3 historias personales que ya has vivido (un fracaso con aprendizaje, un momento de cambio, una persona que te marcó). Son tu materia prima de la semana; ningún orador sale sin su banco de historias.',
            },
          ],
        },
        {
          id: 'b3-s3-l2',
          tipo: 'teoria',
          titulo: 'El detalle concreto es el que convence',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Lo genérico resbala',
              texto:
                '"Estaba muy nervioso" no emociona a nadie: es una etiqueta. "Me temblaba tanto la mano que dejé el café en el suelo para que no se notara" — eso se VE, y lo que se ve, se cree y se recuerda. Muestra, no etiquetes.',
            },
            {
              titulo: 'Uno o dos detalles sensoriales bastan',
              texto:
                'No se trata de describirlo todo (aburre) sino de elegir el detalle exacto: el sonido, el objeto, el gesto que resume la escena. "Su despacho olía a tabaco frío" sitúa más que tres párrafos de descripción. Francotirador, no metralleta.',
            },
            {
              titulo: 'Diálogo directo: la escena cobra vida',
              texto:
                'En lugar de "me dijo que no contara con él", prueba: "Me miró y me dijo: \'no cuentes conmigo\'". El estilo directo mete al público EN la escena. Un par de líneas de diálogo por historia es el condimento justo.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Toma una historia de tu inventario y escribe: su momento de conflicto en una frase, DOS detalles sensoriales reales y UNA línea de diálogo textual. Mañana la cuentas con esos ingredientes.',
            },
          ],
        },
        {
          id: 'b3-s3-l3',
          tipo: 'practica',
          titulo: 'Práctica: tu historia con zoom',
          duracionMin: 8,
          ejercicio: {
            objetivo:
              'Cuenta en 2 minutos una historia de tu inventario con estructura CCC, incluyendo tus dos detalles sensoriales y tu línea de diálogo en estilo directo.',
            consejo:
              'Cuando llegues al momento de conflicto, FRENA el ritmo: baja la velocidad, haz zoom en la escena. Los momentos importantes se cuentan despacio; los puentes, rápido. Ese cambio de ritmo es narrar.',
            segundos: 120,
            checklist: [
              'La historia tiene contexto, conflicto y cambio claros',
              'He incluido los dos detalles sensoriales',
              'He usado el diálogo en estilo directo',
              'He frenado el ritmo en el momento clave',
            ],
          },
        },
        {
          id: 'b3-s3-l4',
          tipo: 'teoria',
          titulo: 'El héroe es tu público (y el contraste vende)',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Tú no eres el héroe: eres el guía',
              texto:
                'Error clásico: contar historias donde el orador es el genio que todo lo resolvió. El público conecta más cuando el protagonista se le parece (o ES él). Tú preséntate como el guía que ya recorrió el camino y trae el mapa: Yoda, no Luke.',
            },
            {
              titulo: 'La técnica del contraste',
              texto:
                'La experta en presentaciones Nancy Duarte, tras analizar los grandes discursos de la historia, encontró un patrón común: alternan una y otra vez entre "lo que es" (la realidad, con sus fricciones) y "lo que podría ser" (la visión). Ese vaivén crea la tensión que engancha.',
            },
            {
              titulo: 'Úsalo en cualquier propuesta',
              texto:
                'Presenta la realidad ("hoy perdemos dos horas semanales en esto") → pinta la visión ("imagina recuperar esas dos horas para…") → repite subiendo la apuesta → cierra en la visión con el camino para llegar. Sirve para vender ideas, proyectos o cambios.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Elige algo que quieras proponer de verdad (en tu trabajo o tu vida) y escribe tres pares "lo que es / lo que podría ser". Mañana lo conviertes en un mini-discurso de persuasión.',
            },
          ],
        },
        {
          id: 'b3-s3-l5',
          tipo: 'practica',
          titulo: 'Práctica: vende una visión con contraste',
          duracionMin: 7,
          ejercicio: {
            objetivo:
              'Presenta tu propuesta real en 90 segundos alternando "lo que es" y "lo que podría ser" (mínimo dos vaivenes) y cerrando en la visión con un primer paso concreto.',
            consejo:
              'Marca el contraste también con el cuerpo y la voz: "lo que es" más grave y contenido, "lo que podría ser" más luminoso y abierto (recuerda las zonas del espacio del mes 2, si tu encuadre lo permite).',
            segundos: 90,
            checklist: [
              'He alternado realidad y visión al menos dos veces',
              'La visión pinta un beneficio concreto para el público',
              'He cerrado con un primer paso accionable',
            ],
          },
        },
      ],
    },
    {
      id: 'b3-s4',
      titulo: 'Semana 4 · Claridad y cierres memorables',
      lecciones: [
        {
          id: 'b3-s4-l1',
          tipo: 'teoria',
          titulo: 'Claridad: el lujo de lo simple',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'Frases cortas, ideas grandes',
              texto:
                'Al hablar, las frases largas se convierten en laberintos: quien escucha no puede releer. Regla de oro del discurso oral: una idea por frase, sujeto-verbo-predicado, y punto. La frase corta no es pobreza de estilo: es respeto por el oyente.',
            },
            {
              titulo: 'La maldición del conocimiento',
              texto:
                'Cuanto más sabes de algo, peor recuerdas lo que es NO saberlo, y das por hecho contexto que tu público no tiene. Antídoto: explica como si fuera la primera vez que alguien lo oye, y verifica ("¿os suena X? Por si acaso, en una frase: …").',
            },
            {
              titulo: 'Repetir no es fallo: es diseño',
              texto:
                'En texto escrito la repetición sobra; en el discurso oral es imprescindible: el oyente distraído necesita segundas oportunidades. Repite tu frase única al menos tres veces (apertura, mitad, cierre), con las mismas palabras. Así se graba.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Recupera cualquier párrafo que hayas escrito esta semana y pártelo en frases de máximo 12 palabras. Léelo en voz alta antes y después. El "después" es tu nuevo estándar al hablar.',
            },
          ],
        },
        {
          id: 'b3-s4-l2',
          tipo: 'teoria',
          titulo: 'El cierre: lo último es lo que queda',
          duracionMin: 5,
          tarjetas: [
            {
              titulo: 'El efecto de lo reciente',
              texto:
                'La psicología de la memoria es clara: se recuerda especialmente el principio y EL FINAL. Y sin embargo, la mayoría de discursos mueren con un "…y bueno, eso es todo, gracias". Regalar el final es regalar la memoria del público.',
            },
            {
              titulo: 'Tres cierres que funcionan',
              texto:
                'El circular (retomas tu gancho/frase única del inicio: sensación de obra completa), la llamada a la acción ("esta semana, haz X": convierte la escucha en movimiento) y la imagen final (una frase visual o historia breve que deja eco).',
            },
            {
              titulo: 'Señala el aterrizaje y no lo estropees',
              texto:
                '"Termino con esto:" — esa señal reactiva la atención de toda la sala: aprovéchala para tu mejor frase. Y una vez dicha… PARA. Sin añadir "bueno, y también…". Frase final + silencio + gracias. El silencio es parte del cierre.',
            },
            {
              titulo: 'Aplícalo ahora',
              texto:
                'Escribe el cierre de tu discurso del mes combinando dos técnicas (por ejemplo: circular + llamada a la acción). Memoriza la frase final PALABRA POR PALABRA: es la única parte del discurso que sí se memoriza literal.',
            },
          ],
        },
        {
          id: 'b3-s4-l3',
          tipo: 'practica',
          titulo: 'Práctica: aterriza como un profesional',
          duracionMin: 6,
          ejercicio: {
            objetivo:
              'Graba solo el tramo final de tu discurso (60 segundos): último pilar → "termino con esto:" → tu cierre de dos técnicas → frase final memorizada → dos segundos de silencio sosteniendo la mirada.',
            consejo:
              'El silencio final con la mirada sostenida es lo más difícil y lo más profesional del ejercicio. Resiste el impulso de rellenar o huir del plano: ese aguante es presencia pura.',
            segundos: 60,
            checklist: [
              'He señalado el cierre con "termino con esto"',
              'He dicho la frase final memorizada, sin titubear',
              'He sostenido el silencio y la mirada dos segundos',
            ],
          },
        },
        {
          id: 'b3-s4-l4',
          tipo: 'practica',
          titulo: 'Reto del mes: tu discurso completo',
          duracionMin: 9,
          ejercicio: {
            objetivo:
              'Tu examen del bloque 3: discurso de 2 minutos y medio con TODO — gancho, promesa, mapa, tres pilares (al menos uno con historia CCC y un dato), repetición de la frase única y cierre profesional con silencio final.',
            consejo:
              'Ensáyalo dos veces en voz alta antes de grabar (de pie y con cronómetro, como los profesionales). Ya no eres la persona del mes 1: tienes mente, cuerpo y ahora arquitectura. Demuéstratelo.',
            segundos: 150,
            checklist: [
              'Apertura completa: gancho + promesa + mapa',
              'Una historia CCC con detalle concreto dentro de un pilar',
              'Frase única repetida al menos tres veces',
              'Cierre con técnica combinada y silencio final',
            ],
          },
        },
        {
          id: 'b3-s4-l5',
          tipo: 'teoria',
          titulo: 'Cierre del mes: ya tienes arquitectura',
          duracionMin: 4,
          tarjetas: [
            {
              titulo: 'Tu caja de herramientas de contenido',
              texto:
                'Frase única y regla de tres, análisis del público, los tres ganchos con promesa y mapa, storytelling CCC con detalle y diálogo, contraste realidad/visión, claridad oral (frases cortas, repetición de diseño) y cierres que se recuerdan.',
            },
            {
              titulo: 'La plantilla universal',
              texto:
                'Guárdala: GANCHO → PROMESA → MAPA → PILAR 1 → PILAR 2 (con historia) → PILAR 3 (con dato) → RESUMEN → CIERRE. Rellena esta plantilla y tendrás un discurso sólido para cualquier ocasión en menos de una hora de preparación.',
            },
            {
              titulo: 'Lo que viene en el mes 4',
              texto:
                'El último bloque pule el instrumento: tu VOZ (ritmo, tono, pausas y proyección), la improvisación (pensar de pie sin pánico) y la persuasión avanzada. Es el mes que convierte un buen discurso en una gran interpretación.',
            },
          ],
        },
      ],
    },
  ],
};
