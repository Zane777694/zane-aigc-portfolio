'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const hiddenTransforms: Record<Direction, string> = {
  up: 'translate3d(0, 40px, 0)',
  down: 'translate3d(0, -40px, 0)',
  left: 'translate3d(40px, 0, 0)',
  right: 'translate3d(-40px, 0, 0)',
};

export default function AnimatedElement({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : hiddenTransforms[direction],
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
