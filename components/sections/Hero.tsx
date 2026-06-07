'use client';

// Section Hero de la page d'accueil.
// Affiche le titre, la description, les actions principales et le lien vers le GitHub.
import { motion } from 'framer-motion';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const { name, title, description, github } = personalInfo;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 bg-linear-to-br from-sky-900 via-blue-900 to-slate-950 opacity-60" />
      <div className="absolute inset-0 opacity-30">
        <div className="pointer-events-none absolute left-1/4 top-10 h-64 w-64 rounded-full bg-sky-500 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="pointer-events-none absolute left-10 bottom-10 h-40 w-40 rounded-full bg-sky-400/20 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              {title}
            </h1>

            <motion.h2
              className="text-2xl md:text-3xl text-slate-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {name}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href="/CV-Nathan-NGASSAI.pdf" variant="primary" size="lg">
                <Download className="mr-2" size={20} />
                Télécharger CV
              </Button>
              <Button href="#projects" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <ArrowRight className="mr-2" size={20} />
                Voir mes projets
              </Button>
              <Button
                href={github}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <ExternalLink className="mr-2" size={20} />
                Mon GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}