import { mkdir, cp, rm } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'language.js', 'thank-you.html', '404.html', 'assets']) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}
console.log('Built Netlify-ready website in dist/');
