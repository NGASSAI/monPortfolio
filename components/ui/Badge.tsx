// Composant d'étiquette visuelle pour afficher des compétences ou des technologies.
// Utilisé dans les sections Compétences et Projets.
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles: Record<Exclude<BadgeProps['variant'], undefined>, string> = {
    default: 'bg-sky-600 text-white',
    outline: 'border border-sky-600 text-sky-600',
    secondary: 'bg-sky-50 text-sky-700',
  };

  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={combinedStyles}>{children}</span>;
}
