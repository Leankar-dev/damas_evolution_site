import type { PrivacyPolicy } from './types';

export const privacyFr: PrivacyPolicy = {
  title: 'Politique de Confidentialité — Damas Evolution',
  updatedLabel: 'Dernière mise à jour :',
  updatedDate: '23 septembre 2026',
  intro: [
    "Cette Politique de Confidentialité décrit comment l'application **Damas Evolution** (« app », « nous »), développée par **Leankar.dev** (« Développeur »), traite les informations des utilisateurs. Elle s'applique à l'app sur Android et Windows et au site web de Damas Evolution. En utilisant l'app ou le site web, vous acceptez cette politique.",
  ],
  sections: [
    {
      title: '1. Résumé',
      blocks: [
        {
          type: 'paragraph',
          text: "Damas Evolution **ne collecte, ne transmet et ne partage aucune donnée personnelle**. L'app fonctionne entièrement hors ligne et toutes les informations que vous générez restent exclusivement sur votre appareil. Le site web ne collecte pas non plus de données personnelles (voir la section 5).",
        },
      ],
    },
    {
      title: '2. Données que nous NE collectons PAS',
      blocks: [
        {
          type: 'list',
          items: [
            "Nous n'exigeons ni inscription, ni connexion, ni compte utilisateur.",
            'Nous ne collectons ni nom, ni e-mail, ni numéro de téléphone, ni localisation, ni contacts, ni photos, ni fichiers, ni aucune autre donnée personnelle.',
            "Nous ne collectons ni identifiant publicitaire ni identifiant de l'appareil.",
            "Nous n'utilisons aucun service tiers d'analyse (analytics), de rapport de plantage, de publicité ou de suivi.",
            "Nous ne vendons, ne louons ni ne partageons d'informations avec des tiers.",
          ],
        },
      ],
    },
    {
      title: "3. Données stockées localement sur l'appareil",
      blocks: [
        {
          type: 'paragraph',
          text: "Pour le fonctionnement du jeu, l'app conserve uniquement dans le stockage local de votre appareil :",
        },
        {
          type: 'list',
          items: [
            "**Historique des parties :** mode de jeu (contre l'IA ou multijoueur local), gagnant, nombre total de coups, niveau de difficulté de l'IA et date/heure de la partie. Ces données alimentent l'écran des statistiques.",
            "**Préférences :** niveau de difficulté de l'IA, son activé/désactivé, utilisation du plateau 3D et langue.",
          ],
        },
        {
          type: 'paragraph',
          text: 'Ces données **ne quittent jamais votre appareil** et ne sont pas accessibles au Développeur.',
        },
      ],
    },
    {
      title: '4. Autorisations',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app ne demande aucune autorisation sensible d'Android ni de Windows (comme l'appareil photo, le microphone, la localisation, les contacts ou le stockage externe). L'app ne nécessite pas d'accès à Internet pour jouer.",
        },
      ],
    },
    {
      title: '5. Site web',
      blocks: [
        {
          type: 'paragraph',
          text: "Le site web de Damas Evolution est statique. Il n'utilise ni cookies, ni analytics, ni publicité, ni scripts tiers, n'a ni formulaires ni comptes et ne vous demande aucune donnée. Si vous choisissez un thème clair ou sombre, cette préférence est enregistrée uniquement dans le stockage local de votre navigateur et ne nous est jamais envoyée. Si vous nous écrivez par e-mail, nous utilisons votre adresse uniquement pour vous répondre.",
        },
        {
          type: 'paragraph',
          text: "Le site web est servi par un hébergeur tiers, qui peut enregistrer des données techniques d'accès (comme l'adresse IP, la date et l'heure et la page demandée) dans ses journaux de serveur, pour la sécurité et le fonctionnement. Nous n'utilisons pas ces journaux pour identifier les visiteurs ; consultez la politique de l'hébergeur pour en savoir plus.",
        },
      ],
    },
    {
      title: '6. Liens externes',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app et le site web peuvent proposer des liens vers des sites tiers, comme le site web du Développeur ({developerUrl}) et les pages de l'app dans les boutiques d'applications, ouverts dans le navigateur de votre appareil. En y accédant, vous êtes soumis aux politiques de confidentialité de ces sites, sur lesquels nous n'avons aucun contrôle.",
        },
      ],
    },
    {
      title: '7. Enfants',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app ne collecte aucune donnée personnelle d'aucun utilisateur, y compris des enfants et des adolescents. En l'absence de collecte, nous ne stockons ni ne traitons de données de mineurs.",
        },
      ],
    },
    {
      title: '8. Sécurité',
      blocks: [
        {
          type: 'paragraph',
          text: "Les données restant sur l'appareil, leur sécurité dépend des protections de l'appareil lui-même (verrouillage de l'écran, chiffrement du système, etc.). L'app n'enregistre pas de mots de passe, de jetons ou d'informations sensibles dans les journaux.",
        },
      ],
    },
    {
      title: '9. Vos droits et suppression des données',
      blocks: [
        {
          type: 'paragraph',
          text: "Vous pouvez supprimer toutes les données de l'app à tout moment en effaçant le stockage de l'app dans les paramètres d'Android (Paramètres > Applications > Damas Evolution > Stockage > Effacer les données) ou en désinstallant l'application. Sous Windows, désinstallez l'app dans Paramètres > Applications ; s'il reste des données de l'app dans votre compte utilisateur, vous pouvez les supprimer manuellement. Comme nous ne conservons aucune donnée sur des serveurs, il n'y a rien à supprimer de notre côté.",
        },
      ],
    },
    {
      title: '10. Modifications de cette politique',
      blocks: [
        {
          type: 'paragraph',
          text: 'Nous pouvons mettre à jour cette politique périodiquement. La date de la dernière mise à jour figurera toujours en haut de ce document. Les changements importants seront publiés sur cette même page.',
        },
      ],
    },
    {
      title: '11. Contact',
      blocks: [
        {
          type: 'paragraph',
          text: 'Questions sur cette politique : **{email}** · {developerUrl}',
        },
      ],
    },
  ],
};
