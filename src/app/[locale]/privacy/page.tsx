'use client';

import { Shield, Lock, Database, Mail, Calendar } from 'lucide-react';
import { Container, Section } from '@/components/ui';

export default function PrivacyPage() {
  const lastUpdated = "January 1, 2025";

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-body font-bold mb-6 text-slate-100">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-slate-400 font-body">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto prose prose-invert prose-slate">
            <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Privacy-First Approach</h3>
                  <p className="text-slate-300 font-body">
                    MatchOps Local is designed with privacy as a core principle. Your team data stays on your device by default, 
                    and we only collect minimal information necessary to provide our service.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Team and player information you enter into the app</li>
                  <li>Contact information when you reach out to support</li>
                  <li>Account information if you choose to create an account for cloud sync</li>
                  <li>Feedback and survey responses you provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6 font-body">Information We Automatically Collect</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Device information (browser type, operating system)</li>
                  <li>Usage statistics (features used, session duration)</li>
                  <li>Error reports and performance data</li>
                  <li>Website analytics data (anonymized)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>To provide and maintain the MatchOps Local service</li>
                  <li>To sync your data across devices (only if you enable cloud sync)</li>
                  <li>To provide customer support and respond to your inquiries</li>
                  <li>To improve our product and develop new features</li>
                  <li>To send important service updates (with your consent)</li>
                  <li>To ensure the security and integrity of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">3. Data Storage and Security</h2>
                
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Local-First Storage</h3>
                      <p className="text-slate-300 font-body">
                        By default, all your team data is stored locally on your device. We don&apos;t have access to your 
                        team information unless you explicitly enable cloud sync.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>All data transmission is encrypted using HTTPS</li>
                  <li>Cloud sync data is encrypted at rest and in transit</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Limited access to personal data by our team</li>
                  <li>Secure backup and disaster recovery procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-slate-300 font-body mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With service providers who help us operate our service (under strict confidentiality agreements)</li>
                  <li>In connection with a business transfer or merger (with prior notice)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">5. Your Rights and Choices</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Access and Control</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Access, update, or delete your account information</li>
                  <li>Export your data in a portable format</li>
                  <li>Disable cloud sync and keep data local-only</li>
                  <li>Opt out of non-essential communications</li>
                  <li>Request deletion of your data from our servers</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 mt-6 font-body">GDPR Rights (EU Users)</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">6. Cookies and Tracking</h2>
                <p className="text-slate-300 font-body mb-4">
                  We use minimal cookies and tracking technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li><strong>Essential cookies:</strong> Required for the app to function properly</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how you use our service (anonymized)</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-slate-300 font-body mt-4">
                  You can control cookie preferences in your browser settings. Disabling cookies may affect some functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">7. Children&apos;s Privacy</h2>
                <p className="text-slate-300 font-body">
                  MatchOps Local is intended for use by coaches and team administrators, typically adults. While the app 
                  may contain information about players who are minors, we do not knowingly collect personal information 
                  directly from children under 13. If you believe we have collected information from a child under 13, 
                  please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">8. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Local data remains on your device until you delete it</li>
                  <li>Cloud sync data is retained while your account is active</li>
                  <li>Account data is deleted within 30 days of account closure</li>
                  <li>Support communications are retained for 2 years</li>
                  <li>Analytics data is anonymized and may be retained longer for service improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">9. International Transfers</h2>
                <p className="text-slate-300 font-body">
                  Our services are primarily operated from the United States. If you are accessing our service from 
                  outside the US, your information may be transferred to, stored, and processed in the US. We ensure 
                  appropriate safeguards are in place to protect your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">10. Changes to This Policy</h2>
                <p className="text-slate-300 font-body">
                  We may update this privacy policy from time to time. We will notify you of significant changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mt-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification (if you have an account)</li>
                  <li>Displaying a notice in the app</li>
                </ul>
                <p className="text-slate-300 font-body mt-4">
                  Continued use of our service after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-body font-bold text-slate-100 mb-4">11. Contact Us</h2>
                <p className="text-slate-300 font-body mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-slate-100 font-semibold font-body">Email</p>
                        <p className="text-slate-300 font-body">privacy@matchops.local</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-slate-100 font-semibold font-body">Response Time</p>
                        <p className="text-slate-300 font-body">Within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}