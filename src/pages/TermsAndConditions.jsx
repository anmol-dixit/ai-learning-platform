// TermsAndConditions.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsAndConditions.css";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      {/* HERO SECTION */}
      <section className="terms-hero-section">
        <div className="terms-hero-bg">
          <div className="terms-floating-shape shape-1"></div>
          <div className="terms-floating-shape shape-2"></div>
          <div className="terms-floating-shape shape-3"></div>
        </div>

        <div className="terms-hero-container">
          <div className="terms-badge">
            <span className="terms-badge-icon">📜</span>
            Legal Agreement
          </div>

          <h1 className="terms-hero-title">Terms and Conditions</h1>

          <p className="terms-hero-subtitle">
            Please read these terms carefully before using AI Learning platform
          </p>

          <div className="terms-meta">
            <div className="terms-meta-item">
              <span className="terms-meta-icon">📅</span>
              <span>Last Updated: May 1, 2026</span>
            </div>
            <div className="terms-meta-item">
              <span className="terms-meta-icon">⏱️</span>
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="terms-main-content">
        <div className="terms-content-wrapper">
          {/* Table of Contents */}
          <aside className="terms-toc">
            <div className="terms-toc-header">
              <span className="terms-toc-icon">📑</span>
              <h3>Table of Contents</h3>
            </div>
            <ul className="terms-toc-list">
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#acceptance">Acceptance of Terms</a>
              </li>
              <li>
                <a href="#accounts">User Accounts</a>
              </li>
              <li>
                <a href="#enrollment">Course Enrollment</a>
              </li>
              <li>
                <a href="#payment">Payment & Refunds</a>
              </li>
              <li>
                <a href="#intellectual">Intellectual Property</a>
              </li>
              <li>
                <a href="#conduct">User Conduct</a>
              </li>
              <li>
                <a href="#disclaimers">Disclaimers</a>
              </li>
              <li>
                <a href="#liability">Limitation of Liability</a>
              </li>
              <li>
                <a href="#changes">Changes to Terms</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </aside>

          {/* Main Sections */}
          <div className="terms-sections">
            {/* Introduction */}
            <div id="introduction" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">01</div>
                <h2>Welcome to AI Learning 🎓</h2>
              </div>
              <div className="terms-box-content">
                <p>
                  These Terms and Conditions ("Terms") constitute a legally
                  binding agreement between you and AI Learning ("we," "us," or
                  "our") governing your access to and use of our platform,
                  including our website, mobile applications, and all related
                  services.
                </p>
                <div className="terms-important-note">
                  <div className="terms-note-icon">💡</div>
                  <div className="terms-note-content">
                    <h4>Important to Know</h4>
                    <p>
                      By creating an account, enrolling in courses, or using any
                      part of our Services, you acknowledge that you have read,
                      understood, and agree to be bound by these Terms.
                    </p>
                  </div>
                </div>
                <p>
                  AI Learning is committed to providing world-class AI education
                  through innovative courses, interactive learning experiences,
                  and cutting-edge technology. We maintain a safe, inclusive,
                  and productive learning environment for all our users
                  worldwide.
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div id="acceptance" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">02</div>
                <h2>Acceptance of Terms ✅</h2>
              </div>
              <div className="terms-box-content">
                <p>By using our Services, you represent and warrant that:</p>

                <div className="terms-checklist">
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Legal Capacity:</strong> You have the legal
                      capacity to enter into binding contracts
                    </div>
                  </div>
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Age Requirement:</strong> You are at least 13
                      years old (or have parental consent)
                    </div>
                  </div>
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Accurate Information:</strong> All registration
                      information you provide is truthful and accurate
                    </div>
                  </div>
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Legal Compliance:</strong> You will comply with
                      all applicable laws and regulations
                    </div>
                  </div>
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Legitimate Use:</strong> You will use our Services
                      only for lawful purposes
                    </div>
                  </div>
                  <div className="terms-check-item">
                    <div className="terms-check-icon">✓</div>
                    <div className="terms-check-text">
                      <strong>Respectful Conduct:</strong> You will respect
                      other users, instructors, and staff
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Accounts */}
            <div id="accounts" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">03</div>
                <h2>User Accounts 👤</h2>
              </div>
              <div className="terms-box-content">
                <h3>3.1 Account Registration</h3>
                <p>
                  To access certain features of our platform, you must create a
                  personal account. During registration, you agree to provide
                  accurate, complete, and current information.
                </p>

                <h3>3.2 Account Security</h3>
                <div className="terms-security-grid">
                  <div className="terms-security-card">
                    <span className="terms-security-icon">🔐</span>
                    <h4>Password Protection</h4>
                    <p>
                      Maintain confidentiality of your password and account
                      credentials
                    </p>
                  </div>
                  <div className="terms-security-card">
                    <span className="terms-security-icon">🚨</span>
                    <h4>Report Breaches</h4>
                    <p>
                      Immediately notify us of any unauthorized access or
                      security breach
                    </p>
                  </div>
                  <div className="terms-security-card">
                    <span className="terms-security-icon">👥</span>
                    <h4>No Sharing</h4>
                    <p>
                      Do not share your account credentials with any third party
                    </p>
                  </div>
                  <div className="terms-security-card">
                    <span className="terms-security-icon">📊</span>
                    <h4>Account Responsibility</h4>
                    <p>
                      You are responsible for all activities occurring under
                      your account
                    </p>
                  </div>
                </div>

                <h3>3.3 Account Termination</h3>
                <div className="terms-warning-box">
                  <div className="terms-warning-icon">⚠️</div>
                  <div className="terms-warning-content">
                    <h4>Termination Rights</h4>
                    <p>
                      We reserve the right to suspend or terminate your account
                      if you violate these Terms, engage in fraudulent activity,
                      or harm other users. You may also terminate your account
                      at any time through your account settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Enrollment */}
            <div id="enrollment" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">04</div>
                <h2>Course Enrollment & Access 📚</h2>
              </div>
              <div className="terms-box-content">
                <h3>4.1 License Grant</h3>
                <p>
                  When you purchase or enroll in a course, you receive a
                  limited, non-exclusive, non-transferable license to access the
                  course content for your personal, non-commercial use.
                </p>

                <h3>4.2 Access Duration</h3>
                <div className="terms-access-timeline">
                  <div className="terms-timeline-item">
                    <div className="terms-timeline-icon">🎯</div>
                    <div className="terms-timeline-content">
                      <h4>Lifetime Access</h4>
                      <p>
                        Most courses offer lifetime access to enrolled students
                      </p>
                    </div>
                  </div>
                  <div className="terms-timeline-item">
                    <div className="terms-timeline-icon">🔄</div>
                    <div className="terms-timeline-content">
                      <h4>Content Updates</h4>
                      <p>
                        We may update course content for improvements and
                        relevance
                      </p>
                    </div>
                  </div>
                  <div className="terms-timeline-item">
                    <div className="terms-timeline-icon">📱</div>
                    <div className="terms-timeline-content">
                      <h4>Multi-Device Access</h4>
                      <p>Access courses on web, mobile, and tablet devices</p>
                    </div>
                  </div>
                  <div className="terms-timeline-item">
                    <div className="terms-timeline-icon">⏰</div>
                    <div className="terms-timeline-content">
                      <h4>Time-Limited Courses</h4>
                      <p>
                        Some specialized courses may have time-restricted access
                      </p>
                    </div>
                  </div>
                </div>

                <h3>4.3 Certificates</h3>
                <p>
                  Upon successful completion of course requirements, you will
                  receive a certificate of completion. These certificates are
                  for personal achievement recognition and do not represent
                  accredited academic qualifications unless explicitly stated.
                </p>
              </div>
            </div>

            {/* Payment & Refunds */}
            <div id="payment" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">05</div>
                <h2>Payment & Refunds 💳</h2>
              </div>
              <div className="terms-box-content">
                <h3>5.1 Payment Processing</h3>
                <p>
                  All course fees must be paid in full before access is granted.
                  We accept major credit cards, debit cards, and digital payment
                  methods through secure, encrypted payment processors.
                </p>

                <h3>5.2 30-Day Money-Back Guarantee</h3>
                <div className="terms-refund-policy">
                  <div className="terms-refund-header">
                    <span className="terms-refund-icon">💰</span>
                    <h4>Our Guarantee to You</h4>
                  </div>
                  <div className="terms-refund-conditions">
                    <div className="terms-refund-item">
                      <span className="terms-refund-check">✓</span>
                      <p>Request a full refund within 30 days of purchase</p>
                    </div>
                    <div className="terms-refund-item">
                      <span className="terms-refund-check">✓</span>
                      <p>Must have completed less than 30% of course content</p>
                    </div>
                    <div className="terms-refund-item">
                      <span className="terms-refund-check">✓</span>
                      <p>Refunds processed within 5-10 business days</p>
                    </div>
                    <div className="terms-refund-item">
                      <span className="terms-refund-check">✓</span>
                      <p>Original payment method will be credited</p>
                    </div>
                    <div className="terms-refund-item">
                      <span className="terms-refund-check">✓</span>
                      <p>
                        Subscription cancellations subject to separate terms
                      </p>
                    </div>
                  </div>
                </div>

                <h3>5.3 Pricing & Promotions</h3>
                <p>
                  We reserve the right to modify course pricing at any time.
                  Price changes do not affect courses you have already
                  purchased. Promotional offers and discounts are subject to
                  specific terms and may have expiration dates.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">06</div>
                <h2>Intellectual Property Rights 📝</h2>
              </div>
              <div className="terms-box-content">
                <h3>6.1 Our Content</h3>
                <p>
                  All content on AI Learning—including but not limited to text,
                  graphics, logos, videos, audio files, code, software, and
                  course materials—is owned by AI Learning or our licensors and
                  is protected by international copyright, trademark, and
                  intellectual property laws.
                </p>

                <h3>6.2 Prohibited Activities</h3>
                <div className="terms-prohibited-grid">
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Copying or distributing course materials</p>
                  </div>
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Recording, screenshotting, or capturing videos</p>
                  </div>
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Sharing login credentials with others</p>
                  </div>
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Creating derivative works without permission</p>
                  </div>
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Commercial use or resale of content</p>
                  </div>
                  <div className="terms-prohibited-item">
                    <span className="terms-prohibited-icon">❌</span>
                    <p>Removing copyright or proprietary notices</p>
                  </div>
                </div>

                <h3>6.3 User-Generated Content</h3>
                <p>
                  By posting comments, questions, projects, or other content on
                  our platform, you grant AI Learning a worldwide,
                  non-exclusive, royalty-free license to use, display,
                  reproduce, and distribute your content for the purpose of
                  operating and promoting our Services.
                </p>
              </div>
            </div>

            {/* User Conduct */}
            <div id="conduct" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">07</div>
                <h2>Community Guidelines & Conduct 🤝</h2>
              </div>
              <div className="terms-box-content">
                <p>
                  To maintain a positive, safe, and productive learning
                  environment, all users must adhere to our community standards.
                  The following behaviors are strictly prohibited:
                </p>

                <div className="terms-conduct-list">
                  <div className="terms-conduct-category">
                    <h4>🚫 Harmful Behavior</h4>
                    <ul>
                      <li>Harassment, bullying, or threatening other users</li>
                      <li>
                        Discrimination based on race, gender, religion, or other
                        protected characteristics
                      </li>
                      <li>
                        Sharing harmful, violent, or inappropriate content
                      </li>
                    </ul>
                  </div>
                  <div className="terms-conduct-category">
                    <h4>🚫 Fraudulent Activity</h4>
                    <ul>
                      <li>
                        Impersonating others or providing false information
                      </li>
                      <li>
                        Attempting to gain unauthorized access to accounts or
                        systems
                      </li>
                      <li>Engaging in academic dishonesty or cheating</li>
                    </ul>
                  </div>
                  <div className="terms-conduct-category">
                    <h4>🚫 Spam & Abuse</h4>
                    <ul>
                      <li>
                        Posting spam, advertisements, or unsolicited promotional
                        content
                      </li>
                      <li>Uploading viruses, malware, or malicious code</li>
                      <li>
                        Attempting to disrupt or compromise platform
                        functionality
                      </li>
                    </ul>
                  </div>
                  <div className="terms-conduct-category">
                    <h4>🚫 Legal Violations</h4>
                    <ul>
                      <li>Violating any applicable laws or regulations</li>
                      <li>
                        Infringing on intellectual property rights of others
                      </li>
                      <li>Using the platform for illegal activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimers */}
            <div id="disclaimers" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">08</div>
                <h2>Disclaimers & Limitations ⚠️</h2>
              </div>
              <div className="terms-box-content">
                <div className="terms-disclaimer-cards">
                  <div className="terms-disclaimer-card">
                    <div className="terms-disclaimer-icon">🌐</div>
                    <h4>Service Availability</h4>
                    <p>
                      We strive to provide uninterrupted service but cannot
                      guarantee error-free operation 24/7. Scheduled maintenance
                      and unexpected technical issues may cause temporary
                      downtime.
                    </p>
                  </div>
                  <div className="terms-disclaimer-card">
                    <div className="terms-disclaimer-icon">🎓</div>
                    <h4>Educational Outcomes</h4>
                    <p>
                      Our courses are for educational purposes. We do not
                      guarantee specific career outcomes, job placements, salary
                      increases, or certification success as results vary by
                      individual.
                    </p>
                  </div>
                  <div className="terms-disclaimer-card">
                    <div className="terms-disclaimer-icon">🔗</div>
                    <h4>Third-Party Content</h4>
                    <p>
                      Our platform may contain links to third-party websites or
                      resources. We are not responsible for their content,
                      privacy practices, or terms of service.
                    </p>
                  </div>
                  <div className="terms-disclaimer-card">
                    <div className="terms-disclaimer-icon">💼</div>
                    <h4>Professional Advice</h4>
                    <p>
                      Content provided is for informational purposes only and
                      should not be construed as professional, legal, financial,
                      or career advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div id="liability" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">09</div>
                <h2>Limitation of Liability ⚖️</h2>
              </div>
              <div className="terms-box-content">
                <div className="terms-liability-notice">
                  <div className="terms-liability-icon">⚖️</div>
                  <div className="terms-liability-content">
                    <h4>Legal Notice</h4>
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AI
                      LEARNING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                      SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
                      NOT LIMITED TO:
                    </p>
                    <ul>
                      <li>
                        Loss of profits, revenue, or business opportunities
                      </li>
                      <li>Loss of data or information</li>
                      <li>Cost of procurement of substitute services</li>
                      <li>Interruption of business operations</li>
                      <li>Any other intangible losses</li>
                    </ul>
                    <p>
                      This limitation applies regardless of the legal theory
                      upon which the claim is based, whether in contract, tort,
                      negligence, strict liability, or otherwise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div id="changes" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">10</div>
                <h2>Modifications to Terms 🔄</h2>
              </div>
              <div className="terms-box-content">
                <p>
                  We may update these Terms from time to time to reflect changes
                  in our practices, legal requirements, or platform features.
                  When we make significant changes, we will notify you through:
                </p>

                <div className="terms-notification-methods">
                  <div className="terms-notification-item">
                    <span className="terms-notification-icon">📧</span>
                    <div>
                      <h4>Email Notification</h4>
                      <p>Sent to your registered email address</p>
                    </div>
                  </div>
                  <div className="terms-notification-item">
                    <span className="terms-notification-icon">🔔</span>
                    <div>
                      <h4>In-Platform Alert</h4>
                      <p>Prominent banner on the platform</p>
                    </div>
                  </div>
                  <div className="terms-notification-item">
                    <span className="terms-notification-icon">📅</span>
                    <div>
                      <h4>Updated Date</h4>
                      <p>"Last Updated" date at the top of this page</p>
                    </div>
                  </div>
                </div>

                <div className="terms-acceptance-note">
                  <p>
                    Your continued use of our Services after we publish or send
                    notice of changes to these Terms means that you are
                    consenting to the updated Terms. If you do not agree to the
                    modified Terms, you must stop using our Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="terms-box">
              <div className="terms-box-header">
                <div className="terms-box-number">11</div>
                <h2>Contact Information 📞</h2>
              </div>
              <div className="terms-box-content">
                <p>
                  If you have questions, concerns, or need clarification about
                  these Terms and Conditions, please reach out to our legal
                  team:
                </p>

                <div className="terms-contact-grid">
                  <div className="terms-contact-card">
                    <div className="terms-contact-icon">📧</div>
                    <h4>Email Support</h4>
                    <p className="terms-contact-value">legal@ailearning.com</p>
                    <span className="terms-contact-badge">
                      24-48 hour response
                    </span>
                  </div>
                  <div className="terms-contact-card">
                    <div className="terms-contact-icon">💬</div>
                    <h4>Live Chat</h4>
                    <p className="terms-contact-value">Available 24/7</p>
                    <button
                      className="terms-contact-btn"
                      onClick={() => navigate("/chat")}
                    >
                      Start Chat →
                    </button>
                  </div>
                  <div className="terms-contact-card">
                    <div className="terms-contact-icon">📍</div>
                    <h4>Mailing Address</h4>
                    <p className="terms-contact-value">
                      Legal Department
                      <br />
                      AI Learning
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="terms-legal-footer">
                  <p>
                    <strong>Governing Law:</strong> These Terms shall be
                    governed by and construed in accordance with the laws of
                    India, without regard to its conflict of law provisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="terms-cta-section">
        <div className="terms-cta-container">
          <div className="terms-cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Join 50,000+ students building the future with AI</p>
            <div className="terms-cta-buttons">
              <button
                className="terms-cta-primary"
                onClick={() => navigate("/courses")}
              >
                🚀 Explore Courses
              </button>
              <button
                className="terms-cta-secondary"
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </button>
            </div>
            <div className="terms-cta-assurance">
              <span>✅ No Credit Card Required</span>
              <span>✅ 30-Day Money Back</span>
              <span>✅ Lifetime Access</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
