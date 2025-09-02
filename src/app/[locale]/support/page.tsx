'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronRight, BookOpen, MessageCircle, Download, Mail, HelpCircle, PlayCircle, FileText, Users, Settings, Smartphone } from 'lucide-react';
import { useI18n } from '@/locales/client';
import { Button, Container, Section, Card, CardTitle, CardDescription } from '@/components/ui';
import { StructuredData } from '@/components/StructuredData';
import { generateFAQSchema } from '@/lib/seo';

export default function SupportPage() {
  const t = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpen },
    { id: 'getting-started', name: t('support.categories.gettingStarted'), icon: PlayCircle },
    { id: 'features', name: t('support.categories.features'), icon: Settings },
    { id: 'troubleshooting', name: t('support.categories.troubleshooting'), icon: HelpCircle },
    { id: 'faq', name: t('support.categories.faq'), icon: MessageCircle }
  ];

  const faqItems = [
    {
      category: 'getting-started',
      question: 'How do I install MatchOps Local?',
      answer: 'MatchOps Local is a Progressive Web App (PWA). Simply visit our website on any device, click "Install" when prompted, and the app will be added to your device like a native app. No app store required!'
    },
    {
      category: 'getting-started',
      question: 'Do I need an internet connection to use the app?',
      answer: 'No! MatchOps Local works completely offline once installed. You only need internet for the initial installation and optional cloud sync features. This makes it perfect for use on any soccer field.'
    },
    {
      category: 'getting-started',
      question: 'How do I add players to my team?',
      answer: 'Go to Team Management, click "Add Player", and enter the player details. You can add names, positions, jersey numbers, contact information, and medical notes. You can also import players from a CSV file.'
    },
    {
      category: 'features',
      question: 'Can I create custom formations?',
      answer: 'Yes! Use the Formation Builder to create custom formations. You can drag players to positions, save formations for reuse, and even create formation variations for different game situations.'
    },
    {
      category: 'features',
      question: 'How does the substitution manager work?',
      answer: 'The substitution manager helps ensure equal playing time by tracking each player\'s minutes and suggesting optimal substitutions. You can set rules for minimum playing time and position preferences.'
    },
    {
      category: 'features',
      question: 'Can I track statistics during games?',
      answer: 'Absolutely! Track goals, assists, cards, substitutions, and more during live games. All statistics are automatically calculated and can be viewed in detailed reports after the match.'
    },
    {
      category: 'troubleshooting',
      question: 'The app isn\'t installing on my device',
      answer: 'Make sure you\'re using a modern browser (Chrome, Firefox, Safari, Edge). Clear your browser cache and try again. If issues persist, try accessing the site in incognito/private mode first.'
    },
    {
      category: 'troubleshooting',
      question: 'I lost my team data, can I recover it?',
      answer: 'If you enabled cloud sync, your data is automatically backed up and can be restored. Without cloud sync, data is stored locally on your device. We recommend enabling cloud sync as a backup.'
    },
    {
      category: 'troubleshooting',
      question: 'The app is running slowly',
      answer: 'Try clearing your browser cache and restarting the app. If you have many seasons of data, consider archiving older seasons. The app is optimized for current season data.'
    },
    {
      category: 'faq',
      question: 'Is MatchOps Local really free?',
      answer: 'Yes! MatchOps Local is completely free for individual coaches. We believe every coach should have access to professional-grade tools regardless of budget.'
    },
    {
      category: 'faq',
      question: 'What devices are supported?',
      answer: 'MatchOps Local works on any device with a modern web browser - smartphones, tablets, laptops, and desktops. It works on iOS, Android, Windows, Mac, and Linux.'
    },
    {
      category: 'faq',
      question: 'Can multiple coaches use the same team data?',
      answer: 'Yes, with cloud sync enabled, you can share team data across multiple devices and coaches. This is perfect for coaching staff who need to collaborate.'
    }
  ];

  const documentationSections = [
    {
      title: 'Getting Started',
      description: 'Everything you need to know to start using MatchOps Local',
      icon: PlayCircle,
      color: 'cyan',
      articles: [
        'Installation Guide',
        'Setting Up Your First Team',
        'Creating Your First Formation',
        'Planning Your First Game'
      ]
    },
    {
      title: 'Team Management',
      description: 'Managing players, rosters, and team information',
      icon: Users,
      color: 'lime',
      articles: [
        'Adding Players to Your Roster',
        'Managing Player Information',
        'Setting Up Positions and Roles',
        'Parent Communication Tools'
      ]
    },
    {
      title: 'Game Day Features',
      description: 'Tools for managing live games and match day operations',
      icon: Smartphone,
      color: 'violet',
      articles: [
        'Live Game Tracking',
        'Managing Substitutions',
        'Recording Game Events',
        'Using the Digital Team Sheet'
      ]
    },
    {
      title: 'Statistics & Reports',
      description: 'Understanding and using performance data',
      icon: FileText,
      color: 'orange',
      articles: [
        'Reading Match Reports',
        'Player Performance Analysis',
        'Season Statistics Overview',
        'Exporting Data'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      lime: 'text-lime-400 bg-lime-400/10 border-lime-400/20',
      violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
      orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const filteredFAQs = faqItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (searchQuery === '' || 
     item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-body font-bold mb-6 text-slate-100">
              {t('support.title')}
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              {t('support.subtitle')}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder={t('support.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section className="relative -mt-16 z-20">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center group cursor-pointer hover:border-cyan-400/50">
              <div className="p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20 w-fit mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
              <CardTitle className="mb-2">Documentation</CardTitle>
              <CardDescription>Comprehensive guides and tutorials</CardDescription>
            </Card>

            <Card className="text-center group cursor-pointer hover:border-lime-400/50">
              <div className="p-4 rounded-lg bg-lime-400/10 border border-lime-400/20 w-fit mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-lime-400" />
              </div>
              <CardTitle className="mb-2">Community</CardTitle>
              <CardDescription>Connect with other coaches</CardDescription>
            </Card>

            <Card className="text-center group cursor-pointer hover:border-violet-400/50">
              <div className="p-4 rounded-lg bg-violet-400/10 border border-violet-400/20 w-fit mx-auto mb-4">
                <Download className="w-8 h-8 text-violet-400" />
              </div>
              <CardTitle className="mb-2">Downloads</CardTitle>
              <CardDescription>Guides, templates, and resources</CardDescription>
            </Card>

            <Card className="text-center group cursor-pointer hover:border-orange-400/50">
              <div className="p-4 rounded-lg bg-orange-400/10 border border-orange-400/20 w-fit mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-400" />
              </div>
              <CardTitle className="mb-2">Contact</CardTitle>
              <CardDescription>Get direct help from our team</CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Documentation Sections */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Documentation
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Complete guides to help you master MatchOps Local
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <Card key={index} className="group">
                <div className={`p-4 rounded-lg mb-6 w-fit ${getColorClasses(section.color)}`}>
                  <section.icon className="w-8 h-8" />
                </div>
                <CardTitle className="mb-4">{section.title}</CardTitle>
                <CardDescription className="mb-6">
                  {section.description}
                </CardDescription>
                <div className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <Link
                      key={articleIndex}
                      href="#"
                      className="flex items-center gap-3 text-slate-300 hover:text-slate-100 transition-colors duration-200 font-body"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                      {article}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Quick answers to common questions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 font-body ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400'
                    : 'bg-slate-800 border-slate-600 text-slate-300 hover:border-slate-500'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-600 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-100 font-body">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-slate-600">
                    <p className="text-slate-300 leading-relaxed font-body mt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400 font-body">No results found for &ldquo;{searchQuery}&rdquo;</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
                  {t('support.contact.title')}
                </h2>
                <p className="text-lg text-slate-300 font-body">
                  {t('support.contact.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20 w-fit mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Email Support</h3>
                  <p className="text-slate-300 text-sm mb-4 font-body">Get detailed help via email</p>
                  <Button variant="outline" size="sm">
                    Send Email
                  </Button>
                </div>

                <div className="text-center">
                  <div className="p-4 rounded-lg bg-lime-400/10 border border-lime-400/20 w-fit mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-lime-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Live Chat</h3>
                  <p className="text-slate-300 text-sm mb-4 font-body">Quick answers from our team</p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>

                <div className="text-center">
                  <div className="p-4 rounded-lg bg-violet-400/10 border border-violet-400/20 w-fit mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Schedule Call</h3>
                  <p className="text-slate-300 text-sm mb-4 font-body">Personal onboarding session</p>
                  <Button variant="outline" size="sm">
                    Book Call
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Structured Data */}
      <StructuredData data={generateFAQSchema(faqItems.map(item => ({
        question: item.question,
        answer: item.answer
      })))} />
    </>
  );
}