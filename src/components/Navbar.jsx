import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ setIsLogin }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);

  // ✅ NEW: Profile states
  const [userData, setUserData] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Language options
  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "de", name: "German", flag: "🇩🇪" },
    { code: "it", name: "Italian", flag: "🇮🇹" },
  ];

  // ✅ NEW: Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

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
        document.cookie =
          "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      } else {
        document.cookie = `googtrans=/en/${savedLang};path=/`;
      }

      if (selectField) {
        if (savedLang !== "en") {
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
      // ✅ NEW: Close profile dropdown on outside click
      if (!e.target.closest(".user-profile-section")) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang, retries = 10) => {
    hideGoogleElements();

    const selectField = document.querySelector(".goog-te-combo");

    if (selectField) {
      if (lang === "en") {
        document.cookie =
          "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        localStorage.setItem("selectedLanguage", "en");
        setCurrentLanguage("en");

        window.location.reload();
        return;
      }

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

  const getCurrentLanguage = () => {
    return (
      languages.find((lang) => lang.code === currentLanguage) || languages[0]
    );
  };

  // ✅ NEW: Logout function
  const handleLogout = () => {
    if (window.confirm("🤔 Are you sure you want to logout?")) {
      localStorage.removeItem("user");
      setUserData(null);
      if (setIsLogin) setIsLogin(false);
      setShowProfileDropdown(false);
      alert("👋 Logged out successfully!\n\nSee you soon! 🚀");
      navigate("/");
    }
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

            {/* ✅ NEW: Conditional Rendering - Login Buttons OR Profile */}
            {userData ? (
              // User is logged in - Show Profile
              <div className="user-profile-section">
                <button
                  className="user-profile-btn"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  {userData.photoURL ? (
                    <img
                      src={userData.photoURL}
                      alt={userData.name}
                      className="user-profile-pic"
                    />
                  ) : (
                    <div className="user-profile-placeholder">
                      {userData.name?.charAt(0).toUpperCase() || "👤"}
                    </div>
                  )}
                </button>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="user-profile-dropdown">
                    <div className="profile-dropdown-header">
                      <p className="profile-dropdown-name">{userData.name}</p>
                      <p className="profile-dropdown-email">{userData.email}</p>
                    </div>
                    <div className="profile-dropdown-divider"></div>
                    <button
                      className="profile-dropdown-item"
                      onClick={() => {
                        navigate("/profile");
                        setShowProfileDropdown(false);
                      }}
                    >
                      <span className="profile-dropdown-icon">👤</span>
                      My Profile
                    </button>
                    <button
                      className="profile-dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <span className="profile-dropdown-icon">🚪</span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User not logged in - Show Login/Signup buttons
              <>
                <NavLink to="/login" className="btn-login">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn-signup">
                  Get Started
                </NavLink>
              </>
            )}
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

          {/* ✅ Mobile Profile/Login */}
          {userData ? (
            <>
              <NavLink
                to="/profile"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                👤 My Profile
              </NavLink>
              <button
                className="mobile-nav-link logout-mobile"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </nav>
  );
}
