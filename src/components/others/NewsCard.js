import React from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick }) {
  return (
    <div className="news-card" onClick={onClick}>
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
    </div>
  );
}

export default NewsCard;