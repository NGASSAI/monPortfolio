'use client';

// Section Contact avec les options de prise de contact par email et WhatsApp.
// Conserve uniquement les moyens de contact utiles pour un portfolio vitrine.
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const contactOptions = [
  {
    name: 'Email',
    href: 'mailto:nathanngassai885@gmail.com',
    description: 'Envoyez-moi un email directement pour une réponse rapide.',
    icon: Mail,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/242066817726',
    description: 'Contact pro via WhatsApp pour un échange instantané.',
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Contact"
          subtitle="Sélectionnez le canal le plus simple pour me joindre rapidement."
          titleClassName="text-white"
          subtitleClassName="text-slate-300"
          barClassName="bg-sky-500"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.name}
                className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.name}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{option.description}</p>
                <Button href={option.href} variant="primary" size="md" className="w-full">
                  {option.name}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
