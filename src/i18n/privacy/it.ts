import type { PrivacyPolicy } from './types';

export const privacyIt: PrivacyPolicy = {
  title: 'Informativa sulla Privacy — Damas Evolution',
  updatedLabel: 'Ultimo aggiornamento:',
  updatedDate: '23 settembre 2026',
  intro: [
    'Questa Informativa sulla Privacy descrive come l\'app **Damas Evolution** ("app", "noi"), sviluppata da **Leankar.dev** ("Sviluppatore"), tratta le informazioni degli utenti. Si applica all\'app su Android e Windows e al sito web di Damas Evolution. Utilizzando l\'app o il sito web, accetti questa informativa.',
  ],
  sections: [
    {
      title: '1. Riepilogo',
      blocks: [
        {
          type: 'paragraph',
          text: "Damas Evolution **non raccoglie, non trasmette e non condivide dati personali**. L'app funziona interamente offline e tutte le informazioni generate da te restano esclusivamente sul tuo dispositivo. Nemmeno il sito web raccoglie dati personali (vedi la sezione 5).",
        },
      ],
    },
    {
      title: '2. Dati che NON raccogliamo',
      blocks: [
        {
          type: 'list',
          items: [
            'Non richiediamo registrazione, accesso o account utente.',
            'Non raccogliamo nome, e-mail, telefono, posizione, contatti, foto, file o qualsiasi altro dato personale.',
            'Non raccogliamo identificatori pubblicitari né identificatori del dispositivo.',
            'Non utilizziamo servizi di terze parti di analisi (analytics), segnalazione di arresti anomali, pubblicità o tracciamento.',
            'Non vendiamo, affittiamo né condividiamo informazioni con terzi.',
          ],
        },
      ],
    },
    {
      title: '3. Dati memorizzati localmente sul dispositivo',
      blocks: [
        {
          type: 'paragraph',
          text: "Per il funzionamento del gioco, l'app memorizza solo nell'archiviazione locale del tuo dispositivo:",
        },
        {
          type: 'list',
          items: [
            "**Cronologia delle partite:** modalità di gioco (contro l'IA o multiplayer locale), vincitore, numero totale di mosse, livello di difficoltà dell'IA e data/ora della partita. Questi dati alimentano la schermata delle statistiche.",
            "**Preferenze:** livello di difficoltà dell'IA, audio attivo/disattivo, utilizzo della scacchiera 3D e lingua.",
          ],
        },
        {
          type: 'paragraph',
          text: 'Questi dati **non lasciano mai il tuo dispositivo** e non sono accessibili allo Sviluppatore.',
        },
      ],
    },
    {
      title: '4. Autorizzazioni',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app non richiede alcuna autorizzazione sensibile di Android o di Windows (come fotocamera, microfono, posizione, contatti o archiviazione esterna). L'app non richiede l'accesso a internet per giocare.",
        },
      ],
    },
    {
      title: '5. Sito web',
      blocks: [
        {
          type: 'paragraph',
          text: "Il sito web di Damas Evolution è statico. Non usa cookie, analytics, pubblicità né script di terze parti, non ha moduli né account e non ti chiede dati. Se scegli un tema chiaro o scuro, questa preferenza viene salvata solo nell'archiviazione locale del tuo browser e non ci viene mai inviata. Se ci scrivi per e-mail, usiamo il tuo indirizzo solo per risponderti.",
        },
        {
          type: 'paragraph',
          text: "Il sito web è servito da un provider di hosting di terze parti, che può registrare dati tecnici di accesso (come indirizzo IP, data e ora e pagina richiesta) nei propri log del server, per sicurezza e funzionamento. Non usiamo questi registri per identificare i visitatori; consulta l'informativa del provider per maggiori dettagli.",
        },
      ],
    },
    {
      title: '6. Link esterni',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app e il sito web possono offrire link a siti di terzi, come il sito web dello Sviluppatore ({developerUrl}) e le pagine dell'app negli store di applicazioni, che si aprono nel browser del tuo dispositivo. Accedendovi, sei soggetto alle informative sulla privacy di quei siti, sui quali non abbiamo alcun controllo.",
        },
      ],
    },
    {
      title: '7. Minori',
      blocks: [
        {
          type: 'paragraph',
          text: "L'app non raccoglie dati personali di alcun utente, inclusi bambini e adolescenti. Non essendoci raccolta, non conserviamo né trattiamo dati di minori.",
        },
      ],
    },
    {
      title: '8. Sicurezza',
      blocks: [
        {
          type: 'paragraph',
          text: "Poiché i dati restano sul dispositivo, la loro sicurezza dipende dalle protezioni del dispositivo stesso (blocco schermo, crittografia di sistema, ecc.). L'app non scrive password, token o informazioni sensibili nei log.",
        },
      ],
    },
    {
      title: '9. I tuoi diritti e la cancellazione dei dati',
      blocks: [
        {
          type: 'paragraph',
          text: "Puoi eliminare tutti i dati dell'app in qualsiasi momento cancellando l'archiviazione dell'app nelle impostazioni di Android (Impostazioni > App > Damas Evolution > Archiviazione > Cancella dati) oppure disinstallando l'app. Su Windows, disinstalla l'app da Impostazioni > App; se restano dati dell'app nel tuo account utente, puoi eliminarli manualmente. Poiché non conserviamo dati sui server, non c'è nulla da eliminare da parte nostra.",
        },
      ],
    },
    {
      title: '10. Modifiche a questa informativa',
      blocks: [
        {
          type: 'paragraph',
          text: "Potremmo aggiornare questa informativa periodicamente. La data dell'ultimo aggiornamento comparirà sempre all'inizio di questo documento. Le modifiche rilevanti saranno pubblicate su questa stessa pagina.",
        },
      ],
    },
    {
      title: '11. Contatti',
      blocks: [
        {
          type: 'paragraph',
          text: 'Domande su questa informativa: **{email}** · {developerUrl}',
        },
      ],
    },
  ],
};
