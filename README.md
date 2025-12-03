# Portfolio3

A personal portfolio built with Next.js (App Router) featuring dark/light theming, MDX-powered blog posts, and centralized profile data.

## Quick Start
1) Install deps (Node 18+):
```bash
npm install
```
2) Run dev server:
```bash
npm run dev
```
Visit http://localhost:3000

## Project Structure
- `app/` — routes; dynamic blog at `app/blog/[slug]` renders MDX.
- `components/` — UI: navbar, hero, social links, work experience, certifications, etc.
- `content/blog/` — MDX posts (add new posts here).
- `data/` — data sources (`blogs.ts`, `config.ts` for profile/experience/social data).
- `public/` — static assets.
- `app/globals.css` — theme tokens, scrollbar styles, MDX typography.

## Blog Workflow (MDX)
- Add a post at `content/blog/<slug>.mdx` (include `"use client"` only if the content requires client APIs).
- Register it in `data/blogs.ts` (id/slug, title, date).
- MDX is rendered via `components/mdx-content.tsx`.

## Commands
- `npm run dev` — start dev server.
- `npm run build` — production build.
- `npm run start` — run built app.
- `npm run lint` — lint with ESLint.

## Theming
- Theme is set early via inline script in `app/layout.tsx`; toggle lives in `components/navbar.tsx` and persists to `localStorage`.
- Color tokens live in `app/globals.css` (light/dark).

## Contributing
- See `AGENTS.md` for contributor guidelines (structure, style, PR expectations).
- Keep changes focused and lint before pushing.

## Deployment
- Standard Next.js deploy; no env vars required. Suitable for Vercel or any Node host.
