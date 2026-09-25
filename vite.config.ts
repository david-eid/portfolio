import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { sites } from '@openai/sites-vite-plugin';
import { fileURLToPath, URL } from 'node:url';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projects } from './app/data/projects';

// Real route entry files make deep links portable and give link previews
// route-specific metadata even before the client-side router starts.
function routeEntries() {
  return {
    name: 'portfolio-route-entries',
    apply: 'build' as const,
    async closeBundle() {
      const output = resolve('dist/client');
      const template = await readFile(resolve(output, 'index.html'), 'utf8');
      const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
      const pages = [
        ...Object.entries({ about: 'About', experience: 'Experience', projects: 'Selected Projects', expertise: 'Expertise', contact: 'Contact' }).map(([path, title]) => ({ path, title, description: '' })),
        ...projects.map(p => ({ path: `projects/${p.slug}`, title: p.name, description: p.description })),
      ];
      for (const page of pages) {
        let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)} — David Eid</title>`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(page.title)} — David Eid`)
          .replace(/\s*<link rel="preload" as="image"[^>]*>/, '');
        if (page.description) html = html.replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*/g, `$1${escape(page.description)}`);
        await mkdir(resolve(output, page.path), { recursive: true });
        await writeFile(resolve(output, page.path, 'index.html'), html);
      }
      await writeFile(resolve(output, '404.html'), template.replace('<title>', '<meta name="robots" content="noindex" /><title>'));
    },
  };
}

export default defineConfig({
  plugins: [react(), sites(), routeEntries()],
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  css: { postcss: { plugins: [tailwindcss()] } },
  server: { host: '127.0.0.1', port: 3000, strictPort: true },
  preview: { host: '127.0.0.1', port: 3000, strictPort: true },
  build: { outDir: 'dist/client' },
});
