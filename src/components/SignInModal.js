import React from 'react';
import './SignInModal.css';

function SignInModal({ isOpen, onClose, onSignUpClick }) {
  if (!isOpen) return null;

  return (
    <div className="signin-modal-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="signin-button">Sign In</button>
        <p>Don't have an account? <button className="signup-button" onClick={onSignUpClick}>Sign Up</button></p>
      </div>
    </div>
  );
}

export default SignInModal;