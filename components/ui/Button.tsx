'use client';

// Composant de bouton réutilisable pour les actions du site.
// Gère les variantes, les tailles et le rendu conditionnel d'un lien externe ou d'un bouton natif.
import React from 'react';
import { motion } from 'framer-motion';

// Types des variantes de bouton
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Styles selon la variante (blue professional theme)
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-sky-600 text-white hover:bg-sky-700',
  secondary: 'bg-white text-sky-700 hover:bg-sky-50 border border-sky-200',
  outline: 'border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white',
  ghost: 'text-sky-700 hover:bg-sky-50',
};

// Styles selon la taille
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  disabled,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const buttonContent = (
    <motion.button
      type={type}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  if (href) {
    const isExternal = /^(https?:)?\/\//.test(href);

    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
}
