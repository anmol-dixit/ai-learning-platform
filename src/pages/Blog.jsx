import { useState } from "react";
import "./Blog.css";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI Trends",
    "Tutorials",
    "Career Tips",
    "News",
    "Case Studies",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How ChatGPT is Revolutionizing Content Creation in 2026",
      excerpt:
        "Discover how AI-powered tools like ChatGPT are transforming the way we create content, from blog posts to marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      author: "Priya Sharma",
      authorAvatar: "P",
      date: "April 20, 2026",
      readTime: "8 min read",
      category: "AI Trends",
      tags: ["ChatGPT", "Content", "AI Tools"],
    },
    {
      id: 2,
      title: "10 Machine Learning Projects for Beginners in 2026",
      excerpt:
        "Start your ML journey with these beginner-friendly projects that will build your portfolio and boost your career prospects.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      author: "Rahul Verma",
      authorAvatar: "R",
      date: "April 18, 2026",
      readTime: "12 min read",
      category: "Tutorials",
      tags: ["Machine Learning", "Projects", "Beginners"],
    },
    {
      id: 3,
      title: "AI Job Market 2026: Skills You Need to Land Your Dream Role",
      excerpt:
        "The AI job market is booming. Learn which skills are most in-demand and how to position yourself for success.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      author: "Ankit Singh",
      authorAvatar: "A",
      date: "April 15, 2026",
      readTime: "10 min read",
      category: "Career Tips",
      tags: ["Jobs", "Skills", "Career"],
    },
    {
      id: 4,
      title: "Midjourney vs DALL-E 3: Which AI Art Tool is Better?",
      excerpt:
        "A comprehensive comparison of the two leading AI image generation platforms to help you choose the right tool.",
      image:
        "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
      author: "Sneha Gupta",
      authorAvatar: "S",
      date: "April 12, 2026",
      readTime: "7 min read",
      category: "AI Trends",
      tags: ["AI Art", "Midjourney", "DALL-E"],
    },
    {
      id: 5,
      title: "Building Your First Neural Network: A Step-by-Step Guide",
      excerpt:
        "Learn how to build and train your first neural network from scratch using Python and TensorFlow.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      author: "Vikram Mehta",
      authorAvatar: "V",
      date: "April 10, 2026",
      readTime: "15 min read",
      category: "Tutorials",
      tags: ["Neural Networks", "TensorFlow", "Python"],
    },
    {
      id: 6,
      title: "Google's Latest AI Announcement: What It Means for Developers",
      excerpt:
        "Breaking down Google's recent AI product launches and their impact on the developer ecosystem.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      author: "Neha Kapoor",
      authorAvatar: "N",
      date: "April 8, 2026",
      readTime: "6 min read",
      category: "News",
      tags: ["Google", "AI News", "Developers"],
    },
    {
      id: 7,
      title: "How Zomato Used AI to Increase Delivery Efficiency by 40%",
      excerpt:
        "A case study on how India's leading food delivery platform leveraged machine learning for route optimization.",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
      author: "Arjun Patel",
      authorAvatar: "A",
      date: "April 5, 2026",
      readTime: "9 min read",
      category: "Case Studies",
      tags: ["Case Study", "AI in Business", "Optimization"],
    },
    {
      id: 8,
      title: "AI Automation Tools Every Small Business Should Use in 2026",
      excerpt:
        "Discover the best AI tools to automate repetitive tasks and scale your business without hiring more staff.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      author: "Kavita Joshi",
      authorAvatar: "K",
      date: "April 3, 2026",
      readTime: "11 min read",
      category: "AI Trends",
      tags: ["Automation", "Business", "Tools"],
    },
    {
      id: 9,
      title: "Transitioning to AI: A Software Developer's Journey",
      excerpt:
        "My personal story of switching from web development to AI engineering, including challenges and learnings.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      author: "Rohan Kumar",
      authorAvatar: "R",
      date: "April 1, 2026",
      readTime: "13 min read",
      category: "Career Tips",
      tags: ["Career Switch", "AI Career", "Experience"],
    },
  ];

  const featuredPost = blogPosts[0];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts.slice(1)
      : blogPosts.slice(1).filter((post) => post.category === selectedCategory);

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>AI Learning Blog 📝</h1>
          <p>
            Stay updated with the latest AI trends, tutorials, and industry
            insights
          </p>
          <div className="blog-stats">
            <div className="blog-stat">
              <strong>200+</strong>
              <span>Articles</span>
            </div>
            <div className="blog-stat">
              <strong>50K+</strong>
              <span>Readers</span>
            </div>
            <div className="blog-stat">
              <strong>Weekly</strong>
              <span>Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-badge">⭐ Featured Article</div>
          <div className="featured-post">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <span className="featured-category">{featuredPost.category}</span>
            </div>
            <div className="featured-content">
              <h2>{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="featured-meta">
                <div className="featured-author">
                  <div className="author-avatar">
                    {featuredPost.authorAvatar}
                  </div>
                  <div>
                    <div className="author-name">{featuredPost.author}</div>
                    <div className="post-info">
                      {featuredPost.date} • {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <button className="btn-read-featured">Read Article →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES FILTER */}
      <section className="blog-categories">
        <div className="categories-container">
          <h3>Filter by Category</h3>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="blog-posts">
        <div className="posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <div className="author-avatar-small">
                        {post.authorAvatar}
                      </div>
                      <div>
                        <div className="author-name-small">{post.author}</div>
                        <div className="post-info-small">
                          {post.date} • {post.readTime}
                        </div>
                      </div>
                    </div>
                    <button className="btn-read">Read →</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-posts">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="blog-newsletter">
        <div className="newsletter-card">
          <div className="newsletter-icon">📧</div>
          <h2>Never Miss an Update</h2>
          <p>
            Get the latest AI insights and tutorials delivered to your inbox
            every week
          </p>
          <form className="newsletter-form-blog">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe →</button>
          </form>
          <p className="newsletter-privacy-small">
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
