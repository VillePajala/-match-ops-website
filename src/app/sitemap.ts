import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://matchops.local';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['en', 'fi'];
  const pages = [
    '',
    'features',
    'how-it-works',
    'support',
    'about',
    'contact',
    'privacy',
    'terms'
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Add root URL
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        fi: `${baseUrl}/fi`
      }
    }
  });

  // Add localized pages
  languages.forEach(language => {
    pages.forEach(page => {
      const url = page 
        ? `${baseUrl}/${language}/${page}`
        : `${baseUrl}/${language}`;

      const priority = getPriority(page);
      const changeFrequency = getChangeFrequency(page);

      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: page ? `${baseUrl}/en/${page}` : `${baseUrl}/en`,
            fi: page ? `${baseUrl}/fi/${page}` : `${baseUrl}/fi`
          }
        }
      });
    });
  });

  return routes;
}

function getPriority(page: string): number {
  switch (page) {
    case '':
      return 1.0;
    case 'features':
    case 'how-it-works':
      return 0.9;
    case 'support':
    case 'about':
    case 'contact':
      return 0.8;
    case 'privacy':
    case 'terms':
      return 0.5;
    default:
      return 0.6;
  }
}

function getChangeFrequency(page: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  switch (page) {
    case '':
    case 'features':
      return 'weekly';
    case 'support':
      return 'monthly';
    case 'how-it-works':
    case 'about':
    case 'contact':
      return 'monthly';
    case 'privacy':
    case 'terms':
      return 'yearly';
    default:
      return 'monthly';
  }
}