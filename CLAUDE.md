# CLAUDE.md

Personal portfolio site for **Olaoluwa Yusuf** (Frontend Developer).

## Stack
- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** + **SCSS modules** (`*.module.scss`)
- **Framer Motion** for animation · **react-icons** / **FontAwesome** for icons
- Deployed on Vercel

## Commands
```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

## Structure
- `src/app/` — App Router entry: `layout.tsx` (wraps every page with `<Navbar>` + `<Footer>`), `page.tsx` (renders `InfoPage`).
- `src/views/info-page/` — the single-page site, composed of section components:
  `hero`, `about-us`, `project`, `professional-rle` (tools).
- `src/components/` — shared UI: `Nav/Navbar.tsx`, `foot/Footer.tsx`, `carousel-image-effect`, `Decoratives`.
- `src/styles/globals.scss` — global styles, CSS vars (e.g. `--accent` brand orange `#e56337`), fonts.
- `public/` — static assets (resume PDF, images).

### Section anchors (used by Navbar links)
`#home` · `#about` · `#projects` · `#contact` (the footer is the contact section).

## Conventions
- Client components need `"use client"` (anything using hooks / Framer Motion).
- Import alias `@/` → `src/`.
- Brand accent is orange `#e56337`; prefer the `--accent` CSS var over hardcoding.
- Headings use the `Syne` font; body uses `Karla`.

## Git workflow (single branch)
There is no `dev` branch — all work happens on **`main`**.
```bash
git checkout main
git pull            # get latest before starting
# ...make changes...
git add -A
git commit -m "your message"
git push            # pushes to origin/main
```
Remote: `origin` → https://github.com/Horlaolu4real/portfolio.git
