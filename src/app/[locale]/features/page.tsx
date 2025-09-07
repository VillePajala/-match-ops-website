'use client';

import Image from 'next/image';
import { ArrowRight, Target, BarChart3, Users, Zap, Wifi, Smartphone, Shield, Clock, Trophy, Settings, Calendar, Download, Star } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Button, Container, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

export default function FeaturesPage() {
  const t = useI18n();

  const featureCategories = [
    {
      id: 'tactics',
      title: t('features.categories.tactics'),
      description: t('features.tactics.description'),
      icon: Target,
      color: 'cyan',
      features: [
        {
          icon: Settings,
          title: t('features.tactics.playerPositioning.title'),
          description: t('features.tactics.playerPositioning.description'),
          benefits: ['features.tactics.playerPositioning.benefits.0', 'features.tactics.playerPositioning.benefits.1', 'features.tactics.playerPositioning.benefits.2', 'features.tactics.playerPositioning.benefits.3'],
          image: '/features/player-positioning-live-match.png',
          caption: 'features.tactics.playerPositioning.caption'
        },
        {
          icon: Target,
          title: t('features.tactics.tacticalDrawing.title'),
          description: t('features.tactics.tacticalDrawing.description'),
          benefits: ['features.tactics.tacticalDrawing.benefits.0', 'features.tactics.tacticalDrawing.benefits.1', 'features.tactics.tacticalDrawing.benefits.2', 'features.tactics.tacticalDrawing.benefits.3'],
          image: '/features/tactical-drawing-board.png',
          caption: 'features.tactics.tacticalDrawing.caption'
        }
      ]
    },
    {
      id: 'statistics',
      title: t('features.categories.statistics'),
      description: t('features.statistics.description'),
      icon: BarChart3,
      color: 'lime',
      features: [
        {
          icon: BarChart3,
          title: t('features.statistics.competitionStats.title'),
          description: t('features.statistics.competitionStats.description'),
          benefits: ['features.statistics.competitionStats.benefits.0', 'features.statistics.competitionStats.benefits.1', 'features.statistics.competitionStats.benefits.2', 'features.statistics.competitionStats.benefits.3'],
          image: '/features/competition-statistics.png',
          caption: 'features.statistics.competitionStats.caption'
        },
        {
          icon: Trophy,
          title: t('features.statistics.playerAnalysis.title'),
          description: t('features.statistics.playerAnalysis.description'),
          benefits: ['features.statistics.playerAnalysis.benefits.0', 'features.statistics.playerAnalysis.benefits.1', 'features.statistics.playerAnalysis.benefits.2', 'features.statistics.playerAnalysis.benefits.3'],
          image: '/features/player-performance-analysis.png',
          caption: 'features.statistics.playerAnalysis.caption'
        },
        {
          icon: Clock,
          title: t('features.statistics.liveTracking.title'),
          description: t('features.statistics.liveTracking.description'),
          benefits: ['features.statistics.liveTracking.benefits.0', 'features.statistics.liveTracking.benefits.1', 'features.statistics.liveTracking.benefits.2', 'features.statistics.liveTracking.benefits.3'],
          image: '/features/live-game-tracking.png',
          caption: 'features.statistics.liveTracking.caption'
        }
      ]
    },
    {
      id: 'management',
      title: t('features.categories.management'),
      description: t('features.management.description'),
      icon: Users,
      color: 'violet',
      features: [
        {
          icon: Users,
          title: t('features.management.teamRoster.title'),
          description: t('features.management.teamRoster.description'),
          benefits: ['features.management.teamRoster.benefits.0', 'features.management.teamRoster.benefits.1', 'features.management.teamRoster.benefits.2', 'features.management.teamRoster.benefits.3'],
          image: '/screenshots/team and roster management feature.png',
          caption: 'features.management.teamRoster.caption'
        },
        {
          icon: Calendar,
          title: t('features.management.seasonTournament.title'),
          description: t('features.management.seasonTournament.description'),
          benefits: ['features.management.seasonTournament.benefits.0', 'features.management.seasonTournament.benefits.1', 'features.management.seasonTournament.benefits.2', 'features.management.seasonTournament.benefits.3'],
          image: '/screenshots/seasonandtournamentmanagement.png',
          caption: 'features.management.seasonTournament.caption'
        },
        {
          icon: Shield,
          title: t('features.management.gameStorage.title'),
          description: t('features.management.gameStorage.description'),
          benefits: ['features.management.gameStorage.benefits.0', 'features.management.gameStorage.benefits.1', 'features.management.gameStorage.benefits.2', 'features.management.gameStorage.benefits.3'],
          image: '/screenshots/Saver and load gamespng.png',
          caption: 'features.management.gameStorage.caption'
        },
        {
          icon: Star,
          title: t('features.management.playerAssessment.title'),
          description: t('features.management.playerAssessment.description'),
          benefits: ['features.management.playerAssessment.benefits.0', 'features.management.playerAssessment.benefits.1', 'features.management.playerAssessment.benefits.2', 'features.management.playerAssessment.benefits.3'],
          image: '/screenshots/palyerassesments.png',
          caption: 'features.management.playerAssessment.caption'
        }
      ]
    }
  ] as const;

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        bg: 'bg-cyan-400/10',
        border: 'border-cyan-400/20',
        text: 'text-cyan-400',
        hover: 'group-hover:border-cyan-400/50'
      },
      lime: {
        bg: 'bg-lime-400/10', 
        border: 'border-lime-400/20',
        text: 'text-lime-400',
        hover: 'group-hover:border-lime-400/50'
      },
      violet: {
        bg: 'bg-violet-400/10',
        border: 'border-violet-400/20', 
        text: 'text-violet-400',
        hover: 'group-hover:border-violet-400/50'
      }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-body font-bold mb-6 text-slate-100">
              {t('features.title')}
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              {t('features.subtitle')}
            </p>
            <Button size="lg" className="mb-12">
              {t('features.buttons.tryAllFeatures')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <Section key={category.id} className={categoryIndex % 2 === 1 ? 'bg-slate-900/50' : ''}>
          <Container>
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(category.color).bg} ${getColorClasses(category.color).border} border mb-6`}>
                <category.icon className={`w-8 h-8 ${getColorClasses(category.color).text}`} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-body font-bold text-slate-100 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto font-body">
                {category.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-16">
              {category.features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Feature Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${getColorClasses(category.color).bg}`}>
                        <feature.icon className={`w-6 h-6 ${getColorClasses(category.color).text}`} />
                      </div>
                      <h3 className="text-2xl font-body font-bold text-slate-100">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-slate-300 mb-6 font-body leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-8">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${getColorClasses(category.color).bg.replace('/10', '')}`} />
                          <span className="text-slate-300 font-body">{t(benefit)}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="md">
                      {t('features.buttons.learnMore')}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Feature Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {feature.image ? (
                      <div className="flex justify-center">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 group hover:border-slate-600/50 transition-colors duration-300">
                          <div className="bg-black rounded-xl overflow-hidden w-72 mx-auto">
                            <Image
                              src={feature.image}
                              alt={t(feature.caption)}
                              width={288}
                              height={624}
                              className="w-full h-auto block"
                              style={{ imageRendering: 'crisp-edges' }}
                            />
                          </div>
                          <p className="text-slate-300 text-xs mt-2 text-center font-body">{t(feature.caption)}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-800 border border-slate-600 rounded-xl p-8 aspect-video flex items-center justify-center group hover:border-slate-500 transition-colors duration-300">
                        <div className="text-center">
                          <Smartphone className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(category.color).text} group-hover:scale-110 transition-transform duration-300`} />
                          <p className="text-slate-400 font-body">{feature.title} Screenshot</p>
                          <p className="text-slate-500 text-sm mt-2 font-body">{t('features.buttons.comingSoon')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Technical Specs Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              {t('features.technical.title')}
            </h2>
            <p className="text-xl text-slate-300 font-body">
              {t('features.technical.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-cyan-400 transition-colors duration-300">
                <Wifi className="w-8 h-8" />
              </CardIcon>
              <CardTitle>{t('features.technical.offline.title')}</CardTitle>
              <CardDescription>
                {t('features.technical.offline.description')}
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-lime-400 transition-colors duration-300">
                <Zap className="w-8 h-8" />
              </CardIcon>
              <CardTitle>{t('features.technical.fast.title')}</CardTitle>
              <CardDescription>
                {t('features.technical.fast.description')}
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-violet-400 transition-colors duration-300">
                <Shield className="w-8 h-8" />
              </CardIcon>
              <CardTitle>{t('features.technical.secure.title')}</CardTitle>
              <CardDescription>
                {t('features.technical.secure.description')}
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-orange-400 transition-colors duration-300">
                <Smartphone className="w-8 h-8" />
              </CardIcon>
              <CardTitle>{t('features.technical.pwa.title')}</CardTitle>
              <CardDescription>
                {t('features.technical.pwa.description')}
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-green-400 transition-colors duration-300">
                <Download className="w-8 h-8" />
              </CardIcon>
              <CardTitle>{t('features.technical.dataPortability.title')}</CardTitle>
              <CardDescription>
                {t('features.technical.dataPortability.description')}
              </CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-indigo-600 to-violet-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-body font-bold mb-4">
              {t('features.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
              {t('features.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-indigo-600 hover:bg-gray-100">
                {t('features.cta.tryNow')}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                {t('features.cta.watchDemo')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}