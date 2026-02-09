import { Link } from 'react-router-dom';
import './ArticleCard.css';

function ArticleCard({ category, date, title, displayTitle, gradient, backgroundImage, slug }) {
  return (
    <Link
      to={slug || '#'}
      className="article-card"
      style={{
        background: gradient,
        textDecoration: 'none'
      }}
    >
      <div className="article-card-header">
        <div className="article-card-top-row">
          <span className="article-card-category">{category}</span>
          <span className="article-card-date">{date}</span>
        </div>
        <h3 className="article-card-title">{displayTitle || title}</h3>
      </div>

      <div className="article-card-image-container">
        {backgroundImage && (
          <img src={backgroundImage} alt={title} className="article-card-image" />
        )}
      </div>
    </Link>
  );
}

export default ArticleCard;
