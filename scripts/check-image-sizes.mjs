import fs from 'node:fs/promises';
import path from 'node:path';
import { root } from './paths.mjs';

const limit = 200 * 1024;
const extensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif']);
const dist = path.join(root, 'dist');

const walk = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(full) : [full];
    }),
  );
  return nested.flat();
};

const files = (await walk(dist)).filter((file) => extensions.has(path.extname(file)));
const sizes = await Promise.all(
  files.map(async (file) => ({ file, size: (await fs.stat(file)).size })),
);
const oversized = sizes.filter((entry) => entry.size > limit);
const largest = [...sizes].sort((a, b) => b.size - a.size)[0];

console.log(`${sizes.length} images checked`);
if (largest) {
  console.log(
    `largest: ${path.relative(dist, largest.file)} (${Math.round(largest.size / 1024)} KB)`,
  );
}
for (const entry of oversized) {
  console.log(
    `over 200 KB: ${path.relative(dist, entry.file)} (${Math.round(entry.size / 1024)} KB)`,
  );
}
if (oversized.length > 0) {
  process.exitCode = 1;
}
