# One‑Stop Minimal Blog Kit (Astro + MDX)

A **single, minimal, production‑ready** stack for an Engineering Manager who writes about **code & leadership**:

- ⚡ **Astro + MDX** (fast, static, low‑maintenance)
- 🧠 **Minimal custom theme** (single column, light/dark, great typography)
- 📝 **Blog + About + Now + Subscribe**
- 🔎 **SEO** (canonical, meta, OpenGraph), **RSS** & **sitemap**
- 💬 **Giscus** comments (GitHub Discussions)
- 📈 **Plausible** analytics (optional)
- ✉️ **Buttondown** newsletter form (optional)
- 🚀 **Deploy**: GitHub Pages (Actions included). Optional Netlify/Vercel configs included.

---

## Quick Start

```bash
npm i
npm run dev   # http://localhost:4321
```

1) Set your production site URL in `astro.config.mjs`:
```js
const SITE = 'https://your-domain.example';
```

2) Edit brand & author in `src/config.ts`:
```ts
export const BRAND = {
  title: "Your Name — Engineering & Leadership",
  tagline: "Essays on shipping software, leading teams, and engineering craft.",
  homeUrl: "https://your-domain.example"
};
export const AUTHOR = {
  name: "Your Name",
  github: "your-github",
  twitter: "your-twitter",
  linkedin: "your-linkedin"
};
```

3) (Optional) Configure **Giscus** in `src/components/Giscus.astro` via the giscus.app wizard.

4) (Optional) Enable **Plausible** in `src/components/Plausible.astro` by setting your domain.

5) (Optional) **Buttondown** subscribe: set your form action in `src/pages/subscribe.astro`.

---

## Deploy to GitHub Pages

- Push to `main`. GitHub Action `.github/workflows/deploy.yml` builds & deploys.
- In GitHub: **Settings → Pages → Build and deployment** = **GitHub Actions**.
- For custom domain: configure in Pages, then add DNS `CNAME` to GitHub Pages.

### Optional: Netlify / Vercel

- **Netlify**: `netlify.toml` included. Connect repo → pick Astro → build command `npm run build` → publish dir `dist`.
- **Vercel**: `vercel.json` included. Import repo → Framework: Astro → build output `dist`.

---

## Write a Post

Create `src/pages/blog/your-post.mdx`:

```mdx
---
title: "Your Post Title"
description: "Short SEO one-liner"
pubDate: "2025-10-20"
tags: ["leadership", "mobile", "ci-cd"]
canonical: "https://your-domain/blog/your-post"
---

Your content in MDX. Fenced code blocks, callouts, etc.
```

Posts are auto-listed at **/blog** and included in **/rss.xml**.

---

## Medium & LinkedIn Cross‑Posting (SEO‑safe)

1. Publish on **your site first** (canonical).
2. On Medium, use **Import Story**, ensuring **canonical URL** = your post URL.
3. On LinkedIn, post a summary that links to your canonical URL.

---

## Theme Controls (Minimal, Clean)

- Single‑column, max‑width 720px, large comfortable line‑height.
- Light/dark toggle (prefers system by default).
- One accent color (set in `src/styles/theme.css`).

---

## License

MIT
