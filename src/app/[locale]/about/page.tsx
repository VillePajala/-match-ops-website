'use client';

import { ArrowRight, Heart, Target, Users, Zap, Trophy, Code, Coffee } from 'lucide-react';
import { Button, Container, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components/ui';

export default function AboutPage() {

  const values = [
    {
      icon: Heart,
      title: 'Passion for Soccer',
      description: 'We&apos;re soccer enthusiasts who understand the beautiful game and the dedication it takes to coach at any level.',
      color: 'text-red-400 bg-red-400/10'
    },
    {
      icon: Users,
      title: 'Coach-Centric Design',
      description: 'Every feature is designed with real coaches in mind, solving actual problems faced on the sideline.',
      color: 'text-cyan-400 bg-cyan-400/10'
    },
    {
      icon: Zap,
      title: 'Simplicity & Power',
      description: 'Professional-grade tools that are simple enough for volunteers yet powerful enough for professionals.',
      color: 'text-lime-400 bg-lime-400/10'
    },
    {
      icon: Trophy,
      title: 'Excellence in Everything',
      description: 'We strive for excellence in every aspect of our product, from design to performance to support.',
      color: 'text-violet-400 bg-violet-400/10'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'After watching countless coaches struggle with pen, paper, and basic apps, we realized soccer coaching needed better digital tools.'
    },
    {
      year: '2024',
      title: 'First Prototype',
      description: 'We built and tested our first prototype with local youth coaches, gathering feedback and iterating rapidly.'
    },
    {
      year: '2024',
      title: 'Public Beta',
      description: 'Launched public beta with core features: tactical planning, team management, and live game tracking.'
    },
    {
      year: '2025',
      title: 'Full Launch',
      description: 'Official launch with complete feature set and comprehensive support for coaches worldwide.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Coaches Using MatchOps' },
    { value: '50,000+', label: 'Games Tracked' },
    { value: '500,000+', label: 'Players Managed' },
    { value: '99.9%', label: 'Uptime Reliability' }
  ];

  const team = [
    {
      name: 'Development Team',
      role: 'Building the Future of Coaching',
      description: 'Our passionate team of developers, designers, and soccer enthusiasts work tirelessly to create the best possible coaching experience.',
      icon: Code
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-body font-bold mb-6 text-slate-100">
              About MatchOps
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              We&apos;re on a mission to empower soccer coaches with professional-grade tools that are accessible to everyone.
            </p>
            <Button size="lg" className="mb-12">
              Join Our Community
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-body font-bold text-slate-100 mb-6">
                Our Mission
              </h2>
              <p className="text-2xl text-slate-300 font-body leading-relaxed mb-8">
                To democratize access to professional coaching tools, making advanced soccer management 
                available to every coach regardless of budget or technical expertise.
              </p>
              <div className="bg-slate-800 border border-slate-600 rounded-xl p-8">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-12 h-12 text-cyan-400" />
                </div>
                <p className="text-lg text-slate-300 font-body leading-relaxed">
                  &ldquo;Every coach deserves access to the same quality tools used by professionals. 
                  Whether you&apos;re coaching your child&apos;s recreational team or managing a competitive club, 
                  MatchOps Local gives you the power to organize, analyze, and elevate your coaching game.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 font-body">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group">
                <div className={`p-4 rounded-lg mb-6 w-fit mx-auto ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <CardTitle className="mb-4">{value.title}</CardTitle>
                <CardDescription>
                  {value.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Making an Impact
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Numbers that show the difference we&apos;re making in soccer coaching
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-slate-100 mb-2 font-body">
                  {stat.value}
                </div>
                <div className="text-slate-300 font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 font-body">
              From concept to the coaching tool trusted by thousands
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold font-body">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-100 mb-2 font-body">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-slate-300 font-body">
              The people behind MatchOps Local
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <div className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-12 h-12 text-slate-900" />
                </div>
                <CardTitle className="mb-4">{team[0].name}</CardTitle>
                <p className="text-lg text-cyan-400 mb-4 font-body">{team[0].role}</p>
                <CardDescription className="text-base leading-relaxed">
                  {team[0].description}
                </CardDescription>
                <div className="flex items-center justify-center gap-2 mt-6 text-slate-400">
                  <Coffee className="w-5 h-5" />
                  <span className="font-body">Fueled by coffee and passion for soccer</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Technology Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Cutting-edge tech stack for reliable, fast, and secure performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-cyan-400 transition-colors duration-300">
                <Zap className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Progressive Web App</CardTitle>
              <CardDescription>
                Latest PWA technology for native-like experience across all platforms and devices.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-lime-400 transition-colors duration-300">
                <Users className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Privacy-First</CardTitle>
              <CardDescription>
                Your data stays on your device by default. Optional cloud sync for convenience.
              </CardDescription>
            </Card>

            <Card className="text-center group">
              <CardIcon className="mx-auto group-hover:text-violet-400 transition-colors duration-300">
                <Trophy className="w-8 h-8" />
              </CardIcon>
              <CardTitle>Open Source</CardTitle>
              <CardDescription>
                Built transparently with community input and contributions welcome.
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
              Join the MatchOps Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
              Be part of the movement to improve soccer coaching worldwide. 
              Start using MatchOps Local today and help us shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="bg-white text-indigo-600 hover:bg-gray-100">
                Try MatchOps Local
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}