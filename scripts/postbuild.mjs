/**
 * Post-build touches for the GitHub Pages artifact.
 *
 * .nojekyll tells Pages to serve the uploaded files verbatim (no Jekyll
 * processing), which matters as soon as a route or file starts with an
 * underscore.
 */
import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

await writeFile(resolve(root, 'dist/.nojekyll'), '', 'utf8');
console.log('写入 dist/.nojekyll');

