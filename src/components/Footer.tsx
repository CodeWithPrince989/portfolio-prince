import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p>© {new Date().getFullYear()} Prince Singh. All rights reserved.</p>
        <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '13px' }}>
          Crafted with React, TypeScript &amp; WebGL
        </p>
      </div>
    </footer>
  );
};
