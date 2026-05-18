// Fichier robots.txt généré pour indiquer aux moteurs de recherche les pages indexables.
// Ajuste les règles d'exploration et référence le sitemap du site.
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://nathan-ngassai.vercel.app/sitemap.xml',
  };
}
