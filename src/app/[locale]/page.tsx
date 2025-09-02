'use client';

import Link from 'next/link';
import { ArrowRight, Play, Zap, BarChart3, Users, Target, Wifi, Smartphone } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Button, Container, Section, Card, CardIcon, CardTitle, CardDescription, Logo } from '@/components/ui';

export default function HomePage() {
  const t = useI18n();

  const features = [
    {
      icon: Target,
      title: t('home.features.interactive.title'),
      description: t('home.features.interactive.description')
    },
    {
      icon: BarChart3,
      title: t('home.features.statistics.title'),
      description: t('home.features.statistics.description')
    },
    {
      icon: Users,
      title: t('home.features.management.title'),
      description: t('home.features.management.description')
    },
    {
      icon: Zap,
      title: t('home.features.realtime.title'),
      description: t('home.features.realtime.description')
    },
    {
      icon: BarChart3,
      title: t('home.features.analysis.title'),
      description: t('home.features.analysis.description')
    },
    {
      icon: Wifi,
      title: t('home.features.offline.title'),
      description: t('home.features.offline.description')
    }
  ];

  const steps = [
    {
      number: '01',
      title: t('home.howItWorks.step1.title'),
      description: t('home.howItWorks.step1.description')
    },
    {
      number: '02',
      title: t('home.howItWorks.step2.title'),
      description: t('home.howItWorks.step2.description')
    },
    {
      number: '03',
      title: t('home.howItWorks.step3.title'),
      description: t('home.howItWorks.step3.description')
    },
    {
      number: '04',
      title: t('home.howItWorks.step4.title'),
      description: t('home.howItWorks.step4.description')
    }
  ];

  const stats = [
    { value: '1,000+', label: t('home.hero.statsGames') },
    { value: '500+', label: t('home.hero.statsCoaches') },
    { value: '50+', label: t('home.hero.statsFeatures') }
  ];

  return (
    <>
      {/* Skip Link */}
      <Link href="#main-content" className="skip-link">
        Skip to main content
      </Link>

      {/* Hero Section */}
      <Section variant="hero" className="relative overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary/20 to-bg-primary" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl animate-pulse animation-delay-3000" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Title */}
            <Logo className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 text-shadow-lg" />
            
            {/* Hero Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-6 font-body font-semibold">
              {t('home.hero.subtitle')}
            </h2>
            
            {/* Hero Description */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-body">
              {t('home.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="xl" 
                variant="primary"
                className="group shadow-indigo"
              >
                {t('home.hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="xl"
                className="group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {t('home.hero.ctaSecondary')}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-2 font-body">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm font-body uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* App Preview Placeholder */}
      <Section className="relative -mt-16 z-20">
        <Container>
          <div className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl p-8 shadow-2xl border border-slate-600/50">
            <div className="aspect-video bg-bg-primary rounded-xl flex items-center justify-center border border-slate-600">
              <div className="text-center">
                <Smartphone className="w-16 h-16 text-accent-cyan mx-auto mb-4" />
                <p className="text-text-secondary font-body">App Preview Coming Soon</p>
                <p className="text-text-muted text-sm mt-2 font-body">Interactive demo will be available here</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section id="main-content" spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="feature" className="group">
                <CardIcon className="group-hover:text-accent-lime transition-colors duration-300">
                  <feature.icon className="w-8 h-8" />
                </CardIcon>
                <CardTitle className="group-hover:text-accent-cyan transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gradient-to-b from-transparent to-bg-secondary/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
              {t('home.howItWorks.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-indigo to-primary-violet rounded-full text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
                
                {/* Connection Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-indigo/50 to-transparent transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Proof Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-text-secondary">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          
          <Card variant="testimonial" className="max-w-3xl mx-auto">
            <blockquote className="text-lg sm:text-xl text-text-primary italic mb-6 leading-relaxed">
              "{t('home.testimonials.placeholder.quote')}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-lime rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {t('home.testimonials.placeholder.author').charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-text-primary">
                  {t('home.testimonials.placeholder.author')}
                </div>
                <div className="text-text-secondary text-sm">
                  {t('home.testimonials.placeholder.team')}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-r from-primary-indigo to-primary-violet">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Coaching?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of coaches who are already using MatchOps Local to improve their game management.
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary-indigo hover:bg-gray-100"
            >
              {t('home.hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}