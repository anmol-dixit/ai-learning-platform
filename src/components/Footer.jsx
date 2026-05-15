import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <img
                src="/ai-logo1.png"
                alt="AI Learning"
                className="footer-logo-img"
              />
              <h3 className="footer-logo-text">AI Learning</h3>
            </div>
            <p className="footer-description">
              Empowering the next generation of AI professionals with
              cutting-edge courses, hands-on projects, and industry-recognized
              certifications.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                📘
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                🐦
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                💼
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                📷
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                🎥
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li>
                <Link to="/category/chatgpt">ChatGPT & LLMs</Link>
              </li>
              <li>
                <Link to="/category/ml">Machine Learning</Link>
              </li>
              <li>
                <Link to="/category/data-science">Data Science</Link>
              </li>
              <li>
                <Link to="/category/automation">AI Automation</Link>
              </li>
              <li>
                <Link to="/category/computer-vision">Computer Vision</Link>
              </li>
              <li>
                <Link to="/category/nlp">Natural Language Processing</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/tutorials">Free Tutorials</Link>
              </li>
              <li>
                <Link to="/ebooks">AI E-books</Link>
              </li>
              <li>
                <Link to="/career">Career Guidance</Link>
              </li>
              <li>
                <Link to="/certificates">Certifications</Link>
              </li>
              <li>
                <Link to="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/instructors">Become Instructor</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
              <li>
                <Link to="/press">Press Kit</Link>
              </li>
              <li>
                <Link to="/affiliate">Affiliate Program</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-column">
            <h4 className="footer-heading">Stay Connected</h4>
            <p className="contact-info">
              📧{" "}
              <a href="mailto:support@ailearning.com">support@ailearning.com</a>
            </p>
            <p className="contact-info">
              📞 <a href="tel:+911234567890">+91 123 456 7890</a>
            </p>
            <p className="contact-info">📍 New Delhi, India</p>

            <div className="footer-newsletter">
              <h5>Weekly AI Newsletter</h5>
              <form className="newsletter-form-footer">
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input-footer"
                  required
                />
                <button type="submit" className="newsletter-btn-footer">
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Middle - Trust Badges */}
        <div className="footer-middle">
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">ISO Certified</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🔒</span>
              <span className="badge-text">Secure Payment</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Award Winning</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">⭐</span>
              <span className="badge-text">4.9/5 Rating</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🌍</span>
              <span className="badge-text">Global Community</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">
              © {currentYear} AI Learning. All rights reserved.
            </p>
            <p className="tagline">
              🚀 Building the future with Artificial Intelligence
            </p>
          </div>

          <div className="footer-bottom-right">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="separator">•</span>
            <Link to="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
            <span className="separator">•</span>
            <Link to="/cookie-policy" className="footer-legal-link">
              Cookie Policy
            </Link>
            <span className="separator">•</span>
            <Link to="/refund" className="footer-legal-link">
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Made with Love */}
        <div className="footer-love">
          <p>
            Made with ❤️ by AI Learning Team | Powered by{" "}
            <span className="highlight">Cutting-edge AI Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
