import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { missingScreens, paths } from './paths.mjs';

const width = 945;
const height = 1830;
const cell = 135;

const squares = [];
for (let row = 0; row < Math.ceil(height / cell); row += 1) {
  for (let col = 0; col < Math.ceil(width / cell); col += 1) {
    if ((row + col) % 2 === 1) {
      squares.push(`<rect x="${col * cell}" y="${row * cell}" width="${cell}" height="${cell}"/>`);
    }
  }
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" fill="#efe4c4"/>
  <g fill="#8b5e3c" opacity="0.14">${squares.join('')}</g>
  <circle cx="${width / 2}" cy="${height / 2}" r="150" fill="#b3261e" opacity="0.85"/>
  <circle cx="${width / 2}" cy="${height / 2}" r="106" fill="none" stroke="#ffd700" stroke-width="16" opacity="0.9"/>
</svg>`;

const target = path.join(paths.srcScreens, 'pt');
await fs.mkdir(target, { recursive: true });

for (const name of missingScreens) {
  const file = path.join(target, `${name}.jpg`);
  const exists = await fs.access(file).then(
    () => true,
    () => false,
  );
  if (exists) {
    console.log(`kept ${name}.jpg`);
    continue;
  }
  await sharp(Buffer.from(svg)).jpeg({ quality: 80, mozjpeg: true }).toFile(file);
  console.log(`placeholder ${name}.jpg`);
}
