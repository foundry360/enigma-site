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
| `src/components/ArchitectureDiagram.tsx` | Reference architecture, inline SVG |
| `src/components/ui.tsx` | Section, Card, Kicker primitives |
| `src/app/globals.css` | Design tokens, mirrored from the Enigma console theme |

Copy changes belong in `src/content/site.ts`. Layout changes belong in the components.

## Claims discipline

Product claims on this site are bounded by the commercial claims audit in the Enigma
product documentation. Three qualifiers must survive any edit:

- Enigma **authorizes** client-commit actions; the customer system executes them.
- Outcome is **client-reported** evidence, not proof of external mutation.
- Policy packs **contribute obligations**; they do not confer regulatory compliance.

The enforcement-boundary section exists specifically to state these. Do not soften it.
