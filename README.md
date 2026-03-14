# Portfolio — Bao Ngoc HUYNH

Portfolio en français (Next.js, React, TypeScript, Tailwind CSS). Contenu : présentation, projets (DiaPyl, DiagElec, CityBoard, BOOST, Kalicolis), compétences techniques et humaines. Liens cliquables entre projets et compétences.

## Chạy local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build (export statique)

```bash
npm run build
```

Génère le dossier `out/` pour hébergement statique.

## Deploy

- **GitHub Pages**  
  - Repo `baongoc.huynh.github.io` → l’app utilise déjà `basePath: '/baongoc.huynh.github.io'` en production.  
  - Déployer le contenu de `out/` (après `npm run build`) sur la branche `main` ou via GitHub Actions qui exécute `npm run build` et publie `out/`.

- **Vercel**  
  - Connecter le repo sur [vercel.com](https://vercel.com).  
  - Dans **Project Settings → Environment Variables**, ajouter `NEXT_PUBLIC_BASE_PATH` = valeur vide pour désactiver le basePath (URL à la racine).  
  - Déploiement automatique à chaque push.

## Structure

- `src/app/` — layout, page, styles
- `src/components/` — Header, Introduction, Presentation, Projects, TechnicalSkills, SoftSkills, Contact
- `src/data/content.ts` — tout le texte en français
- `src/lib/linkify.tsx` — liens cliquables (compétences ↔ projets)
