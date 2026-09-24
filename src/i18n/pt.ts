export const pt = {
  tagline: 'Desafie sua estratégia',
  meta: {
    homeDescription:
      'Jogo de damas brasileiras para celular e Windows. Jogue contra a IA em três níveis ou em dois no mesmo aparelho. Sem anúncios, sem conta, funciona offline.',
    privacyTitle: 'Política de Privacidade',
    privacyDescription:
      'O Damas Evolution não coleta, não transmite e não compartilha dados pessoais.',
    rulesTitle: 'Regras das damas brasileiras',
    rulesDescription:
      'Como se joga damas brasileiras: movimento, captura obrigatória, lei da maioria, dama voadora e empate.',
    notFoundTitle: 'Página não encontrada',
    ogImageAlt: 'Logo do Damas Evolution: uma peça de damas com coroa dourada sobre um tabuleiro.',
  },
  a11y: {
    skipToContent: 'Ir para o conteúdo',
    mainNavigation: 'Navegação principal',
    languageNavigation: 'Trocar idioma',
    homeLink: 'Damas Evolution, página inicial',
  },
  nav: {
    howToPlay: 'Como se joga',
    download: 'Baixar',
    menu: 'Menu',
    rules: 'Regras',
    privacy: 'Privacidade',
  },
  download: {
    googlePlay: 'Google Play',
    windows: 'Windows',
    comingSoon: 'Em breve',
    title: 'Onde baixar',
    soon: 'Em breve para Android e Windows.',
    available: 'Para Android e Windows.',
  },
  theme: {
    dark: 'Tema escuro',
  },
  legal: {
    toc: 'Nesta página',
  },
  footer: {
    contact: 'Contato',
    language: 'Idioma',
  },
  notFound: {
    text: 'O endereço não existe ou mudou de lugar.',
    backHome: 'Voltar ao início',
  },
  screens: {
    home: 'Tela inicial do Damas Evolution, com os botões Jogador vs Jogador e Jogador vs IA.',
    drawer:
      'Menu lateral com Estatísticas, Configurações, o site do desenvolvedor e a versão do app.',
    difficulty: 'Tela de seleção de dificuldade: Fácil, Médio e Difícil.',
    game: 'Partida em andamento, com o tabuleiro na posição inicial e o aviso “Sua vez”.',
    gameMidgame:
      'Partida no tabuleiro 2D, com uma peça selecionada e as casas de destino destacadas.',
    game3d: 'Partida no tabuleiro 3D.',
    stats:
      'Tela de estatísticas com partidas jogadas, taxa de vitória, sequências e desempenho por dificuldade.',
    statsFull: 'Tela de estatísticas com o histórico de várias partidas.',
    settings: 'Tela de configurações com idioma, som, tabuleiro 3D e informações sobre o app.',
    resultWin: 'Tela de fim de jogo com a vitória do jogador.',
    resultLoss: 'Tela de fim de jogo com a derrota do jogador contra a IA e o total de movimentos.',
  },
  sound: {
    playCapture: 'Ouvir o som de uma captura',
  },
  hero: {
    title: 'Damas brasileiras, com as regras de verdade.',
    subtitle:
      'Captura obrigatória, lei da maioria, dama voadora. Jogue contra a IA ou com um amigo no mesmo aparelho.',
    seeHowItWorks: 'Ver como funciona',
    boardLabel: 'Um tabuleiro com uma peça vermelha prestes a capturar duas azuis em sequência.',
  },
  facts: {
    noAds: { title: 'Sem anúncios', text: 'Nada entre uma partida e outra.' },
    noAccount: { title: 'Sem conta', text: 'Abriu, jogou. Sem cadastro, sem login.' },
    offline: { title: 'Funciona offline', text: 'Não precisa de internet para jogar.' },
    languages: { title: '5 idiomas', text: 'Português, inglês, espanhol, francês e italiano.' },
  },
  howTo: {
    title: 'Como se joga',
    intro: 'O jogo em 30 segundos.',
    replay: 'Ver de novo',
    fullRules: 'Ler as regras completas',
    steps: {
      move: {
        title: 'Ande na diagonal',
        text: 'Cada peça anda uma casa por vez, para a frente, nas casas escuras.',
        scene: 'Uma peça vermelha avança uma casa na diagonal.',
      },
      capture: {
        title: 'Capturar é obrigatório',
        text: 'Se há uma peça adversária logo à frente e a casa de trás está livre, você pula por cima e ela sai do tabuleiro. Não dá para jogar outra coisa.',
        scene: 'Uma peça vermelha pula sobre uma azul e a captura.',
      },
      chain: {
        title: 'Uma captura puxa a outra',
        text: 'Depois de pular, se der para capturar de novo, você continua na mesma jogada, até para trás. Havendo dois caminhos, vale o que captura mais peças.',
        scene: 'Uma peça vermelha captura duas azuis em sequência, em zigue-zague.',
      },
      king: {
        title: 'Chegou ao fundo, virou dama',
        text: 'A peça que chega à última linha vira dama. A dama anda quantas casas quiser na diagonal e captura de longe.',
        scene: 'Uma peça vermelha chega à última linha, vira dama e anda três casas na diagonal.',
      },
    },
  },
  boardViews: {
    title: 'Tabuleiro 2D ou 3D',
    text: 'O tabuleiro começa plano. Nas Configurações, ligue “Tabuleiro 3D” e a partida passa a ser vista em perspectiva. As regras são as mesmas.',
    text2:
      'Peças vermelhas contra azuis, damas com destaque dourado e um som para cada lance: movimento, captura, promoção, vitória, derrota e empate.',
    legend: 'Visualização do tabuleiro',
    view2d: '2D',
    view3d: '3D',
  },
  ai: {
    title: 'Contra a IA',
    intro: 'Três níveis. Escolha o seu antes de começar.',
    levelLabel: 'Nível',
    levelOf: 'de 3',
    levels: {
      easy: { name: 'Fácil', text: 'Perfeito para iniciantes' },
      medium: { name: 'Médio', text: 'Desafiador e justo' },
      hard: { name: 'Difícil', text: 'Para jogadores experientes' },
    },
    howTitle: 'Como a IA pensa',
    how1: 'Ela testa jogadas, imagina as respostas e vai olhando cada vez mais lances à frente até o tempo de cada jogada acabar. Os caminhos que já não valem a pena são descartados (é uma busca minimax com poda alfa-beta).',
    how2: 'Tudo isso roda em segundo plano, então o app não trava enquanto ela pensa. Quando duas jogadas valem o mesmo, ela sorteia uma; por isso as partidas não se repetem. A IA joga no seu aparelho, sem internet.',
    twoPlayers: {
      title: 'Dois jogadores, um aparelho',
      text: 'Sem IA: cada um joga a sua vez, vermelhas contra azuis, no mesmo aparelho. Sem conta e sem internet.',
    },
  },
  stats: {
    title: 'Suas estatísticas',
    intro: 'Cada partida vira número: o app guarda o histórico e mostra como você está jogando.',
    items: {
      played: 'Partidas jogadas, vitórias, derrotas e empates',
      winRate: 'Taxa de vitória',
      averageMoves: 'Média de jogadas',
      streaks: 'Sequência atual e melhor sequência',
      byMode: 'Partidas por modo',
      byDifficulty: 'Desempenho por dificuldade',
      recent: 'Partidas recentes',
    },
    note: 'Tudo fica só no seu aparelho. Nada é enviado, e você pode limpar o histórico quando quiser.',
  },
  privacySection: {
    title: 'Nada sai do seu aparelho.',
    lead: 'O Damas Evolution não pede que você crie conta, não mostra anúncios e não coleta dados. Nem precisa de internet para jogar.',
    items: {
      noAccount: 'Sem conta nem login.',
      noAds: 'Sem anúncios.',
      noTracking: 'Sem análise de uso, sem rastreamento.',
      offline: 'Funciona offline.',
    },
    siteNote:
      'Este site também não usa cookies nem scripts de terceiros, então não há banner de consentimento.',
    link: 'Ler a política de privacidade',
  },
  languagesSection: {
    title: 'Idiomas e acessibilidade',
    intro:
      'O jogo abre no idioma do sistema e você pode trocar nas Configurações. Este site também existe nos cinco.',
    a11yTitle: 'Acessibilidade',
    screenReader:
      'Leitor de tela: cada casa do tabuleiro tem uma descrição com linha, coluna, peça e estado.',
    fontScale: 'Texto: a escala de fonte vai até 200%.',
    screens: 'Telas: de 320 dp até tablets, em retrato e paisagem.',
  },
  about: {
    title: 'Sobre o autor',
    p1: 'Sou o Leankar.dev, desenvolvedor autodidata. Tudo começou por curiosidade: eu queria entender como os aplicativos que uso todo dia são feitos. Aprendi Flutter na prática, e cada projeto publicado virou um laboratório.',
    p2: 'Em pouco mais de quatro anos com Flutter e Dart, fiz apps Android para o Google Play e um jogo web. Cada um nasceu de uma necessidade concreta: uma calculadora neumórfica, um buscador de CEP, um organizador de compras, um campo minado reinventado.',
    p3: 'Trabalho com MVVM, Riverpod para o estado, Drift (SQLite) para os dados locais e Firebase só quando a nuvem faz diferença de verdade. Gosto de código limpo e de cada coisa no seu lugar, da estrutura de pastas à interface.',
    p4: 'Quero fazer apps que as pessoas queiram usar, sem excesso e sem tela confusa. Se um app precisa de tutorial, ainda não está pronto.',
    contact: 'Achou um erro, tem uma ideia ou quer falar de damas? Escreva para mim.',
    website: 'Site do desenvolvedor',
    email: 'E-mail',
  },
  rules: {
    intro:
      'As damas brasileiras se jogam em um tabuleiro de 8×8, com 12 peças para cada lado. Este guia passa pelas regras que o Damas Evolution usa, uma de cada vez, com um desenho para cada uma.',
    diagramNote:
      'Os desenhos mostram um pedaço do tabuleiro. Para quem usa leitor de tela, cada um tem uma descrição com as casas nomeadas por letra e número: as colunas são a, b, c… da esquerda para a direita, e as linhas contam a partir do 1, embaixo.',
    board: {
      title: 'O tabuleiro e as peças',
      p1: 'O tabuleiro tem 8 por 8 casas, claras e escuras. Só as escuras são usadas. Gire o tabuleiro para que a casa escura do canto fique embaixo, à sua esquerda.',
      p2: 'Cada jogador começa com 12 peças, nas três linhas mais próximas dele. Neste guia são vermelhas contra azuis: as vermelhas começam embaixo e sobem; as azuis começam em cima e descem.',
      scene:
        'Tabuleiro de 8 por 8 na posição inicial: as doze peças azuis ocupam as três linhas de cima e as doze vermelhas, as três de baixo, sempre nas casas escuras. A casa do canto inferior esquerdo é escura.',
    },
    move: {
      title: 'Como as peças andam',
      p1: 'A peça comum anda uma casa por vez, na diagonal, para a frente, e só para uma casa escura que esteja livre.',
      p2: 'Ela não anda para trás. Voltar só é possível numa captura (veja abaixo).',
      scene:
        'Uma peça vermelha selecionada em d2. As casas c3 e e3, à frente dela na diagonal, têm um ponto dourado: são os destinos possíveis. As casas c1 e e1, atrás, têm um X: peça comum não anda para trás. Duas peças azuis ficam no alto, em b6 e d6.',
    },
    capture: {
      title: 'A captura',
      intro: 'Capturar é pular por cima de uma peça do adversário. Ela sai do tabuleiro.',
      mandatory: {
        title: 'Capturar é obrigatório',
        text: 'Se uma peça sua está colada numa peça do adversário e a casa logo depois dela está livre, você tem de pular. Não vale fazer outra jogada no lugar.',
        scene:
          'Uma peça vermelha em d2 e uma azul em e3, colada a ela na diagonal. A casa f4, logo depois da azul, está livre. Uma seta dourada tracejada vai de d2 a f4, por cima da azul. A casa c3, que seria um lance comum, tem um X: havendo captura, ela não vale. Outra peça azul fica em b6.',
      },
      backward: {
        title: 'Para trás também vale',
        text: 'A peça comum não anda para trás, mas captura para trás. Se a peça do adversário está atrás de você, na diagonal, e a casa depois dela está livre, pule.',
        scene:
          'Uma peça vermelha em e3 e uma azul em d2, atrás dela na diagonal. A casa c1 está livre. Uma seta tracejada vai de e3 a c1, para trás, por cima da azul.',
      },
      chain: {
        title: 'Uma captura puxa a outra',
        text: 'Depois de pular, olhe de novo de onde você parou. Se der para capturar outra peça, você continua na mesma jogada, em qualquer direção. O caminho pode fazer zigue-zague.',
        scene:
          'Uma peça vermelha em c1 e duas azuis, em d2 e d4. A seta tracejada faz um zigue-zague: sai de c1, pula d2, para em e3, pula d4 e termina em c5. Mais duas azuis ficam paradas no alto, em b6 e d6.',
      },
    },
    majority: {
      title: 'Lei da maioria',
      p1: 'Quando há mais de um caminho de captura, você é obrigado a escolher o que captura mais peças. Não vale pegar uma peça se dava para pegar duas.',
      p2: 'Se dois caminhos capturam o mesmo número de peças, a escolha é sua.',
      scene:
        'Uma peça vermelha em c1 e três azuis: d2, b2 e b4. À direita, uma seta apagada vai de c1 a e3, capturando só a d2; a casa e3 tem um X. À esquerda, a seta forte vai de c1 a a3 e de lá a c5, capturando b2 e b4. Este é o caminho obrigatório.',
    },
    promotion: {
      title: 'Promoção a dama',
      text: 'A peça que para na última linha do adversário vira dama e ganha uma coroa dourada. Daí em diante, ela anda e captura como dama. Para as vermelhas, é a linha de cima; para as azuis, a de baixo.',
      scene:
        'Uma peça vermelha em c5, a uma casa da última linha. Ela vai para d6, onde aparece semitransparente já como dama, com coroa dourada. Há ainda uma peça vermelha em c1 e duas azuis, em f4 e f2.',
    },
    king: {
      title: 'A dama voadora',
      intro: 'A dama é a peça mais forte do tabuleiro. Ela não anda uma casa: ela voa.',
      move: {
        title: 'Anda quantas casas quiser',
        text: 'A dama anda quantas casas quiser na diagonal, em qualquer direção, desde que o caminho esteja livre. Ela para antes da primeira peça que encontrar, sua ou do adversário.',
        scene:
          'Uma dama vermelha em d4. Pontos dourados marcam todas as casas livres das quatro diagonais, até a borda do tabuleiro: e5, f6, g7 e h8 para cima e à direita; c3, b2 e a1 para baixo e à esquerda; e3, f2 e g1 para baixo e à direita; e c5 para cima e à esquerda, onde o caminho termina porque b6 tem uma peça vermelha.',
      },
      capture: {
        title: 'Captura de longe',
        text: 'A dama captura uma peça do adversário mesmo que ela esteja longe, desde que as casas entre as duas estejam livres. Depois do pulo, ela pode parar em qualquer casa livre logo depois da peça capturada. Se de uma delas ainda der para capturar, a lei da maioria manda seguir por ali.',
        scene:
          'Uma dama vermelha em b2 e uma peça azul em e5, na mesma diagonal, com c3 e d4 livres entre as duas. A seta tracejada vai de b2 a f6, por cima de e5. Os pontos dourados em g7 e h8 mostram as outras casas onde a dama poderia parar.',
      },
    },
    end: {
      title: 'Fim de partida',
      intro: 'A partida acaba quando alguém vence ou quando ela empata.',
      win: {
        title: 'Vitória',
        text: 'Vence quem deixa o adversário sem jogada: ou porque todas as peças dele foram capturadas, ou porque as que sobraram estão bloqueadas. Também dá para abandonar a partida.',
        scene:
          'Uma peça azul sozinha em c3. À frente dela, peças vermelhas em b2 e d2 e, logo atrás dessas, em a1 e e1. A azul não consegue andar nem capturar: todas as casas estão ocupadas. Se for a vez das azuis, as vermelhas vencem.',
      },
      draw: {
        title: 'Empate',
        text: 'Se passam 40 jogadas seguidas sem progresso, a partida termina empatada. Duas damas, uma de cada lado, sem nada para capturar, costumam chegar a esse ponto.',
        scene:
          'Uma dama vermelha em a1 e uma dama azul em f6, cada uma numa ponta da mesma diagonal. Nenhuma das duas consegue capturar a outra.',
      },
    },
    practice: {
      title: 'Agora, na prática',
      text: 'Regra se aprende jogando. Comece contra a IA no nível Fácil, ou chame alguém para jogar no mesmo aparelho.',
    },
  },
};
