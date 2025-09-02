export default {
  // Navigation
  nav: {
    home: 'Koti',
    features: 'Ominaisuudet',
    howItWorks: 'Miten se toimii',
    support: 'Tuki',
    about: 'Tietoa',
    tryFree: 'Kokeile ilmaiseksi',
    installApp: 'Asenna sovellus',
    language: 'Kieli'
  },

  // Homepage
  home: {
    hero: {
      title: 'MatchOps Local',
      subtitle: 'Ammattimaiset jalkapallovalmentajan työkalut yksinkertaisesti',
      description: 'Täydellinen sivulinjan hallintatyökalu jalkapallovalmentajille. Suunnittele taktiikka, seuraa tilastoja ja hallitse tiimiäsi ammattitason ominaisuuksilla yhdessä intuitiivisessa sovelluksessa.',
      ctaPrimary: 'Kokeile ilmaiseksi',
      ctaSecondary: 'Lue lisää',
      statsGames: 'Seurattua peliä',
      statsCoaches: 'Aktiivista valmentajaa',
      statsFeatures: 'Ominaisuutta käytettävissä'
    },
    features: {
      title: 'Kaikki mitä tarvitset ottelupäivänä',
      subtitle: 'Ammattimaiset valmennustyökalut, jotka toimivat niin kuin valmennat',
      interactive: {
        title: 'Interaktiivinen jalkapallokenttä',
        description: 'Suunnittele asetelma, piirrä taktiikka ja asemoi pelaajat kosketusmyönteisellä kenttäkäyttöliittymällä.'
      },
      statistics: {
        title: 'Kehittyneet tilastot',
        description: 'Seuraa pelaajien suorituskykyä, pelitapahtumia ja joukkueanalytiikka yksityiskohtaisella raportoinnilla.'
      },
      management: {
        title: 'Joukkueen hallinta',
        description: 'Järjestä kokoonpano, hallitse vaihtoja ja koordinoi pelaajakierrot saumattomasti.'
      },
      realtime: {
        title: 'Live-pelin seuranta',
        description: 'Tallenna tapahtumat, maalit ja vaihdot reaaliajassa otteluiden aikana.'
      },
      analysis: {
        title: 'Suorituskyvyn analysointi',
        description: 'Tarkastele pelitietoja, tunnista malleja ja paranna joukkueen suorituskykyä ajan mittaan.'
      },
      offline: {
        title: 'Toimii offline-tilassa',
        description: 'Käytä kaikkia ominaisuuksia ilman internetyhteyttä. Täydellinen mille tahansa pelikentälle.'
      }
    },
    howItWorks: {
      title: 'Aloita minuuteissa',
      step1: {
        title: 'Asenna sovellus',
        description: 'Lisää MatchOps Local laitteellesi yhdellä klikkauksella'
      },
      step2: {
        title: 'Määritä joukkue',
        description: 'Lisää pelaajasi ja määritä kokoonpanosi'
      },
      step3: {
        title: 'Ensimmäinen peli',
        description: 'Aloita ensimmäisen ottelusi seuranta välittömästi'
      },
      step4: {
        title: 'Hallitse ominaisuudet',
        description: 'Tutustu edistyneisiin taktiikkoihin ja analytiikkaan'
      }
    },
    testimonials: {
      title: 'Valmentajien luottamus',
      subtitle: 'Liity satojen valmentajien joukkoon, jotka ovat parantaneet pelinhallintaansa',
      placeholder: {
        quote: 'MatchOps Local on mullistanut tapani hallita ottelupäivää. Taktinen suunnittelu ja reaaliaikainen seuranta ovat juuri sitä mitä tarvitsin.',
        author: 'Valmentaja Mika Virtanen',
        team: 'Espoon Pallo U14'
      }
    }
  },

  // Features Page
  features: {
    title: 'Täydellinen ominaisuuskatsaus',
    subtitle: 'Tutustu kaikkiin työkaluihin, jotka tekevät MatchOps Localista lopullisen valmennuskumppanin',
    categories: {
      tactics: 'Taktinen suunnittelu',
      statistics: 'Tilastot ja analytiikka',
      management: 'Joukkueen hallinta'
    }
  },

  // How It Works Page
  howItWorks: {
    title: 'Miten MatchOps Local toimii',
    subtitle: 'Asennuksesta ottelupäivän hallintaan neljässä yksinkertaisessa vaiheessa'
  },

  // Support Page
  support: {
    title: 'Apu ja tuki',
    subtitle: 'Löydä vastauksia, oppaita ja saa apua kun sitä tarvitset',
    searchPlaceholder: 'Hae ohjeartikkeleita...',
    categories: {
      gettingStarted: 'Aloittaminen',
      features: 'Ominaisuusopas',
      troubleshooting: 'Vianetsintä',
      faq: 'UKK'
    },
    contact: {
      title: 'Tarvitsetko lisää apua?',
      description: 'Etkö löydä etsimääsi? Ota yhteyttä tukitiimiimme.',
      button: 'Ota yhteyttä'
    }
  },

  // Footer
  footer: {
    description: 'Ammattimaiset jalkapallon valmennustyökalut kaikentasoisille valmentajille',
    links: {
      product: 'Tuote',
      features: 'Ominaisuudet',
      howItWorks: 'Miten se toimii',
      support: 'Tuki',
      company: 'Yritys',
      about: 'Tietoa',
      contact: 'Yhteystiedot',
      legal: 'Juridiset',
      privacy: 'Tietosuojakäytäntö',
      terms: 'Käyttöehdot'
    },
    copyright: '© 2025 MatchOps. Kaikki oikeudet pidätetään.',
    builtWith: 'Rakennettu intohimolla jalkapallovalmentamista kohtaan'
  },

  // Common
  common: {
    learnMore: 'Lue lisää',
    getStarted: 'Aloita',
    comingSoon: 'Tulossa pian',
    loading: 'Ladataan...',
    error: 'Jotain meni pieleen',
    tryAgain: 'Yritä uudelleen'
  }
} as const;