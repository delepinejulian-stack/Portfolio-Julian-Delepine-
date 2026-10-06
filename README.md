# Portfolio Julian Delepine

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · structure shadcn/ui · GSAP.

## Lancer le site

```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure

- `components/ui/` : composants UI réutilisables (convention shadcn). `timeline.tsx` y vit.
- `components/timeline-demo.tsx` : la page d'accueil actuelle avec le parcours de Julian.
- `lib/utils.ts` : helper `cn()` de shadcn.
- `app/globals.css` : tokens de couleurs du design system (zinc + accent #EC4899, Archivo / Space Grotesk).
- `components.json` : config shadcn, alias `@/components/ui`.

## Pourquoi `components/ui`

La CLI shadcn (`npx shadcn@latest add <composant>`) écrit toujours dans le dossier
défini par l'alias `ui` de `components.json`, ici `@/components/ui`. Garder les
composants de base dans ce dossier permet d'ajouter des composants shadcn ou de la
communauté sans changer les imports, et sépare les briques réutilisables des sections
propres au site.

## Timeline : props utiles

`title`, `periodLabel`, `topItems`, `bottomItems` (items `{ id, year, month, label?, content }`,
déclarés hors du composant pour rester stables), `activeColor`, `imageUrl`, `imageAlt`, `duration`.
Les items alternent haut / bas dans l'ordre chronologique. `prefers-reduced-motion` est respecté.
