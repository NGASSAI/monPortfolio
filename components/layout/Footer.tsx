'use client';

// Footer du site contenant les liens sociaux et la navigation secondaire.
// Utilise les données du portfolio pour afficher GitHub, email et WhatsApp dynamiquement.
import React from 'react';
import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

const socialLinks = [
  {
    name: 'GitHub',
    href: personalInfo.github,
    icon: ExternalLink,
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${personalInfo.whatsapp}`,
    icon: MessageCircle,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Nathan NGASSAI</h3>
            <p className="text-slate-400 leading-relaxed">
              Portfolio vitrine moderne.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-slate-100 hover:bg-slate-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-slate-500 text-sm text-center md:text-left">
          © {currentYear} Nathan NGASSAI. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
