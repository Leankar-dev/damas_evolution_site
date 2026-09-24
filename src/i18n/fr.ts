import type { Dictionary } from './types';

export const fr: Dictionary = {
  tagline: 'Défiez votre stratégie',
  meta: {
    homeDescription:
      'Jeu de dames brésiliennes pour mobile et Windows. Jouez contre l’IA à trois niveaux ou à deux sur le même appareil. Sans publicité, sans compte, fonctionne hors ligne.',
    privacyTitle: 'Politique de Confidentialité',
    privacyDescription:
      'Damas Evolution ne collecte, ne transmet et ne partage aucune donnée personnelle.',
    rulesTitle: 'Règles des dames brésiliennes',
    rulesDescription:
      'Comment jouer aux dames brésiliennes : déplacement, prise obligatoire, loi de la majorité, dame volante et match nul.',
    notFoundTitle: 'Page introuvable',
    ogImageAlt: 'Logo Damas Evolution : un pion de dames avec une couronne dorée sur un damier.',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    mainNavigation: 'Navigation principale',
    languageNavigation: 'Changer de langue',
    homeLink: 'Damas Evolution, page d’accueil',
  },
  nav: {
    howToPlay: 'Comment jouer',
    download: 'Télécharger',
    menu: 'Menu',
    rules: 'Règles',
    privacy: 'Confidentialité',
  },
  download: {
    googlePlay: 'Google Play',
    windows: 'Windows',
    comingSoon: 'Bientôt disponible',
    title: 'Où le télécharger',
    soon: 'Bientôt disponible pour Android et Windows.',
    available: 'Pour Android et Windows.',
  },
  theme: {
    dark: 'Thème sombre',
  },
  legal: {
    toc: 'Sur cette page',
  },
  footer: {
    contact: 'Contact',
    language: 'Langue',
  },
  notFound: {
    text: 'Cette adresse n’existe pas ou a changé de place.',
    backHome: 'Retour à l’accueil',
  },
  screens: {
    home: 'Écran d’accueil de Damas Evolution, avec les boutons Joueur contre Joueur et Joueur contre IA.',
    drawer:
      'Menu latéral avec Statistiques, Paramètres, le site du développeur et la version de l’app.',
    difficulty: 'Écran de sélection de la difficulté : Facile, Moyen et Difficile.',
    game: 'Partie en cours, avec le plateau en position initiale et l’indication « À vous de jouer ».',
    gameMidgame:
      'Partie sur le plateau 2D avec un pion sélectionné et ses destinations possibles en surbrillance.',
    game3d: 'Partie sur le plateau 3D.',
    stats:
      'Écran de statistiques avec les parties jouées, le taux de victoire, les séries et la performance par difficulté.',
    statsFull: 'Écran de statistiques avec l’historique de nombreuses parties.',
    settings:
      'Écran de paramètres avec la langue, le son, le plateau 3D et des informations sur l’app.',
    resultWin: 'Écran de fin de partie avec la victoire du joueur.',
    resultLoss:
      'Écran de fin de partie avec la défaite du joueur contre l’IA et le nombre total de coups.',
  },
  sound: {
    playCapture: 'Écouter le son d’une prise',
  },
  hero: {
    title: 'Dames brésiliennes, avec les vraies règles.',
    subtitle:
      'Prise obligatoire, loi de la majorité, dame volante. Jouez contre l’IA ou avec un ami sur le même appareil.',
    seeHowItWorks: 'Voir comment ça marche',
    boardLabel:
      'Un plateau avec un pion rouge sur le point de prendre deux pions bleus à la suite.',
  },
  facts: {
    noAds: { title: 'Sans publicité', text: 'Rien entre deux parties.' },
    noAccount: {
      title: 'Sans compte',
      text: 'Vous ouvrez, vous jouez. Ni inscription ni connexion.',
    },
    offline: { title: 'Fonctionne hors ligne', text: 'Pas besoin d’Internet pour jouer.' },
    languages: { title: '5 langues', text: 'Portugais, anglais, espagnol, français et italien.' },
  },
  howTo: {
    title: 'Comment jouer',
    intro: 'Le jeu en 30 secondes.',
    replay: 'Revoir',
    fullRules: 'Lire les règles complètes',
    steps: {
      move: {
        title: 'Avancez en diagonale',
        text: 'Chaque pion avance d’une case à la fois, vers l’avant, sur les cases sombres.',
        scene: 'Un pion rouge avance d’une case en diagonale.',
      },
      capture: {
        title: 'La prise est obligatoire',
        text: 'Si un pion adverse est juste devant le vôtre et que la case derrière est libre, vous sautez par-dessus et il quitte le plateau. Vous ne pouvez pas jouer autre chose.',
        scene: 'Un pion rouge saute par-dessus un pion bleu et le prend.',
      },
      chain: {
        title: 'Une prise en amène une autre',
        text: 'Après un saut, si vous pouvez prendre encore, vous continuez dans le même coup, même en arrière. S’il y a deux chemins, celui qui prend le plus de pions est obligatoire.',
        scene: 'Un pion rouge prend deux pions bleus à la suite, en zigzag.',
      },
      king: {
        title: 'Arrivé au fond, dame',
        text: 'Le pion qui atteint la dernière rangée devient dame. La dame avance d’autant de cases qu’elle veut en diagonale et prend de loin.',
        scene:
          'Un pion rouge atteint la dernière rangée, devient dame et avance de trois cases en diagonale.',
      },
    },
  },
  boardViews: {
    title: 'Plateau 2D ou 3D',
    text: 'Le plateau est plat au départ. Dans Paramètres, activez « Plateau 3D » et la partie s’affiche en perspective. Les règles sont les mêmes.',
    text2:
      'Pions rouges contre bleus, dames avec un reflet doré et un son pour chaque événement : déplacement, prise, promotion, victoire, défaite et match nul.',
    legend: 'Affichage du plateau',
    view2d: '2D',
    view3d: '3D',
  },
  ai: {
    title: 'Contre l’IA',
    intro: 'Trois niveaux. Choisissez le vôtre avant de commencer.',
    levelLabel: 'Niveau',
    levelOf: 'sur 3',
    levels: {
      easy: { name: 'Facile', text: 'Parfait pour les débutants' },
      medium: { name: 'Moyen', text: 'Stimulant et équilibré' },
      hard: { name: 'Difficile', text: 'Pour les joueurs expérimentés' },
    },
    howTitle: 'Comment l’IA réfléchit',
    how1: 'Elle essaie des coups, imagine vos réponses et regarde de plus en plus de coups à l’avance jusqu’à la fin du temps imparti. Les chemins qui ne valent plus la peine sont écartés (c’est une recherche minimax avec élagage alpha-bêta).',
    how2: 'Tout cela tourne en arrière-plan, donc l’app ne se fige jamais pendant qu’elle réfléchit. Quand deux coups se valent, elle en tire un au hasard, c’est pourquoi les parties ne se répètent pas. L’IA joue sur votre appareil, sans Internet.',
    twoPlayers: {
      title: 'Deux joueurs, un seul appareil',
      text: 'Sans IA : chacun joue à son tour, rouges contre bleus, sur le même appareil. Sans compte et sans Internet.',
    },
  },
  stats: {
    title: 'Vos statistiques',
    intro:
      'Chaque partie devient un chiffre : l’app garde l’historique et montre comment vous jouez.',
    items: {
      played: 'Parties jouées, victoires, défaites et égalités',
      winRate: 'Taux de victoire',
      averageMoves: 'Moyenne de coups',
      streaks: 'Série actuelle et meilleure série',
      byMode: 'Parties par mode',
      byDifficulty: 'Performances par difficulté',
      recent: 'Parties récentes',
    },
    note: 'Tout reste sur votre appareil. Rien n’est envoyé et vous pouvez effacer l’historique quand vous voulez.',
  },
  privacySection: {
    title: 'Rien ne quitte votre appareil.',
    lead: 'Damas Evolution ne vous demande pas de créer un compte, n’affiche pas de publicité et ne collecte aucune donnée. Il n’a même pas besoin d’Internet pour jouer.',
    items: {
      noAccount: 'Ni compte ni connexion.',
      noAds: 'Pas de publicité.',
      noTracking: 'Pas d’analyse d’usage, pas de suivi.',
      offline: 'Fonctionne hors ligne.',
    },
    siteNote:
      'Ce site n’utilise ni cookies ni scripts tiers non plus, donc pas de bandeau de consentement.',
    link: 'Lire la politique de confidentialité',
  },
  languagesSection: {
    title: 'Langues et accessibilité',
    intro:
      'Le jeu s’ouvre dans la langue du système et vous pouvez la changer dans Paramètres. Ce site existe aussi dans les cinq langues.',
    a11yTitle: 'Accessibilité',
    screenReader:
      'Lecteur d’écran : chaque case du plateau a une description avec ligne, colonne, pion et état.',
    fontScale: 'Texte : la taille de police va jusqu’à 200 %.',
    screens: 'Écrans : de 320 dp jusqu’aux tablettes, en portrait et en paysage.',
  },
  about: {
    title: 'À propos de l’auteur',
    p1: 'Je suis Leankar.dev, développeur autodidacte. Tout a commencé par la curiosité : je voulais comprendre comment sont faites les applications que j’utilise tous les jours. J’ai appris Flutter sur le tas, et chaque projet publié est devenu un laboratoire.',
    p2: 'En un peu plus de quatre ans avec Flutter et Dart, j’ai réalisé des applications Android pour Google Play et un jeu web. Chacune est née d’un besoin concret : une calculatrice néomorphique, un outil de recherche de codes postaux brésiliens (CEP), un organisateur de courses, un démineur réinventé.',
    p3: 'Je travaille avec MVVM, Riverpod pour l’état, Drift (SQLite) pour les données locales et Firebase seulement quand le cloud apporte une vraie différence. J’aime le code propre et chaque chose à sa place, de l’arborescence des dossiers à l’interface.',
    p4: 'Je veux faire des applications que les gens aient envie d’utiliser, sans excès et sans écrans confus. Si une application a besoin d’un tutoriel, elle n’est pas encore prête.',
    contact:
      'Vous avez trouvé un bug, vous avez une idée ou vous voulez parler de dames ? Écrivez-moi.',
    website: 'Site du développeur',
    email: 'E-mail',
  },
  rules: {
    intro:
      'Les dames brésiliennes se jouent sur un plateau de 8×8, avec 12 pions par camp. Ce guide passe en revue, une par une, les règles qu’utilise Damas Evolution, avec un dessin pour chacune.',
    diagramNote:
      'Les dessins montrent une partie du plateau. Pour les personnes qui utilisent un lecteur d’écran, chacun a une description qui nomme les cases par une lettre et un chiffre : les colonnes vont de a, b, c… de gauche à droite, et les rangées se comptent à partir de 1, en bas.',
    board: {
      title: 'Le plateau et les pions',
      p1: 'Le plateau compte 8 par 8 cases, claires et sombres. Seules les sombres servent. Tournez-le pour que la case sombre du coin soit en bas à votre gauche.',
      p2: 'Chaque joueur commence avec 12 pions sur les trois rangées les plus proches de lui. Dans ce guide, ce sont les rouges contre les bleus : les rouges partent du bas et montent, les bleus partent du haut et descendent.',
      scene:
        'Un plateau de 8 par 8 en position de départ : les douze pions bleus occupent les trois rangées du haut et les douze rouges, les trois du bas, toujours sur des cases sombres. La case du coin en bas à gauche est sombre.',
    },
    move: {
      title: 'Comment les pions avancent',
      p1: 'Le pion ordinaire avance d’une case à la fois, en diagonale et vers l’avant, sur une case sombre libre.',
      p2: 'Il ne recule jamais. Reculer n’est possible que pour une prise (voir plus bas).',
      scene:
        'Un pion rouge sélectionné en d2. Les cases c3 et e3, devant lui en diagonale, portent un point doré : ce sont les destinations possibles. Les cases c1 et e1, derrière, portent une croix : le pion ordinaire ne recule pas. Deux pions bleus sont en haut, en b6 et d6.',
    },
    capture: {
      title: 'La prise',
      intro: 'Prendre, c’est sauter par-dessus un pion adverse. Il quitte le plateau.',
      mandatory: {
        title: 'La prise est obligatoire',
        text: 'Si l’un de vos pions touche un pion adverse et que la case juste derrière est libre, vous devez sauter. Vous ne pouvez pas jouer autre chose à la place.',
        scene:
          'Un pion rouge en d2 et un bleu en e3, contre lui en diagonale. La case f4, juste derrière le bleu, est libre. Une flèche dorée en pointillés va de d2 à f4, par-dessus le bleu. La case c3, qui serait un coup ordinaire, porte une croix : quand une prise est possible, elle n’est pas permise. Un autre pion bleu est en b6.',
      },
      backward: {
        title: 'En arrière aussi',
        text: 'Le pion ordinaire ne recule pas, mais il prend en arrière. Si un pion adverse est derrière vous, en diagonale, et que la case suivante est libre, sautez.',
        scene:
          'Un pion rouge en e3 et un bleu en d2, derrière lui en diagonale. La case c1 est libre. Une flèche en pointillés va de e3 à c1, en arrière, par-dessus le bleu.',
      },
      chain: {
        title: 'Une prise en amène une autre',
        text: 'Après un saut, regardez de nouveau depuis l’endroit où vous êtes arrivé. Si vous pouvez prendre un autre pion, vous continuez dans le même coup, dans toutes les directions. Le chemin peut faire un zigzag.',
        scene:
          'Un pion rouge en c1 et deux bleus, en d2 et d4. La flèche en pointillés fait un zigzag : elle part de c1, saute d2, arrive en e3, saute d4 et finit en c5. Deux autres pions bleus restent immobiles en haut, en b6 et d6.',
      },
    },
    majority: {
      title: 'La loi de la majorité',
      p1: 'Quand il y a plusieurs chemins de prise, vous devez choisir celui qui prend le plus de pions. On ne peut pas en prendre un seul si l’on pouvait en prendre deux.',
      p2: 'Si deux chemins prennent le même nombre de pions, le choix vous appartient.',
      scene:
        'Un pion rouge en c1 et trois bleus : d2, b2 et b4. À droite, une flèche atténuée va de c1 à e3, en ne prenant que d2 ; la case e3 porte une croix. À gauche, la flèche marquée va de c1 à a3, puis à c5, en prenant b2 et b4. C’est le chemin obligatoire.',
    },
    promotion: {
      title: 'Devenir dame',
      text: 'Le pion qui s’arrête sur la dernière rangée adverse devient dame et reçoit une couronne dorée. Ensuite, il avance et prend comme une dame. Pour les rouges, c’est la rangée du haut ; pour les bleus, celle du bas.',
      scene:
        'Un pion rouge en c5, à une case de la dernière rangée. Il va en d6, où apparaît, en transparence, une dame à couronne dorée. Il y a aussi un pion rouge en c1 et deux bleus, en f4 et f2.',
    },
    king: {
      title: 'La dame volante',
      intro:
        'La dame est la pièce la plus forte du plateau. Elle n’avance pas d’une case : elle vole.',
      move: {
        title: 'Autant de cases qu’elle veut',
        text: 'La dame avance d’autant de cases qu’elle veut en diagonale, dans toutes les directions, tant que le chemin est libre. Elle s’arrête avant le premier pion rencontré, le sien ou celui de l’adversaire.',
        scene:
          'Une dame rouge en d4. Des points dorés marquent toutes les cases libres de ses quatre diagonales, jusqu’au bord du plateau : e5, f6, g7 et h8 vers le haut à droite ; c3, b2 et a1 vers le bas à gauche ; e3, f2 et g1 vers le bas à droite ; et c5 vers le haut à gauche, où le chemin s’arrête car b6 porte un pion rouge.',
      },
      capture: {
        title: 'Prendre de loin',
        text: 'La dame peut prendre un pion adverse même éloigné, tant que les cases entre les deux sont libres. Après le saut, elle peut s’arrêter sur n’importe quelle case libre juste derrière le pion pris. Si elle peut continuer à prendre depuis l’une d’elles, la loi de la majorité impose ce chemin.',
        scene:
          'Une dame rouge en b2 et un pion bleu en e5, sur la même diagonale, avec c3 et d4 libres entre les deux. La flèche en pointillés va de b2 à f6, par-dessus e5. Les points dorés en g7 et h8 montrent les autres cases où la dame pourrait s’arrêter.',
      },
    },
    end: {
      title: 'Fin de partie',
      intro: 'Une partie se termine quand quelqu’un gagne ou quand elle est nulle.',
      win: {
        title: 'Gagner',
        text: 'Vous gagnez quand l’adversaire n’a plus de coup : soit tous ses pions ont été pris, soit ceux qui restent sont bloqués. Vous pouvez aussi abandonner la partie.',
        scene:
          'Un pion bleu seul en c3. Devant lui, des pions rouges en b2 et d2 et, juste derrière eux, en a1 et e1. Le bleu ne peut ni avancer ni prendre : toutes les cases sont occupées. Si c’est aux bleus de jouer, les rouges gagnent.',
      },
      draw: {
        title: 'Partie nulle',
        text: 'Si 40 coups de suite passent sans progrès, la partie est nulle. Deux dames, une de chaque camp, sans rien à prendre, y arrivent souvent.',
        scene:
          'Une dame rouge en a1 et une dame bleue en f6, chacune à un bout de la même diagonale. Aucune des deux ne peut prendre l’autre.',
      },
    },
    practice: {
      title: 'Maintenant, en pratique',
      text: 'Les règles s’apprennent en jouant. Commencez contre l’IA au niveau Facile, ou proposez à quelqu’un de jouer sur le même appareil.',
    },
  },
};
