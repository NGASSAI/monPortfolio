// Données statiques du portfolio.
// Centralise les informations personnelles, les compétences, les projets, la formation et les certifications.
import type {
  Certification,
  Education,
  PersonalInfo,
  Project,
  SkillCategory,
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'NGASSAI Nathan',
  title: 'Développeur Web Junior',
  description:
    "Je conçois des sites web modernes, légers et professionnels avec une attention particulière portée à la qualité du design, à la performance et à l'expérience utilisateur.",
  email: 'nathanngassai885@gmail.com',
  whatsapp: '242066817726',
  github: 'https://github.com/NGASSAI',
  linkedin: 'https://www.linkedin.com/in/nathan-ngassai',
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MySQL' },
      { name: 'PostgreSql' },
    ],
  },
  {
    name: 'Outils ',
    skills: [
      { name: 'Git/Github' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'cisco packet tracer' }

    ],
  },
  {
    name: 'Compétences générales',
    skills: [
      { name: 'Travail en équipe' },
      { name: 'communication' },
      { name: 'Adaptabilité' },
    ],

  },
  {
    name: 'Réseau Informatique',
    skills: [
      { name: 'Creation des vlans' },
      { name: 'Configuration des inter vlan' },
      { name: 'Adressage ipv4' },
      { name: 'Configuration du NAT statique et dynamique' },
      { name: 'configuration de base du routeur et switch' },
    ],

  },
];

export const projects: Project[] = [
  {
    title:'codeDoctor',
    description:
    "Une appli d'accompagnement pour les dévéloppeurs , permettant de les aidez à résoudre les bugs pendant le travail et aide aussi à cultiver se désire de comprendre les bug",
    image:'/codeDoctor.png',
    technologies:['NextJs','postgreSQL','NodeJs','tailwindcss'],
    github:'https://github.com/NGASSAI/codeDoctor-front',
    demo:'https://code-doctor-front.vercel.app',
  },
  {
    title:"cv Auto",
    description:
    "Un outil permenttant de génerer un cv de manière automatique et de le télécharger en format pdf",
    image:'/cv auto.png',
    technologies:['NextJs','tailwindcss','postgreSQL'],
    github:'https://github.com/NGASSAI/cv-auto',
    demo:'https://cv-auto-dds.vercel.app',
  },
  {
    title: 'Application MyLinkPage',
    description:
      "Application web de type 'link in bio' pour centraliser et partager facilement tous vos liens importants sur une seule page personnalisable.",
    image: '/mylinkpage.png',
    technologies: ['vite', 'React', 'Tailwind CSS'],
    github: 'https://github.com/NGASSAI/MyLinkPage',
    demo: 'https://mylinkpage-ngassai.vercel.app',
    
  },
  {
    title: 'Site Impact Emploi',
    description:
      "Site web professionnel pour une plateforme d'emploi avec une interface claire et une navigation fluide.",
    image: '/siteImpactEmloi.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/NGASSAI/impact-emploi',
    demo: 'https://impactemploi.gt.tc',
  },
  {
    title: 'Site Sepelas',
    description:
      "Site  moderne de vente des produits agro-alimentaires , prete à l'emploi.",
    image: '/siteSepelas.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/NGASSAI/sepelaslia',
    demo: 'https://sepelaslia.my-board.org',
  },
  {
    title: 'VLAN',
    description:
      "Creation de Vlan et affectation des ports ensuite configuration de inter vlan",
    image: '/Configuration_interVlan.png',
    technologies: ['packet Tracer'],
    github: '#',
    demo: '#',
  },
];

export const education: Education[] = [
  {
    degree: 'Licence 3 Informatique ',
    institution: "Université ECES(école communautaire de l'enseignement supérieur)",
    period: '2024 - Présent',
    description: 'Approfondissement des connaissances en développement web et systèmes informatiques.',
  },
  {
    degree: 'Baccalauréat',
    institution: 'Lycée',
    period: '2024',
    description: 'Obtention du baccalauréat avec spécialisation scientifique.',
  },
  {
    degree: 'BEPC',
    institution: 'Collège',
    period: '2019',
    description: 'Base acquise en mathématiques, sciences et communication.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Art oratoire',
    issuer: 'Formation professionnelle',
    description: 'Renforcement des compétences en communication et présence orale.',
  },
  {
    title: 'Marketing digital',
    issuer: 'Formation professionnelle',
    description: 'Acquisition de bonnes pratiques en stratégie marketing en ligne.',
  },
  {
    title: 'Outils bureautiques',
    issuer: 'Formation professionnelle',
    description: 'Maîtrise des outils de la suite Microsoft Office.',
  },
];

export const contactLinks = {
  email: `mailto:${personalInfo.email}`,
  whatsapp: `https://wa.me/${personalInfo.whatsapp}`,
  github: personalInfo.github,
};
