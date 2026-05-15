import { useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "AI Tools",
    "Machine Learning",
    "Automation",
    "Deep Learning",
    "AI Design",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const allCourses = [
    {
      id: 1,
      title: "ChatGPT Mastery - Complete Guide",
      description:
        "Master prompt engineering, advanced techniques, and real-world AI applications",
      price: "₹2,499",
      originalPrice: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      level: "Beginner",
      category: "AI Tools",
      duration: "4 weeks",
      students: "12,543",
      rating: 4.8,
      lessons: 45,
      projects: 5,
      badge: "Bestseller",
    },
    {
      id: 2,
      title: "AI Automation & Workflow Optimization",
      description:
        "Automate repetitive tasks using cutting-edge AI tools and platforms",
      price: "₹3,999",
      originalPrice: "₹7,999",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      level: "Intermediate",
      category: "Automation",
      duration: "6 weeks",
      students: "8,921",
      rating: 4.9,
      lessons: 62,
      projects: 8,
      badge: "Popular",
    },
    {
      id: 3,
      title: "Machine Learning from Scratch",
      description:
        "Build ML models, understand algorithms, and deploy production-ready systems",
      price: "₹5,999",
      originalPrice: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      level: "Intermediate",
      category: "Machine Learning",
      duration: "8 weeks",
      students: "15,678",
      rating: 4.9,
      lessons: 78,
      projects: 12,
      badge: "Bestseller",
    },
    {
      id: 4,
      title: "Midjourney & DALL-E - AI Image Generation",
      description:
        "Create stunning visuals and master the art of AI-powered design",
      price: "₹1,999",
      originalPrice: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
      level: "Beginner",
      category: "AI Design",
      duration: "3 weeks",
      students: "9,432",
      rating: 4.7,
      lessons: 32,
      projects: 6,
      badge: "New",
    },
    {
      id: 5,
      title: "Deep Learning & Neural Networks",
      description: "Master TensorFlow, PyTorch, and build advanced AI models",
      price: "₹7,999",
      originalPrice: "₹15,999",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      level: "Advanced",
      category: "Deep Learning",
      duration: "10 weeks",
      students: "6,234",
      rating: 4.9,
      lessons: 95,
      projects: 15,
      badge: "Pro",
    },
    {
      id: 6,
      title: "AI for Business & Strategy",
      description:
        "Implement AI solutions in your organization and drive business growth",
      price: "₹4,499",
      originalPrice: "₹8,999",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      level: "Intermediate",
      category: "AI Tools",
      duration: "5 weeks",
      students: "7,812",
      rating: 4.8,
      lessons: 55,
      projects: 7,
      badge: "Popular",
    },
    {
      id: 7,
      title: "Python for AI & Data Science",
      description:
        "Master Python programming specifically for AI and machine learning applications",
      price: "₹3,499",
      originalPrice: "₹6,999",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      level: "Beginner",
      category: "Machine Learning",
      duration: "6 weeks",
      students: "11,234",
      rating: 4.8,
      lessons: 68,
      projects: 10,
      badge: "Bestseller",
    },
    {
      id: 8,
      title: "AI Content Creation & Marketing",
      description:
        "Use AI tools for content writing, SEO, social media, and digital marketing",
      price: "₹2,999",
      originalPrice: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&h=400&fit=crop",
      level: "Beginner",
      category: "AI Tools",
      duration: "4 weeks",
      students: "10,567",
      rating: 4.7,
      lessons: 42,
      projects: 6,
      badge: "New",
    },
    {
      id: 9,
      title: "Computer Vision & Image Processing",
      description:
        "Build face recognition, object detection, and image classification systems",
      price: "₹6,499",
      originalPrice: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      level: "Advanced",
      category: "Deep Learning",
      duration: "9 weeks",
      students: "5,432",
      rating: 4.9,
      lessons: 82,
      projects: 11,
      badge: "Pro",
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller":
        return "#ff6b6b";
      case "Popular":
        return "#00f5a0";
      case "New":
        return "#ffc107";
      case "Pro":
        return "#6c63ff";
      default:
        return "#aaa";
    }
  };

  return (
    <div className="courses-page">
      {/* HERO SECTION */}
      <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>All AI Courses 🎓</h1>
          <p>
            Master AI with expert-led courses designed for real-world success
          </p>
          <div className="hero-stats-courses">
            <div className="hero-stat-courses">
              <strong>100+</strong>
              <span>Courses</span>
            </div>
            <div className="hero-stat-courses">
              <strong>50K+</strong>
              <span>Students</span>
            </div>
            <div className="hero-stat-courses">
              <strong>500+</strong>
              <span>Hours Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="courses-filters">
        <div className="filters-container">
          {/* Search Bar */}
          <div className="search-bar-courses">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>🔍</button>
          </div>

          {/* Category Filter */}
          <div className="filter-section">
            <h3>Category</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn-courses ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="filter-section">
            <h3>Level</h3>
            <div className="filter-buttons">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`filter-btn-courses ${selectedLevel === level ? "active" : ""}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="results-count">
            Showing <strong>{filteredCourses.length}</strong> courses
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="courses-grid-section">
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="course-card-new">
                <div className="course-image-new">
                  <img src={course.image} alt={course.title} />
                  {course.badge && (
                    <span
                      className="course-badge"
                      style={{ background: getBadgeColor(course.badge) }}
                    >
                      {course.badge}
                    </span>
                  )}
                  <span className="course-level-badge">{course.level}</span>
                </div>

                <div className="course-content-new">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-meta-new">
                    <div className="meta-item">
                      <span className="meta-icon">⏱</span>
                      {course.duration}
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📚</span>
                      {course.lessons} lessons
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">🎯</span>
                      {course.projects} projects
                    </div>
                  </div>

                  <div className="course-stats-new">
                    <div className="rating-new">
                      <span className="stars">⭐ {course.rating}</span>
                    </div>
                    <div className="students-new">
                      👥 {course.students} students
                    </div>
                  </div>

                  <div className="course-footer-new">
                    <div className="price-section">
                      <span className="current-price">{course.price}</span>
                      <span className="original-price">
                        {course.originalPrice}
                      </span>
                    </div>
                    <div className="course-actions">
                      <Link
                        to={`/course/${course.id}`}
                        className="btn-view-details"
                      >
                        View Details →
                      </Link>
                      <button className="btn-enroll-now">Enroll Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-courses">
              <p>😔 No courses found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="courses-cta">
        <div className="cta-content-courses">
          <h2>Can't Find What You're Looking For? 🤔</h2>
          <p>
            We're constantly adding new courses. Request a course topic and
            we'll create it!
          </p>
          <button className="cta-btn-courses">Request a Course</button>
        </div>
      </section>
    </div>
  );
}
