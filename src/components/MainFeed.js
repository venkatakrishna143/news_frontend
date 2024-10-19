import React, { useState } from 'react';
import NewsCard from './NewsCard';
import './MainFeed.css';
import { articles } from '../dummyData/articles';

function MainFeed() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="main-feed">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} onClick={() => setSelectedArticle(article)} />
      ))}
      {selectedArticle && (
        <div className="news-modal">
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.content}</p>
          <button onClick={() => setSelectedArticle(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default MainFeed;