'use client';

// Section À propos présentant la philosophie et les points forts du développeur.
// Utilise des cartes pour mettre en valeur les forces et motivations.
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Target } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Passion pour l\'informatique',
      description: 'Développeur web passionné par la création d\'expériences digitales modernes et performantes.',
    },
    {
      icon: Heart,
      title: 'Technologies étudiées',
      description: 'HTML/CSS, JavaScript, PHP, Laravel, Python , Next.js, Node.js & Express, Réseaux informatiques...',
    },
    {
      icon: Target,
      title: 'Motivation',
      description: 'Apprentissage continu et volonté de créer des solutions web innovantes et professionnelles.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="À propos"
          subtitle="Découvrez qui je suis et ce qui me motive"
        />

        <div className="max-w-4xl mx-auto">
          {/* Présentation principale */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Je suis Nathan NGASSAI, développeur web junior passionné par la création d&apos;expériences web modernes et performantes. 
              Actuellement étudiant en Licence 3 Informatique , je me forme continuellement aux dernières technologies du développement web.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mon objectif est de transformer des idées en solutions digitales élégantes et fonctionnelles, 
              en respectant les meilleures pratiques de développement et en veillant à la qualité du code.
            </p>
          </motion.div>

          {/* Cartes de caractéristiques */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-sky-700" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </motion.div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}