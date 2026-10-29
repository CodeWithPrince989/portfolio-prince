import React from 'react';

interface TopBarProps {
  spiderMode?: 'white' | 'cyan' | 'off';
  onToggleSpider?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  spiderMode = 'white',
  onToggleSpider
}) => {
  return (
    <header className="top-bar">
      <div className="open-to-work hero-animate">
        <span className="dot" aria-hidden="true"></span>
        <span>Open to opportunities</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Spider Cursor Mode Toggle */}
        {onToggleSpider && (
          <button
            onClick={onToggleSpider}
            type="button"
            className="spider-toggle-chip hero-animate hero-animate-delay-1"
            title="Toggle Spider Cursor Mode (White / Cyan / Off)"
            aria-label="Toggle Spider Cursor Mode"
          >
            <span style={{ fontSize: '14px' }}>🕷️</span>
            <span>
              Spider Effect:{' '}
              <strong style={{ color: spiderMode === 'off' ? '#888' : spiderMode === 'cyan' ? 'var(--cyan)' : 'var(--yellow)' }}>
                {spiderMode === 'white' ? 'White' : spiderMode === 'cyan' ? 'Cyan Glow' : 'Off'}
              </strong>
            </span>
          </button>
        )}

        <a
          href="https://www.linkedin.com/in/prince-singh-188676280/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn hero-animate hero-animate-delay-1"
          id="contact-btn"
        >
          Connect
        </a>
      </div>
    </header>
  );
};
