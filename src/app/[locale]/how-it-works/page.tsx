'use client';

import Link from 'next/link';
import { ArrowRight, Download, Users, Play, Trophy, CheckCircle, Smartphone, Wifi, Clock, Target } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Button, Container, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

export default function HowItWorksPage() {
  const t = useI18n();

  const steps = [
    {
      number: '01',
      title: 'Install the App',
      description: 'Download MatchOps Local as a Progressive Web App directly to your device. No app store required.',
      icon: Download,
      details: [
        'Works on any device with a web browser',
        'Installs like a native app',
        'No app store downloads needed',
        'Automatic updates'
      ],
      tip: 'Pro Tip: Install on both your phone and tablet for maximum flexibility'
    },
    {
      number: '02',
      title: 'Set Up Your Team',
      description: 'Add your players, create formations, and organize your roster for the season.',
      icon: Users,
      details: [
        'Import player information',
        'Create custom formations',
        'Set player positions and roles',
        'Add parent contact information'
      ],
      tip: 'Quick Start: Use our formation templates to get started immediately'
    },
    {
      number: '03',
      title: 'Plan Your First Game',
      description: 'Use our tactical tools to prepare your strategy and game plan.',
      icon: Target,
      details: [
        'Choose your starting formation',
        'Plan substitutions and rotations',
        'Set tactical instructions',
        'Prepare for different scenarios'
      ],
      tip: 'Game Day Ready: Plan substitutions in advance to save time during matches'
    },
    {
      number: '04',
      title: 'Manage Live Games',
      description: 'Track events, manage substitutions, and capture statistics in real-time.',
      icon: Play,
      details: [
        'Log goals, cards, and substitutions',
        'Track player performance',
        'Monitor playing time',
        'Take tactical notes'
      ],
      tip: 'Stay Focused: The app works offline so you can focus on coaching without connectivity worries'
    },
    {
      number: '05',
      title: 'Analyze & Improve',
      description: 'Review game statistics and performance data to improve your team.',
      icon: Trophy,
      details: [
        'View detailed match reports',
        'Track player development',
        'Identify improvement areas',
        'Share insights with parents'
      ],
      tip: 'Long-term Success: Regular analysis leads to better coaching decisions and player development'
    }
  ];

  const quickStartChecklist = [
    'Download and install MatchOps Local',
    'Add your team roster (players and positions)',
    'Create your preferred formation',
    'Plan your first game strategy',
    'Practice using the interface before match day',
    'Set up substitution rotations',
    'Configure parent communication preferences',
    'Test offline functionality'
  ];

  const useCases = [
    {
      title: 'Youth Soccer Coach',
      scenario: 'Managing U12 competitive team with equal playing time requirements',
      solution: 'Use automated substitution planning to ensure fair playing time while maintaining competitive formations.',
      icon: Users,
      color: 'cyan'
    },
    {
      title: 'Club Coaching Director',
      scenario: 'Overseeing multiple teams and wanting consistent coaching standards',
      solution: 'Deploy MatchOps Local across all teams for standardized tactics, formations, and performance tracking.',
      icon: Trophy,
      color: 'lime'
    },
    {
      title: 'Volunteer Coach',
      scenario: 'New to coaching and needing guidance on game management',
      solution: 'Follow built-in best practices for formations, substitutions, and tactical planning.',
      icon: CheckCircle,
      color: 'violet'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      lime: 'text-lime-400 bg-lime-400/10 border-lime-400/20',
      violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20'
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
              {t('howItWorks.title')}
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              {t('howItWorks.subtitle')}
            </p>
            <Button size="lg" className="mb-12">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Main Steps */}
      <Section className="relative">
        <Container>
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-slate-600 to-transparent hidden lg:block" />
                )}
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Step Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-bold text-xl font-display">
                        {step.number}
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold text-slate-100 mb-2">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-slate-300 mb-8 font-body leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3 mb-8">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                          <span className="text-slate-300 font-body">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pro Tip */}
                    <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="text-slate-100 font-semibold mb-1 font-body">Pro Tip</h4>
                          <p className="text-slate-300 text-sm font-body">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-slate-800 border border-slate-600 rounded-xl p-8 aspect-video flex items-center justify-center group hover:border-slate-500 transition-colors duration-300">
                      <div className="text-center">
                        <step.icon className="w-20 h-20 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-slate-400 font-body text-lg">{step.title}</p>
                        <p className="text-slate-500 text-sm mt-2 font-body">Interactive Guide Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Start Checklist */}
      <Section className="bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-100 mb-4">
                Quick Start Checklist
              </h2>
              <p className="text-xl text-slate-300 font-body">
                Follow this checklist to get up and running in under 30 minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {quickStartChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-600 group hover:border-slate-500 transition-colors duration-300">
                  <div className="flex items-center justify-center w-6 h-6 bg-slate-700 rounded border border-slate-600 group-hover:bg-lime-400 group-hover:border-lime-400 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <span className="text-slate-300 font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-100 mb-4">
              Real Coaching Scenarios
            </h2>
            <p className="text-xl text-slate-300 font-body max-w-2xl mx-auto">
              See how different types of coaches use MatchOps Local to solve their unique challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group">
                <div className={`p-4 rounded-lg mb-6 ${getColorClasses(useCase.color)}`}>
                  <useCase.icon className="w-8 h-8" />
                </div>
                <CardTitle className="mb-4">{useCase.title}</CardTitle>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-2 font-body">Scenario:</h4>
                    <p className="text-slate-400 text-sm font-body">{useCase.scenario}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-2 font-body">Solution:</h4>
                    <p className="text-slate-300 font-body">{useCase.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Requirements */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-100 mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-slate-300 font-body">
              MatchOps Local works on virtually any modern device
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-cyan-400 transition-colors duration-300">
                <Smartphone className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Any Device</CardTitle>
              <CardDescription>
                Works on smartphones, tablets, laptops, and desktops. iOS, Android, Windows, Mac, Linux.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-lime-400 transition-colors duration-300">
                <Wifi className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Internet Optional</CardTitle>
              <CardDescription>
                Full functionality offline. Internet only needed for initial installation and updates.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-violet-400 transition-colors duration-300">
                <Clock className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Always Updated</CardTitle>
              <CardDescription>
                Automatic updates ensure you always have the latest features and improvements.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
              Join thousands of coaches who have transformed their game management with MatchOps Local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-indigo-600 hover:bg-gray-100">
                Install Now
                <Download className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Watch Tutorial
                <Play className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}