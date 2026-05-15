import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ setIsLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const [isLangOpen, setIsLangOpen] = useState(false);

  // Language options
  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "it", name: "Italian", flag: "🇮🇹" },
  ];

  const hideGoogleElements = () => {
    document.documentElement.style.top = "0px";
    const elements = document.querySelectorAll(
      ".goog-te-banner-frame, .goog-te-gadget, .goog-te-gadget-simple, .goog-te-balloon-frame",
    );

    elements.forEach((el) => {
      el.style.display = "none";
      el.style.visibility = "hidden";
      el.style.opacity = "0";
      el.style.height = "0";
    });

    document.body.style.top = "0px";
  };

  // Load saved language on component mount
  useEffect(() => {
    let attempts = 0;

    const applyLanguage = () => {
      const selectField = document.querySelector(".goog-te-combo");
      const savedLang = localStorage.getItem("selectedLanguage") || "en";

      if (savedLang === "en") {
        // ✅ English → cookie remove
        document.cookie =
          "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      } else {
        // ✅ Other languages → set cookie
        document.cookie = `googtrans=/en/${savedLang};path=/`;
      }

      if (selectField) {
        if (savedLang !== "en") {
          // ❗ only for non-English
          selectField.value = savedLang;
          selectField.dispatchEvent(new Event("change"));
        }

        setCurrentLanguage(savedLang);
      } else if (attempts < 10) {
        attempts++;
        setTimeout(applyLanguage, 500);
      }
    };

    applyLanguage();
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      hideGoogleElements();
    });

    const target = document.body;

    if (target) {
      observer.observe(target, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown")) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // Function to change language
  const changeLanguage = (lang, retries = 10) => {
    hideGoogleElements();

    const selectField = document.querySelector(".goog-te-combo");

    if (selectField) {
      if (lang === "en") {
        // 🔥 IMPORTANT: reset translation completely
        document.cookie =
          "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        localStorage.setItem("selectedLanguage", "en");
        setCurrentLanguage("en");

        // 🔥 page reload required
        window.location.reload();
        return;
      }

      // normal languages
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change", { bubbles: true }));

      localStorage.setItem("selectedLanguage", lang);
      document.cookie = `googtrans=/en/${lang};path=/`;

      setCurrentLanguage(lang);

      setTimeout(hideGoogleElements, 50);
      return;
    }

    if (retries > 0) {
      setTimeout(() => changeLanguage(lang, retries - 1), 500);
    }
  };

  // Get current language details
  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === currentLanguage) || languages[0]
    );
  };

  return (
    <nav className="navbar">
      {/* TOP ROW - Logo, Search, Language, Buttons */}
      <div className="navbar-top">
        <div className="navbar-top-container">
          {/* Logo */}
          <NavLink to="/" className="navbar-logo">
            <img src="/ai-logo1.png" alt="AI Logo" className="logo-img" />
            <span className="logo-text">AI Learning</span>
          </NavLink>

          {/* Right Section */}
          <div className="navbar-top-right">
            {/* Search Box */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="search-input"
              />
              <button className="search-btn">
                <span>🔍</span>
              </button>
            </div>

            {/* Custom Language Selector */}
            <div className="language-dropdown notranslate">
              <button
                className={`language-dropdown-btn notranslate ${isLangOpen ? "active" : ""}`}
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span className="language-flag">
                  {getCurrentLanguage().flag}
                </span>
                <span className="language-name">
                  {getCurrentLanguage().name}
                </span>
                <span className="dropdown-arrow">▼</span>
              </button>

              <div
                className={`language-dropdown-menu ${isLangOpen ? "show" : ""}`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option notranslate ${
                      currentLanguage === lang.code ? "active" : ""
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span className="check-mark">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <NavLink to="/login" className="btn-login">
              Login
            </NavLink>

            {/* Get Started Button */}
            <NavLink to="/signup" className="btn-signup">
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* BOTTOM ROW - Navigation Menu */}
      <div className="navbar-bottom">
        <div className="navbar-bottom-container">
          <div className="navbar-menu">
            <NavLink to="/" className="nav-link">
              🏠 Home
            </NavLink>
            <NavLink to="/courses" className="nav-link">
              📚 Courses
            </NavLink>
            <NavLink to="/about" className="nav-link">
              ℹ️ About Us
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              📝 Blog
            </NavLink>
            <NavLink to="/faq" className="nav-link">
              ❓ FAQ
            </NavLink>
            <NavLink to="/Contact" className="nav-link">
              📞 Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="/"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            🏠 Home
          </NavLink>
          <NavLink
            to="/courses"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            📚 Courses
          </NavLink>
          <NavLink
            to="/about"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            ℹ️ About Us
          </NavLink>
          <NavLink
            to="/blog"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            📝 Blog
          </NavLink>
          <NavLink
            to="/faq"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            ❓ FAQ
          </NavLink>

          {/* Mobile Language Selector */}
          <div className="mobile-language-section notranslate">
            <div className="mobile-divider"></div>
            <div className="mobile-language-label">Language</div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`mobile-language-option notranslate ${
                  currentLanguage === lang.code ? "active" : ""
                }`}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsLangOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                {currentLanguage === lang.code && (
                  <span className="check-mark">✓</span>
                )}
              </button>
            ))}
          </div>

          <div className="mobile-divider"></div>
          <NavLink
            to="/login"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="mobile-nav-link mobile-signup"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
}
