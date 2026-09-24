import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { paths, pieceSources, screenCrop, screenSources } from './paths.mjs';

const ptScreens = path.join(paths.srcScreens, 'pt');

await fs.mkdir(ptScreens, { recursive: true });
await fs.mkdir(paths.srcPieces, { recursive: true });

await fs.copyFile(
  path.join(paths.docsImages, 'logo_transparent2.png'),
  path.join(paths.srcAssets, 'logo.png'),
);
console.log('logo.png');

for (const [source, target] of Object.entries(pieceSources)) {
  await fs.copyFile(
    path.join(paths.docsImages, 'pieces', source),
    path.join(paths.srcPieces, target),
  );
  console.log(`pieces/${target}`);
}

for (const [source, name] of Object.entries(screenSources)) {
  const input = sharp(path.join(paths.docsScreens, source));
  const { width, height } = await input.metadata();
  await input
    .extract({
      left: 0,
      top: screenCrop.top,
      width,
      height: height - screenCrop.top - screenCrop.bottom,
    })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(ptScreens, `${name}.jpg`));
  console.log(`screens/pt/${name}.jpg`);
}
