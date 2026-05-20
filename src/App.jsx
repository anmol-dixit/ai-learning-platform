import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AIChat from "./pages/AIChat";
import Contact from "./pages/Contact";
import FAQ from "./pages/faq";
import Blog from "./pages/Blog";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CourseDetails from "./pages/CourseDetails";
import Profile from './pages/Profile';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ConditionalFooter() {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup", "/chat"];

  return hideFooterRoutes.includes(location.pathname) ? null : <Footer />;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("selectedLanguage");

    if (saved && saved !== "en") {
      setTimeout(() => {
        const combo = document.querySelector(".goog-te-combo");

        if (combo) {
          combo.value = saved;
          combo.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 2000);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar setIsLogin={setIsLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<AIChat />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile setIsLogin={setIsLogin} />} />
        
      </Routes>

      <ConditionalFooter />
    </BrowserRouter>
  );
}

export default App;
