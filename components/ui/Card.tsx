'use client';

// Composant de carte générique utilisé dans les sections du portfolio.
// Permet d'encapsuler le contenu dans un style cohérent et animé.
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-sky-50 p-6';
  const hoverStyles = hover ? 'hover:shadow-lg hover:shadow-sky-200/40 hover:border-sky-100 transition-all duration-300' : '';
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;

  return (
    <motion.div
      className={combinedStyles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
