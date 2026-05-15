import { useState } from "react";
import "./Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Map configuration
  function MapComponent() {
    const center = {
      lat: 28.6315,
      lng: 77.2167,
    };

    return (
      <LoadScript googleMapsApiKey="AIzaSyDg2gzoTFwRMLdOkQLb8IPxqOnMOhqNs44">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
          }}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for contacting us! We'll get back to you within 24 hours.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Get a response within 24 hours",
      value: "support@ailearning.com",
      link: "mailto:support@ailearning.com",
      color: "#6c63ff",
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri, 9 AM - 6 PM IST",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "#00f5a0",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Start Chat",
      link: "#",
      color: "#ff6b6b",
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Main Office Location",
      value: "Delhi, India",
      link: "#",
      color: "#ffc107",
    },
  ];

  const officeLocations = [
    {
      city: "Delhi (HQ)",
      address: "456 Tech Park, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43210",
      email: "delhi@ailearning.com",
    },
    {
      city: "Bangalore",
      address: "789 Innovation Hub, Koramangala, Bangalore - 560095",
      phone: "+91 98765 43211",
      email: "bangalore@ailearning.com",
    },
    {
      city: "Mumbai",
      address: "123 Business Center, Bandra West, Mumbai - 400050",
      phone: "+91 98765 43212",
      email: "mumbai@ailearning.com",
    },
  ];

  const socialLinks = [
    { icon: "📘", name: "Facebook", link: "#", color: "#1877f2" },
    { icon: "🐦", name: "Twitter", link: "#", color: "#1da1f2" },
    { icon: "💼", name: "LinkedIn", link: "#", color: "#0a66c2" },
    { icon: "📸", name: "Instagram", link: "#", color: "#e4405f" },
    { icon: "▶️", name: "YouTube", link: "#", color: "#ff0000" },
    { icon: "💬", name: "Discord", link: "#", color: "#5865f2" },
  ];

  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch 📞</h1>
          <p>We'd love to hear from you. Our team is always here to help!</p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="contact-methods">
        <div className="methods-grid">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="method-card"
              style={{ borderColor: method.color + "40" }}
            >
              <div className="method-icon" style={{ color: method.color }}>
                {method.icon}
              </div>
              <h3>{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <p className="method-value" style={{ color: method.color }}>
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="contact-main">
        <div className="contact-container">
          {/* LEFT - Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send Us a Message ✉️</h2>
              <p>Fill out the form below and we'll get back to you soon</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="course">Course Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* RIGHT - Quick Info */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>💡 Quick Tips</h3>
              <ul className="info-list">
                <li>✅ Average response time: 2-4 hours</li>
                <li>✅ 24/7 AI chatbot support available</li>
                <li>✅ Live chat: Mon-Fri, 9 AM - 6 PM IST</li>
                <li>✅ Emergency support: Call us directly</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🌐 Connect With Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-link"
                    style={{ borderColor: social.color + "40" }}
                    title={social.name}
                  >
                    <span style={{ color: social.color }}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>⏰ Business Hours</h3>
              <div className="business-hours">
                <div className="hours-row">
                  <span>Monday - Friday</span>
                  <strong>9:00 AM - 6:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <strong>10:00 AM - 4:00 PM</strong>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <strong>Closed</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="office-locations">
        <h2>Our Office Locations 🏢</h2>
        <div className="locations-grid">
          {officeLocations.map((office, index) => (
            <div key={index} className="location-card">
              <div className="location-header">
                <div className="location-icon">📍</div>
                <h3>{office.city}</h3>
              </div>
              <div className="location-details">
                <p className="location-address">
                  <span className="detail-icon">🏢</span>
                  {office.address}
                </p>
                <p className="location-contact">
                  <span className="detail-icon">📞</span>
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </p>
                <p className="location-contact">
                  <span className="detail-icon">📧</span>
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </p>
              </div>
              <button className="location-btn">Get Directions →</button>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            {/* <div className="map-icon">🗺️</div>
            <h3>Interactive Map</h3>
            <p>Find us on Google Maps</p> */}

            <MapComponent />

            <a
              href="https://www.google.com/maps?q=28.6315,77.2167"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="map-btn">Open in Google Maps →</button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="contact-faq-cta">
        <div className="faq-cta-content">
          <h2>Looking for Quick Answers? 🤔</h2>
          <p>
            Check out our FAQ section for instant solutions to common questions
          </p>
          <button className="faq-cta-btn">Visit FAQ Page →</button>
        </div>
      </section>
    </div>
  );
}
