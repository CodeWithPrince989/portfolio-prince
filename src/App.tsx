import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ParticleMesh } from './components/ParticleMesh';
import { GlowCursor } from './components/GlowCursor';
import { SpiderCursor } from './components/SpiderCursor';
import { Toast } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [spiderMode, setSpiderMode] = useState<'white' | 'cyan' | 'off'>('white');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  const handleToggleSpider = () => {
    setSpiderMode((prev) => {
      if (prev === 'white') {
        showToast('🕷️ Spider Effect: Neon Cyan glow mode');
        return 'cyan';
      }
      if (prev === 'cyan') {
        showToast('🕷️ Spider Effect: Paused');
        return 'off';
      }
      showToast('🕷️ Spider Effect: Classic White mode');
      return 'white';
    });
  };

  useEffect(() => {
    // Fade-in animation observer for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Nav active section observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => sectionObserver.observe(sec));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    setActiveSection(sectionId);
    const offset = sectionId === 'section-3' ? 40 : 0;
    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app">
      {/* Spider Cursor Animation Layer (from spider-cursor demo) */}
      {spiderMode !== 'off' && (
        <SpiderCursor color={spiderMode === 'cyan' ? '#00e5ff' : '#ffffff'} />
      )}

      {/* Interactive Glowing Cursor Trail */}
      <GlowCursor />

      {/* Cybernetic Particle Network Layer */}
      <ParticleMesh />

      {/* Dynamic Background and Fluid WebGL Layer */}
      <BackgroundEffects />

      {/* Top Header Bar with Spider Toggle */}
      <TopBar spiderMode={spiderMode} onToggleSpider={handleToggleSpider} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Floating Navigation Dock */}
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
