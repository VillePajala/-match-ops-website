'use client';

import { Shield, FileText, Scale, AlertTriangle, CheckCircle, Mail, Calendar } from 'lucide-react';
import { Container, Section } from '@/components/ui';

export default function TermsPage() {
  const lastUpdated = "January 1, 2025";

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-violet-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-violet-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-100">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-body leading-relaxed">
              Please read these terms carefully before using MatchOps Local. By using our service, you agree to these terms.
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
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Important Notice</h3>
                  <p className="text-slate-300 font-body">
                    These terms govern your use of MatchOps Local. By accessing or using our service, you agree to be 
                    bound by these terms. If you do not agree to these terms, please do not use our service.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-300 font-body mb-4">
                  By accessing and using MatchOps Local ("the Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. These Terms of Service ("Terms") apply to all users of the Service, 
                  including coaches, team administrators, and any other individuals who access or use the Service.
                </p>
                <p className="text-slate-300 font-body">
                  We reserve the right to update these Terms at any time without prior notice. Your continued use of 
                  the Service following any changes indicates your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">2. Description of Service</h2>
                <p className="text-slate-300 font-body mb-4">
                  MatchOps Local is a Progressive Web Application designed to help soccer coaches manage their teams, 
                  plan tactics, track player performance, and organize match day operations. The Service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Team and player management tools</li>
                  <li>Formation and tactical planning features</li>
                  <li>Live match tracking and statistics</li>
                  <li>Performance analysis and reporting</li>
                  <li>Optional cloud synchronization services</li>
                  <li>Communication and organizational tools</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">3. User Accounts and Registration</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Account Creation</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-6">
                  <li>You may use MatchOps Local without creating an account (local-only mode)</li>
                  <li>Account creation is optional and only required for cloud sync features</li>
                  <li>You must provide accurate and complete registration information</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>You are solely responsible for all activities under your account</li>
                  <li>You must immediately notify us of any unauthorized account access</li>
                  <li>You must ensure all player data entered has appropriate consent</li>
                  <li>You agree not to share account credentials with unauthorized parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">4. Acceptable Use Policy</h2>
                
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Permitted Uses</h3>
                      <p className="text-slate-300 font-body">
                        MatchOps Local is designed for legitimate soccer coaching activities including team management, 
                        tactical planning, performance tracking, and communication with players and parents.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Prohibited Activities</h3>
                <p className="text-slate-300 font-body mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others or violate their privacy</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use the Service for commercial purposes without authorization</li>
                  <li>Share inappropriate content involving minors</li>
                  <li>Engage in harassment, abuse, or discriminatory behavior</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">5. Data and Privacy</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Your Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-6">
                  <li>You retain ownership of all data you input into the Service</li>
                  <li>You are responsible for obtaining necessary consents for player data</li>
                  <li>You grant us permission to process your data to provide the Service</li>
                  <li>You can export or delete your data at any time</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Minor Protection</h3>
                <p className="text-slate-300 font-body mb-4">
                  If you enter information about players who are minors:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>You must have proper authority to collect and manage this information</li>
                  <li>You must comply with applicable child protection laws</li>
                  <li>You are responsible for obtaining parental consent where required</li>
                  <li>You must handle this information in accordance with best practices</li>
                </ul>

                <p className="text-slate-300 font-body mt-4">
                  For complete information about how we handle data, please review our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">6. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Our Rights</h3>
                <p className="text-slate-300 font-body mb-4">
                  The Service, including its software, design, text, graphics, and other content, is owned by us and 
                  protected by copyright, trademark, and other intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-6">
                  <li>Copy, modify, or distribute our software or content</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Remove or modify copyright notices or branding</li>
                  <li>Use our trademarks without permission</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">Your Rights</h3>
                <p className="text-slate-300 font-body">
                  We grant you a limited, non-exclusive, non-transferable license to use the Service for your personal 
                  coaching activities. This license terminates when you stop using the Service or if you violate these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">7. Service Availability</h2>
                <p className="text-slate-300 font-body mb-4">
                  While we strive to provide reliable service, we cannot guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-6">
                  <li>Uninterrupted access to the Service</li>
                  <li>Error-free operation of all features</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Availability during maintenance periods</li>
                </ul>

                <p className="text-slate-300 font-body">
                  We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice. 
                  We will provide reasonable advance notice of significant changes when possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">8. Limitation of Liability</h2>
                
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 font-body">Important Legal Notice</h3>
                      <p className="text-slate-300 font-body">
                        The Service is provided "as is" and "as available" without warranties of any kind. Your use 
                        of the Service is at your own risk.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 font-body mb-4">
                  To the maximum extent permitted by law, we shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body">
                  <li>Data loss or corruption</li>
                  <li>Service interruptions or downtime</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Actions taken based on information provided by the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">9. Indemnification</h2>
                <p className="text-slate-300 font-body">
                  You agree to indemnify and hold us harmless from any claims, losses, damages, or expenses arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mt-4">
                  <li>Your violation of these Terms</li>
                  <li>Your use of the Service</li>
                  <li>Your data or content submitted to the Service</li>
                  <li>Any dispute between you and other users</li>
                  <li>Your violation of applicable laws or third-party rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">10. Termination</h2>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">By You</h3>
                <p className="text-slate-300 font-body mb-4">
                  You may stop using the Service at any time. If you have an account, you may delete it through 
                  the app settings or by contacting us.
                </p>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 font-body">By Us</h3>
                <p className="text-slate-300 font-body mb-4">
                  We may suspend or terminate your access to the Service if you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-4">
                  <li>Violate these Terms or our policies</li>
                  <li>Engage in illegal or harmful activities</li>
                  <li>Pose a security risk to the Service or other users</li>
                  <li>Have not used the Service for an extended period</li>
                </ul>

                <p className="text-slate-300 font-body">
                  Upon termination, you will lose access to cloud-synced data. Local data will remain on your device 
                  until manually deleted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">11. Governing Law</h2>
                <p className="text-slate-300 font-body">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to conflict of law principles. Any disputes arising from these Terms or your use of 
                  the Service shall be resolved through binding arbitration or in courts of competent jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">12. Changes to Terms</h2>
                <p className="text-slate-300 font-body mb-4">
                  We may modify these Terms at any time. When we make changes, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-300 font-body mb-4">
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Post the updated Terms on our website</li>
                  <li>Notify users through the app (for significant changes)</li>
                  <li>Send email notifications (if you have an account)</li>
                </ul>
                <p className="text-slate-300 font-body">
                  Your continued use of the Service after changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">13. Contact Information</h2>
                <p className="text-slate-300 font-body mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                
                <div className="bg-slate-800 border border-slate-600 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-slate-100 font-semibold font-body">Email</p>
                        <p className="text-slate-300 font-body">legal@matchops.local</p>
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

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">14. Severability</h2>
                <p className="text-slate-300 font-body">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
                  limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain 
                  in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-slate-100 mb-4">15. Entire Agreement</h2>
                <p className="text-slate-300 font-body">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and us 
                  regarding the use of the Service. These Terms supersede any prior agreements or understandings 
                  relating to the Service.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}