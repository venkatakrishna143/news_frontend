import React from 'react';
import './NewsModal.css';

function NewsModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{article.title}</h2>
        <img src={article.image} alt={article.title} />
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default NewsModal;