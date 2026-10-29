import React, { useEffect, useRef } from 'react';

interface SpiderCursorProps {
  color?: string; // e.g. '#ffffff' or 'var(--cyan)'
  spiderCount?: number;
}

export const SpiderCursor: React.FC<SpiderCursorProps> = ({
  color = '#ffffff',
  spiderCount = 2
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const { sin, cos, PI, hypot, min, max } = Math;

    const isLowPower =
      /Mobi|Android/i.test(navigator.userAgent) ||
      (navigator.hardwareConcurrency || 4) <= 4;

    const ptCount = isLowPower ? 180 : 320;
    const legSegments = isLowPower ? 25 : 45;

    function rnd(x = 1, dx = 0) {
      return Math.random() * x + dx;
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function noise(x: number, y: number, t = 101) {
      const w0 =
        sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
      const w1 =
        sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
      return w0 + w1;
    }

    function drawCircle(x: number, y: number, r: number) {
      if (r <= 0) return;
      ctx!.beginPath();
      ctx!.ellipse(x, y, r, r, 0, 0, PI * 2);
      ctx!.fill();
    }

    function drawWavyLeg(x0: number, y0: number, x1: number, y1: number) {
      ctx!.beginPath();
      ctx!.moveTo(x0, y0);
      for (let i = 1; i <= legSegments; i++) {
        const t = i / legSegments;
        const lx = lerp(x0, x1, t);
        const ly = lerp(y0, y1, t);
        const k = noise(lx / 5 + x0, ly / 5 + y0) * 2;
        ctx!.lineTo(lx + k, ly + k);
      }
      ctx!.stroke();
    }

    interface SpiderPoint {
      x: number;
      y: number;
      len: number;
      r: number;
    }

    function spawn() {
      const pts: SpiderPoint[] = Array.from({ length: ptCount }, () => ({
        x: rnd(window.innerWidth),
        y: rnd(window.innerHeight),
        len: 0,
        r: 0
      }));

      const bodyRadials = Array.from({ length: 9 }, (_, i) => ({
        x: cos((i / 9) * PI * 2),
        y: sin((i / 9) * PI * 2)
      }));

      const seed = rnd(100);
      let tx = rnd(window.innerWidth);
      let ty = rnd(window.innerHeight);
      let x = rnd(window.innerWidth);
      let y = rnd(window.innerHeight);
      const kx = rnd(0.8, 0.8);
      const ky = rnd(0.8, 0.8);
      const walkRadius = { x: rnd(50, 50), y: rnd(50, 50) };
      const bodyRadius = window.innerWidth / rnd(100, 150);

      function paintPt(pt: SpiderPoint) {
        if (!pt.len) return;

        bodyRadials.forEach((rad) => {
          drawWavyLeg(
            lerp(x + rad.x * bodyRadius, pt.x, pt.len * pt.len),
            lerp(y + rad.y * bodyRadius, pt.y, pt.len * pt.len),
            x + rad.x * bodyRadius,
            y + rad.y * bodyRadius
          );
        });

        drawCircle(pt.x, pt.y, pt.r);
      }

      return {
        follow(newTx: number, newTy: number) {
          tx = newTx;
          ty = newTy;
        },

        tick(t: number) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x;
          const selfMoveY = sin(t * ky + seed) * walkRadius.y;
          const fx = tx + selfMoveX;
          const fy = ty + selfMoveY;

          x += min(window.innerWidth / 80, (fx - x) / 12);
          y += min(window.innerWidth / 80, (fy - y) / 12);

          let activeLegCount = 0;
          pts.forEach((pt) => {
            const dx = pt.x - x;
            const dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, window.innerWidth / len / 5);

            const increasing =
              len < window.innerWidth / 9 && activeLegCount++ < 8;
            const dir = increasing ? 0.1 : -0.1;

            if (increasing) {
              r *= 1.5;
            }

            pt.r = r;
            pt.len = max(0, min(pt.len + dir, 1));
            paintPt(pt);
          });
        }
      };
    }

    const spiders = Array.from({ length: spiderCount }, spawn);

    const handlePointerMove = (e: PointerEvent) => {
      spiders.forEach((spider) => {
        spider.follow(e.clientX, e.clientY);
      });
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    let animationFrameId: number;

    const anim = (time: number) => {
      if (w !== window.innerWidth || h !== window.innerHeight) {
        handleResize();
      }

      ctx.clearRect(0, 0, w, h);

      // Render glowing spider limbs & points
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.0;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(0, 229, 255, 0.4)';

      const t = time / 1000;
      spiders.forEach((spider) => spider.tick(t));

      animationFrameId = requestAnimationFrame(anim);
    };

    animationFrameId = requestAnimationFrame(anim);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, spiderCount]);

  return (
    <canvas
      ref={canvasRef}
      id="spider-canvas"
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 4,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};
