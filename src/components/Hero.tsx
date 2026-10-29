import React from 'react';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('section-3');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 30,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('section-5');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="section-1" className="section hero-section-enhanced">
      {/* Engineering Focus Badges */}
      <div className="hero-tags hero-animate hero-animate-delay-1">
        <span className="hero-tag green">
          <span className="tag-indicator" /> AI &amp; ML ENGINEER
        </span>
        <span className="hero-tag cyan">
          <span className="tag-indicator" /> FULL-STACK WEB ARCHITECT
        </span>
        <span className="hero-tag yellow">
          <span className="tag-indicator" /> B.TECH CSE (AI/ML &amp; GENAI)
        </span>
      </div>

      {/* Main Hero Header with Neon Cyber Accent */}
      <h1 className="hero-name hero-animate hero-animate-delay-2">
        <span className="hero-name-gradient">Prince</span>
        <br />
        <span className="hero-name-glow">Singh</span>
      </h1>

      {/* Bio Tagline */}
      <p
        className="hero-bio-lead hero-animate hero-animate-delay-2"
        style={{
          maxWidth: '680px',
          fontSize: '18px',
          lineHeight: '1.6',
          color: 'var(--light-gray)',
          marginBottom: '28px',
          backdropFilter: 'blur(8px)'
        }}
      >
        B.Tech Computer Science Engineer passionate about building complete, high-impact systems — from computer vision biometrics &amp; embedded IoT to WebGL shaders and game physics engines.
      </p>

      {/* Key Stats Counter Strip */}
      <div className="hero-stats-strip hero-animate hero-animate-delay-3">
        <div className="stat-card">
          <span className="stat-number">5+</span>
          <span className="stat-caption">Production Builds</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">90 FPS</span>
          <span className="stat-caption">Engine Architecture</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">Runner-Up</span>
          <span className="stat-caption">WRO Autonomous Robotics</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">36-Hr</span>
          <span className="stat-caption">Hackathon IoT Finisher</span>
        </div>
      </div>

      {/* Quick Action CTAs */}
      <div
        className="hero-actions-row hero-animate hero-animate-delay-3"
        style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}
      >
        <button
          onClick={scrollToProjects}
          className="contact-btn hero-cta-primary"
          type="button"
        >
          Explore Projects ⚡
        </button>

        <button
          onClick={scrollToContact}
          className="hero-cta-secondary"
          type="button"
        >
          Let&apos;s Build Together ↗
        </button>
      </div>

      {/* Hero Links Grid */}
      <div className="hero-links hero-animate hero-animate-delay-4">
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
          Open to Global Opportunities
        </span>
      </div>
    </section>
  );
};
