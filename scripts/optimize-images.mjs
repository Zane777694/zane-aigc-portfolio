import { readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(repoRoot, 'public');
const pnpmRoot = path.join(repoRoot, 'node_modules', '.pnpm');

const sharpDir = (await readdir(pnpmRoot, { withFileTypes: true }))
  .find((entry) => entry.isDirectory() && entry.name.startsWith('sharp@'));

if (!sharpDir) {
  throw new Error('Sharp is not available in node_modules/.pnpm.');
}

const sharpEntry = path.join(pnpmRoot, sharpDir.name, 'node_modules', 'sharp', 'lib', 'index.js');
const { default: sharp } = await import(pathToFileURL(sharpEntry).href);
const sourceExtensions = new Set(['.png', '.jpg', '.jpeg']);

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectImages(absolutePath);
    return sourceExtensions.has(path.extname(entry.name).toLowerCase()) ? [absolutePath] : [];
  }));
  return nested.flat();
}

const images = await collectImages(publicRoot);
let bytesBefore = 0;
let bytesAfter = 0;

for (const input of images) {
  const extension = path.extname(input);
  const output = input.slice(0, -extension.length) + '.webp';
  const temporary = `${output}.tmp`;
  bytesBefore += (await stat(input)).size;

  await sharp(input)
    .rotate()
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 4, smartSubsample: true })
    .toFile(temporary);

  await rm(output, { force: true });
  await rename(temporary, output);
  bytesAfter += (await stat(output)).size;
}

const formatMb = (bytes) => (bytes / 1024 / 1024).toFixed(2);
console.log(`Optimized ${images.length} images: ${formatMb(bytesBefore)} MB -> ${formatMb(bytesAfter)} MB`);
