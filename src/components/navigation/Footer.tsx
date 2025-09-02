'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useI18n, useCurrentLocale } from '@/locales/client';
import { Container, Logo } from '@/components/ui';

export default function Footer() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();

  const footerLinks = {
    product: [
      { name: t('footer.links.features'), href: `/${currentLocale}/features` },
      { name: t('footer.links.howItWorks'), href: `/${currentLocale}/how-it-works` },
      { name: t('footer.links.support'), href: `/${currentLocale}/support` },
    ],
    company: [
      { name: t('footer.links.about'), href: `/${currentLocale}/about` },
      { name: t('footer.links.contact'), href: `/${currentLocale}/contact` },
    ],
    legal: [
      { name: t('footer.links.privacy'), href: `/${currentLocale}/privacy` },
      { name: t('footer.links.terms'), href: `/${currentLocale}/terms` },
    ]
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/matchops', 
      icon: Github,
      'aria-label': 'Follow us on GitHub'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/matchops', 
      icon: Twitter,
      'aria-label': 'Follow us on Twitter'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/matchops', 
      icon: Linkedin,
      'aria-label': 'Connect with us on LinkedIn'
    },
    { 
      name: 'Email', 
      href: 'mailto:contact@matchops.local', 
      icon: Mail,
      'aria-label': 'Send us an email'
    },
  ];

  return (
    <footer className="bg-bg-primary border-t border-bg-tertiary">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href={`/${currentLocale}`} className="inline-block focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-md">
              <Logo className="text-2xl" />
            </Link>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 text-text-muted hover:text-accent-cyan transition-colors duration-200 hover:bg-bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-cyan"
                    aria-label={social['aria-label']}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t('footer.links.product')}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t('footer.links.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t('footer.links.legal')}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-md"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-bg-tertiary flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-text-secondary text-sm">
            {t('footer.copyright')}
          </div>
          
          <div className="flex items-center space-x-1 text-text-secondary text-sm">
            <span>{t('footer.builtWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>
        </div>
      </Container>
    </footer>
  );
}