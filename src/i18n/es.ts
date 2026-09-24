import type { Dictionary } from './types';

export const es: Dictionary = {
  tagline: 'Desafía tu estrategia',
  meta: {
    homeDescription:
      'Damas brasileñas para móvil y Windows. Juega contra la IA en tres niveles o dos jugadores en el mismo dispositivo. Sin anuncios, sin cuenta, funciona sin conexión.',
    privacyTitle: 'Política de Privacidad',
    privacyDescription: 'Damas Evolution no recopila, no transmite y no comparte datos personales.',
    rulesTitle: 'Reglas de las damas brasileñas',
    rulesDescription:
      'Cómo se juegan las damas brasileñas: movimiento, captura obligatoria, ley de la mayoría, dama voladora y empate.',
    notFoundTitle: 'Página no encontrada',
    ogImageAlt:
      'Logotipo de Damas Evolution: una ficha de damas con corona dorada sobre un tablero.',
  },
  a11y: {
    skipToContent: 'Ir al contenido',
    mainNavigation: 'Navegación principal',
    languageNavigation: 'Cambiar idioma',
    homeLink: 'Damas Evolution, página de inicio',
  },
  nav: {
    howToPlay: 'Cómo se juega',
    download: 'Descargar',
    menu: 'Menú',
    rules: 'Reglas',
    privacy: 'Privacidad',
  },
  download: {
    googlePlay: 'Google Play',
    windows: 'Windows',
    comingSoon: 'Próximamente',
    title: 'Dónde descargarlo',
    soon: 'Próximamente para Android y Windows.',
    available: 'Para Android y Windows.',
  },
  theme: {
    dark: 'Tema oscuro',
  },
  legal: {
    toc: 'En esta página',
  },
  footer: {
    contact: 'Contacto',
    language: 'Idioma',
  },
  notFound: {
    text: 'Esta dirección no existe o cambió de lugar.',
    backHome: 'Volver al inicio',
  },
  screens: {
    home: 'Pantalla de inicio de Damas Evolution, con los botones Jugador vs Jugador y Jugador vs IA.',
    drawer:
      'Menú lateral con Estadísticas, Configuración, el sitio del desarrollador y la versión de la app.',
    difficulty: 'Pantalla de selección de dificultad: Fácil, Medio y Difícil.',
    game: 'Partida en curso, con el tablero en la posición inicial y el aviso “Tu turno”.',
    gameMidgame:
      'Partida en el tablero 2D con una ficha seleccionada y sus destinos posibles resaltados.',
    game3d: 'Partida en el tablero 3D.',
    stats:
      'Pantalla de estadísticas con partidas jugadas, porcentaje de victorias, rachas y rendimiento por dificultad.',
    statsFull: 'Pantalla de estadísticas con el historial de muchas partidas.',
    settings: 'Pantalla de configuración con idioma, sonido, tablero 3D e información de la app.',
    resultWin: 'Pantalla de fin de partida con la victoria del jugador.',
    resultLoss:
      'Pantalla de fin de partida con la derrota del jugador contra la IA y el total de movimientos.',
  },
  sound: {
    playCapture: 'Escuchar el sonido de una captura',
  },
  hero: {
    title: 'Damas brasileñas, con las reglas de verdad.',
    subtitle:
      'Captura obligatoria, ley de la mayoría, dama voladora. Juega contra la IA o con un amigo en el mismo dispositivo.',
    seeHowItWorks: 'Ver cómo funciona',
    boardLabel: 'Un tablero con una ficha roja a punto de capturar dos azules seguidas.',
  },
  facts: {
    noAds: { title: 'Sin anuncios', text: 'Nada entre una partida y otra.' },
    noAccount: { title: 'Sin cuenta', text: 'Abres y juegas. Sin registro ni inicio de sesión.' },
    offline: { title: 'Funciona sin conexión', text: 'No necesitas internet para jugar.' },
    languages: { title: '5 idiomas', text: 'Portugués, inglés, español, francés e italiano.' },
  },
  howTo: {
    title: 'Cómo se juega',
    intro: 'El juego en 30 segundos.',
    replay: 'Ver otra vez',
    fullRules: 'Leer las reglas completas',
    steps: {
      move: {
        title: 'Avanza en diagonal',
        text: 'Cada ficha avanza una casilla por vez, hacia delante, sobre las casillas oscuras.',
        scene: 'Una ficha roja avanza una casilla en diagonal.',
      },
      capture: {
        title: 'Capturar es obligatorio',
        text: 'Si hay una ficha rival justo delante y la casilla de atrás está libre, saltas por encima y sale del tablero. No puedes hacer otra jugada.',
        scene: 'Una ficha roja salta sobre una azul y la captura.',
      },
      chain: {
        title: 'Una captura lleva a otra',
        text: 'Después de saltar, si puedes capturar otra vez, sigues en la misma jugada, incluso hacia atrás. Si hay dos caminos, vale el que captura más fichas.',
        scene: 'Una ficha roja captura dos azules seguidas, en zigzag.',
      },
      king: {
        title: 'Llegas al fondo y eres dama',
        text: 'La ficha que llega a la última fila se corona dama. La dama avanza las casillas que quiera en diagonal y captura desde lejos.',
        scene:
          'Una ficha roja llega a la última fila, se corona y avanza tres casillas en diagonal.',
      },
    },
  },
  boardViews: {
    title: 'Tablero 2D o 3D',
    text: 'El tablero empieza plano. En Configuración, activa “Tablero 3D” y la partida se ve en perspectiva. Las reglas son las mismas.',
    text2:
      'Fichas rojas contra azules, damas con un realce dorado y un sonido para cada jugada: movimiento, captura, coronación, victoria, derrota y empate.',
    legend: 'Vista del tablero',
    view2d: '2D',
    view3d: '3D',
  },
  ai: {
    title: 'Contra la IA',
    intro: 'Tres niveles. Elige el tuyo antes de empezar.',
    levelLabel: 'Nivel',
    levelOf: 'de 3',
    levels: {
      easy: { name: 'Fácil', text: 'Perfecto para principiantes' },
      medium: { name: 'Medio', text: 'Desafiante y justo' },
      hard: { name: 'Difícil', text: 'Para jugadores experimentados' },
    },
    howTitle: 'Cómo piensa la IA',
    how1: 'Prueba jugadas, imagina tus respuestas y mira cada vez más jugadas adelante hasta que se acaba el tiempo de ese turno. Los caminos que ya no valen la pena se descartan (es una búsqueda minimax con poda alfa-beta).',
    how2: 'Todo esto corre en segundo plano, así que la app no se traba mientras piensa. Cuando dos jugadas valen lo mismo, elige una al azar, por eso las partidas no se repiten. La IA juega en tu dispositivo, sin internet.',
    twoPlayers: {
      title: 'Dos jugadores, un dispositivo',
      text: 'Sin IA: cada uno juega su turno, rojas contra azules, en el mismo dispositivo. Sin cuenta y sin internet.',
    },
  },
  stats: {
    title: 'Tus estadísticas',
    intro:
      'Cada partida se convierte en un número: la app guarda el historial y muestra cómo estás jugando.',
    items: {
      played: 'Partidas jugadas, victorias, derrotas y empates',
      winRate: 'Tasa de victorias',
      averageMoves: 'Promedio de jugadas',
      streaks: 'Racha actual y mejor racha',
      byMode: 'Partidas por modo',
      byDifficulty: 'Rendimiento por dificultad',
      recent: 'Partidas recientes',
    },
    note: 'Todo queda solo en tu dispositivo. No se envía nada y puedes borrar el historial cuando quieras.',
  },
  privacySection: {
    title: 'Nada sale de tu dispositivo.',
    lead: 'Damas Evolution no te pide crear una cuenta, no muestra anuncios y no recopila datos. Ni siquiera necesita internet para jugar.',
    items: {
      noAccount: 'Sin cuenta ni inicio de sesión.',
      noAds: 'Sin anuncios.',
      noTracking: 'Sin análisis de uso ni rastreo.',
      offline: 'Funciona sin conexión.',
    },
    siteNote:
      'Este sitio web tampoco usa cookies ni scripts de terceros, así que no hay banner de consentimiento.',
    link: 'Leer la política de privacidad',
  },
  languagesSection: {
    title: 'Idiomas y accesibilidad',
    intro:
      'El juego se abre en el idioma del sistema y puedes cambiarlo en Configuración. Este sitio web también existe en los cinco.',
    a11yTitle: 'Accesibilidad',
    screenReader:
      'Lector de pantalla: cada casilla del tablero tiene una descripción con fila, columna, ficha y estado.',
    fontScale: 'Texto: la escala de fuente llega hasta el 200 %.',
    screens: 'Pantallas: desde 320 dp hasta tabletas, en vertical y horizontal.',
  },
  about: {
    title: 'Sobre el autor',
    p1: 'Soy Leankar.dev, desarrollador autodidacta. Todo empezó por curiosidad: quería entender cómo se hacen las aplicaciones que uso todos los días. Aprendí Flutter en la práctica, y cada proyecto publicado se convirtió en un laboratorio.',
    p2: 'En poco más de cuatro años con Flutter y Dart, he hecho apps Android para Google Play y un juego web. Cada una nació de una necesidad concreta: una calculadora neumórfica, un buscador de códigos postales brasileños (CEP), un organizador de compras, un buscaminas reinventado.',
    p3: 'Trabajo con MVVM, Riverpod para el estado, Drift (SQLite) para los datos locales y Firebase solo cuando la nube marca una diferencia real. Me gusta el código limpio y cada cosa en su sitio, desde la estructura de carpetas hasta la interfaz.',
    p4: 'Quiero hacer apps que la gente quiera usar, sin excesos y sin pantallas confusas. Si una app necesita un tutorial, todavía no está lista.',
    contact: '¿Encontraste un error, tienes una idea o quieres hablar de damas? Escríbeme.',
    website: 'Sitio del desarrollador',
    email: 'Correo electrónico',
  },
  rules: {
    intro:
      'Las damas brasileñas se juegan en un tablero de 8×8, con 12 fichas por bando. Esta guía repasa, una a una, las reglas que usa Damas Evolution, con un dibujo para cada una.',
    diagramNote:
      'Los dibujos muestran una parte del tablero. Para quienes usan lector de pantalla, cada uno tiene una descripción con las casillas nombradas por letra y número: las columnas son a, b, c… de izquierda a derecha, y las filas se cuentan desde la 1, abajo.',
    board: {
      title: 'El tablero y las fichas',
      p1: 'El tablero tiene 8 por 8 casillas, claras y oscuras. Solo se usan las oscuras. Gíralo de modo que la casilla oscura de la esquina quede abajo, a tu izquierda.',
      p2: 'Cada jugador empieza con 12 fichas en las tres filas más cercanas a él. En esta guía son rojas contra azules: las rojas empiezan abajo y suben; las azules empiezan arriba y bajan.',
      scene:
        'Un tablero de 8 por 8 en la posición inicial: las doce fichas azules ocupan las tres filas de arriba y las doce rojas, las tres de abajo, siempre en casillas oscuras. La casilla de la esquina inferior izquierda es oscura.',
    },
    move: {
      title: 'Cómo se mueven las fichas',
      p1: 'La ficha común avanza una casilla por vez, en diagonal y hacia delante, a una casilla oscura que esté libre.',
      p2: 'Nunca retrocede. Ir hacia atrás solo es posible al capturar (mira más abajo).',
      scene:
        'Una ficha roja seleccionada en d2. Las casillas c3 y e3, delante de ella en diagonal, tienen un punto dorado: son los destinos posibles. Las casillas c1 y e1, detrás, tienen una X: la ficha común no retrocede. Dos fichas azules están arriba, en b6 y d6.',
    },
    capture: {
      title: 'La captura',
      intro:
        'Capturar es saltar por encima de una ficha del rival. La ficha capturada sale del tablero.',
      mandatory: {
        title: 'Capturar es obligatorio',
        text: 'Si una ficha tuya está pegada a una ficha rival y la casilla justo detrás de esta está libre, tienes que saltar. No vale hacer otra jugada en su lugar.',
        scene:
          'Una ficha roja en d2 y una azul en e3, pegada a ella en diagonal. La casilla f4, justo detrás de la azul, está libre. Una flecha dorada de trazos va de d2 a f4, por encima de la azul. La casilla c3, que sería una jugada común, tiene una X: habiendo captura, no vale. Otra ficha azul está en b6.',
      },
      backward: {
        title: 'Hacia atrás también',
        text: 'La ficha común no avanza hacia atrás, pero sí captura hacia atrás. Si una ficha rival está detrás de ti, en diagonal, y la casilla siguiente está libre, salta.',
        scene:
          'Una ficha roja en e3 y una azul en d2, detrás de ella en diagonal. La casilla c1 está libre. Una flecha de trazos va de e3 a c1, hacia atrás, por encima de la azul.',
      },
      chain: {
        title: 'Una captura lleva a otra',
        text: 'Después de saltar, mira otra vez desde donde caíste. Si puedes capturar otra ficha, sigues en la misma jugada, en cualquier dirección. El camino puede hacer zigzag.',
        scene:
          'Una ficha roja en c1 y dos azules, en d2 y d4. La flecha de trazos hace un zigzag: sale de c1, salta d2, cae en e3, salta d4 y termina en c5. Otras dos azules están quietas arriba, en b6 y d6.',
      },
    },
    majority: {
      title: 'La ley de la mayoría',
      p1: 'Cuando hay más de un camino de captura, estás obligado a elegir el que captura más fichas. No vale llevarse una si podías llevarte dos.',
      p2: 'Si dos caminos capturan el mismo número de fichas, eliges tú.',
      scene:
        'Una ficha roja en c1 y tres azules: d2, b2 y b4. A la derecha, una flecha tenue va de c1 a e3, capturando solo d2; la casilla e3 tiene una X. A la izquierda, la flecha fuerte va de c1 a a3 y de ahí a c5, capturando b2 y b4. Ese es el camino obligatorio.',
    },
    promotion: {
      title: 'Coronar una dama',
      text: 'La ficha que se detiene en la última fila del rival se corona dama y recibe una corona dorada. Desde entonces se mueve y captura como dama. Para las rojas es la fila de arriba; para las azules, la de abajo.',
      scene:
        'Una ficha roja en c5, a una casilla de la última fila. Pasa a d6, donde aparece translúcida ya como dama, con corona dorada. Hay además una ficha roja en c1 y dos azules, en f4 y f2.',
    },
    king: {
      title: 'La dama voladora',
      intro: 'La dama es la pieza más fuerte del tablero. No avanza una casilla: vuela.',
      move: {
        title: 'Tantas casillas como quiera',
        text: 'La dama avanza las casillas que quiera en diagonal, en cualquier dirección, mientras el camino esté libre. Se detiene antes de la primera ficha que encuentra, sea suya o del rival.',
        scene:
          'Una dama roja en d4. Puntos dorados marcan todas las casillas libres de sus cuatro diagonales, hasta el borde del tablero: e5, f6, g7 y h8 hacia arriba a la derecha; c3, b2 y a1 hacia abajo a la izquierda; e3, f2 y g1 hacia abajo a la derecha; y c5 hacia arriba a la izquierda, donde el camino termina porque b6 tiene una ficha roja.',
      },
      capture: {
        title: 'Captura desde lejos',
        text: 'La dama puede capturar una ficha rival aunque esté lejos, siempre que las casillas entre las dos estén libres. Después del salto puede detenerse en cualquier casilla libre justo detrás de la ficha capturada. Si desde alguna de ellas puede seguir capturando, la ley de la mayoría manda ir por ahí.',
        scene:
          'Una dama roja en b2 y una ficha azul en e5, en la misma diagonal, con c3 y d4 libres entre las dos. La flecha de trazos va de b2 a f6, por encima de e5. Los puntos dorados en g7 y h8 muestran las otras casillas donde la dama podría detenerse.',
      },
    },
    end: {
      title: 'Fin de la partida',
      intro: 'La partida termina cuando alguien gana o cuando hay empate.',
      win: {
        title: 'Ganar',
        text: 'Ganas cuando el rival se queda sin jugada: o porque le capturaron todas las fichas, o porque las que le quedan están bloqueadas. También puedes abandonar la partida.',
        scene:
          'Una ficha azul sola en c3. Delante de ella, fichas rojas en b2 y d2 y, justo detrás de estas, en a1 y e1. La azul no puede moverse ni capturar: todas las casillas están ocupadas. Si es el turno de las azules, ganan las rojas.',
      },
      draw: {
        title: 'Empate',
        text: 'Si pasan 40 jugadas seguidas sin progreso, la partida termina en empate. Dos damas, una de cada bando, sin nada que capturar, suelen acabar así.',
        scene:
          'Una dama roja en a1 y una dama azul en f6, cada una en un extremo de la misma diagonal. Ninguna de las dos puede capturar a la otra.',
      },
    },
    practice: {
      title: 'Ahora, en la práctica',
      text: 'Las reglas se aprenden jugando. Empieza contra la IA en el nivel Fácil, o invita a alguien a jugar en el mismo dispositivo.',
    },
  },
};
