import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import NewsModal from './components/NewsModal';
import SearchModal from './components/SearchModal';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import './App.css';

const articles = [
  { title: 'News 1', summary: 'Summary 1', content: 'Content 1', image: '/images/news1.jpg' },
  { title: 'News 2', summary: 'Summary 2', content: 'Content 2', image: '/images/news2.jpg' }
];

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleSignInClick = () => {
    setSignInModalOpen(true);
  };

  const handleSignUpClick = () => {
    setSignInModalOpen(false);
    setSignUpModalOpen(true);
  };

  return (
    <div className="App">
      <Navbar onSearchClick={() => setSearchModalOpen(true)} onSignInClick={handleSignInClick} />
      <div className="news-section">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} onClick={setSelectedArticle} />
        ))}
      </div>
      <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      {/* <SearchModal onClose={() => setSearchModalOpen(false)} /> */}
      <SignInModal isOpen={signInModalOpen} onClose={() => setSignInModalOpen(false)} onSignUpClick={handleSignUpClick} />
      <SignUpModal isOpen={signUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
    </div>
  );
}

export default App;