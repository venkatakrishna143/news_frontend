import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <nav className="topnav">
      <div className="logo">Official News</div>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="nav-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">Top Headlines</button>
        <button className="nav-button">Current Affairs</button>
        <button className="nav-button">Sports</button>
        <button className="nav-button">Notifications</button>
      </div>
    </nav>
  );
}

export default TopNav;