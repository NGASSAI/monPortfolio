// Configuration Next.js du projet.
// Ce fichier active la compression, optimise les formats d'image et masque l'entête X-Powered-By.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
