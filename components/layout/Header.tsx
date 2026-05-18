'use client';

// Header du site avec navigation principale et menu mobile.
// Le composant gère l'état du scroll et l'ouverture/fermeture du menu responsive.
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layers } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Formation', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.startsWith('#') ? href : `#${href}`;
    const targetElement = document.querySelector(targetId);
    // Ferme le menu d'abord, puis scroll après un court délai pour laisser le DOM se stabiliser
    setIsMobileMenuOpen(false);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      // fallback: change le hash
      setTimeout(() => {
        window.location.hash = href;
      }, 50);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-xl shadow-slate-950/20'
          : 'bg-slate-950/90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/20"
            aria-label="Accueil"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Layers size={24} />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white font-medium transition-colors"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button
              href="/CV-NGASSAI-NATHAN.pdf"
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white/10"
            >
              Télécharger CV
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-3 rounded-3xl bg-slate-950/95 p-4 shadow-xl shadow-slate-950/20">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="block rounded-2xl px-4 py-3 text-slate-100 hover:bg-slate-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button href="/CV-NGASSAI-NATHAN.pdf" variant="outline" size="sm" className="w-full">
                  Télécharger CV
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
