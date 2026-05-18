git init# Documentation personnelle du portfolio

Ce fichier explique en détail le fonctionnement du site et comment maintenir le contenu.

## Présentation du site

Ce portfolio est une vitrine statique construite avec Next.js, TypeScript et Tailwind CSS. Le site est conçu pour présenter :

- un **Hero** avec le titre, la description et les actions importantes,
- une section **À propos** qui explique qui tu es et ce qui te motive,
- une section **Compétences** avec les technologies et outils maîtrisés,
- une section **Projets** pour présenter des réalisations avec liens GitHub et démonstration,
- une section **Formation** pour montrer le parcours académique,
- une section **Certifications** pour afficher les diplômes et formations complémentaires,
- une section **Contact** affichant email et WhatsApp.

## Fichiers principaux à connaître

### 1. `data/portfolio.ts`

C'est le cœur du contenu du site. Tu dois modifier ce fichier pour changer les données visibles sur le portfolio.

- `personalInfo` : informations personnelles affichées dans le Hero et le footer.
- `skillCategories` : catégories de compétences affichées dans la section Compétences.
- `projects` : projets avec titre, description, image, technologies, liens GitHub et démo.
- `education` : éléments de formation et diplômes.
- `certifications` : certifications et formations supplémentaires.
- `contactLinks` : liens de contact utilisés dans le footer.

### 2. `types/portfolio.ts`

Ce fichier définit les types TypeScript utilisés dans `data/portfolio.ts`.

- `PersonalInfo`, `SkillCategory`, `Project`, `Education`, `Certification`.

Tu n'as pas besoin de modifier ce fichier souvent, sauf si tu veux ajouter une nouvelle propriété aux données.

### 3. `app/page.tsx`

Ce fichier assemble toutes les sections du site et définit l'ordre d'affichage.

- Pour réorganiser les sections, modifie simplement l'ordre des composants importés.

### 4. `app/layout.tsx`

C'est le layout global du site.

- Il contient le `Header`, le `Footer`, et le `main` qui affiche les pages.
- Il définit aussi les métadonnées SEO (`metadata`) et le chargement de la police.

### 5. `components/layout/Header.tsx`

Ce composant gère la barre de navigation principale et le menu burger mobile.

- Les ancres (`#hero`, `#about`, etc.) pointent vers les sections du site.
- Le menu mobile ferme le panneau lorsque l’on clique sur un lien.

### 6. `components/layout/Footer.tsx`

Contient les liens de contact et une navigation secondaire. Il utilise les données personnelles du fichier `data/portfolio.ts`.

### 7. `components/sections/`

Chaque fichier dans ce dossier représente une section du portfolio :

- `Hero.tsx`
- `About.tsx`
- `Skills.tsx`
- `Projects.tsx`
- `Experience.tsx`
- `Certifications.tsx`
- `Contact.tsx`

Si tu veux modifier le contenu structurel ou visuel d'une section, travaille dans le fichier correspondant.

### 8. `components/ui/`

Contient les composants réutilisables :

- `Button.tsx`
- `Card.tsx`
- `Badge.tsx`
- `SectionTitle.tsx`

Utilise ces composants pour garder un style cohérent sur tout le site.

## Modifier le contenu de chaque section

### Modifier le Hero

Ouvre `data/portfolio.ts` et change :

- `personalInfo.name`
- `personalInfo.title`
- `personalInfo.description`
- `personalInfo.github`
- `personalInfo.email`
- `personalInfo.whatsapp`
- `personalInfo.linkedin`

### Modifier la section À propos

Change le texte directement dans `components/sections/About.tsx` ou remplace-le par des données dynamiques si tu veux plus tard.

### Modifier les compétences

Dans `data/portfolio.ts`, ajoute ou modifie les objets dans `skillCategories` :

```ts
{
  name: 'Frontend',
  skills: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
  ],
}
```

### Modifier les projets

Dans `data/portfolio.ts`, modifie `projects` :

- `title`
- `description`
- `image` (chemin vers `public/`)
- `technologies`
- `github`
- `demo`

### Modifier la formation

Dans `data/portfolio.ts`, modifie le tableau `education` avec ton parcours.

### Modifier les certifications

Dans `data/portfolio.ts`, modifie le tableau `certifications`.

### Modifier le contact

Dans `data/portfolio.ts`, change les liens dans `personalInfo` et `contactLinks`.

## Tester les modifications

Après chaque modification, exécute :

```bash
npm run dev
```

Puis ouvre `http://localhost:3000` pour vérifier les changements.

## Déployer sur Vercel

1. Push le code sur GitHub.
2. Connecte ton dépôt à Vercel.
3. Vercel détecte automatiquement le projet Next.js.
4. Déploie en un clic.

## Conseils de maintenance

- Conserve les liens de contact à jour dans `data/portfolio.ts`.
- Ajoute une nouvelle section uniquement si elle apporte de la valeur au portfolio.
- Préfère modifier les données dans `data/portfolio.ts` plutôt que d’éditer le rendu des composants directement.

---

Ce document est personnel et conçu pour t’aider à maintenir ton portfolio sans perdre le fil des fichiers et des sections.
