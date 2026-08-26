'use client';

import { useEffect, useRef } from 'react';

const POINTER_RADIUS = 185;

export default function SecondaryDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastPaint = 0;

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const gap = width < 640 ? 24 : 29;
      const startX = (width % gap) / 2;
      const startY = (height % gap) / 2;

      for (let y = startY; y < height; y += gap) {
        for (let x = startX; x < width; x += gap) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = pointer.active ? Math.max(0, 1 - distance / POINTER_RADIUS) : 0;
          const safeDistance = distance || 1;
          const push = influence * influence * 17;
          const wave = reducedMotion.matches
            ? 0.45
            : (Math.sin(x * 0.016 + y * 0.012 + time * 0.00105) + 1) / 2;
          const dotX = x + (dx / safeDistance) * push;
          const dotY = y + (dy / safeDistance) * push;
          const radius = 0.62 + wave * 0.34 + influence * 1.75;
          const alpha = 0.2 + wave * 0.2 + influence * 0.48;

          context.beginPath();
          context.arc(dotX, dotY, radius, 0, Math.PI * 2);
          context.fillStyle = influence > 0.035
            ? `rgba(239, 206, 150, ${alpha})`
            : `rgba(146, 169, 174, ${alpha})`;
          context.fill();
        }
      }
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(0);
    };

    const animate = (time: number) => {
      if (time - lastPaint > 28) {
        draw(time);
        lastPaint = time;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      if (reducedMotion.matches) draw(0);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      if (reducedMotion.matches) draw(0);
    };

    const handleMotionChange = () => {
      window.cancelAnimationFrame(frame);
      draw(0);
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    resize();
    if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    reducedMotion.addEventListener('change', handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      reducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="secondary-dot-grid" aria-hidden="true" />;
}
