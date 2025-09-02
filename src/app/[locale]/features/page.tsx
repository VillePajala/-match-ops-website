'use client';

import Link from 'next/link';
import { ArrowRight, Target, BarChart3, Users, Zap, Wifi, Smartphone, Shield, Clock, Trophy, Settings, FileText, Calendar } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Button, Container, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

export default function FeaturesPage() {
  const t = useI18n();

  const featureCategories = [
    {
      id: 'tactics',
      title: t('features.categories.tactics'),
      description: 'Plan formations, draw plays, and create winning strategies',
      icon: Target,
      color: 'cyan',
      features: [
        {
          icon: Target,
          title: 'Interactive Soccer Field',
          description: 'Touch-friendly field interface for positioning players and drawing tactical plays.',
          benefits: ['Drag & drop player positioning', 'Draw tactical lines and arrows', 'Save formations for reuse', 'Real-time field visualization'],
          image: '/features/tactical-field.png'
        },
        {
          icon: Settings,
          title: 'Formation Builder',
          description: 'Create and customize formations with detailed player roles and responsibilities.',
          benefits: ['Pre-built formation templates', 'Custom formation creation', 'Player role assignments', 'Formation transition planning'],
          image: '/features/formations.png'
        },
        {
          icon: FileText,
          title: 'Game Plans',
          description: 'Develop comprehensive game strategies with set pieces and tactical notes.',
          benefits: ['Set piece planning', 'Opposition analysis', 'Tactical notes', 'Strategy sharing'],
          image: '/features/game-plans.png'
        }
      ]
    },
    {
      id: 'statistics',
      title: t('features.categories.statistics'),
      description: 'Track performance with detailed analytics and reporting',
      icon: BarChart3,
      color: 'lime',
      features: [
        {
          icon: BarChart3,
          title: 'Advanced Statistics',
          description: 'Comprehensive performance tracking with detailed player and team analytics.',
          benefits: ['Individual player stats', 'Team performance metrics', 'Historical comparisons', 'Export capabilities'],
          image: '/features/statistics.png'
        },
        {
          icon: Trophy,
          title: 'Performance Analysis',
          description: 'Deep insights into team and player performance trends over time.',
          benefits: ['Performance trends', 'Heat maps', 'Comparative analysis', 'Improvement tracking'],
          image: '/features/analysis.png'
        },
        {
          icon: Clock,
          title: 'Live Game Tracking',
          description: 'Real-time event tracking during matches with instant statistics updates.',
          benefits: ['Live event logging', 'Real-time stats', 'Instant feedback', 'Match timeline'],
          image: '/features/live-tracking.png'
        }
      ]
    },
    {
      id: 'management',
      title: t('features.categories.management'),
      description: 'Organize teams, manage players, and coordinate game day',
      icon: Users,
      color: 'violet',
      features: [
        {
          icon: Users,
          title: 'Team Management',
          description: 'Complete roster management with player profiles and contact information.',
          benefits: ['Player profiles', 'Contact management', 'Medical information', 'Parent communication'],
          image: '/features/team-management.png'
        },
        {
          icon: Calendar,
          title: 'Substitution Manager',
          description: 'Smart substitution planning with playing time tracking and rotation management.',
          benefits: ['Equal playing time', 'Smart rotations', 'Position-based subs', 'Playing time reports'],
          image: '/features/substitutions.png'
        },
        {
          icon: Shield,
          title: 'Game Day Tools',
          description: 'Essential sideline tools for managing matches effectively.',
          benefits: ['Digital team sheet', 'Injury tracking', 'Weather conditions', 'Match notes'],
          image: '/features/game-day.png'
        }
      ]
    }
  ];

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-100">
              {t('features.title')}
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              {t('features.subtitle')}
            </p>
            <Button size="lg" className="mb-12">
              Try All Features Free
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
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 mb-4">
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
                      <h3 className="text-2xl font-display font-bold text-slate-100">
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
                          <span className="text-slate-300 font-body">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="md">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Feature Image Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-slate-800 border border-slate-600 rounded-xl p-8 aspect-video flex items-center justify-center group hover:border-slate-500 transition-colors duration-300">
                      <div className="text-center">
                        <Smartphone className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(category.color).text} group-hover:scale-110 transition-transform duration-300`} />
                        <p className="text-slate-400 font-body">{feature.title} Screenshot</p>
                        <p className="text-slate-500 text-sm mt-2 font-body">Coming Soon</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-display font-bold text-slate-100 mb-4">
              Technical Features
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Built with performance and reliability in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-cyan-400 transition-colors duration-300">
                <Wifi className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Works Offline</CardTitle>
              <CardDescription>
                Full functionality without internet connection. Perfect for any playing field.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-lime-400 transition-colors duration-300">
                <Zap className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Optimized performance for instant response during critical game moments.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-violet-400 transition-colors duration-300">
                <Shield className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your team data stays private with local storage and optional cloud sync.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-indigo-600 to-violet-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Elevate Your Coaching?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
              Experience all these features in action. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-indigo-600 hover:bg-gray-100">
                Try Free Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}