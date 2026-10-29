import React, { useEffect, useState, useRef } from 'react';

export const GlowCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const trailRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setEnabled(true);

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.interactive-hover') ||
          target.closest('.experience-item'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth trailing animation loop
    const renderLoop = () => {
      trailPos.current.x += (pos.x - trailPos.current.x) * 0.18;
      trailPos.current.y += (pos.y - trailPos.current.y) * 0.18;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, [pos.x, pos.y]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Glowing Ring / Ambient Aura */}
      <div
        ref={trailRef}
        className={`glow-cursor-trail ${isHovered ? 'hovered' : ''} ${
          isClicking ? 'clicking' : ''
        }`}
        aria-hidden="true"
      />
      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        className={`glow-cursor-dot ${isHovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};
