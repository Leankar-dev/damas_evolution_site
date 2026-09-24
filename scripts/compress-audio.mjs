import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { paths } from './paths.mjs';

const run = promisify(execFile);
const maxBytes = 30 * 1024;
const output = path.join(paths.publicDir, 'audio', 'piece-capture.mp3');

await fs.mkdir(path.dirname(output), { recursive: true });
await run(ffmpeg.path, [
  '-y',
  '-i',
  path.join(paths.docsAudio, 'piece_capture.mp3'),
  '-ac',
  '1',
  '-ar',
  '32000',
  '-b:a',
  '48k',
  output,
]);

const { size } = await fs.stat(output);
console.log(`audio/piece-capture.mp3 ${size} bytes`);
if (size > maxBytes) {
  throw new Error(`Compressed audio is ${size} bytes, limit is ${maxBytes}`);
}
