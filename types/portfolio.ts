// Définitions de types pour les données du portfolio.
// Ces interfaces décrivent la forme des objets utilisés dans data/portfolio.ts.
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}
