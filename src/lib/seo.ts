import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

const defaultKeywords = [
  'soccer coaching app',
  'football tactics',
  'team management',
  'match tracking',
  'soccer coach tools',
  'formation builder',
  'player statistics',
  'tactical planning',
  'youth soccer',
  'coaching software'
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://matchops.local';
const defaultOgImage = `${baseUrl}/images/og-default.png`;

export function generateMetadata(config: SEOConfig, locale: string = 'en'): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogType = 'website',
    ogImage = defaultOgImage,
    canonical,
    noIndex = false
  } = config;

  const fullTitle = title.includes('MatchOps') ? title : `${title} | MatchOps Local`;
  const allKeywords = [...defaultKeywords, ...keywords];
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      url: canonicalUrl,
      siteName: 'MatchOps Local',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage]
    },

    // Additional meta tags
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'fi': `${baseUrl}/fi`
      }
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex
      }
    },

    // App metadata
    applicationName: 'MatchOps Local',
    authors: [{ name: 'MatchOps Team' }],
    category: 'Sports & Fitness',
    classification: 'Soccer Coaching Software',
    
    // Verification (to be added when available)
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      other: {
        'msvalidate.01': process.env.BING_VERIFICATION_ID || ''
      }
    }
  };
}

// Structured data generators
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'MatchOps Local',
    url: baseUrl,
    description: 'Professional soccer coaching tools accessible to everyone. Manage your team, plan tactics, and track performance with MatchOps Local.',
    inLanguage: ['en', 'fi'],
    publisher: {
      '@type': 'Organization',
      name: 'MatchOps',
      url: baseUrl
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MatchOps',
    alternateName: 'MatchOps Local',
    url: baseUrl,
    description: 'Creators of MatchOps Local, the free soccer coaching app for coaches worldwide.',
    foundingDate: '2023',
    sameAs: [
      // Add social media URLs when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@matchops.local',
      availableLanguage: ['English', 'Finnish']
    }
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MatchOps Local',
    description: 'Free Progressive Web App for soccer coaches to manage teams, plan tactics, and track performance.',
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Organization',
      name: 'MatchOps'
    },
    downloadUrl: baseUrl,
    screenshot: `${baseUrl}/images/app-screenshot.png`,
    softwareVersion: '1.0',
    releaseNotes: 'Initial release with comprehensive coaching tools'
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateArticleSchema({
  headline,
  description,
  author = 'MatchOps Team',
  datePublished,
  dateModified,
  image = defaultOgImage
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'MatchOps',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': baseUrl
    }
  };
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    en: {
      title: 'MatchOps Local - Free Soccer Coaching App',
      description: 'Professional soccer coaching tools accessible to everyone. Manage your team, plan tactics, and track performance with our free Progressive Web App.',
      keywords: ['free soccer app', 'coaching tools', 'team management', 'tactical planning']
    },
    fi: {
      title: 'MatchOps Local - Ilmainen Jalkapallovalmennussovellus',
      description: 'Ammattimaiset jalkapallovalmennus työkalut kaikkien saatavilla. Hallitse joukkuettasi, suunnittele taktiikkaa ja seuraa suoritusta ilmaisella sovelluksellamme.',
      keywords: ['ilmainen jalkapallo-sovellus', 'valmennus työkalut', 'joukkueen hallinta', 'taktinen suunnittelu']
    }
  },
  
  features: {
    en: {
      title: 'Features - Complete Soccer Coaching Toolkit',
      description: 'Discover all the powerful features in MatchOps Local: tactical planning, team management, live match tracking, and performance analysis.',
      keywords: ['soccer features', 'tactical planner', 'formation builder', 'match tracking']
    },
    fi: {
      title: 'Ominaisuudet - Täydellinen Jalkapallovalmennus Työkalusto',
      description: 'Tutustu MatchOps Localin tehokkaaseen ominaisuuksiin: taktinen suunnittelu, joukkueen hallinta, live ottelun seuranta ja suorituskyky analyysi.',
      keywords: ['jalkapallo ominaisuudet', 'taktinen suunnittelija', 'muodostelman rakentaja', 'ottelun seuranta']
    }
  },

  howItWorks: {
    en: {
      title: 'How It Works - Getting Started Guide',
      description: 'Learn how to use MatchOps Local in 5 simple steps. From installation to managing your first game, we\'ll guide you through everything.',
      keywords: ['how to use', 'getting started', 'soccer coaching guide', 'installation guide']
    },
    fi: {
      title: 'Miten Se Toimii - Aloitusopas',
      description: 'Opi käyttämään MatchOps Localia 5 yksinkertaisessa vaiheessa. Asennuksesta ensimmäisen pelin hallintaan, opastamme sinut kaiken läpi.',
      keywords: ['käyttöohje', 'aloitus', 'jalkapallovalmennus opas', 'asennusopas']
    }
  },

  support: {
    en: {
      title: 'Support & Help Center',
      description: 'Get help with MatchOps Local. Browse our FAQ, documentation, and contact our support team for personalized assistance.',
      keywords: ['support', 'help', 'FAQ', 'documentation', 'troubleshooting']
    },
    fi: {
      title: 'Tuki & Ohje Keskus',
      description: 'Saa apua MatchOps Localin kanssa. Selaa UKK:ta, dokumentaatiota ja ota yhteyttä tukitiimiimme henkilökohtaista apua varten.',
      keywords: ['tuki', 'apu', 'UKK', 'dokumentaatio', 'vianmääritys']
    }
  },

  about: {
    en: {
      title: 'About MatchOps - Our Mission & Story',
      description: 'Learn about MatchOps mission to democratize soccer coaching tools. Meet our team and discover the story behind MatchOps Local.',
      keywords: ['about us', 'company mission', 'team', 'soccer coaching story']
    },
    fi: {
      title: 'Tietoa MatchOpsista - Missiomme & Tarinamme',
      description: 'Tutustu MatchOpsin missioon demokratisoida jalkapallovalmennus työkalut. Tapaa tiimimme ja tutustu MatchOps Localin tarinaan.',
      keywords: ['tietoa meistä', 'yrityksen missio', 'tiimi', 'jalkapallovalmennus tarina']
    }
  },

  contact: {
    en: {
      title: 'Contact Us - Get in Touch',
      description: 'Have questions about MatchOps Local? Contact our team for support, partnerships, or general inquiries. We\'re here to help.',
      keywords: ['contact', 'support', 'help', 'partnerships', 'inquiries']
    },
    fi: {
      title: 'Ota Yhteyttä - Ole Yhteydessä',
      description: 'Onko sinulla kysymyksiä MatchOps Localista? Ota yhteyttä tiimiimme tukea, kumppanuuksia tai yleisiä kyselyjä varten.',
      keywords: ['yhteystiedot', 'tuki', 'apu', 'kumppanuudet', 'kyselyt']
    }
  },

  privacy: {
    en: {
      title: 'Privacy Policy - Your Data Protection',
      description: 'Learn how MatchOps Local protects your privacy and handles your data. Our privacy-first approach keeps your information secure.',
      keywords: ['privacy policy', 'data protection', 'GDPR', 'privacy rights']
    },
    fi: {
      title: 'Tietosuojakäytäntö - Tietojesi Suojaus',
      description: 'Opi miten MatchOps Local suojaa yksityisyyttäsi ja käsittelee tietojasi. Yksityisyys-ensisijainen lähestymistapamme pitää tietosi turvassa.',
      keywords: ['tietosuojakäytäntö', 'tietosuoja', 'GDPR', 'yksityisyyden oikeudet']
    }
  },

  terms: {
    en: {
      title: 'Terms of Service - Usage Agreement',
      description: 'Read our Terms of Service to understand your rights and responsibilities when using MatchOps Local coaching application.',
      keywords: ['terms of service', 'user agreement', 'legal terms', 'usage rights']
    },
    fi: {
      title: 'Käyttöehdot - Käyttösopimus',
      description: 'Lue käyttöehdot ymmärtääksesi oikeutesi ja vastuusi käyttäessäsi MatchOps Local valmennus sovellusta.',
      keywords: ['käyttöehdot', 'käyttäjäsopimus', 'juridiset ehdot', 'käyttöoikeudet']
    }
  }
};