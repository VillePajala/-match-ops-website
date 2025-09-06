'use client';

import Image from 'next/image';
import { Zap, BarChart3, Target, Wifi, ChevronDown, Users, Calendar, Save } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Container, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

export default function HomePage() {
  const t = useI18n();

  const features = [
    {
      icon: Target,
      title: t('home.features.interactive.title'),
      description: t('home.features.interactive.description'),
      screenshot: '/screenshots/tacticalview.png',
      alt: 'Interactive tactical board showing player positioning and field management'
    },
    {
      icon: BarChart3,
      title: t('home.features.statistics.title'),
      description: t('home.features.statistics.description'),
      screenshot: '/screenshots/comptetitionstats.png',
      alt: 'Competition statistics dashboard showing team performance data'
    },
    {
      icon: Zap,
      title: t('home.features.realtime.title'),
      description: t('home.features.realtime.description'),
      screenshot: '/screenshots/livetracking1.png',
      alt: 'Live game tracking interface showing real-time match events'
    },
    {
      icon: BarChart3,
      title: t('home.features.analysis.title'),
      description: t('home.features.analysis.description'),
      screenshot: '/screenshots/playerstats.png',
      alt: 'Player performance analysis with detailed statistics'
    },
    {
      icon: Users,
      title: t('home.features.teamManagement.title'),
      description: t('home.features.teamManagement.description'),
      screenshot: '/screenshots/team and roster management feature.png',
      alt: 'Team and roster management interface showing player profiles with names, nicknames, jersey numbers and skill assessments'
    },
    {
      icon: Calendar,
      title: t('home.features.seasonManagement.title'),
      description: t('home.features.seasonManagement.description'),
      screenshot: '/screenshots/seasonandtournamentmanagement.png',
      alt: 'Season and tournament management dashboard showing season creation, tournament setup and game organization'
    },
    {
      icon: Save,
      title: t('home.features.gameStorage.title'),
      description: t('home.features.gameStorage.description'),
      screenshot: '/screenshots/Saver and load gamespng.png',
      alt: 'Game save and load functionality showing one-click saves, auto-resume and complete game state preservation'
    },
    {
      icon: Wifi,
      title: t('home.features.offline.title'),
      description: t('home.features.offline.description'),
      screenshot: null, // Need offline capability screenshot
      alt: 'App interface showing offline functionality'
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


  return (
    <>
      {/* Hero Section */}
      <Section variant="content" spacing="xl" className="relative overflow-hidden bg-bg-primary min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800/20 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Title */}
            <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg">
              <div className="text-holographic animate-holographic">
                <span className="inline sm:hidden">
                  <span className="block">MatchOps</span>
                  <span className="block">Local</span>
                </span>
                <span className="hidden sm:inline">MatchOps Local</span>
              </div>
            </div>
            
            {/* Hero Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-text-primary mb-4 font-body font-semibold">
              {t('home.hero.subtitle')}
            </h2>
            
            {/* Hero Description */}
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed font-body">
              {t('home.hero.description')}
            </p>
            
            {/* Subtle scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 text-slate-400/60" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MatchOps Local App Preview */}
      <Section className="relative -mt-40 sm:-mt-52 lg:-mt-60 z-20">
        <Container>
          <div className="text-center">
            <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-slate-700/50">
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-xs mx-auto bg-black">
                <Image 
                  src="/images/screenshots/app/player-positioning-kultsa-pepo.png" 
                  alt="MatchOps Local tactical board showing live match between Kultsa and PePo Purppura with player positions and real-time score 2-4"
                  width={375}
                  height={812}
                  className="w-full h-auto block"
                  priority
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <div className="mt-4">
                <p className="text-slate-100 font-semibold text-lg font-body">{t('home.hero.appPreview.title')}</p>
                <p className="text-slate-300 text-sm mt-1 font-body">{t('home.hero.appPreview.subtitle')}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-body font-bold text-text-primary mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="feature" className="group">
                {feature.screenshot && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image 
                      src={feature.screenshot}
                      alt={feature.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-body font-bold text-text-primary mb-4">
              {t('home.howItWorks.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
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
                  <div className="hidden lg:block pointer-events-none absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-600/50 to-transparent transform translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </>
  );
}