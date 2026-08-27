import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputRoot = path.resolve(process.argv[2] ?? 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.txt', '.xml']);
const publicAssetPrefixes = ['works/', 'profile.webp', 'hero-golden-spiral.webp', 'og.png', 'favicon.svg'];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  }));
  return nested.flat();
}

const files = await walk(outputRoot);

for (const file of files) {
  if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
  let content = await readFile(file, 'utf8');
  for (const prefix of publicAssetPrefixes) {
    content = content.replaceAll(`\"/${prefix}`, `\"${basePath}/${prefix}`);
    content = content.replaceAll(`'/${prefix}`, `'${basePath}/${prefix}`);
    content = content.replaceAll(`url(/${prefix}`, `url(${basePath}/${prefix}`);
  }
  await writeFile(file, content);
}

const worksRoot = path.join(outputRoot, 'works');
for (const file of await walk(worksRoot)) {
  if (['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase())) {
    await rm(file);
  }
}

await writeFile(path.join(outputRoot, '.nojekyll'), '');
