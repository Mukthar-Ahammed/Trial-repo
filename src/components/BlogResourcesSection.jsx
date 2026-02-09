import { useState } from 'react';
import './BlogResourcesSection.css';
import teamBg1 from '../assets/team-bg-1.png';
import teamBg2 from '../assets/team-bg-2.png';
import blogRect1 from '../assets/blog-rectangle-1.png';
import blogScreenshot from '../assets/blog-screenshot.png';
import blogRect2 from '../assets/blog-rectangle-2.png';
import blogRect3 from '../assets/blog-rectangle-3.png';

// CMS-ready data structure - can be replaced with CMS data
const defaultCategories = ['ALL', 'AI ENGINEERING', 'USECASES', 'FOUNDER\'S NOTES'];

const defaultFeaturedPost = {
  id: 'featured-1',
  image: teamBg1,
  title: 'Why most AI pilots never reach production',
  date: 'FEBRUARY, 2026',
  slug: 'why-most-ai-pilots-never-reach-production',
};

const defaultArticles = [
  {
    id: 1,
    category: 'AI ENGINEERING',
    date: 'FEBRUARY, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: null,
    slug: 'automating-compliance-checks',
    gradient: 'teal',
  },
  {
    id: 2,
    category: 'ENGINEERING',
    date: 'FEBRUARY, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: null,
    slug: 'automating-compliance-checks-2',
    gradient: 'gray',
  },
  {
    id: 3,
    category: 'ENGINEERING',
    date: 'FEBRUARY, 2026',
    title: 'Automating compliance checks in regulated environments',
    image: blogScreenshot,
    slug: 'automating-compliance-checks-3',
    gradient: 'green',
  },
];

function BlogResourcesSection({
  featuredPost = defaultFeaturedPost,
  articles = defaultArticles,
  categories = defaultCategories
}) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <section className="blog-resources-section">
      <div className="blog-container">
        <div className="blog-featured-card">
          <div className="blog-featured-image">
            <span className="blog-featured-badge">FEATURED</span>
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="blog-featured-content">
            <h2 className="blog-featured-title">{featuredPost.title}</h2>
            <p className="blog-featured-date">{featuredPost.date}</p>
          </div>
        </div>

        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-articles-grid">
          {articles.map((article) => (
            <article key={article.id} className={`blog-article-card gradient-${article.gradient}`}>
              <div className="blog-article-header">
                <p className="blog-article-category">{article.category}</p>
                <p className="blog-article-date">{article.date}</p>
              </div>
              <h3 className="blog-article-title">{article.title}</h3>
              {article.image && (
                <div className="blog-article-image">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogResourcesSection;
