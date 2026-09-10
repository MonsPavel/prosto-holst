import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const html = await readFile('dist/index.html', 'utf8');
const css = await readFile('dist/styles.css', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate HTML ids');
for (const [, href] of html.matchAll(/\bhref="#([^"]+)"/g)) {
  if (!ids.includes(href)) throw new Error(`Missing anchor: ${href}`);
}
const localFiles = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((match) => match[1]);
localFiles.push(...[...css.matchAll(/url\('([^']+)'\)/g)].map((match) => match[1]));
for (const path of new Set(localFiles)) await access(resolve('dist', path));
for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g)) {
  if (!/\balt="/.test(tag) || !/\bwidth="/.test(tag) || !/\bheight="/.test(tag)) throw new Error(`Missing image attributes: ${tag}`);
}
const result = spawnSync(process.execPath, ['--check', 'dist/script.js'], { encoding: 'utf8' });
if (result.status !== 0) throw new Error(result.stderr);
console.log(`Verified ${new Set(localFiles).size} local assets, ${ids.length} anchor IDs, image attributes, and JavaScript syntax.`);
