import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const paths = {
  docsImages: path.join(root, 'docs', 'assets', 'images'),
  docsAudio: path.join(root, 'docs', 'assets', 'audio'),
  docsScreens: path.join(root, 'docs', 'telas'),
  srcAssets: path.join(root, 'src', 'assets'),
  srcScreens: path.join(root, 'src', 'assets', 'screens'),
  srcPieces: path.join(root, 'src', 'assets', 'pieces'),
  publicDir: path.join(root, 'public'),
};

export const screenCrop = { top: 100, bottom: 118 };

export const screenSources = {
  'home_page.jpeg': 'home',
  'drawer.jpeg': 'drawer',
  'tela_selecao_dificuldades.jpeg': 'difficulty',
  'tela_jogo.jpeg': 'game',
  'tela_jogo_3d.jpeg': 'game-3d',
  'tela_estatisticas.jpeg': 'stats',
  'tela_configuracoes.jpeg': 'settings',
  'result_page_perdedor.jpeg': 'result-loss',
};

const screensList = JSON.parse(
  fs.readFileSync(path.join(root, 'src', 'assets', 'screens', 'screens.json'), 'utf8'),
);

export const missingScreens = screensList.placeholders;

export const pieceSources = {
  'red_regular.webp': 'red-regular.webp',
  'red_king.webp': 'red-king.webp',
  'blue_regular.webp': 'blue-regular.webp',
  'blue_king.webp': 'blue-king.webp',
};
