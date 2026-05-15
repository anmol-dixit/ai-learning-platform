import "./About.css";

export default function About() {
  const team = [
    {
      name: "Anmol Dixit",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "10+ years in AI & Machine Learning education",
    },
    {
      name: "Kanika Mishra",
      role: "Head of Curriculum",
      image: "/kanika.png",
      description: "Former Google AI Engineer, passionate educator",
    },
    {
      name: "Amit Patel",
      role: "Lead AI Instructor",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      description: "PhD in ML, 8+ years teaching experience",
    },
    {
      name: "Sneha Reddy",
      role: "Student Success Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Dedicated to student career growth",
    },
  ];

  const achievements = [
    { number: "50,000+", label: "Students Trained" },
    { number: "100+", label: "Expert Courses" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality Education",
      description:
        "We deliver industry-leading AI courses with practical, hands-on learning",
    },
    {
      icon: "💡",
      title: "Innovation First",
      description:
        "Constantly updating curriculum with latest AI trends and technologies",
    },
    {
      icon: "🤝",
      title: "Student Success",
      description:
        "Your career growth is our priority - from learning to job placement",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description:
        "Join thousands of AI enthusiasts learning and growing together",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About AI Learning</h1>
          <p className="hero-subtitle">
            Empowering the next generation of AI professionals through
            cutting-edge education
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story 📖</h2>
              <p>
                Founded in 2020, <strong>AI Learning</strong> started with a
                simple mission: make AI education accessible to everyone. What
                began as a small online course platform has grown into India's
                leading AI learning ecosystem, trusted by over 50,000 students.
              </p>
              <p>
                We recognized the massive gap between traditional education and
                the skills needed in the AI industry. Our founders, experienced
                AI professionals from top tech companies, decided to bridge this
                gap by creating a platform that combines theoretical knowledge
                with practical, real-world projects.
              </p>
              <p>
                Today, we're proud to have helped thousands of students
                transition into AI careers, from complete beginners to seasoned
                developers looking to upskill.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <h2>Our Impact 🏆</h2>
          <div className="achievements-grid">
            {achievements.map((item, i) => (
              <div key={i} className="achievement-card">
                <div className="achievement-number">{item.number}</div>
                <div className="achievement-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To democratize AI education by providing world-class, affordable
                courses that transform beginners into job-ready AI
                professionals. We believe everyone deserves access to quality AI
                education, regardless of their background.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become the world's most trusted AI learning platform, where
                millions of students master AI skills and shape the future of
                technology. We envision a world where AI literacy is universal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2>Our Core Values 💎</h2>
          <div className="values-grid">
            {values.map((value, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team 👥</h2>
          <p className="team-subtitle">
            Experienced professionals dedicated to your success
          </p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="why-content">
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                alt="Learning Together"
              />
            </div>
            <div className="why-text">
              <h2>Why Choose AI Learning? 🌟</h2>
              <ul className="why-list">
                <li>
                  <strong>Industry-Expert Instructors:</strong> Learn from
                  professionals working at Google, Microsoft, Amazon
                </li>
                <li>
                  <strong>Hands-On Projects:</strong> Build real AI applications
                  for your portfolio
                </li>
                <li>
                  <strong>Job Placement Support:</strong> Resume building,
                  interview prep, and direct connections with hiring companies
                </li>
                <li>
                  <strong>Lifetime Access:</strong> Learn at your own pace,
                  access content forever
                </li>
                <li>
                  <strong>24/7 AI Assistant:</strong> Get instant help anytime
                  you're stuck
                </li>
                <li>
                  <strong>Community Support:</strong> Join 50,000+ students in
                  our active learning community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Start Your AI Journey? 🚀</h2>
          <p>
            Join thousands of students who've transformed their careers with AI
            Learning
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Explore Courses</button>
            <button className="cta-btn secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
