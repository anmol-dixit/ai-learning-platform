import { useState } from "react";
import "./faq.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need any prior experience to start learning AI?",
          answer:
            "No prior experience is required! We have courses designed specifically for complete beginners. Start with our ChatGPT Mastery or AI Fundamentals courses, which require zero coding knowledge. As you progress, you can move to more technical courses like Machine Learning and Deep Learning.",
        },
        {
          question: "How long does it take to complete a course?",
          answer:
            "Course durations vary from 3-10 weeks depending on the complexity. However, all courses are self-paced, meaning you can learn at your own speed. Most students complete beginner courses in 3-4 weeks by dedicating 5-7 hours per week.",
        },
        {
          question: "What equipment or software do I need?",
          answer:
            "You only need a computer with an internet connection. All our courses are browser-based, and we provide access to cloud-based tools and platforms. For coding courses, we recommend having at least 4GB RAM and a stable internet connection.",
        },
        {
          question: "Can I access courses on mobile devices?",
          answer:
            "Yes! Our platform is fully responsive and works seamlessly on smartphones and tablets. You can watch video lessons, read content, and participate in discussions on any device. However, for coding assignments, we recommend using a laptop or desktop.",
        },
      ],
    },
    {
      category: "Courses & Learning",
      questions: [
        {
          question: "Are the courses updated regularly?",
          answer:
            "Absolutely! The AI field evolves rapidly, and we update our content every quarter to reflect the latest tools, techniques, and industry trends. Students enrolled in courses get lifetime access to all future updates at no extra cost.",
        },
        {
          question: "Do you offer live classes or recorded videos?",
          answer:
            "We offer both! Most courses feature pre-recorded video lessons that you can watch anytime. Additionally, we host weekly live Q&A sessions with instructors where you can ask questions and get real-time feedback on your projects.",
        },
        {
          question: "Can I interact with instructors?",
          answer:
            "Yes! Every course includes access to our community forum where instructors and teaching assistants actively respond to questions. Premium members also get 1-on-1 mentor sessions and priority support via email and chat.",
        },
        {
          question: "What if I don't understand a concept?",
          answer:
            "We have multiple support channels: AI chatbot for instant help, community forums for peer discussions, office hours with instructors, and detailed documentation. You can also replay video lessons unlimited times and access supplementary reading materials.",
        },
      ],
    },
    {
      category: "Certificates & Career",
      questions: [
        {
          question: "Will I receive a certificate after completing a course?",
          answer:
            "Yes! Upon completing a course and passing the final assessment, you'll receive an industry-recognized digital certificate. This certificate includes a verification link and can be added to your LinkedIn profile, resume, and portfolio.",
        },
        {
          question: "Are your certificates recognized by employers?",
          answer:
            "Our certificates are valued by 500+ companies including Google, Microsoft, Amazon, and top Indian startups. We partner with industry leaders to ensure our curriculum meets real-world job requirements. Many students have secured jobs by showcasing their project portfolios built during courses.",
        },
        {
          question: "Do you provide job placement assistance?",
          answer:
            "Yes! We offer comprehensive career support including resume building, LinkedIn profile optimization, mock interviews, and access to our exclusive job board with opportunities from 200+ hiring partners. Our career team also provides personalized guidance based on your goals.",
        },
        {
          question: "Can I build a portfolio with your courses?",
          answer:
            "Definitely! Every course includes 3-5 hands-on projects that you can showcase in your portfolio. We provide project templates, GitHub repository setup guidance, and tips on presenting your work effectively to potential employers.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "Is there a free trial?",
          answer:
            "Yes! We offer a 7-day free trial for all new users. You get full access to beginner courses and our AI chatbot assistant. No credit card required for the trial. After 7 days, you can choose to upgrade to our paid plans for advanced courses and certifications.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major payment methods including Credit/Debit cards (Visa, Mastercard, RuPay), UPI, Net Banking, Google Pay, Paytm, and international payments via PayPal. We also offer EMI options for annual subscriptions.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we have a 30-day money-back guarantee. If you're not satisfied with any course within the first 30 days of enrollment, contact our support team for a full refund. No questions asked. After 30 days, refunds are evaluated case-by-case.",
        },
        {
          question: "Are there any discounts for students?",
          answer:
            "Yes! We offer 40% discount for college students with a valid .edu email address. We also have seasonal sales during festivals, bulk discounts for corporate training, and referral bonuses. Follow our newsletter to stay updated on offers.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I face technical issues while learning?",
          answer:
            "Our technical support team is available 24/7 via live chat and email. For urgent issues, you can also use our AI troubleshooting assistant for instant help. Most technical problems are resolved within 2-4 hours during business hours.",
        },
        {
          question: "How do I access my courses after enrollment?",
          answer:
            "After enrollment, log in to your account and go to 'My Courses' dashboard. All your enrolled courses will be listed there with progress tracking. You can bookmark lessons, download resources, and resume from where you left off on any device.",
        },
        {
          question: "Can I download course materials?",
          answer:
            "Yes! You can download lecture slides, code files, datasets, and supplementary PDFs for offline access. Video lessons can be streamed online but not downloaded due to licensing restrictions. However, you have lifetime access to all materials online.",
        },
        {
          question: "What browsers are supported?",
          answer:
            "Our platform works best on the latest versions of Google Chrome, Firefox, Safari, and Microsoft Edge. We recommend using Chrome for the optimal experience, especially for interactive coding environments and live sessions.",
        },
      ],
    },
  ];

  return (
    <div className="faq-page">
      {/* HERO SECTION */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions ❓</h1>
          <p>Find answers to common questions about our AI learning platform</p>
          <div className="faq-search">
            <input type="text" placeholder="Search for answers..." />
            <button>🔍 Search</button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="faq-stats">
        <div className="faq-stat-item">
          <div className="faq-stat-icon">💬</div>
          <div className="faq-stat-number">500+</div>
          <div className="faq-stat-label">Questions Answered</div>
        </div>
        <div className="faq-stat-item">
          <div className="faq-stat-icon">⚡</div>
          <div className="faq-stat-number">&lt;2hr</div>
          <div className="faq-stat-label">Average Response Time</div>
        </div>
        <div className="faq-stat-item">
          <div className="faq-stat-icon">🎯</div>
          <div className="faq-stat-number">98%</div>
          <div className="faq-stat-label">Satisfaction Rate</div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-content">
        <div className="faq-container">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2 className="category-title">
                <span className="category-icon">📂</span>
                {category.category}
              </h2>
              <div className="faq-list">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = `${catIndex}-${qIndex}`;
                  const isActive = activeIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className={`faq-item ${isActive ? "active" : ""}`}
                    >
                      <div
                        className="faq-question"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <h3>{faq.question}</h3>
                        <span className="faq-toggle">
                          {isActive ? "−" : "+"}
                        </span>
                      </div>
                      <div className={`faq-answer ${isActive ? "show" : ""}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="faq-contact">
        <div className="faq-contact-card">
          <div className="faq-contact-icon">🤔</div>
          <h2>Still Have Questions?</h2>
          <p>
            Can't find what you're looking for? Our support team is here to
            help!
          </p>
          <div className="faq-contact-options">
            <button className="contact-option-btn chat">
              <span className="option-icon">💬</span>
              <div>
                <h4>Live Chat</h4>
                <p>Get instant answers</p>
              </div>
            </button>
            <button className="contact-option-btn email">
              <span className="option-icon">📧</span>
              <div>
                <h4>Email Support</h4>
                <p>support@ailearning.com</p>
              </div>
            </button>
            <button className="contact-option-btn ai">
              <span className="option-icon">🤖</span>
              <div>
                <h4>AI Assistant</h4>
                <p>24/7 automated help</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS */}
      <section className="popular-topics">
        <h2>Popular Help Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">🎓</div>
            <h3>Course Enrollment</h3>
            <p>Learn how to enroll in courses and access materials</p>
            <button className="topic-btn">View Guide →</button>
          </div>
          <div className="topic-card">
            <div className="topic-icon">💳</div>
            <h3>Payment & Billing</h3>
            <p>Understand pricing, refunds, and payment methods</p>
            <button className="topic-btn">View Guide →</button>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📜</div>
            <h3>Certificates</h3>
            <p>Get info about earning and verifying certificates</p>
            <button className="topic-btn">View Guide →</button>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🛠️</div>
            <h3>Technical Issues</h3>
            <p>Troubleshoot common platform problems</p>
            <button className="topic-btn">View Guide →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
