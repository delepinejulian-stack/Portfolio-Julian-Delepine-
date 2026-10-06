# Portfolio Julian Delepine

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · structure shadcn/ui · GSAP.

## Lancer le site

```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure

- `components/ui/` : composants UI réutilisables (convention shadcn). `timeline.tsx` y vit.
- `content/site.ts` : **tout le contenu du site** (textes, projets, photos, vidéos). C'est le seul fichier à modifier pour ajouter une production.
- `components/site/` : les sections de la page d'accueil (en-tête, hero vidéo, réalisations, expertises, galerie, chiffres, contact).
- `components/timeline-demo.tsx` : la section « Mon parcours » (timeline du CV).
- `public/media/` : dépose ici tes photos et vidéos, puis référence-les comme `/media/nom-du-fichier.jpg`.
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

## Ajouter une production

Dans `content/site.ts`, chaque projet a un `cover` (image) et un `media` optionnel :

- YouTube : `media: { type: "youtube", id: "dQw4w9WgXcQ" }` (l'id est la fin du lien)
- Vimeo : `media: { type: "vimeo", id: "123456789" }`
- Fichier vidéo : `media: { type: "video", src: "/media/clip.mp4" }`
- Série de photos : `media: { type: "images", srcs: ["/media/a.jpg", "/media/b.jpg"] }`

`previewVideo` (mp4 court et muet) se lance au survol de la carte. Passe `placeholder` à
`false` pour retirer la mention « Visuel provisoire ». Le showreel du haut de page se règle
dans `hero.video`.
