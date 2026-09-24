import type { Dictionary } from './types';

export const it: Dictionary = {
  tagline: 'Sfida la tua strategia',
  meta: {
    homeDescription:
      'Dama brasiliana per cellulare e Windows. Gioca contro l’IA su tre livelli o in due sullo stesso dispositivo. Senza pubblicità, senza account, funziona offline.',
    privacyTitle: 'Informativa sulla Privacy',
    privacyDescription:
      'Damas Evolution non raccoglie, non trasmette e non condivide dati personali.',
    rulesTitle: 'Regole della dama brasiliana',
    rulesDescription:
      'Come si gioca a dama brasiliana: movimento, presa obbligatoria, legge della maggioranza, dama volante e patta.',
    notFoundTitle: 'Pagina non trovata',
    ogImageAlt:
      'Logo Damas Evolution: una pedina della dama con una corona dorata su una scacchiera.',
  },
  a11y: {
    skipToContent: 'Vai al contenuto',
    mainNavigation: 'Navigazione principale',
    languageNavigation: 'Cambia lingua',
    homeLink: 'Damas Evolution, pagina iniziale',
  },
  nav: {
    howToPlay: 'Come si gioca',
    download: 'Scarica',
    menu: 'Menu',
    rules: 'Regole',
    privacy: 'Privacy',
  },
  download: {
    googlePlay: 'Google Play',
    windows: 'Windows',
    comingSoon: 'In arrivo',
    title: 'Dove scaricarlo',
    soon: 'In arrivo per Android e Windows.',
    available: 'Per Android e Windows.',
  },
  theme: {
    dark: 'Tema scuro',
  },
  legal: {
    toc: 'In questa pagina',
  },
  footer: {
    contact: 'Contatto',
    language: 'Lingua',
  },
  notFound: {
    text: 'Questo indirizzo non esiste o è stato spostato.',
    backHome: 'Torna alla home',
  },
  screens: {
    home: 'Schermata iniziale di Damas Evolution, con i pulsanti Giocatore contro Giocatore e Giocatore contro IA.',
    drawer:
      'Menu laterale con Statistiche, Impostazioni, il sito dello sviluppatore e la versione dell’app.',
    difficulty: 'Schermata di selezione della difficoltà: Facile, Medio e Difficile.',
    game: 'Partita in corso, con la scacchiera nella posizione iniziale e l’indicazione «Tocca a te».',
    gameMidgame:
      'Partita sulla scacchiera 2D con una pedina selezionata e le destinazioni possibili evidenziate.',
    game3d: 'Partita sulla scacchiera 3D.',
    stats:
      'Schermata delle statistiche con partite giocate, percentuale di vittorie, serie e rendimento per difficoltà.',
    statsFull: 'Schermata delle statistiche con la cronologia di molte partite.',
    settings:
      'Schermata delle impostazioni con lingua, audio, scacchiera 3D e informazioni sull’app.',
    resultWin: 'Schermata di fine partita con la vittoria del giocatore.',
    resultLoss:
      'Schermata di fine partita con la sconfitta del giocatore contro l’IA e il totale delle mosse.',
  },
  sound: {
    playCapture: 'Ascolta il suono di una presa',
  },
  hero: {
    title: 'Dama brasiliana, con le regole vere.',
    subtitle:
      'Presa obbligatoria, legge della maggioranza, dama volante. Gioca contro l’IA o con un amico sullo stesso dispositivo.',
    seeHowItWorks: 'Scopri come funziona',
    boardLabel: 'Una scacchiera con una pedina rossa pronta a catturare due blu di fila.',
  },
  facts: {
    noAds: { title: 'Senza pubblicità', text: 'Niente tra una partita e l’altra.' },
    noAccount: { title: 'Senza account', text: 'Apri e gioca. Niente registrazione né accesso.' },
    offline: { title: 'Funziona offline', text: 'Non serve internet per giocare.' },
    languages: { title: '5 lingue', text: 'Portoghese, inglese, spagnolo, francese e italiano.' },
  },
  howTo: {
    title: 'Come si gioca',
    intro: 'Il gioco in 30 secondi.',
    replay: 'Guarda di nuovo',
    fullRules: 'Leggi le regole complete',
    steps: {
      move: {
        title: 'Muovi in diagonale',
        text: 'Ogni pedina si muove di una casella alla volta, in avanti, sulle caselle scure.',
        scene: 'Una pedina rossa avanza di una casella in diagonale.',
      },
      capture: {
        title: 'Prendere è obbligatorio',
        text: 'Se una pedina avversaria è subito davanti alla tua e la casella dietro è libera, la salti e lei esce dalla scacchiera. Non puoi giocare altro.',
        scene: 'Una pedina rossa salta una blu e la cattura.',
      },
      chain: {
        title: 'Una presa tira l’altra',
        text: 'Dopo un salto, se puoi catturare ancora, continui nella stessa mossa, anche all’indietro. Se ci sono due percorsi, vale quello che cattura più pedine.',
        scene: 'Una pedina rossa cattura due blu di fila, a zigzag.',
      },
      king: {
        title: 'Arrivi in fondo, diventi dama',
        text: 'La pedina che raggiunge l’ultima traversa diventa dama. La dama si muove di quante caselle vuole in diagonale e cattura da lontano.',
        scene:
          'Una pedina rossa raggiunge l’ultima traversa, diventa dama e avanza di tre caselle in diagonale.',
      },
    },
  },
  boardViews: {
    title: 'Scacchiera 2D o 3D',
    text: 'La scacchiera parte piatta. Nelle Impostazioni, attiva «Scacchiera 3D» e la partita si vede in prospettiva. Le regole sono le stesse.',
    text2:
      'Pedine rosse contro blu, dame con un riflesso dorato e un suono per ogni evento: mossa, presa, promozione, vittoria, sconfitta e patta.',
    legend: 'Vista della scacchiera',
    view2d: '2D',
    view3d: '3D',
  },
  ai: {
    title: 'Contro l’IA',
    intro: 'Tre livelli. Scegli il tuo prima di iniziare.',
    levelLabel: 'Livello',
    levelOf: 'su 3',
    levels: {
      easy: { name: 'Facile', text: 'Perfetto per i principianti' },
      medium: { name: 'Medio', text: 'Impegnativo ed equilibrato' },
      hard: { name: 'Difficile', text: 'Per giocatori esperti' },
    },
    howTitle: 'Come ragiona l’IA',
    how1: 'Prova le mosse, immagina le tue risposte e guarda sempre più mosse avanti finché non scade il tempo del turno. I percorsi che non valgono più la pena vengono scartati (è una ricerca minimax con potatura alfa-beta).',
    how2: 'Tutto questo gira in background, quindi l’app non si blocca mentre pensa. Quando due mosse valgono lo stesso, ne sceglie una a caso, per questo le partite non si ripetono. L’IA gioca sul tuo dispositivo, senza internet.',
    twoPlayers: {
      title: 'Due giocatori, un dispositivo',
      text: 'Senza IA: ognuno gioca il suo turno, rosse contro blu, sullo stesso dispositivo. Senza account e senza internet.',
    },
  },
  stats: {
    title: 'Le tue statistiche',
    intro:
      'Ogni partita diventa un numero: l’app conserva la cronologia e mostra come stai giocando.',
    items: {
      played: 'Partite giocate, vittorie, sconfitte e pareggi',
      winRate: 'Percentuale di vittorie',
      averageMoves: 'Media delle mosse',
      streaks: 'Serie attuale e serie migliore',
      byMode: 'Partite per modalità',
      byDifficulty: 'Prestazioni per difficoltà',
      recent: 'Partite recenti',
    },
    note: 'Tutto resta solo sul tuo dispositivo. Non viene inviato nulla e puoi cancellare la cronologia quando vuoi.',
  },
  privacySection: {
    title: 'Niente lascia il tuo dispositivo.',
    lead: 'Damas Evolution non ti chiede di creare un account, non mostra pubblicità e non raccoglie dati. Non serve nemmeno internet per giocare.',
    items: {
      noAccount: 'Nessun account né accesso.',
      noAds: 'Nessuna pubblicità.',
      noTracking: 'Nessuna analisi d’uso, nessun tracciamento.',
      offline: 'Funziona offline.',
    },
    siteNote:
      'Nemmeno questo sito usa cookie o script di terze parti, quindi non c’è nessun banner di consenso.',
    link: 'Leggi l’informativa sulla privacy',
  },
  languagesSection: {
    title: 'Lingue e accessibilità',
    intro:
      'Il gioco si apre nella lingua del sistema e puoi cambiarla nelle Impostazioni. Anche questo sito esiste in tutte e cinque.',
    a11yTitle: 'Accessibilità',
    screenReader:
      'Screen reader: ogni casella della scacchiera ha una descrizione con riga, colonna, pedina e stato.',
    fontScale: 'Testo: la scala del carattere arriva fino al 200%.',
    screens: 'Schermi: da 320 dp fino ai tablet, in verticale e in orizzontale.',
  },
  about: {
    title: 'Sull’autore',
    p1: 'Sono Leankar.dev, sviluppatore autodidatta. Tutto è nato dalla curiosità: volevo capire come sono fatte le app che uso ogni giorno. Ho imparato Flutter sul campo, e ogni progetto pubblicato è diventato un laboratorio.',
    p2: 'In poco più di quattro anni con Flutter e Dart ho realizzato app Android per Google Play e un gioco web. Ognuna è nata da un’esigenza concreta: una calcolatrice neumorfica, un cercatore di CAP brasiliani (CEP), un organizzatore della spesa, un campo minato reinventato.',
    p3: 'Lavoro con MVVM, Riverpod per lo stato, Drift (SQLite) per i dati locali e Firebase solo quando il cloud fa davvero la differenza. Mi piacciono il codice pulito e ogni cosa al suo posto, dalla struttura delle cartelle all’interfaccia.',
    p4: 'Voglio fare app che le persone abbiano voglia di usare, senza eccessi e senza schermate confuse. Se un’app ha bisogno di un tutorial, non è ancora pronta.',
    contact: 'Hai trovato un errore, hai un’idea o vuoi parlare di dama? Scrivimi.',
    website: 'Sito dello sviluppatore',
    email: 'E-mail',
  },
  rules: {
    intro:
      'La dama brasiliana si gioca su una scacchiera 8×8, con 12 pedine per parte. Questa guida passa in rassegna, una alla volta, le regole che usa Damas Evolution, con un disegno per ciascuna.',
    diagramNote:
      'I disegni mostrano una parte della scacchiera. Per chi usa uno screen reader, ognuno ha una descrizione che indica le caselle con lettera e numero: le colonne sono a, b, c… da sinistra a destra e le traverse si contano da 1, in basso.',
    board: {
      title: 'La scacchiera e le pedine',
      p1: 'La scacchiera ha 8 per 8 caselle, chiare e scure. Si usano solo quelle scure. Girala in modo che la casella scura d’angolo sia in basso a sinistra.',
      p2: 'Ogni giocatore comincia con 12 pedine sulle tre traverse più vicine a lui. In questa guida sono le rosse contro le blu: le rosse partono dal basso e salgono, le blu partono dall’alto e scendono.',
      scene:
        'Una scacchiera 8 per 8 nella posizione iniziale: le dodici pedine blu occupano le tre traverse in alto e le dodici rosse le tre in basso, sempre su caselle scure. La casella dell’angolo in basso a sinistra è scura.',
    },
    move: {
      title: 'Come si muovono le pedine',
      p1: 'La pedina semplice si muove di una casella alla volta, in diagonale e in avanti, su una casella scura libera.',
      p2: 'Non torna mai indietro. Andare all’indietro è possibile solo in una presa (vedi sotto).',
      scene:
        'Una pedina rossa selezionata in d2. Le caselle c3 ed e3, davanti a lei in diagonale, hanno un punto dorato: sono le destinazioni possibili. Le caselle c1 ed e1, dietro, hanno una X: la pedina semplice non va indietro. Due pedine blu sono in alto, in b6 e d6.',
    },
    capture: {
      title: 'La presa',
      intro: 'Prendere significa saltare una pedina avversaria. Lei esce dalla scacchiera.',
      mandatory: {
        title: 'Prendere è obbligatorio',
        text: 'Se una tua pedina è a contatto con una pedina avversaria e la casella subito dietro è libera, devi saltare. Non puoi fare un’altra mossa al suo posto.',
        scene:
          'Una pedina rossa in d2 e una blu in e3, a contatto con lei in diagonale. La casella f4, subito dietro la blu, è libera. Una freccia dorata tratteggiata va da d2 a f4, sopra la blu. La casella c3, che sarebbe una mossa semplice, ha una X: se c’è una presa, non vale. Un’altra pedina blu è in b6.',
      },
      backward: {
        title: 'Anche all’indietro',
        text: 'La pedina semplice non si muove all’indietro, ma prende all’indietro. Se una pedina avversaria è dietro di te, in diagonale, e la casella dopo è libera, salta.',
        scene:
          'Una pedina rossa in e3 e una blu in d2, dietro di lei in diagonale. La casella c1 è libera. Una freccia tratteggiata va da e3 a c1, all’indietro, sopra la blu.',
      },
      chain: {
        title: 'Una presa tira l’altra',
        text: 'Dopo un salto, guarda di nuovo da dove sei arrivato. Se puoi prendere un’altra pedina, continui nella stessa mossa, in qualsiasi direzione. Il percorso può fare zigzag.',
        scene:
          'Una pedina rossa in c1 e due blu, in d2 e d4. La freccia tratteggiata fa uno zigzag: parte da c1, salta d2, arriva in e3, salta d4 e finisce in c5. Altre due pedine blu restano ferme in alto, in b6 e d6.',
      },
    },
    majority: {
      title: 'La legge della maggioranza',
      p1: 'Quando ci sono più percorsi di presa, sei obbligato a scegliere quello che prende più pedine. Non vale prenderne una se potevi prenderne due.',
      p2: 'Se due percorsi prendono lo stesso numero di pedine, scegli tu.',
      scene:
        'Una pedina rossa in c1 e tre blu: d2, b2 e b4. A destra, una freccia sbiadita va da c1 a e3, prendendo solo d2; la casella e3 ha una X. A sinistra, la freccia marcata va da c1 ad a3 e poi a c5, prendendo b2 e b4. È il percorso obbligatorio.',
    },
    promotion: {
      title: 'Diventare dama',
      text: 'La pedina che si ferma sull’ultima traversa avversaria diventa dama e riceve una corona dorata. Da lì in poi si muove e prende come una dama. Per le rosse è la traversa in alto; per le blu, quella in basso.',
      scene:
        'Una pedina rossa in c5, a una casella dall’ultima traversa. Va in d6, dove compare in trasparenza una dama con la corona dorata. C’è anche una pedina rossa in c1 e due blu, in f4 e f2.',
    },
    king: {
      title: 'La dama volante',
      intro: 'La dama è il pezzo più forte della scacchiera. Non avanza di una casella: vola.',
      move: {
        title: 'Quante caselle vuole',
        text: 'La dama si muove di quante caselle vuole in diagonale, in ogni direzione, finché il percorso è libero. Si ferma prima della prima pedina che incontra, sua o avversaria.',
        scene:
          'Una dama rossa in d4. Punti dorati segnano tutte le caselle libere delle sue quattro diagonali, fino al bordo della scacchiera: e5, f6, g7 e h8 in alto a destra; c3, b2 e a1 in basso a sinistra; e3, f2 e g1 in basso a destra; e c5 in alto a sinistra, dove il percorso finisce perché b6 ha una pedina rossa.',
      },
      capture: {
        title: 'Prendere da lontano',
        text: 'La dama può prendere una pedina avversaria anche se è lontana, purché le caselle in mezzo siano libere. Dopo il salto può fermarsi su qualsiasi casella libera subito dopo la pedina presa. Se da una di esse può continuare a prendere, la legge della maggioranza impone quel percorso.',
        scene:
          'Una dama rossa in b2 e una pedina blu in e5, sulla stessa diagonale, con c3 e d4 libere in mezzo. La freccia tratteggiata va da b2 a f6, sopra e5. I punti dorati in g7 e h8 mostrano le altre caselle dove la dama potrebbe fermarsi.',
      },
    },
    end: {
      title: 'Fine della partita',
      intro: 'Una partita finisce quando qualcuno vince o quando è patta.',
      win: {
        title: 'Vincere',
        text: 'Vinci quando l’avversario non ha più mosse: o perché gli hanno preso tutte le pedine, o perché quelle rimaste sono bloccate. Puoi anche abbandonare la partita.',
        scene:
          'Una pedina blu sola in c3. Davanti a lei, pedine rosse in b2 e d2 e, subito dietro, in a1 ed e1. La blu non può né muoversi né prendere: tutte le caselle sono occupate. Se tocca alle blu, vincono le rosse.',
      },
      draw: {
        title: 'Patta',
        text: 'Se passano 40 mosse di fila senza progressi, la partita finisce in patta. Due dame, una per parte, senza niente da prendere, spesso ci arrivano.',
        scene:
          'Una dama rossa in a1 e una dama blu in f6, ciascuna a un’estremità della stessa diagonale. Nessuna delle due può prendere l’altra.',
      },
    },
    practice: {
      title: 'Ora, in pratica',
      text: 'Le regole si imparano giocando. Comincia contro l’IA al livello Facile, oppure chiedi a qualcuno di giocare sullo stesso dispositivo.',
    },
  },
};
