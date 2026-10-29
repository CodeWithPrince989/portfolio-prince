import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <header className="top-bar">
      <div className="open-to-work hero-animate">
        <span className="dot" aria-hidden="true"></span>
        <span>Open to opportunities</span>
      </div>
      <a
        href="https://www.linkedin.com/in/prince-singh-188676280/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn hero-animate hero-animate-delay-1"
        id="contact-btn"
      >
        Connect
      </a>
    </header>
  );
};
