// Page d'accueil du portfolio.
// Ce fichier assemble les sections statiques du site sans logique côté serveur.
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Formation from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <Certifications />
      <Contact />
    </>
  );
}