import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ParticleMesh } from './components/ParticleMesh';
import { GlowCursor } from './components/GlowCursor';
import { Toast } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3400);
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
      {/* Interactive Custom Glowing Cursor Trail */}
      <GlowCursor />

      {/* Cybernetic Particle Network Layer */}
      <ParticleMesh />

      {/* Dynamic Background and Fluid WebGL Layer */}
      <BackgroundEffects />

      {/* Top Header Bar */}
      <TopBar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
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
