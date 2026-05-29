// Générateur de sitemap XML pour le site.
// Permet aux moteurs de recherche de connaître les pages publiques du portfolio.
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mon-portfolio-ngassai.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
