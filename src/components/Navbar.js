import React from 'react';
import './Navbar.css';

function Navbar({ onSearchClick, onSignInClick }) {
  return (
    <nav className="navbar">
      <div className="logo">Official News</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#world">World</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#sports">Sports</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="search-button" onClick={onSearchClick}>Search & Filters</button>
        <button className="signin-button" onClick={onSignInClick}>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;