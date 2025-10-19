import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// CHANGE THIS to your real prod URL (https://...)
const SITE = 'https://kausthubh.in';

export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true
  },
  build: { format: 'directory' }
});
