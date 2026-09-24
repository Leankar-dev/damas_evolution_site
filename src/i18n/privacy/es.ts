import type { PrivacyPolicy } from './types';

export const privacyEs: PrivacyPolicy = {
  title: 'Política de Privacidad — Damas Evolution',
  updatedLabel: 'Última actualización:',
  updatedDate: '23 de septiembre de 2026',
  intro: [
    'Esta Política de Privacidad describe cómo la aplicación **Damas Evolution** ("app", "nosotros"), desarrollada por **Leankar.dev** ("Desarrollador"), trata la información de los usuarios. Se aplica a la app en Android y Windows y al sitio web de Damas Evolution. Al usar la app o el sitio web, aceptas esta política.',
  ],
  sections: [
    {
      title: '1. Resumen',
      blocks: [
        {
          type: 'paragraph',
          text: 'Damas Evolution **no recopila, no transmite y no comparte datos personales**. La app funciona totalmente sin conexión y toda la información que generas permanece exclusivamente en tu dispositivo. El sitio web tampoco recopila datos personales (consulta la sección 5).',
        },
      ],
    },
    {
      title: '2. Datos que NO recopilamos',
      blocks: [
        {
          type: 'list',
          items: [
            'No exigimos registro, inicio de sesión ni cuenta de usuario.',
            'No recopilamos nombre, correo electrónico, teléfono, ubicación, contactos, fotos, archivos ni ningún otro dato personal.',
            'No recopilamos identificadores de publicidad ni identificadores del dispositivo.',
            'No utilizamos servicios de terceros de análisis (analytics), informes de fallos, publicidad o rastreo.',
            'No vendemos, alquilamos ni compartimos información con terceros.',
          ],
        },
      ],
    },
    {
      title: '3. Datos almacenados localmente en el dispositivo',
      blocks: [
        {
          type: 'paragraph',
          text: 'Para el funcionamiento del juego, la app guarda únicamente en el almacenamiento local de tu dispositivo:',
        },
        {
          type: 'list',
          items: [
            '**Historial de partidas:** modo de juego (contra la IA o multijugador local), ganador, número total de jugadas, nivel de dificultad de la IA y fecha/hora de la partida. Estos datos alimentan la pantalla de estadísticas.',
            '**Preferencias:** nivel de dificultad de la IA, sonido activado/desactivado, uso del tablero 3D e idioma.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Estos datos **nunca salen de tu dispositivo** y no son accesibles para el Desarrollador.',
        },
      ],
    },
    {
      title: '4. Permisos',
      blocks: [
        {
          type: 'paragraph',
          text: 'La app no solicita ningún permiso sensible de Android ni de Windows (como cámara, micrófono, ubicación, contactos o almacenamiento externo). La app no requiere acceso a internet para jugar.',
        },
      ],
    },
    {
      title: '5. Sitio web',
      blocks: [
        {
          type: 'paragraph',
          text: 'El sitio web de Damas Evolution es estático. No usa cookies, analytics, publicidad ni scripts de terceros, no tiene formularios ni cuentas y no te pide datos. Si eliges un tema claro u oscuro, esa preferencia se guarda solo en el almacenamiento local de tu navegador y nunca se nos envía. Si nos escribes por correo electrónico, usamos tu dirección únicamente para responder.',
        },
        {
          type: 'paragraph',
          text: 'El sitio web se sirve desde un proveedor de alojamiento de terceros, que puede registrar datos técnicos de acceso (como dirección IP, fecha y hora y página solicitada) en sus registros de servidor, por seguridad y operación. No usamos esos registros para identificar a los visitantes; consulta la política del proveedor para más información.',
        },
      ],
    },
    {
      title: '6. Enlaces externos',
      blocks: [
        {
          type: 'paragraph',
          text: 'La app y el sitio web pueden ofrecer enlaces a sitios de terceros, como el sitio web del Desarrollador ({developerUrl}) y las páginas de la app en las tiendas de aplicaciones, que se abren en el navegador de tu dispositivo. Al acceder a ellos, quedas sujeto a las políticas de privacidad de esos sitios, sobre las cuales no tenemos control.',
        },
      ],
    },
    {
      title: '7. Menores',
      blocks: [
        {
          type: 'paragraph',
          text: 'La app no recopila datos personales de ningún usuario, incluidos niños y adolescentes. Al no haber recopilación, no almacenamos ni tratamos datos de menores.',
        },
      ],
    },
    {
      title: '8. Seguridad',
      blocks: [
        {
          type: 'paragraph',
          text: 'Como los datos permanecen en el dispositivo, su seguridad depende de las protecciones del propio equipo (bloqueo de pantalla, cifrado del sistema, etc.). La app no registra contraseñas, tokens ni información sensible en los registros (logs).',
        },
      ],
    },
    {
      title: '9. Tus derechos y eliminación de datos',
      blocks: [
        {
          type: 'paragraph',
          text: 'Puedes borrar todos los datos de la app en cualquier momento limpiando el almacenamiento de la app en los ajustes de Android (Ajustes > Aplicaciones > Damas Evolution > Almacenamiento > Borrar datos) o desinstalando la aplicación. En Windows, desinstala la app en Configuración > Aplicaciones; si quedan datos de la app en tu cuenta de usuario, puedes borrarlos manualmente. Como no mantenemos datos en servidores, no hay nada que eliminar de nuestro lado.',
        },
      ],
    },
    {
      title: '10. Cambios en esta política',
      blocks: [
        {
          type: 'paragraph',
          text: 'Podemos actualizar esta política periódicamente. La fecha de la última actualización aparecerá siempre al inicio de este documento. Los cambios relevantes se publicarán en esta misma página.',
        },
      ],
    },
    {
      title: '11. Contacto',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dudas sobre esta política: **{email}** · {developerUrl}',
        },
      ],
    },
  ],
};
