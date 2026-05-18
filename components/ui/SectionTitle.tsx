'use client';

// Composant pour afficher le titre et le sous-titre de chaque section.
// Centralise l'apparence des en-têtes de section.
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  barClassName?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  barClassName = '',
}: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${subtitleClassName}`}>{subtitle}</p>
      )}
      <div className={`w-20 h-1 bg-sky-600 mx-auto mt-6 ${barClassName}`} />
    </motion.div>
  );
}
