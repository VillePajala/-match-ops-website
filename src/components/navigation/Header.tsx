'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useI18n, useChangeLocale, useCurrentLocale } from '@/locales/client';
import { Container, Logo, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: `/${currentLocale}` },
    { name: t('nav.features'), href: `/${currentLocale}/features` },
    { name: t('nav.howItWorks'), href: `/${currentLocale}/how-it-works` },
    { name: t('nav.support'), href: `/${currentLocale}/support` },
  ];

  const locales = [
    { code: 'en', name: 'EN', flag: '' },
    { code: 'fi', name: 'FI', flag: '🇫🇮' }
  ];

  const currentLocaleInfo = locales.find(l => l.code === currentLocale) || locales[0];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-bg-tertiary shadow-lg'
            : 'bg-transparent border-none outline-none'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={`/${currentLocale}`} className="flex items-center focus:outline-none no-underline">
              <Logo className="text-2xl sm:text-3xl" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-block text-slate-300 hover:text-slate-100 transition-colors duration-200 font-medium focus:outline-none px-2 py-1"
                  style={{ textDecoration: 'none', border: 'none', outline: 'none' }}
                >
                  <span style={{ textDecoration: 'none', border: 'none' }}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA and Locale */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLocaleMenuOpen(!isLocaleMenuOpen)}
                  className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none px-2 py-1"
                  aria-label="Change language"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLocaleInfo.flag}{currentLocaleInfo.name}</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isLocaleMenuOpen ? 'rotate-180' : '')} />
                </button>

                {/* Locale Dropdown */}
                {isLocaleMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-bg-secondary border border-bg-tertiary rounded-lg shadow-xl py-1 z-50">
                    {locales.map((locale) => (
                      <button
                        key={locale.code}
                        onClick={() => {
                          changeLocale(locale.code as 'en' | 'fi');
                          setIsLocaleMenuOpen(false);
                        }}
                        className={cn(
                          'flex items-center space-x-2 w-full px-4 py-2 text-left text-sm transition-colors duration-200',
                          locale.code === currentLocale
                            ? 'text-text-primary bg-bg-tertiary'
                            : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                        )}
                      >
                        <span>{locale.flag}</span>
                        <span>{locale.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-64 bg-bg-primary border-l border-bg-tertiary shadow-2xl">
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium py-2 border-b border-bg-tertiary/50 focus:outline-none no-underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Language Selector Mobile */}
              <div className="mt-8 pt-6 border-t border-bg-tertiary/50">
                <h3 className="text-text-primary font-medium mb-3">{t('nav.language') || 'Language'}</h3>
                <div className="space-y-2">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        changeLocale(locale.code as 'en' | 'fi');
                        closeMenu();
                      }}
                      className={cn(
                        'flex items-center space-x-2 w-full p-2 rounded-md text-left transition-colors duration-200',
                        locale.code === currentLocale
                          ? 'text-text-primary bg-bg-secondary'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                      )}
                    >
                      <span>{locale.flag}</span>
                      <span>{locale.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pt-6">
                <Button 
                  size="md" 
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  {t('nav.tryFree')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}