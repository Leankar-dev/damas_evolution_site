import type { PrivacyPolicy } from './types';

export const privacyPt: PrivacyPolicy = {
  title: 'Política de Privacidade — Damas Evolution',
  updatedLabel: 'Última atualização:',
  updatedDate: '23 de setembro de 2026',
  intro: [
    'Esta Política de Privacidade descreve como o aplicativo **Damas Evolution** ("app", "nós"), desenvolvido por **Leankar.dev** ("Desenvolvedor"), trata as informações dos usuários. Ela vale para o app nas versões para Android e Windows e para o site do Damas Evolution. Ao usar o app ou o site, você concorda com esta política.',
  ],
  sections: [
    {
      title: '1. Resumo',
      blocks: [
        {
          type: 'paragraph',
          text: 'O Damas Evolution **não coleta, não transmite e não compartilha dados pessoais**. O app funciona totalmente offline e todas as informações geradas por você permanecem exclusivamente no seu dispositivo. O site também não coleta dados pessoais (veja a seção 5).',
        },
      ],
    },
    {
      title: '2. Dados que NÃO coletamos',
      blocks: [
        {
          type: 'list',
          items: [
            'Não exigimos cadastro, login ou conta de usuário.',
            'Não coletamos nome, e-mail, telefone, localização, contatos, fotos, arquivos ou qualquer outro dado pessoal.',
            'Não coletamos identificadores de publicidade nem identificadores do dispositivo.',
            'Não utilizamos serviços de análise (analytics), relatórios de falhas, publicidade ou rastreamento de terceiros.',
            'Não vendemos, alugamos nem compartilhamos informações com terceiros.',
          ],
        },
      ],
    },
    {
      title: '3. Dados armazenados localmente no dispositivo',
      blocks: [
        {
          type: 'paragraph',
          text: 'Para o funcionamento do jogo, o app guarda apenas no armazenamento local do seu aparelho:',
        },
        {
          type: 'list',
          items: [
            '**Histórico de partidas:** modo de jogo (contra a IA ou multijogador local), vencedor, número total de jogadas, nível de dificuldade da IA e data/hora da partida. Esses dados alimentam a tela de estatísticas.',
            '**Preferências:** nível de dificuldade da IA, som ligado/desligado, uso do tabuleiro 3D e idioma.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Esses dados **nunca saem do seu dispositivo** e não são acessíveis ao Desenvolvedor.',
        },
      ],
    },
    {
      title: '4. Permissões',
      blocks: [
        {
          type: 'paragraph',
          text: 'O app não solicita nenhuma permissão sensível do Android ou do Windows (como câmera, microfone, localização, contatos ou armazenamento externo). O app não requer acesso à internet para jogar.',
        },
      ],
    },
    {
      title: '5. Site',
      blocks: [
        {
          type: 'paragraph',
          text: 'O site do Damas Evolution é estático. Não usa cookies, analytics, publicidade nem scripts de terceiros, não tem formulários nem contas e não pede seus dados. Se você escolher um tema claro ou escuro, essa preferência fica salva apenas no armazenamento local do seu navegador e nunca é enviada a nós. Se você nos escrever por e-mail, usamos seu endereço apenas para responder.',
        },
        {
          type: 'paragraph',
          text: 'O site é entregue por um provedor de hospedagem de terceiros, que pode registrar dados técnicos de acesso (como endereço IP, data e hora e página solicitada) em seus logs de servidor, para segurança e operação. Não usamos esses registros para identificar visitantes; consulte a política do provedor para saber mais.',
        },
      ],
    },
    {
      title: '6. Links externos',
      blocks: [
        {
          type: 'paragraph',
          text: 'O app e o site podem oferecer links para sites de terceiros, como o site do Desenvolvedor ({developerUrl}) e as páginas do app nas lojas de aplicativos, abertos no navegador do seu dispositivo. Ao acessá-los, você passa a estar sujeito às políticas de privacidade desses sites, sobre as quais não temos controle.',
        },
      ],
    },
    {
      title: '7. Crianças',
      blocks: [
        {
          type: 'paragraph',
          text: 'O app não coleta dados pessoais de nenhum usuário, inclusive de crianças e adolescentes. Por não haver coleta, não há dados de menores armazenados ou tratados por nós.',
        },
      ],
    },
    {
      title: '8. Segurança',
      blocks: [
        {
          type: 'paragraph',
          text: 'Como os dados permanecem no dispositivo, a segurança deles depende das proteções do próprio aparelho (bloqueio de tela, criptografia do sistema, etc.). O app não registra senhas, tokens ou informações sensíveis em logs.',
        },
      ],
    },
    {
      title: '9. Seus direitos e exclusão de dados',
      blocks: [
        {
          type: 'paragraph',
          text: 'Você pode apagar todos os dados do app a qualquer momento, limpando o armazenamento do app nas configurações do Android (Configurações > Apps > Damas Evolution > Armazenamento > Limpar dados) ou desinstalando o aplicativo. No Windows, desinstale o app em Configurações > Aplicativos; se restarem dados do app na sua conta de usuário, você pode apagá-los manualmente. Como não mantemos dados em servidores, não há nada a ser excluído do nosso lado.',
        },
      ],
    },
    {
      title: '10. Alterações nesta política',
      blocks: [
        {
          type: 'paragraph',
          text: 'Podemos atualizar esta política periodicamente. A data da última atualização estará sempre no topo deste documento. Mudanças relevantes serão publicadas nesta mesma página.',
        },
      ],
    },
    {
      title: '11. Contato',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dúvidas sobre esta política: **{email}** · {developerUrl}',
        },
      ],
    },
  ],
};
