import React from 'react';
import './SignUpModal.css';

function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpModal;