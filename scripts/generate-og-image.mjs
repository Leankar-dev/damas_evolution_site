import path from 'node:path';
import sharp from 'sharp';
import { paths } from './paths.mjs';

const width = 1200;
const height = 630;
const cell = 105;

const squares = [];
for (let row = 0; row < Math.ceil(height / cell); row += 1) {
  for (let col = 0; col < Math.ceil(width / cell); col += 1) {
    const fill = (row + col) % 2 === 0 ? '#e8c99a' : '#8b5e3c';
    squares.push(
      `<rect x="${col * cell}" y="${row * cell}" width="${cell}" height="${cell}" fill="${fill}"/>`,
    );
  }
}

const backgroundSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
      <stop offset="55%" stop-color="#1e140a" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1e140a" stop-opacity="0.55"/>
    </radialGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16"/>
    </filter>
  </defs>
  ${squares.join('')}
  <rect width="${width}" height="${height}" fill="url(#vignette)"/>
  <rect x="246" y="104" width="708" height="450" rx="36" fill="#1e140a" opacity="0.45" filter="url(#blur)"/>
  <rect x="240" y="90" width="720" height="450" rx="36" fill="#f5edd5" stroke="#d4a56a" stroke-width="6"/>
</svg>`;

const logo = await sharp(path.join(paths.srcAssets, 'logo.png'))
  .resize({ height: 390 })
  .png()
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

const layers = [{ input: logo, left: Math.round((width - logoMeta.width) / 2), top: 120 }];

await sharp(Buffer.from(backgroundSvg))
  .composite(layers)
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(paths.publicDir, 'og-image.jpg'));

console.log('og-image.jpg');
