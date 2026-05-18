# Portfolio Nathan NGASSAI

Portfolio vitrine moderne et statique réalisé avec Next.js, TypeScript et Tailwind CSS.

## Description

Ce projet présente un portfolio professionnel léger, sans backend complexe ni authentification. Il est conçu pour être déployé simplement sur Vercel et offre :

- une page d'accueil claire avec un hero personnalisé,
- des sections statiques : À propos, Compétences, Projets, Formation, Certifications, Contact,
- une navigation mobile stable avec menu hamburger,
- des liens vers GitHub, email et WhatsApp.

## Structure du projet

- `app/` : pages et configuration globale de l'application.
- `components/layout/` : `Header` et `Footer` du site.
- `components/sections/` : sections réutilisables du portfolio.
- `components/ui/` : composants visuels génériques (`Button`, `Card`, `Badge`, `SectionTitle`).
- `data/portfolio.ts` : toutes les données statiques du site.
- `types/portfolio.ts` : types TypeScript pour les données.

## Lancer le site en local

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Mettre à jour le contenu du portfolio

Le contenu principal se trouve dans `data/portfolio.ts` :

- `personalInfo` : nom, titre, description, email, WhatsApp, GitHub, LinkedIn.
- `skillCategories` : catégories de compétences affichées dans la section Compétences.
- `projects` : projets présentés dans la section Projets.
- `education` : parcours académique affiché dans la section Formation.
- `certifications` : certifications listées dans la section Certifications.
- `contactLinks` : liens de contact utilisés dans le footer.

## Déploiement

Ce site est prêt pour Vercel :

```bash
npm run build
npm run start
```

Vous pouvez déployer directement depuis votre dépôt GitHub avec Vercel.

## Liens importants

- Compte GitHub : `https://github.com/comptengassai`
- Email : `nathanngassai885@gmail.com`
- WhatsApp : `https://wa.me/242066817726`

## Notes de maintenance

- Pour modifier les sections de contenu, ouvrez `data/portfolio.ts`.
- Pour ajuster le style ou l'apparence, éditez les composants dans `components/ui/`.
- Pour changer l'ordre des sections, modifiez `app/page.tsx`.
