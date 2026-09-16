# Enigma site

Public marketing site for **Enigma**, the AI Action Governance gateway by Foundry360.

Static Next.js site. No backend, no database, no secrets — it builds to plain HTML and assets.

## Develop

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export to ./out
```

`next.config.ts` sets `output: "export"`, so `out/` can be served by any static host.

## Structure

| Path | Purpose |
|------|---------|
| `src/content/site.ts` | All page copy, as typed data |
| `src/app/page.tsx` | Section composition |
| `src/components/Nav.tsx`, `Hero.tsx` | Header and opening section |
| `src/components/ArchitectureDiagram.tsx` | Reference architecture, inline SVG |
| `src/components/ui.tsx` | `Band`, `SectionHead`, `Panel`, `CardIcon`, `Button` primitives |
| `src/components/icons.ts` | Name-to-glyph map so content can name icons without importing React |
| `src/app/globals.css` | Design tokens, following the Node2AI house palette |

Copy changes belong in `src/content/site.ts`. Layout changes belong in the components.

`CardIcon` takes a `size` prop rather than a size utility through `className`.
Tailwind resolves conflicting size utilities by stylesheet order, not class
order, so an override passed via `className` silently loses to the default.

## Claims discipline

Product claims on this site are bounded by the commercial claims audit in the Enigma
product documentation. Three qualifiers must survive any edit:

- Enigma **authorizes** client-commit actions; the customer system executes them.
- Outcome is **client-reported** evidence, not proof of external mutation.
- Policy packs **contribute obligations**; they do not confer regulatory compliance.

The enforcement-boundary section exists specifically to state these. Do not soften it.
