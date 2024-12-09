import React from 'react';
import { MainCardContainer } from './ProfileCards'; // Assuming this is your styled component

function TrendingNews() {
  return (
    <MainCardContainer>
      <h2>Trending News</h2>
      <iframe 
        width="350" 
        height="450" 
        src="https://rss.app/embed/v1/feed/tLdrHbUZBJVT4Eds" 
        frameBorder="0"
        title="Trending News Feed"
      ></iframe>
    </MainCardContainer>
  );
}

export default TrendingNews;