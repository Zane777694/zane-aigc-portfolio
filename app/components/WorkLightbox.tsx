'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type LightboxWork = {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
};

type WorkLightboxProps = {
  works: LightboxWork[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
  variant?: 'default' | 'wide';
};

function LightboxMedia({ work }: { work: LightboxWork }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className="work-lightbox-media">
      <div className="work-lightbox-placeholder" aria-hidden="true">
        <span>{work.number}</span>
        <small>{work.image}</small>
      </div>
      {imageAvailable && (
        <Image
          src={work.image}
          alt={`${work.title || `Work ${work.number}`} — ${work.category}`}
          fill
          sizes="95vw"
          className="work-lightbox-image"
          style={{ objectFit: 'contain' }}
          loading="eager"
          decoding="async"
          onError={() => setImageAvailable(false)}
          unoptimized
        />
      )}
    </div>
  );
}

export default function WorkLightbox({ works, activeIndex, onClose, onChange, variant = 'default' }: WorkLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = activeIndex !== null;
  const work = activeIndex === null ? null : works[activeIndex];

  const showPrevious = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex - 1 + works.length) % works.length);
  }, [activeIndex, onChange, works.length]);

  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    onChange((activeIndex + 1) % works.length);
  }, [activeIndex, onChange, works.length]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, showNext, showPrevious]);

  if (typeof document === 'undefined' || !isOpen || !work) return null;

  return createPortal(
    <div
      className="work-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title || `Work ${work.number}`} large preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
        if (Math.abs(distance) > 50) {
          if (distance > 0) showPrevious();
          else showNext();
        }
        touchStartX.current = null;
      }}
    >
      <div className={`work-lightbox-panel ${variant === 'wide' ? 'work-lightbox-panel-wide' : ''}`}>
        <div className="work-lightbox-topbar">
          <div>
            <span>{work.number} / {String(works.length).padStart(2, '0')}</span>
            {work.title && <strong>{work.title}</strong>}
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close work preview">
            <X size={20} strokeWidth={1.6} />
          </button>
        </div>

        <LightboxMedia key={work.id} work={work} />

        <div className="work-lightbox-footer">
          <span>{work.category}</span>
          <div>
            <button type="button" onClick={showPrevious} aria-label="Previous work"><ChevronLeft size={22} /></button>
            <button type="button" onClick={showNext} aria-label="Next work"><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
