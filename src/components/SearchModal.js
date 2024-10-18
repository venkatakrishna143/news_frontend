import React from 'react';
import './SearchModal.css';
import { useNavigate } from 'react-router-dom';

function SearchModal({ onClose }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Search executed");
    onCloseAndNavigate(); // Close the modal and navigate to the landing page
  };

  const onCloseAndNavigate = () => {
    onClose();
    navigate('src/App.js'); // Navigate to the landing page (assuming '/' is the landing page route)
  };

  return (
    <div className="search-modal-overlay" onClick={onCloseAndNavigate}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onCloseAndNavigate}>X</button>
        <h2>Search & Filters</h2>
        <div className="filter-group">
          <label>News Type:</label>
          <select>
            <option>Top Headlines</option>
            <option>World</option>
            <option>Technology</option>
            <option>Sports</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Country:</label>
          <input type="text" />
        </div>
        <div className="filter-group">
          <label>Language:</label>
          <input type="text" />
        </div>
        <div className="filter-group">
          <label>Date:</label>
          <input type="date" />
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchModal;
 