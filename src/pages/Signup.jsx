// Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../firebase/config'; // ✅ githubProvider add

export default function Signup({ setIsLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Signup successful!", formData);

      if (setIsLogin) {
        setIsLogin(true);
      }

      alert(
        `🎉 Welcome ${formData.fullName}!\n\nYour account has been created successfully!\n\nStart your AI learning journey now! 🚀`,
      );

      navigate("/");
    } else {
      setErrors(newErrors);
    }
  };

  // ✅ GOOGLE LOGIN (Already Working)
  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log("Google Login Successful!");
      console.log("User Name:", user.displayName);
      console.log("User Email:", user.email);
      
      if (setIsLogin) {
        setIsLogin(true);
      }

      localStorage.setItem('user', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        provider: 'google'
      }));

      alert(
        `🎉 Welcome ${user.displayName}!\n\n✅ Google login successful!\n\nStart your AI learning journey now! 🚀`
      );

      navigate("/");
      
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      
      if (error.code === 'auth/popup-closed-by-user') {
        alert("⚠️ Popup closed! Please try again.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        alert("⚠️ Login cancelled. Please try again.");
      } else {
        alert(`❌ Login failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅✅✅ GITHUB LOGIN - NEW FUNCTION ✅✅✅
  const handleGithubSignup = async () => {
    try {
      setLoading(true);
      
      console.log("🐙 GitHub login starting...");
      
      // GitHub popup open hoga
      const result = await signInWithPopup(auth, githubProvider);
      
      // User details
      const user = result.user;
      
      console.log("✅ GitHub Login Successful!");
      console.log("👤 User Name:", user.displayName);
      console.log("📧 User Email:", user.email);
      console.log("📸 User Photo:", user.photoURL);
      console.log("🆔 User UID:", user.uid);
      
      // Login state set
      if (setIsLogin) {
        setIsLogin(true);
      }

      // LocalStorage mein save
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName || user.email?.split('@')[0] || 'GitHub User',
        email: user.email || `${user.uid}@github.com`,
        photoURL: user.photoURL || '/default-avatar.png',
        uid: user.uid,
        provider: 'github'
      }));

      // Success Alert
      alert(
        `🎉 Welcome ${user.displayName || 'Developer'}!\n\n✅ GitHub login successful!\n\nStart your AI learning journey now! 🚀`
      );

      // Home page redirect
      navigate("/");
      
    } catch (error) {
      console.error("❌ GitHub Sign-In Error:", error);
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      
      // Detailed error handling
      if (error.code === 'auth/popup-closed-by-user') {
        alert("⚠️ Login popup closed! Please try again.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        alert("⚠️ Login cancelled. Please try again.");
      } else if (error.code === 'auth/account-exists-with-different-credential') {
        alert("⚠️ This email is already registered with Google. Please use Google login.");
      } else if (error.code === 'auth/popup-blocked') {
        alert("⚠️ Popup blocked by your browser! Please allow popups and try again.");
      } else if (error.code === 'auth/operation-not-allowed') {
        alert("⚠️ GitHub login is not enabled. Please contact support.");
      } else {
        alert(`❌ GitHub login failed!\n\nError: ${error.message}\n\nPlease try again.`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Side - Signup Form */}
        <div className="signup-form-section">
          <div className="signup-header">
            <h1>Create Your Account 🚀</h1>
            <p>Join 50,000+ students learning AI</p>
          </div>

          {/* Social Signup Buttons */}
          <div className="social-signup">
            {/* ✅ Google Button */}
            <button
              className="social-btn google-btn"
              onClick={handleGoogleSignup}
              disabled={loading}
            >
              <span className="social-icon">🔍</span>
              {loading ? "Signing in..." : "Continue with Google"}
            </button>
            
            {/* ✅ GitHub Button - UPDATED */}
            <button
              className="social-btn github-btn"
              onClick={handleGithubSignup}
              disabled={loading}
            >
              <span className="social-icon">💻</span>
              {loading ? "Signing in..." : "Continue with GitHub"}
            </button>
          </div>

          <div className="divider">
            <span>OR</span>
          </div>

          {/* Rest of the form... */}
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "error" : ""}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the{" "}
                  <NavLink to="/terms" target="_blank">
                    Terms & Conditions
                  </NavLink>{" "}
                  and{" "}
                  <NavLink to="/privacy" target="_blank">
                    Privacy Policy
                  </NavLink>
                </span>
              </label>
              {errors.agreeTerms && (
                <span className="error-message">{errors.agreeTerms}</span>
              )}
            </div>

            <button type="submit" className="signup-submit-btn">
              Create Account 🎯
            </button>
          </form>

          <div className="signup-footer">
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="login-link">
                Login here
              </NavLink>
            </p>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="signup-benefits-section">
          <div className="benefits-content">
            <h2>Why Join AI Learning? 🌟</h2>
            <p className="benefits-subtitle">
              Everything you need to master AI and transform your career
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">🎓</span>
                <div>
                  <h3>100+ Expert Courses</h3>
                  <p>From beginner to advanced AI concepts</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">🤖</span>
                <div>
                  <h3>24/7 AI Assistant</h3>
                  <p>Get instant help whenever you need it</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">🏆</span>
                <div>
                  <h3>Industry Certifications</h3>
                  <p>Recognized by top tech companies</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">💼</span>
                <div>
                  <h3>Career Support</h3>
                  <p>Resume building & job placement assistance</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">🌍</span>
                <div>
                  <h3>Global Community</h3>
                  <p>Connect with 50,000+ AI enthusiasts</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">⚡</span>
                <div>
                  <h3>Lifetime Access</h3>
                  <p>Learn at your own pace, anytime</p>
                </div>
              </div>
            </div>

            <div className="stats-highlight">
              <div className="stat">
                <strong>50K+</strong>
                <span>Students</span>
              </div>
              <div className="stat">
                <strong>4.9/5</strong>
                <span>Rating</span>
              </div>
              <div className="stat">
                <strong>100+</strong>
                <span>Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}