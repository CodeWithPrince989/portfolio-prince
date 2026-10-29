import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="section-1" className="section">
      <div className="hero-tags hero-animate hero-animate-delay-1">
        <span className="hero-tag green">- AI&amp;ML ENGINEER</span>
        <span className="hero-tag">- Web dev</span>
        <span className="hero-tag yellow">- Data Analyst</span>
      </div>

      <h1 className="hero-name hero-animate hero-animate-delay-2">
        Prince
        <br />
        Singh
      </h1>

      <div className="hero-links hero-animate hero-animate-delay-3">
        <a
          href="mailto:princekumarsingh016592@gmail.com"
          className="hero-link"
          id="hero-email"
        >
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,4 12,13 2,4" />
            </svg>
          </span>
          princekumarsingh016592@gmail.com
        </a>

        <a
          href="https://www.instagram.com/prince.ipynb?igsh=OWpyc2xwZXgwMHow"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link"
          id="hero-instagram"
        >
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="var(--yellow)" stroke="none" />
            </svg>
          </span>
          @prince.ipynb
        </a>

        <a
          href="https://www.linkedin.com/in/prince-singh-188676280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link"
          id="hero-linkedin"
        >
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </span>
          Prince Singh
        </a>

        <span className="hero-link" id="hero-global">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="9" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </span>
          global work
        </span>
      </div>
    </section>
  );
};
