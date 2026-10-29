import React, { useEffect, useRef } from 'react';
import useFluidCursor from '../utils/fluidcursor.js';

export const BackgroundEffects: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgBlurRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fluidCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize WebGL Fluid Cursor
    try {
      if (typeof useFluidCursor === 'function') {
        useFluidCursor();
      }
    } catch (err) {
      console.warn('WebGL fluid cursor initialization skipped:', err);
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = videoRef.current;
    const bgBlur = bgBlurRef.current;
    const overlay = overlayRef.current;
    const fluidCanvas = fluidCanvasRef.current;

    if (prefersReducedMotion && video) {
      video.style.display = 'none';
    }

    let scrollRafPending = false;
    let rainbowActive = false;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const smooth01 = (v: number) => {
      const t = clamp01(v);
      return t * t * (3 - 2 * t);
    };

    const updateBackground = () => {
      scrollRafPending = false;
      const s3 = document.getElementById('section-3');
      const s4 = document.getElementById('section-4');
      const sy = window.scrollY;
      const vh = window.innerHeight;

      const s3top = Math.max(1, s3 ? s3.offsetTop : vh * 1.5);
      const s4top = Math.max(s3top + 1, s4 ? s4.offsetTop : s3top + vh);

      // Background image blur & dark overlay transition
      const bgProg = smooth01(sy / s3top);
      if (bgBlur) {
        bgBlur.style.opacity = bgProg.toFixed(3);
      }
      if (overlay) {
        overlay.style.opacity = bgProg.toFixed(3);
      }

      // Rainbow video transition across experience section
      const rainbowInStart = s3top - vh * 0.75;
      const rainbowInEnd = s3top - vh * 0.18;
      const rainbowOutStart = s4top - vh * 0.5;
      const rainbowOutEnd = s4top - vh * 0.15;

      const rainbowIn = smooth01((sy - rainbowInStart) / (rainbowInEnd - rainbowInStart));
      const rainbowOut = 1 - smooth01((sy - rainbowOutStart) / (rainbowOutEnd - rainbowOutStart));
      const rainbowOpacity = 0.72 * rainbowIn * clamp01(rainbowOut);

      if (video) {
        if (rainbowOpacity > 0.01 && !prefersReducedMotion) {
          if (!rainbowActive) {
            rainbowActive = true;
            video.play().catch(() => {});
          }
          video.style.opacity = rainbowOpacity.toFixed(3);
        } else {
          if (rainbowActive) {
            rainbowActive = false;
            video.pause();
          }
          video.style.opacity = '0';
        }
      }

      // Fluid canvas opacity transition
      if (fluidCanvas) {
        const fluidProg = smooth01((sy - s3top * 0.5) / (s3top * 0.5));
        fluidCanvas.style.opacity = (fluidProg * 0.9).toFixed(3);

        window.dispatchEvent(
          new CustomEvent('portfolio:fluid-visibility', {
            detail: { visible: fluidProg > 0.01 }
          })
        );
      }
    };

    const handleScroll = () => {
      if (!scrollRafPending) {
        scrollRafPending = true;
        requestAnimationFrame(updateBackground);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial render call
    updateBackground();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Rainbow Video Background */}
      <video
        ref={videoRef}
        id="shader-canvas"
        src="/assets/Vids/rainbow.webm"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          display: 'block',
          zIndex: 0,
          opacity: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Fluid Cursor Canvas */}
      <canvas ref={fluidCanvasRef} id="fluid" aria-hidden="true" />

      {/* Fixed Background Image and Overlays */}
      <div className="bg-wrapper">
        <img src="/assets/images/1.1.png" alt="Background" id="bg-image" />
        <img
          ref={bgBlurRef}
          src="/assets/images/1.1.png"
          alt=""
          id="bg-image-blur"
          aria-hidden="true"
        />
      </div>
      <div ref={overlayRef} className="bg-overlay" id="bg-overlay" />
    </>
  );
};
