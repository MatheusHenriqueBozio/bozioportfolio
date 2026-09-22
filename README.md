# Matheus Henrique Bozio — Portfolio

Personal portfolio. Next.js (App Router) + TypeScript + Tailwind CSS, exported as a
static site.

## Structure

- `src/data/site.ts` — profile, social links, résumé paths, UI strings (PT/EN)
- `src/data/projects.ts` — the seven case studies: copy, metadata, image blocks, links
- `src/app/[lang]/page.tsx` — home
- `src/app/[lang]/work/[slug]/page.tsx` — case page template
- `src/components/` — Header, Footer, toggles, cards and the small shared pieces
- `public/images/` — case imagery (webp)
- `public/cv/` — résumés (PT / EN)

Design tokens live in `src/app/globals.css` and mirror the Figma "Portfolio"
variable collection, with a Dark and a Light mode.

## Languages and theme

Routes are `/pt` and `/en`. The theme is stored in `localStorage` and applied
before first paint, so there is no flash on load.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```
