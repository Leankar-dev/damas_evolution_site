import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { paths } from './paths.mjs';

const source = await fs.readFile(path.join(paths.publicDir, 'favicon.svg'));
const paper = { r: 240, g: 230, b: 200, alpha: 1 };
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const render = (size) => sharp(source, { density: 512 }).resize(size, size).png().toBuffer();

const write = async (name, canvas, ratio, background) => {
  const inner = await render(Math.round(canvas * ratio));
  await sharp({ create: { width: canvas, height: canvas, channels: 4, background } })
    .composite([{ input: inner, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(paths.publicDir, name));
  console.log(name);
};

await write('favicon-32.png', 32, 1, transparent);
await write('icon-192.png', 192, 1, transparent);
await write('icon-512.png', 512, 1, transparent);
await write('icon-maskable-512.png', 512, 0.64, paper);
await write('apple-touch-icon.png', 180, 0.78, paper);
