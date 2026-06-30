import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  const AIChat = () => {
    navigate("/chat");
  };

  // Enhanced testimonials with names
  const testimonials = [
    {
      text: "This platform completely transformed my understanding of AI. The interactive lessons and real projects gave me the confidence to land my dream job!",
      author: "Anmol Dixit",
      role: "AI Engineer at Google",
    },
    {
      text: "Best AI learning platform I've found! The content is up-to-date, easy to follow, and the AI chat feature helps me whenever I'm stuck.",
      author: "Rahul Verma",
      role: "Data Scientist",
    },
    {
      text: "I went from zero coding knowledge to building AI applications in just 3 months. The step-by-step approach is incredible!",
      author: "Kanika Mishra",
      role: "ML Developer at Microsoft",
    },
    {
      text: "The future of work is AI, and this platform prepared me perfectly. Highly recommended for anyone serious about their career!",
      author: "Arjun Singh",
      role: "Automation Specialist",
    },
    {
      text: "Amazing UI, engaging content, and practical projects. This isn't just learning—it's career transformation!",
      author: "Sneha Gupta",
      role: "Tech Entrepreneur",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated stats counter
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector(".stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !statsVisible) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsVisible]);

  const courses = [
    {
      id: 1,
      title: "ChatGPT Mastery",
      description: "Master prompt engineering and AI conversations",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      level: "Beginner",
      duration: "4 weeks",
    },
    {
      id: 2,
      title: "AI Automation Tools",
      description: "Automate workflows with AI-powered solutions",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      level: "Intermediate",
      duration: "6 weeks",
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      description: "Build your first ML models from scratch",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
      level: "Intermediate",
      duration: "8 weeks",
    },
    {
      id: 4,
      title: "AI for Business",
      description: "Implement AI strategies in your organization",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      level: "Advanced",
      duration: "5 weeks",
    },
    {
      id: 5,
      title: "Deep Learning",
      description: "Neural networks and advanced AI concepts",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      level: "Advanced",
      duration: "10 weeks",
    },
    {
      id: 6,
      title: "AI Image Generation",
      description: "Create stunning visuals with Midjourney & DALL-E",
      image:
        "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=400&h=250&fit=crop",
      level: "Beginner",
      duration: "3 weeks",
    },
  ];

  const learningPaths = [
    {
      icon: "🎯",
      title: "Beginner Path",
      description: "Start from zero, learn AI fundamentals",
      courses: "12 Courses",
    },
    {
      icon: "🚀",
      title: "Career Switch",
      description: "Transition to AI & ML roles",
      courses: "18 Courses",
    },
    {
      icon: "💼",
      title: "Professional Growth",
      description: "Advance your AI expertise",
      courses: "15 Courses",
    },
    {
      icon: "🏆",
      title: "Expert Level",
      description: "Master advanced AI concepts",
      courses: "20 Courses",
    },
  ];

  const whyChooseUs = [
    {
      icon: "⚡",
      title: "Fast Learning",
      description: "Learn at your own pace with bite-sized lessons",
    },
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Get instant help from our intelligent AI assistant",
    },
    {
      icon: "🎯",
      title: "Job Ready Skills",
      description: "Industry-relevant projects and certifications",
    },
    {
      icon: "📚",
      title: "Real Projects",
      description: "Build portfolio-worthy AI applications",
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Resume building, interview prep & job placement",
    },
    {
      icon: "🌟",
      title: "Expert Mentors",
      description: "Learn from industry professionals at top companies",
    },
  ];

  const categories = [
    { icon: "🤖", name: "AI Chatbots", count: "25+ Courses" },
    { icon: "⚙️", name: "Automation", count: "18+ Courses" },
    { icon: "📊", name: "Data Science", count: "30+ Courses" },
    { icon: "💻", name: "AI Coding", count: "22+ Courses" },
    { icon: "🎨", name: "AI Design", count: "15+ Courses" },
    { icon: "🚀", name: "Business AI", count: "20+ Courses" },
  ];

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/ai-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="badge">🔥 #1 AI Learning Platform in India</div>
          <h1>Master AI & Build Your Future</h1>

          {/* <h1>Hello Anmol</h1> */}
          <p className="hero-subtitle">
            Learn ChatGPT, Machine Learning, Automation & AI Tools
            <br />
            Join 50,000+ Students Already Transforming Their Careers
          </p>

          <div className="buttons">
            <button className="btn-primary">
              <span>🚀 Start Learning Free</span>
            </button>
            <button className="btn-secondary" onClick={AIChat}>
              <span>Ask AI Assistant 🤖</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>50K+</strong>
              <span>Students</span>
            </div>
            <div className="hero-stat">
              <strong>4.9/5</strong>
              <span>Rating</span>
            </div>
            <div className="hero-stat">
              <strong>100+</strong>
              <span>Courses</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="mouse"></div>
        </div>
      </section>

      {/* ABOUT AI SECTION */}
      <section className="about-ai">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
              alt="AI Technology"
            />
            <div className="about-badge">
              <span className="pulse-dot"></span>
              AI Revolution is Here
            </div>
          </div>

          <div className="about-content">
            <h2>Why AI is the Future? 🚀</h2>
            <p className="about-text">
              Artificial Intelligence is revolutionizing every industry—from
              healthcare to finance, education to entertainment. By 2030, AI
              will create <strong>97 million new jobs</strong> worldwide. Don't
              get left behind in this technological revolution.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <span className="feature-icon">💰</span>
                <div>
                  <h4>High Salary Potential</h4>
                  <p>
                    AI professionals earn 40-60% more than average tech roles
                  </p>
                </div>
              </div>
              <div className="about-feature">
                <span className="feature-icon">📈</span>
                <div>
                  <h4>Growing Demand</h4>
                  <p>500% increase in AI job postings in the last 3 years</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🌍</span>
                <div>
                  <h4>Remote Opportunities</h4>
                  <p>Work from anywhere with global AI companies</p>
                </div>
              </div>
            </div>

            <button className="btn-learn-more">Learn More About AI</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="features">
        <div className="section-header">
          <h2>Why Choose Our Platform? 🌟</h2>
          <p>Everything you need to master AI and accelerate your career</p>
        </div>

        <div className="features-grid">
          {whyChooseUs.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section className="learning-paths">
        <div className="section-header">
          <h2>Choose Your Learning Path 🎯</h2>
          <p>Personalized roadmaps designed for your goals</p>
        </div>

        <div className="paths-grid">
          {learningPaths.map((path, i) => (
            <div key={i} className="path-card">
              <div className="path-icon">{path.icon}</div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <div className="path-meta">{path.courses}</div>
              <button className="path-button">Explore Path →</button>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="courses">
        <div className="section-header">
          <h2>Popular Courses 📚</h2>
          <p>Start with our most-loved courses trusted by thousands</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="course-level">{course.level}</span>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span className="duration">⏱ {course.duration}</span>
                  <span className="rating">⭐ 4.8</span>
                </div>
                <button className="enroll-btn">Enroll Now →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="btn-view-all">View All 100+ Courses</button>
        </div>
      </section>

      {/* AI CATEGORIES */}
      <section className="categories">
        <div className="section-header">
          <h2>Explore AI Categories 🔍</h2>
          <p>Discover courses across various AI domains</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, i) => (
            <div key={i} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p className="category-count">{category.count}</p>
              <button className="category-btn">Explore →</button>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Success Stories 💬</h2>
          <p>Hear from students who transformed their careers</p>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-box">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonials[index].text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[index].author.charAt(0)}
              </div>
              <div>
                <h4>{testimonials[index].author}</h4>
                <p className="author-role">{testimonials[index].role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-item">
          <div className="stat-number">{statsVisible ? "50,000" : "0"}+</div>
          <div className="stat-label">Active Students</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{statsVisible ? "100" : "0"}+</div>
          <div className="stat-label">Expert Courses</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{statsVisible ? "500" : "0"}+</div>
          <div className="stat-label">Video Tutorials</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">AI Support</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="section-header">
          <h2>How It Works ⚙️</h2>
          <p>Your journey to AI mastery in 4 simple steps</p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Path</h3>
            <p>Select from beginner to advanced learning tracks</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Learn & Practice</h3>
            <p>Interactive lessons with hands-on projects</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Build Projects</h3>
            <p>Create real AI applications for your portfolio</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Get Certified</h3>
            <p>Earn industry-recognized certifications</p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY COMPANIES */}
      <section className="trusted-by">
        <div className="section-header">
          <h2>Trusted By Top Companies 🏢</h2>
          <p>Our students work at leading tech companies worldwide</p>
        </div>

        <div className="companies-logos">
          <div className="company-logo">Google</div>
          <div className="company-logo">Microsoft</div>
          <div className="company-logo">Amazon</div>
          <div className="company-logo">Meta</div>
          <div className="company-logo">IBM</div>
          <div className="company-logo">Netflix</div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <div className="section-header">
          <h2>Frequently Asked Questions ❓</h2>
          <p>Everything you need to know before starting</p>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h3>Do I need coding experience?</h3>
            <p>
              No! We have courses for complete beginners. Start with our ChatGPT
              and AI fundamentals courses, then progress to coding-based
              courses.
            </p>
          </div>
          <div className="faq-item">
            <h3>How long does it take to complete a course?</h3>
            <p>
              Courses range from 3-10 weeks depending on complexity. You can
              learn at your own pace and access content lifetime.
            </p>
          </div>
          <div className="faq-item">
            <h3>Will I get a certificate?</h3>
            <p>
              Yes! You'll receive an industry-recognized certificate upon
              completing each course, which you can add to your LinkedIn and
              resume.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is there job placement support?</h3>
            <p>
              Absolutely! We provide resume building, interview preparation, and
              connect you with our hiring partners.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your AI Journey? 🚀</h2>
          <p>Join 50,000+ students learning AI and building the future</p>

          <div className="cta-buttons">
            <button className="cta-primary">
              <span>🎓 Start Learning Free</span>
            </button>
            <button className="cta-secondary" onClick={AIChat}>
              <span>🤖 Try AI Assistant</span>
            </button>
          </div>

          <div className="cta-guarantee">
            <span>✅ No Credit Card Required</span>
            <span>✅ 30-Day Money Back Guarantee</span>
            <span>✅ Lifetime Access</span>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-left">
            <h2>Stay Updated with AI Trends 📧</h2>
            <p>
              Get weekly insights, course updates, and exclusive AI resources
              delivered to your inbox
            </p>
            <ul className="newsletter-benefits">
              <li>✨ Free AI tools and resources</li>
              <li>📚 Early access to new courses</li>
              <li>💡 Industry expert tips & tricks</li>
              <li>🎁 Exclusive discounts & offers</li>
            </ul>
          </div>

          <div className="newsletter-right">
            <div className="newsletter-box">
              <h3>Subscribe Now</h3>
              <p className="newsletter-subtext">Join 10,000+ AI enthusiasts</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe →
                </button>
              </form>
              <p className="newsletter-privacy">
                🔒 We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
