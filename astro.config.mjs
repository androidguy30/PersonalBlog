import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://kausthubh.in',
  integrations: [mdx(), sitemap()],
  markdown: { syntaxHighlight: 'prism', gfm: true },
  build: { format: 'directory' }
});