import React from 'react';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="profile-card">
        <img src="/assets/images/profile.jpg" alt="Profile" className="profile-pic" />
        <h3>sri Krishna</h3>
        <p>Software Architect</p>
        <button className="sidebar-button">View Profile</button>
      </div>
    </div>
  );
}

export default LeftSidebar;