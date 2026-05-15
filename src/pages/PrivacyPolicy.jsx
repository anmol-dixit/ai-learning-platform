// PrivacyPolicy.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      {/* HERO SECTION */}
      <section className="privacy-hero-section">
        <div className="privacy-hero-bg">
          <div className="privacy-particle particle-1"></div>
          <div className="privacy-particle particle-2"></div>
          <div className="privacy-particle particle-3"></div>
          <div className="privacy-particle particle-4"></div>
        </div>

        <div className="privacy-hero-container">
          <div className="privacy-badge">
            <span className="privacy-badge-icon">🔒</span>
            Privacy & Security
          </div>

          <h1 className="privacy-hero-title">Privacy Policy</h1>

          <p className="privacy-hero-subtitle">
            Your privacy is our top priority. Learn how we protect and respect
            your data.
          </p>

          <div className="privacy-meta">
            <div className="privacy-meta-item">
              <span className="privacy-meta-icon">📅</span>
              <span>Last Updated: May 1, 2026</span>
            </div>
            <div className="privacy-meta-item">
              <span className="privacy-meta-icon">⏱️</span>
              <span>12 min read</span>
            </div>
            <div className="privacy-meta-item">
              <span className="privacy-meta-icon">🌍</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="privacy-main-content">
        <div className="privacy-content-wrapper">
          {/* Quick Navigation */}
          <aside className="privacy-nav">
            <div className="privacy-nav-header">
              <span className="privacy-nav-icon">🗂️</span>
              <h3>Quick Navigation</h3>
            </div>
            <ul className="privacy-nav-list">
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#collection">Information Collection</a>
              </li>
              <li>
                <a href="#usage">How We Use Data</a>
              </li>
              <li>
                <a href="#sharing">Information Sharing</a>
              </li>
              <li>
                <a href="#security">Data Security</a>
              </li>
              <li>
                <a href="#rights">Your Rights</a>
              </li>
              <li>
                <a href="#cookies">Cookies & Tracking</a>
              </li>
              <li>
                <a href="#children">Children's Privacy</a>
              </li>
              <li>
                <a href="#international">International Transfers</a>
              </li>
              <li>
                <a href="#retention">Data Retention</a>
              </li>
              <li>
                <a href="#thirdparty">Third-Party Links</a>
              </li>
              <li>
                <a href="#changes">Policy Changes</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </aside>

          {/* Main Sections */}
          <div className="privacy-sections">
            {/* Introduction */}
            <div id="introduction" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">01</div>
                <h2>Our Commitment to Your Privacy 🛡️</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  At AI Learning, protecting your privacy and personal
                  information is fundamental to everything we do. This Privacy
                  Policy explains in clear, transparent terms how we collect,
                  use, share, and protect your data when you use our educational
                  platform.
                </p>

                <div className="privacy-promise-box">
                  <div className="privacy-promise-icon">💙</div>
                  <div className="privacy-promise-content">
                    <h4>Our Privacy Promise</h4>
                    <div className="privacy-promise-grid">
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>We collect only what's necessary for our Services</p>
                      </div>
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>We NEVER sell your personal data to anyone</p>
                      </div>
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>You have complete control over your information</p>
                      </div>
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>We use industry-leading security measures</p>
                      </div>
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>We comply with GDPR, CCPA, and other privacy laws</p>
                      </div>
                      <div className="privacy-promise-item">
                        <span className="privacy-promise-check">✓</span>
                        <p>Transparency in all our data practices</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  This policy applies to all AI Learning services, including our
                  website, mobile applications, and any related platforms. By
                  using our Services, you agree to the data practices described
                  in this policy.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div id="collection" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">02</div>
                <h2>Information We Collect 📊</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  We collect different types of information to provide you with
                  the best learning experience. Here's a comprehensive
                  breakdown:
                </p>

                <div className="privacy-collection-section">
                  <h3>📝 Personal Information You Provide</h3>
                  <div className="privacy-data-grid">
                    <div className="privacy-data-card">
                      <div className="privacy-data-icon">👤</div>
                      <h4>Account Information</h4>
                      <ul>
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Username and password</li>
                        <li>Date of birth (for age verification)</li>
                      </ul>
                    </div>
                    <div className="privacy-data-card">
                      <div className="privacy-data-icon">📸</div>
                      <h4>Profile Information</h4>
                      <ul>
                        <li>Profile photo/avatar</li>
                        <li>Bio and description</li>
                        <li>Educational background</li>
                        <li>Professional information</li>
                      </ul>
                    </div>
                    <div className="privacy-data-card">
                      <div className="privacy-data-icon">📞</div>
                      <h4>Contact Details</h4>
                      <ul>
                        <li>Phone number (optional)</li>
                        <li>Mailing address (optional)</li>
                        <li>Emergency contact (optional)</li>
                        <li>Social media profiles (optional)</li>
                      </ul>
                    </div>
                    <div className="privacy-data-card">
                      <div className="privacy-data-icon">💳</div>
                      <h4>Payment Information</h4>
                      <ul>
                        <li>Billing name and address</li>
                        <li>Payment method details</li>
                        <li>Transaction history</li>
                        <li>Tax identification (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="privacy-collection-section">
                  <h3>🤖 Automatically Collected Data</h3>
                  <div className="privacy-auto-grid">
                    <div className="privacy-auto-item">
                      <span className="privacy-auto-icon">📱</span>
                      <div>
                        <h4>Device Information</h4>
                        <p>
                          IP address, browser type, device model, operating
                          system, unique device identifiers
                        </p>
                      </div>
                    </div>
                    <div className="privacy-auto-item">
                      <span className="privacy-auto-icon">📈</span>
                      <div>
                        <h4>Usage Analytics</h4>
                        <p>
                          Pages viewed, features used, time spent on platform,
                          course progress, interaction patterns
                        </p>
                      </div>
                    </div>
                    <div className="privacy-auto-item">
                      <span className="privacy-auto-icon">🌍</span>
                      <div>
                        <h4>Location Data</h4>
                        <p>
                          General geographic location (country/city level),
                          timezone, language preferences
                        </p>
                      </div>
                    </div>
                    <div className="privacy-auto-item">
                      <span className="privacy-auto-icon">🍪</span>
                      <div>
                        <h4>Cookies & Tracking</h4>
                        <p>
                          Session cookies, preference cookies, analytics
                          cookies, authentication tokens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="privacy-collection-section">
                  <h3>💬 User-Generated Content</h3>
                  <div className="privacy-content-list">
                    <div className="privacy-content-item">
                      <span className="privacy-content-icon">💭</span>
                      <p>Comments, forum posts, and community discussions</p>
                    </div>
                    <div className="privacy-content-item">
                      <span className="privacy-content-icon">⭐</span>
                      <p>Course reviews, ratings, and feedback</p>
                    </div>
                    <div className="privacy-content-item">
                      <span className="privacy-content-icon">📁</span>
                      <p>Project submissions, assignments, and coursework</p>
                    </div>
                    <div className="privacy-content-item">
                      <span className="privacy-content-icon">✉️</span>
                      <p>Messages and communications through our platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div id="usage" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">03</div>
                <h2>How We Use Your Information 🎯</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  We use your information to deliver, improve, and personalize
                  our educational services. Here's exactly how:
                </p>

                <div className="privacy-usage-grid">
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">🎓</div>
                    <h4>Service Delivery</h4>
                    <ul>
                      <li>Provide access to purchased courses</li>
                      <li>Track your learning progress</li>
                      <li>Generate and issue certificates</li>
                      <li>Facilitate instructor-student communication</li>
                      <li>Process payments and manage subscriptions</li>
                    </ul>
                  </div>
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">💬</div>
                    <h4>Communication</h4>
                    <ul>
                      <li>Send course updates and announcements</li>
                      <li>Respond to support requests</li>
                      <li>Deliver newsletters (with consent)</li>
                      <li>Send account security notifications</li>
                      <li>Provide customer service</li>
                    </ul>
                  </div>
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">🔒</div>
                    <h4>Security & Safety</h4>
                    <ul>
                      <li>Prevent fraud and unauthorized access</li>
                      <li>Protect against cyber threats</li>
                      <li>Monitor for policy violations</li>
                      <li>Maintain platform integrity</li>
                      <li>Enforce our Terms of Service</li>
                    </ul>
                  </div>
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">📊</div>
                    <h4>Platform Improvement</h4>
                    <ul>
                      <li>Analyze usage patterns and trends</li>
                      <li>Conduct user research</li>
                      <li>Develop new features</li>
                      <li>Optimize platform performance</li>
                      <li>Fix bugs and technical issues</li>
                    </ul>
                  </div>
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">🎯</div>
                    <h4>Personalization</h4>
                    <ul>
                      <li>Recommend relevant courses</li>
                      <li>Customize learning paths</li>
                      <li>Tailor content to your interests</li>
                      <li>Suggest career opportunities</li>
                      <li>Optimize user interface</li>
                    </ul>
                  </div>
                  <div className="privacy-usage-card">
                    <div className="privacy-usage-icon">⚖️</div>
                    <h4>Legal Compliance</h4>
                    <ul>
                      <li>Meet legal and regulatory requirements</li>
                      <li>Respond to legal requests</li>
                      <li>Enforce our policies</li>
                      <li>Resolve disputes</li>
                      <li>Protect legal rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div id="sharing" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">04</div>
                <h2>Information Sharing & Disclosure 🤝</h2>
              </div>
              <div className="privacy-card-content">
                <div className="privacy-no-sell-banner">
                  <div className="privacy-no-sell-icon">🚫</div>
                  <div className="privacy-no-sell-content">
                    <h3>We DO NOT Sell Your Personal Data</h3>
                    <p>
                      This is our firm commitment: We will NEVER sell, rent, or
                      trade your personal information to third parties for their
                      marketing purposes. Your trust is more valuable than any
                      revenue.
                    </p>
                  </div>
                </div>

                <h3>Limited Sharing Circumstances</h3>
                <p>
                  We may share your information only in these specific
                  situations:
                </p>

                <div className="privacy-sharing-grid">
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">🔧</div>
                    <h4>Service Providers</h4>
                    <p>
                      Trusted third-party companies that help us operate our
                      platform (e.g., payment processors, email services,
                      hosting providers, analytics tools). They are bound by
                      strict confidentiality agreements and can only use your
                      data to perform services for us.
                    </p>
                  </div>
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">👨‍🏫</div>
                    <h4>Course Instructors</h4>
                    <p>
                      Limited information (name, progress, assignments) is
                      shared with instructors to facilitate course delivery,
                      provide feedback, and support your learning journey.
                    </p>
                  </div>
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">⚖️</div>
                    <h4>Legal Requirements</h4>
                    <p>
                      When required by law, court order, legal process, or
                      government request. We will notify you unless prohibited
                      by law.
                    </p>
                  </div>
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">🏢</div>
                    <h4>Business Transfers</h4>
                    <p>
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred. You will be notified
                      of any such change.
                    </p>
                  </div>
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">✅</div>
                    <h4>With Your Consent</h4>
                    <p>
                      When you explicitly authorize us to share your information
                      with specific third parties for particular purposes.
                    </p>
                  </div>
                  <div className="privacy-sharing-item">
                    <div className="privacy-sharing-icon">📊</div>
                    <h4>Aggregated Data</h4>
                    <p>
                      We may share anonymized, aggregated statistics that cannot
                      identify you personally (e.g., "80% of students complete
                      our AI courses").
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div id="security" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">05</div>
                <h2>Data Security & Protection 🛡️</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  We implement comprehensive security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction:
                </p>

                <div className="privacy-security-grid">
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">🔐</div>
                    <h4>Encryption</h4>
                    <p>
                      All data transmission uses SSL/TLS encryption. Sensitive
                      data is encrypted at rest using AES-256 encryption
                      standards.
                    </p>
                  </div>
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">💾</div>
                    <h4>Secure Storage</h4>
                    <p>
                      Your data is stored in secure, certified data centers with
                      redundant backups and disaster recovery protocols.
                    </p>
                  </div>
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">👁️</div>
                    <h4>Access Control</h4>
                    <p>
                      Strict access controls ensure only authorized personnel
                      can access personal data, with all access logged and
                      monitored.
                    </p>
                  </div>
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">🔄</div>
                    <h4>Regular Audits</h4>
                    <p>
                      Continuous security assessments, penetration testing, and
                      vulnerability scanning to identify and fix potential
                      issues.
                    </p>
                  </div>
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">🚨</div>
                    <h4>Breach Response</h4>
                    <p>
                      Immediate incident response procedures and user
                      notification protocols in case of any security breach.
                    </p>
                  </div>
                  <div className="privacy-security-card">
                    <div className="privacy-security-icon">🔒</div>
                    <h4>Two-Factor Auth</h4>
                    <p>
                      Optional two-factor authentication for enhanced account
                      security and protection against unauthorized access.
                    </p>
                  </div>
                </div>

                <div className="privacy-security-note">
                  <div className="privacy-security-note-icon">⚠️</div>
                  <p>
                    <strong>Important Notice:</strong> While we employ
                    industry-leading security measures, no method of
                    transmission over the internet or electronic storage is 100%
                    secure. We continuously work to protect your data but cannot
                    guarantee absolute security. We encourage you to use strong
                    passwords and enable two-factor authentication.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div id="rights" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">06</div>
                <h2>Your Privacy Rights & Choices ✊</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  You have complete control over your personal data. Under
                  various privacy laws (GDPR, CCPA, etc.), you have the
                  following rights:
                </p>

                <div className="privacy-rights-grid">
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">📋</div>
                    <h4>Access Your Data</h4>
                    <p>
                      Request a complete copy of all personal information we
                      hold about you, including data sources and processing
                      purposes.
                    </p>
                    <button className="privacy-right-btn">
                      Request Data →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">✏️</div>
                    <h4>Correct Information</h4>
                    <p>
                      Update, correct, or modify your personal information at
                      any time through your account settings or by contacting
                      us.
                    </p>
                    <button className="privacy-right-btn">
                      Update Profile →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">🗑️</div>
                    <h4>Delete Your Data</h4>
                    <p>
                      Request permanent deletion of your account and associated
                      personal data (subject to legal retention requirements).
                    </p>
                    <button className="privacy-right-btn">
                      Delete Account →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">🚫</div>
                    <h4>Opt-Out Marketing</h4>
                    <p>
                      Unsubscribe from promotional emails anytime. Essential
                      service communications will still be sent.
                    </p>
                    <button className="privacy-right-btn">
                      Manage Emails →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">📥</div>
                    <h4>Data Portability</h4>
                    <p>
                      Download your data in a portable, machine-readable format
                      to transfer to another service.
                    </p>
                    <button className="privacy-right-btn">Export Data →</button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">⏸️</div>
                    <h4>Restrict Processing</h4>
                    <p>
                      Limit how we process your data in certain circumstances
                      while maintaining your account.
                    </p>
                    <button className="privacy-right-btn">
                      Manage Settings →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">❌</div>
                    <h4>Object to Processing</h4>
                    <p>
                      Object to certain types of data processing, such as direct
                      marketing or automated decision-making.
                    </p>
                    <button className="privacy-right-btn">
                      Submit Objection →
                    </button>
                  </div>
                  <div className="privacy-right-card">
                    <div className="privacy-right-icon">📞</div>
                    <h4>Withdraw Consent</h4>
                    <p>
                      Withdraw your consent for data processing at any time
                      where consent is the legal basis.
                    </p>
                    <button className="privacy-right-btn">
                      Manage Consent →
                    </button>
                  </div>
                </div>

                <div className="privacy-rights-contact">
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <strong>privacy@ailearning.com</strong> or use the buttons
                    above. We will respond to all requests within{" "}
                    <strong>48 hours</strong> and complete most requests within{" "}
                    <strong>30 days</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div id="cookies" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">07</div>
                <h2>Cookies & Tracking Technologies 🍪</h2>
              </div>
              <div className="privacy-card-content">
                <div className="privacy-cookie-intro">
                  <h3>What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your device that help
                    us provide a better, more personalized experience. We use
                    both session cookies (temporary) and persistent cookies
                    (remain after closing browser).
                  </p>
                </div>

                <h3>Types of Cookies We Use</h3>
                <div className="privacy-cookie-grid">
                  <div className="privacy-cookie-card">
                    <div className="privacy-cookie-icon">⚙️</div>
                    <h4>Essential Cookies</h4>
                    <p>
                      Required for the platform to function properly. Enable
                      core features like login, security, and session
                      management.
                    </p>
                    <span className="privacy-cookie-status required">
                      Required
                    </span>
                  </div>
                  <div className="privacy-cookie-card">
                    <div className="privacy-cookie-icon">📊</div>
                    <h4>Analytics Cookies</h4>
                    <p>
                      Help us understand how users interact with our platform,
                      which features are popular, and where improvements are
                      needed.
                    </p>
                    <span className="privacy-cookie-status optional">
                      Optional
                    </span>
                  </div>
                  <div className="privacy-cookie-card">
                    <div className="privacy-cookie-icon">🎨</div>
                    <h4>Preference Cookies</h4>
                    <p>
                      Remember your settings, language preferences, theme
                      choices, and customizations to provide a consistent
                      experience.
                    </p>
                    <span className="privacy-cookie-status optional">
                      Optional
                    </span>
                  </div>
                  <div className="privacy-cookie-card">
                    <div className="privacy-cookie-icon">🎯</div>
                    <h4>Marketing Cookies</h4>
                    <p>
                      Track the effectiveness of our marketing campaigns and
                      show you relevant course recommendations based on your
                      interests.
                    </p>
                    <span className="privacy-cookie-status optional">
                      Optional
                    </span>
                  </div>
                </div>

                <div className="privacy-cookie-manage">
                  <h3>Managing Cookies</h3>
                  <p>
                    You have full control over cookies through your browser
                    settings and our cookie preference center. Note that
                    disabling certain cookies may affect platform functionality
                    and your user experience.
                  </p>
                  <button className="privacy-cookie-btn">
                    Manage Cookie Preferences →
                  </button>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div id="children" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">08</div>
                <h2>Children's Privacy Protection 👶</h2>
              </div>
              <div className="privacy-card-content">
                <div className="privacy-children-notice">
                  <div className="privacy-children-icon">🎂</div>
                  <div className="privacy-children-content">
                    <h3>Age Requirement: 13+</h3>
                    <p>
                      Our Services are intended for users aged 13 years and
                      older. We do not knowingly collect personal information
                      from children under 13 without verifiable parental
                      consent, in compliance with the Children's Online Privacy
                      Protection Act (COPPA).
                    </p>
                    <h4>If You're a Parent or Guardian:</h4>
                    <p>
                      If you believe your child under 13 has provided us with
                      personal information without your consent, please contact
                      us immediately at <strong>privacy@ailearning.com</strong>.
                      We will promptly delete such information from our systems
                      and terminate the account.
                    </p>
                    <h4>Users Aged 13-18:</h4>
                    <p>
                      For users between 13-18 years old, we encourage parental
                      involvement in their learning journey. Parents can request
                      access to their child's account information and learning
                      progress by contacting us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div id="international" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">09</div>
                <h2>International Data Transfers 🌍</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  AI Learning operates globally, and your information may be
                  transferred to and processed in countries other than your
                  country of residence. These countries may have different data
                  protection laws.
                </p>

                <div className="privacy-transfer-safeguards">
                  <h3>Our Safeguards for International Transfers:</h3>
                  <div className="privacy-safeguard-list">
                    <div className="privacy-safeguard-item">
                      <span className="privacy-safeguard-icon">✓</span>
                      <p>
                        <strong>Standard Contractual Clauses:</strong> We use
                        EU-approved Standard Contractual Clauses (SCCs) for data
                        transfers outside the EEA.
                      </p>
                    </div>
                    <div className="privacy-safeguard-item">
                      <span className="privacy-safeguard-icon">✓</span>
                      <p>
                        <strong>Adequate Protection:</strong> We ensure all
                        jurisdictions provide adequate data protection
                        comparable to GDPR standards.
                      </p>
                    </div>
                    <div className="privacy-safeguard-item">
                      <span className="privacy-safeguard-icon">✓</span>
                      <p>
                        <strong>Privacy Shield Compliance:</strong> For US
                        transfers, we adhere to Privacy Shield principles or
                        equivalent frameworks.
                      </p>
                    </div>
                    <div className="privacy-safeguard-item">
                      <span className="privacy-safeguard-icon">✓</span>
                      <p>
                        <strong>Regular Audits:</strong> We conduct regular
                        audits of international data transfer practices and
                        partner compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div id="retention" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">10</div>
                <h2>Data Retention & Deletion ⏳</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  We retain your personal information only as long as necessary
                  for the purposes outlined in this Privacy Policy:
                </p>

                <div className="privacy-retention-grid">
                  <div className="privacy-retention-card">
                    <div className="privacy-retention-icon">🎓</div>
                    <h4>Active Account Data</h4>
                    <p>
                      Retained while your account is active to provide services
                      and maintain your learning history and achievements.
                    </p>
                  </div>
                  <div className="privacy-retention-card">
                    <div className="privacy-retention-icon">⚖️</div>
                    <h4>Legal Requirements</h4>
                    <p>
                      Some data must be retained to comply with tax, accounting,
                      and legal obligations (typically 3-7 years).
                    </p>
                  </div>
                  <div className="privacy-retention-card">
                    <div className="privacy-retention-icon">🔍</div>
                    <h4>Dispute Resolution</h4>
                    <p>
                      Information may be retained to resolve disputes, enforce
                      agreements, and protect legal rights.
                    </p>
                  </div>
                  <div className="privacy-retention-card">
                    <div className="privacy-retention-icon">📊</div>
                    <h4>Analytics Data</h4>
                    <p>
                      Aggregated, anonymized data may be retained indefinitely
                      for analytical and research purposes.
                    </p>
                  </div>
                </div>

                <div className="privacy-deletion-process">
                  <h3>When You Delete Your Account:</h3>
                  <div className="privacy-deletion-timeline">
                    <div className="privacy-deletion-step">
                      <div className="privacy-deletion-step-number">1</div>
                      <h4>Immediate</h4>
                      <p>Account deactivation and login prevention</p>
                    </div>
                    <div className="privacy-deletion-arrow">→</div>
                    <div className="privacy-deletion-step">
                      <div className="privacy-deletion-step-number">2</div>
                      <h4>Within 30 Days</h4>
                      <p>Deletion or anonymization of personal data</p>
                    </div>
                    <div className="privacy-deletion-arrow">→</div>
                    <div className="privacy-deletion-step">
                      <div className="privacy-deletion-step-number">3</div>
                      <h4>Within 90 Days</h4>
                      <p>Removal from all backups and archives</p>
                    </div>
                  </div>
                  <p className="privacy-deletion-note">
                    Note: Some information may be retained where legally
                    required or for legitimate business purposes (e.g.,
                    transaction records for accounting).
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Links */}
            <div id="thirdparty" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">11</div>
                <h2>Third-Party Links & Services 🔗</h2>
              </div>
              <div className="privacy-card-content">
                <div className="privacy-thirdparty-warning">
                  <div className="privacy-warning-icon">⚠️</div>
                  <div className="privacy-warning-content">
                    <h3>Important Notice</h3>
                    <p>
                      Our platform may contain links to third-party websites,
                      plugins, applications, or integrations operated by
                      external companies. This Privacy Policy applies only to AI
                      Learning's services.
                    </p>
                    <p>
                      <strong>We are not responsible for:</strong>
                    </p>
                    <ul>
                      <li>
                        Privacy practices of third-party websites or services
                      </li>
                      <li>
                        Content, accuracy, or availability of external sites
                      </li>
                      <li>
                        Terms of service or data collection by third parties
                      </li>
                      <li>
                        Security measures implemented by external services
                      </li>
                    </ul>
                    <p>
                      We strongly encourage you to review the privacy policies
                      of any third-party services before providing your personal
                      information or using their services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div id="changes" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">12</div>
                <h2>Changes to This Privacy Policy 🔄</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices, technology, legal requirements, or
                  platform features. When we make significant changes, we will
                  notify you through:
                </p>

                <div className="privacy-notification-grid">
                  <div className="privacy-notification-card">
                    <div className="privacy-notification-icon">📧</div>
                    <h4>Email Notification</h4>
                    <p>
                      Sent to your registered email address at least 30 days
                      before changes take effect
                    </p>
                  </div>
                  <div className="privacy-notification-card">
                    <div className="privacy-notification-icon">🔔</div>
                    <h4>In-Platform Alert</h4>
                    <p>
                      Prominent banner or notification within the platform
                      interface
                    </p>
                  </div>
                  <div className="privacy-notification-card">
                    <div className="privacy-notification-icon">📅</div>
                    <h4>Updated Date</h4>
                    <p>
                      "Last Updated" timestamp at the top of this policy page
                    </p>
                  </div>
                </div>

                <div className="privacy-acceptance-info">
                  <h3>Your Acceptance of Changes</h3>
                  <p>
                    Your continued use of our Services after we publish or send
                    notice of changes to this Privacy Policy means that you
                    consent to the updated policy. If you do not agree with the
                    modified policy, you should discontinue use of our Services
                    and contact us to delete your account.
                  </p>
                  <p>
                    For material changes that significantly affect your privacy
                    rights, we may require explicit consent before the changes
                    apply to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="privacy-card">
              <div className="privacy-card-header">
                <div className="privacy-card-number">13</div>
                <h2>Contact Our Privacy Team 📞</h2>
              </div>
              <div className="privacy-card-content">
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or our data practices, our dedicated Privacy
                  Team is here to help:
                </p>

                <div className="privacy-contact-grid">
                  <div className="privacy-contact-card">
                    <div className="privacy-contact-icon">📧</div>
                    <h4>Email Support</h4>
                    <p className="privacy-contact-value">
                      privacy@ailearning.com
                    </p>
                    <span className="privacy-contact-badge">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="privacy-contact-card">
                    <div className="privacy-contact-icon">💬</div>
                    <h4>Live Chat</h4>
                    <p className="privacy-contact-value">Available 24/7</p>
                    <button
                      className="privacy-contact-btn"
                      onClick={() => navigate("/chat")}
                    >
                      Start Secure Chat →
                    </button>
                  </div>
                  <div className="privacy-contact-card">
                    <div className="privacy-contact-icon">📍</div>
                    <h4>Mailing Address</h4>
                    <p className="privacy-contact-value">
                      Privacy Officer
                      <br />
                      AI Learning
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="privacy-dpo-section">
                  <h3>Data Protection Officer (DPO)</h3>
                  <p>
                    For users in the European Economic Area (EEA) or those with
                    GDPR-related inquiries, you can contact our Data Protection
                    Officer directly:
                  </p>
                  <p className="privacy-dpo-email">
                    <strong>Email:</strong> dpo@ailearning.com
                  </p>
                </div>

                <div className="privacy-response-commitment">
                  <p>
                    <strong>Our Commitment:</strong> We aim to respond to all
                    privacy-related inquiries within <strong>48 hours</strong>{" "}
                    and resolve most requests within <strong>30 days</strong>.
                    Complex requests may take longer, but we will keep you
                    informed of our progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="privacy-cta-section">
        <div className="privacy-cta-container">
          <div className="privacy-cta-content">
            <h2>Your Privacy, Our Responsibility 🔒</h2>
            <p>
              Join a platform that values and protects your personal information
            </p>
            <div className="privacy-cta-buttons">
              <button
                className="privacy-cta-primary"
                onClick={() => navigate("/signup")}
              >
                🚀 Create Secure Account
              </button>
              <button
                className="privacy-cta-secondary"
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </button>
            </div>
            <div className="privacy-cta-trust">
              <span>✅ Bank-Level Security</span>
              <span>✅ GDPR Compliant</span>
              <span>✅ Data Never Sold</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
