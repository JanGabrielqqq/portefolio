# Repository Guidelines

## Project Structure & Module Organization
- **app/**: Next.js App Router pages; dynamic route at `app/blog/[slug]` renders MDX posts.
- **components/**: Reusable UI (navbar, social links, work experience, etc.); `mdx-content` wrapper styles live here via globals.
- **content/blog/**: MDX blog posts (e.g., `hello-world.mdx`, `starting-a-blog-w-ai.mdx`).
- **data/**: Typed data sources (`blogs.ts`, `config.ts` for personal/experience data).
- **public/**: Static assets (icons, images).
- **app/globals.css**: Theme tokens, Tailwind-style utilities, MDX typography.

## Build, Test, and Development Commands
- `npm run dev` — start local Next.js dev server with MDX enabled.
- `npm run build` — production build.
- `npm run start` — serve the production build.
- `npm run lint` — run eslint (TS/JS).

## Coding Style & Naming Conventions
- TypeScript, functional components, hooks; prefer client components only when required (`"use client"`).
- Imports: alias `@/` maps to repo root (see `tsconfig.json`).
- Files/dirs: kebab-case for routes (`app/blog/[slug]`), camelCase for variables, PascalCase for components.
- Styling via Tailwind utility classes in JSX; shared tokens in `globals.css`.
- Keep MDX frontmatter minimal; slug derived from filename.

## Testing Guidelines
- No automated test suite currently. When adding tests, prefer Jest/React Testing Library; place alongside source as `<component>.test.tsx`.
- Manually verify blog renders (`/blog`, `/blog/<slug>`), theme toggle, and dynamic data pulls from `config.ts`.

## Commit & Pull Request Guidelines
- Commits: concise present-tense summary (e.g., `add mdx blog loader`, `tweak scrollbar colors`). Separate AI-assisted work into its own commit when possible.
- PRs: include summary of changes, testing notes (commands run), screenshots for UI tweaks, and link related issues/tasks. Keep diffs minimal and focused.

## Security & Configuration Tips
- MDX imports are mapped in `components/mdx-content.tsx`; add new posts to `data/blogs.ts` and `content/blog/*.mdx`.
- Client-only features (e.g., theme, mdx dynamic imports) must include `"use client"` where necessary.
- Avoid committing secrets; no env vars currently required.
