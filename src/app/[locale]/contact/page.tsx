'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Calendar, Clock, Send, CheckCircle } from 'lucide-react';
import { Button, Container, Section, Card, CardTitle, CardDescription } from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'support', name: 'Technical Support' },
    { id: 'feature', name: 'Feature Request' },
    { id: 'partnership', name: 'Partnership' },
    { id: 'press', name: 'Press Inquiry' }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help and responses within 24 hours',
      contact: 'support@matchops.local',
      color: 'cyan'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Quick questions and immediate assistance',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'lime'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Personal onboarding and in-depth support',
      contact: 'Book 30-minute session',
      color: 'violet'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      lime: 'text-lime-400 bg-lime-400/10 border-lime-400/20',
      violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  if (isSubmitted) {
    return (
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-lime-400" />
            </div>
            <h1 className="text-4xl font-body font-bold mb-6 text-slate-100">
              Message Sent Successfully!
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              Thank you for contacting us. We&apos;ve received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-body font-bold mb-6 text-slate-100">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              Have questions about MatchOps Local? Need help getting started? We&apos;re here to help you succeed.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section className="relative -mt-16 z-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center group cursor-pointer hover:border-opacity-50" 
                    style={{ borderColor: `var(--color-${method.color})` }}>
                <div className={`p-4 rounded-lg w-fit mx-auto mb-6 ${getColorClasses(method.color)}`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <CardTitle className="mb-4">{method.title}</CardTitle>
                <CardDescription className="mb-4">
                  {method.description}
                </CardDescription>
                <p className={`font-body font-semibold ${method.color === 'cyan' ? 'text-cyan-400' : method.color === 'lime' ? 'text-lime-400' : 'text-violet-400'}`}>
                  {method.contact}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-body font-bold text-slate-100 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type */}
                  <div>
                    <label className="block text-slate-200 font-semibold mb-2 font-body">
                      What can we help you with?
                    </label>
                    <select
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body"
                    >
                      {contactTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-200 font-semibold mb-2 font-body">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-200 font-semibold mb-2 font-body">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-slate-200 font-semibold mb-2 font-body">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body"
                      placeholder="How can I get started?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-200 font-semibold mb-2 font-body">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent font-body resize-vertical"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-body font-bold text-slate-100 mb-6">
                  Other Ways to Reach Us
                </h2>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Email</h3>
                      <p className="text-slate-300 font-body">support@matchops.local</p>
                      <p className="text-slate-400 text-sm mt-1 font-body">Response within 24 hours</p>
                    </div>
                  </div>

                  {/* Response Times */}
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-lime-400/10 border border-lime-400/20">
                      <Clock className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Response Times</h3>
                      <ul className="text-slate-300 space-y-1 font-body">
                        <li>• General inquiries: 24-48 hours</li>
                        <li>• Technical support: 12-24 hours</li>
                        <li>• Urgent issues: Same day</li>
                      </ul>
                    </div>
                  </div>

                  {/* Community */}
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-violet-400/10 border border-violet-400/20">
                      <MessageCircle className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Community</h3>
                      <p className="text-slate-300 font-body">Join our community forum for peer support</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Visit Forum
                      </Button>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="mt-12 p-6 bg-slate-800 border border-slate-600 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">
                    Quick Answers
                  </h3>
                  <p className="text-slate-300 mb-4 font-body">
                    Check our FAQ section for instant answers to common questions.
                  </p>
                  <Button variant="outline" size="sm">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Preview */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-body font-bold text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 font-body">
              Quick answers to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardTitle className="mb-3">How do I install MatchOps Local?</CardTitle>
              <CardDescription>
                Simply visit our website on any device and click &ldquo;Install&rdquo; when prompted. It works like a native app!
              </CardDescription>
            </Card>

            <Card>
              <CardTitle className="mb-3">Is it really free?</CardTitle>
              <CardDescription>
                Yes! MatchOps Local is completely free for individual coaches. No hidden fees or premium tiers.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle className="mb-3">Does it work offline?</CardTitle>
              <CardDescription>
                Absolutely! All core features work offline, perfect for any soccer field without internet.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle className="mb-3">Can I use it on multiple devices?</CardTitle>
              <CardDescription>
                Yes, with optional cloud sync you can access your data across all your devices seamlessly.
              </CardDescription>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}