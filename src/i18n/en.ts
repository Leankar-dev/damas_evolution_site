import type { Dictionary } from './types';

export const en: Dictionary = {
  tagline: 'Challenge your strategy',
  meta: {
    homeDescription:
      'Brazilian draughts for mobile and Windows. Play against the AI on three levels or with two players on one device. No ads, no account, works offline.',
    privacyTitle: 'Privacy Policy',
    privacyDescription: 'Damas Evolution does not collect, transmit or share personal data.',
    rulesTitle: 'Brazilian draughts rules',
    rulesDescription:
      'How to play Brazilian draughts: movement, mandatory capture, the majority rule, flying kings and draws.',
    notFoundTitle: 'Page not found',
    ogImageAlt: 'Damas Evolution logo: a checker piece with a golden crown over a checkerboard.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNavigation: 'Main navigation',
    languageNavigation: 'Change language',
    homeLink: 'Damas Evolution, home page',
  },
  nav: {
    howToPlay: 'How to play',
    download: 'Download',
    menu: 'Menu',
    rules: 'Rules',
    privacy: 'Privacy',
  },
  download: {
    googlePlay: 'Google Play',
    windows: 'Windows',
    comingSoon: 'Coming soon',
    title: 'Where to get it',
    soon: 'Coming soon for Android and Windows.',
    available: 'For Android and Windows.',
  },
  theme: {
    dark: 'Dark theme',
  },
  legal: {
    toc: 'On this page',
  },
  footer: {
    contact: 'Contact',
    language: 'Language',
  },
  notFound: {
    text: "This address doesn't exist or has moved.",
    backHome: 'Back to home',
  },
  screens: {
    home: 'Damas Evolution home screen with the Player vs Player and Player vs AI buttons.',
    drawer: 'Side menu with Statistics, Settings, the developer website and the app version.',
    difficulty: 'Difficulty selection screen: Easy, Medium and Hard.',
    game: 'A match in progress, with the board in its starting position and the “Your turn” notice.',
    gameMidgame:
      'A match on the 2D board with one piece selected and its possible destinations highlighted.',
    game3d: 'A match on the 3D board.',
    stats:
      'Statistics screen with matches played, win rate, streaks and performance by difficulty.',
    statsFull: 'Statistics screen with the history of many matches.',
    settings: 'Settings screen with language, sound, 3D board and information about the app.',
    resultWin: 'End-of-game screen showing the player’s win.',
    resultLoss:
      'End-of-game screen showing the player’s loss against the AI and the total number of moves.',
  },
  sound: {
    playCapture: 'Hear the sound of a capture',
  },
  hero: {
    title: 'Brazilian draughts, played by the real rules.',
    subtitle:
      'Mandatory capture, the majority rule, flying kings. Play the AI or a friend on the same device.',
    seeHowItWorks: 'See how it works',
    boardLabel: 'A board with a red piece about to capture two blue pieces in a row.',
  },
  facts: {
    noAds: { title: 'No ads', text: 'Nothing between one match and the next.' },
    noAccount: { title: 'No account', text: 'Open it and play. No sign-up, no login.' },
    offline: { title: 'Works offline', text: 'No internet needed to play.' },
    languages: { title: '5 languages', text: 'Portuguese, English, Spanish, French and Italian.' },
  },
  howTo: {
    title: 'How to play',
    intro: 'The game in 30 seconds.',
    replay: 'Watch again',
    fullRules: 'Read the full rules',
    steps: {
      move: {
        title: 'Move diagonally',
        text: 'Each piece moves one square at a time, forward, on the dark squares.',
        scene: 'A red piece moves one square diagonally forward.',
      },
      capture: {
        title: 'Capturing is mandatory',
        text: 'If an opponent’s piece is right in front of yours and the square behind it is empty, you jump it and it leaves the board. You can’t play anything else.',
        scene: 'A red piece jumps over a blue piece and captures it.',
      },
      chain: {
        title: 'One capture leads to the next',
        text: 'After a jump, if you can capture again, you keep going in the same turn, even backwards. If there are two ways to capture, you must take the one that captures more pieces.',
        scene: 'A red piece captures two blue pieces in a row, zigzagging.',
      },
      king: {
        title: 'Reach the end, get a king',
        text: 'A piece that reaches the far row becomes a king. A king moves as many squares as it wants along a diagonal and captures from a distance.',
        scene:
          'A red piece reaches the last row, becomes a king and moves three squares along a diagonal.',
      },
    },
  },
  boardViews: {
    title: '2D or 3D board',
    text: 'The board starts flat. In Settings, turn on “3D Board” and the match is shown in perspective. The rules are the same.',
    text2:
      'Red pieces against blue, kings with a golden highlight, and a sound for each event: move, capture, promotion, win, loss and draw.',
    legend: 'Board view',
    view2d: '2D',
    view3d: '3D',
  },
  ai: {
    title: 'Against the AI',
    intro: 'Three levels. Pick yours before you start.',
    levelLabel: 'Level',
    levelOf: 'of 3',
    levels: {
      easy: { name: 'Easy', text: 'Perfect for beginners' },
      medium: { name: 'Medium', text: 'Challenging and fair' },
      hard: { name: 'Hard', text: 'For experienced players' },
    },
    howTitle: 'How the AI thinks',
    how1: 'It tries moves, imagines your replies and keeps looking more moves ahead until the time for that turn runs out. Paths that are no longer worth exploring get dropped (a minimax search with alpha-beta pruning).',
    how2: 'All of this runs in the background, so the app never freezes while it thinks. When two moves are worth the same, it picks one at random, which is why matches don’t repeat. The AI plays on your device, with no internet.',
    twoPlayers: {
      title: 'Two players, one device',
      text: 'No AI: each of you plays a turn, red against blue, on the same device. No account and no internet.',
    },
  },
  stats: {
    title: 'Your statistics',
    intro:
      'Every match becomes a number: the app keeps your history and shows how you are playing.',
    items: {
      played: 'Matches played, wins, losses and draws',
      winRate: 'Win rate',
      averageMoves: 'Average moves',
      streaks: 'Current streak and best streak',
      byMode: 'Matches by mode',
      byDifficulty: 'Performance by difficulty',
      recent: 'Recent matches',
    },
    note: 'It all stays on your device. Nothing is sent anywhere, and you can clear the history whenever you want.',
  },
  privacySection: {
    title: 'Nothing leaves your device.',
    lead: 'Damas Evolution doesn’t ask you to create an account, doesn’t show ads and doesn’t collect data. It doesn’t even need the internet to play.',
    items: {
      noAccount: 'No account or login.',
      noAds: 'No ads.',
      noTracking: 'No usage analytics, no tracking.',
      offline: 'Works offline.',
    },
    siteNote:
      'This website doesn’t use cookies or third-party scripts either, so there is no consent banner.',
    link: 'Read the privacy policy',
  },
  languagesSection: {
    title: 'Languages and accessibility',
    intro:
      'The game opens in your system language and you can change it in Settings. This website exists in all five as well.',
    a11yTitle: 'Accessibility',
    screenReader:
      'Screen reader: every board square has a description with row, column, piece and state.',
    fontScale: 'Text: font scaling goes up to 200%.',
    screens: 'Screens: from 320 dp up to tablets, in portrait and landscape.',
  },
  about: {
    title: 'About the author',
    p1: 'I’m Leankar.dev, a self-taught developer. It started with curiosity: I wanted to understand how the apps I use every day are built. I learned Flutter by doing, and every published project became a lab.',
    p2: 'In a little over four years with Flutter and Dart, I’ve built Android apps for Google Play and a web game. Each one came from a concrete need: a neumorphic calculator, a Brazilian postal code (CEP) finder, a shopping organizer, a reinvented Minesweeper.',
    p3: 'I work with MVVM, Riverpod for state, Drift (SQLite) for local data and Firebase only when the cloud really makes a difference. I like clean code and everything in its place, from the folder structure to the interface.',
    p4: 'I want to make apps people want to use, without excess and without confusing screens. If an app needs a tutorial, it isn’t ready yet.',
    contact: 'Found a bug, have an idea or just want to talk draughts? Write to me.',
    website: 'Developer website',
    email: 'Email',
  },
  rules: {
    intro:
      'Brazilian draughts is played on an 8×8 board, with 12 pieces per side. This guide goes through the rules Damas Evolution uses, one at a time, with a drawing for each.',
    diagramNote:
      'The drawings show part of the board. For screen reader users, each one has a text description that names squares by letter and number: columns run a, b, c… from left to right, and rows count up from 1 at the bottom.',
    board: {
      title: 'The board and the pieces',
      p1: 'The board has 8 by 8 squares, light and dark. Only the dark ones are used. Turn the board so the dark corner square is at your bottom left.',
      p2: 'Each player starts with 12 pieces on the three rows nearest them. In this guide it is red against blue: red starts at the bottom and moves up, blue starts at the top and moves down.',
      scene:
        'An 8 by 8 board in the starting position: the twelve blue pieces fill the top three rows and the twelve red pieces fill the bottom three, all on dark squares. The bottom left corner square is dark.',
    },
    move: {
      title: 'How pieces move',
      p1: 'A regular piece moves one square at a time, diagonally forward, onto a dark square that is empty.',
      p2: 'It never moves backward. Going back is only possible in a capture (see below).',
      scene:
        'A red piece selected on d2. The squares c3 and e3, diagonally ahead of it, have a gold dot: they are the possible destinations. The squares c1 and e1, behind it, have an X: a regular piece does not move backward. Two blue pieces sit at the top, on b6 and d6.',
    },
    capture: {
      title: 'Capturing',
      intro: 'To capture is to jump over an opponent’s piece. It leaves the board.',
      mandatory: {
        title: 'Capturing is mandatory',
        text: 'If one of your pieces touches an opponent’s piece and the square right behind it is empty, you must jump. You can’t make another move instead.',
        scene:
          'A red piece on d2 and a blue one on e3, touching it diagonally. The square f4, right behind the blue piece, is empty. A dashed gold arrow goes from d2 to f4, over the blue piece. The square c3, which would be a regular move, has an X: with a capture available, it isn’t allowed. Another blue piece sits on b6.',
      },
      backward: {
        title: 'Backward works too',
        text: 'A regular piece doesn’t move backward, but it does capture backward. If an opponent’s piece is behind you on the diagonal and the square after it is empty, jump.',
        scene:
          'A red piece on e3 and a blue one on d2, behind it on the diagonal. The square c1 is empty. A dashed arrow goes from e3 to c1, backward, over the blue piece.',
      },
      chain: {
        title: 'One capture leads to the next',
        text: 'After a jump, look again from where you landed. If you can capture another piece, you keep going in the same turn, in any direction. The path can zigzag.',
        scene:
          'A red piece on c1 and two blue ones, on d2 and d4. The dashed arrow zigzags: it leaves c1, jumps d2, lands on e3, jumps d4 and ends on c5. Two more blue pieces stand still at the top, on b6 and d6.',
      },
    },
    majority: {
      title: 'The majority rule',
      p1: 'When there is more than one way to capture, you must take the one that captures the most pieces. You can’t take one piece if you could have taken two.',
      p2: 'If two paths capture the same number of pieces, the choice is yours.',
      scene:
        'A red piece on c1 and three blue ones: d2, b2 and b4. On the right, a faded arrow goes from c1 to e3, capturing only d2; the square e3 has an X. On the left, the strong arrow goes from c1 to a3 and then to c5, capturing b2 and b4. This is the path you must take.',
    },
    promotion: {
      title: 'Becoming a king',
      text: 'A piece that stops on the opponent’s last row becomes a king and gets a golden crown. From then on it moves and captures as a king. For red that is the top row; for blue, the bottom one.',
      scene:
        'A red piece on c5, one square from the last row. It moves to d6, where a see-through king with a golden crown shows the result. There is also a red piece on c1 and two blue ones, on f4 and f2.',
    },
    king: {
      title: 'The flying king',
      intro: 'The king is the strongest piece on the board. It doesn’t move one square: it flies.',
      move: {
        title: 'As many squares as it wants',
        text: 'A king moves as many squares as it wants along a diagonal, in any direction, as long as the path is clear. It stops before the first piece it meets, yours or the opponent’s.',
        scene:
          'A red king on d4. Gold dots mark every empty square on its four diagonals, out to the edge of the board: e5, f6, g7 and h8 up and to the right; c3, b2 and a1 down and to the left; e3, f2 and g1 down and to the right; and c5 up and to the left, where the path ends because b6 holds a red piece.',
      },
      capture: {
        title: 'Capturing from a distance',
        text: 'A king can capture an opponent’s piece even when it is far away, as long as the squares between them are empty. After the jump it may stop on any empty square right behind the captured piece. If it can keep capturing from one of them, the majority rule tells you to go that way.',
        scene:
          'A red king on b2 and a blue piece on e5, on the same diagonal, with c3 and d4 empty between them. The dashed arrow goes from b2 to f6, over e5. The gold dots on g7 and h8 show the other squares where the king could stop.',
      },
    },
    end: {
      title: 'End of the game',
      intro: 'A game ends when someone wins or when it is drawn.',
      win: {
        title: 'Winning',
        text: 'You win when your opponent has no move left: either all their pieces were captured, or the ones that remain are blocked. You can also abandon a game.',
        scene:
          'A lone blue piece on c3. In front of it, red pieces on b2 and d2, and right behind those, on a1 and e1. The blue piece can neither move nor capture: every square is taken. If it is blue’s turn, red wins.',
      },
      draw: {
        title: 'Drawing',
        text: 'If 40 moves in a row pass without progress, the game is drawn. Two kings, one per side, with nothing to capture, tend to end up there.',
        scene:
          'A red king on a1 and a blue king on f6, each at one end of the same diagonal. Neither can capture the other.',
      },
    },
    practice: {
      title: 'Now, in practice',
      text: 'Rules are learned by playing. Start against the AI on Easy, or ask someone to play on the same device.',
    },
  },
};
