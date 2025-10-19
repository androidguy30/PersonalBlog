import rss from '@astrojs/rss'; import { BRAND } from '../config';
export async function GET() {
  const postsGlob = import.meta.glob('./posts/*.{md,mdx}', { eager: true });
  const items = Object.entries(postsGlob).map(([path, mod]) => ({
    link: path.replace('./', '/'),
    title: mod.frontmatter?.title ?? path,
    pubDate: new Date(mod.frontmatter?.pubDate ?? Date.now()),
    description: mod.frontmatter?.description ?? ''
  }));
  return rss({ title: BRAND.title, description: BRAND.description, site: import.meta.env.SITE, items });
}