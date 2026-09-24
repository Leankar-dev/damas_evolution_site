# Damas Evolution — site

Site de divulgação do **Damas Evolution**, um jogo de damas brasileiras para celular e Windows, feito em Flutter por [Leankar.dev](https://leankar.dev). Este repositório tem só o site. O app vive em outro projeto.

O site é estático, sem cookies, sem analytics e sem scripts de terceiros, e por isso não tem banner de consentimento. Está em cinco idiomas: português (pt-BR), inglês, espanhol, francês e italiano.

Páginas (em cada idioma): início, regras (`/rules/`, com diagramas) e política de privacidade (`/privacy/`). Tema claro e escuro, com botão no cabeçalho.

## Stack

- [Astro](https://astro.build) (saída 100% estática) com TypeScript estrito
- CSS puro com custom properties, sem framework de UI
- Fontes self-hosted: Fraunces (títulos) e Figtree (texto)
- ESLint e Prettier

## Como rodar

Requer Node LTS (22.12 ou mais novo) e `npm`.

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321.

| Comando                | O que faz                                                         |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento                                       |
| `npm run build`        | Gera o site estático em `dist/`                                   |
| `npm run preview`      | Serve o `dist/` localmente                                        |
| `npm run check`        | Verifica tipos (`astro check`)                                    |
| `npm run lint`         | ESLint e checagem de formatação do Prettier                       |
| `npm run format`       | Formata o projeto com o Prettier                                  |
| `npm run check:images` | Falha se alguma imagem do `dist/` passar de 200 KB (após o build) |

Antes de publicar, rode `npm run build`, `npm run check` e `npm run lint`. Os três têm de terminar sem erros nem avisos.

## Variáveis de ambiente

Copie `.env.example` e ajuste, ou defina no ambiente de build.

| Variável    | Uso                                                                | Padrão                  |
| ----------- | ------------------------------------------------------------------ | ----------------------- |
| `SITE_URL`  | URL pública do site (canonical, `hreflang`, sitemap e robots)      | `http://localhost:4321` |
| `SITE_BASE` | Prefixo de caminho, quando o site não fica na raiz (ex.: `/repo/`) | `/`                     |

Sem `SITE_URL`, canonical, `hreflang` e sitemap saem com `localhost` e os buscadores indexariam endereços errados. Defina sempre no deploy.

## Links das lojas

Ficam em `src/config/site.ts`, e só ali:

```ts
googlePlayUrl: null,
windowsStoreUrl: null,
```

Com `null`, o botão aparece como "Em breve", desabilitado (`aria-disabled`, sem `href`). Trocar `null` pela URL transforma o botão em link, em todas as páginas e idiomas, e acrescenta `offers` ao JSON-LD da home. Cada loja é independente: dá para preencher uma e deixar a outra em `null`.

## Trocar as capturas de tela

As capturas ficam em `src/assets/screens/<idioma>/<nome>.jpg`, já recortadas (945×1830, sem barra de status). Se faltar um idioma, o site usa a captura em português.

1. Salve a captura nova em `docs/telas/` (945×2048) e ajuste o mapa em `scripts/paths.mjs`, ou grave direto em `src/assets/screens/<idioma>/<nome>.jpg` já no tamanho final.
2. Se veio de `docs/telas/`, rode `npm run assets:import`.
3. Em `src/assets/screens/screens.json`, mova o nome de `placeholders` para `captured`.

Enquanto `game-3d` for placeholder, o controle 2D/3D fica oculto. Ele aparece sozinho quando a captura passa a `captured`. O mesmo vale para `game-midgame` e `stats-full`, que substituem `game` e `stats`.

A página `/pt/_assets/` (com `noindex`, fora do sitemap) mostra todos os assets.

## Scripts de mídia

Os originais ficam em `docs/` (local, fora do git). Os scripts em `scripts/` geram tudo o que o site usa, e os resultados são versionados.

| Comando                       | O que faz                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `npm run assets:import`       | Copia logo e peças e recorta as capturas de `docs/telas/` para `src/assets/`             |
| `npm run assets:placeholders` | Cria placeholders para capturas que ainda faltam                                         |
| `npm run assets:icons`        | Gera favicon PNG, apple-touch-icon e ícones do manifest a partir de `public/favicon.svg` |
| `npm run assets:og`           | Gera `public/og-image.jpg` (1200×630)                                                    |
| `npm run assets:audio`        | Comprime o som de captura para `public/audio/piece-capture.mp3` (abaixo de 30 KB)        |
| `npm run assets`              | Roda todos os anteriores                                                                 |

## Publicar

O build não depende de servidor: o resultado é a pasta `dist/`.

### Cloudflare Pages

1. Crie um projeto conectado ao repositório.
2. Comando de build: `npm run build`. Pasta de saída: `dist`.
3. Variáveis de ambiente: `NODE_VERSION=22` e `SITE_URL=https://seu-dominio`. Não defina `SITE_BASE` (o site fica na raiz).
4. Depois de publicar, aponte o domínio próprio e confirme que `SITE_URL` é o domínio final.

### GitHub Pages

O workflow `.github/workflows/deploy.yml` faz check, lint, build e publicação. Ele **não roda sozinho**: só dispara manualmente (aba Actions, "Run workflow").

1. Em Settings > Pages, escolha **GitHub Actions** como fonte.
2. Em Settings > Secrets and variables > Actions > Variables, crie:
   - `SITE_URL`: `https://<usuario>.github.io` (ou o domínio próprio).
   - `SITE_BASE`: `/<repositorio>/` quando o site fica em `https://<usuario>.github.io/<repositorio>/`. Com domínio próprio na raiz, deixe sem valor.
3. Rode o workflow.

Para publicar automaticamente a cada push na `main`, acrescente `push: { branches: [main] }` em `on:` do workflow.

Para conferir localmente um build com prefixo:

```bash
SITE_URL=https://usuario.github.io SITE_BASE=/repositorio/ npm run build
```

No Git Bash do Windows, prefixe com `MSYS_NO_PATHCONV=1`, senão `/repositorio/` vira um caminho de disco.

## Tema claro e escuro

Por padrão o site segue o tema do sistema. O botão no cabeçalho alterna e guarda a escolha no `localStorage` do navegador (com `try/catch`, então funciona mesmo com o armazenamento bloqueado). Um script curto no `<head>` aplica o tema antes da primeira pintura, sem flash. A chave e as cores ficam em `src/config/theme.ts`.

## Estrutura

```
public/            favicon, ícones, imagem Open Graph e áudio
scripts/           geração de imagens, ícones, imagem OG e áudio
src/
  assets/          fontes, logo, peças e capturas
  components/      um componente por bloco de interface
  config/          site.ts (nome, e-mail, links), scenes.ts (tabuleiros), theme.ts
  i18n/            dicionários pt, en, es, fr, it e helpers
  i18n/privacy/    política de privacidade em cada idioma
  layouts/         BaseLayout e LegalLayout
  pages/           index (escolha de idioma), [lang]/ e 404
  styles/          tokens, reset, tipografia, utilitários e fontes
  utils/           dados estruturados (JSON-LD)
.github/workflows/ deploy manual para o GitHub Pages
```

## Idiomas

As rotas são `/pt`, `/en`, `/es`, `/fr` e `/it`. A raiz `/` só oferece a escolha de idioma, sem redirecionar. Para criar uma chave de texto, inclua-a em `src/i18n/pt.ts` e nos outros quatro dicionários. O `npm run check` falha se faltar alguma.

O texto da política de privacidade fica em `src/i18n/privacy/<idioma>.ts`. A data de atualização está em `src/i18n/privacy/index.ts` (`privacyUpdatedIso`) e no campo `updatedDate` de cada idioma. Mude os dois juntos ao alterar a política.

## Regras: diagramas

Cada diagrama de `/rules/` é um tabuleiro reduzido (`MiniBoard`) alimentado por `ruleScenes` em `src/config/scenes.ts`: peças, casas marcadas (destino, selecionada, proibida) e setas de captura. A descrição lida por leitor de tela fica em `rules.<seção>.scene` nos dicionários. Ao mudar uma posição, atualize a descrição nos cinco idiomas.
