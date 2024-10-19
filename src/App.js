import React from 'react';
import TopNav from './components/TopNav';
import LeftSidebar from './components/LeftSidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="main-layout">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;