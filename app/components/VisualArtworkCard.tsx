'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { LightboxWork } from './WorkLightbox';

export type VisualArtwork = LightboxWork & {
  width: number;
  height: number;
  orientation: 'square' | 'portrait' | 'landscape';
  layout: 'third' | 'half' | 'closing';
};

export default function VisualArtworkCard({ work, onOpen }: { work: VisualArtwork; onOpen: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <button type="button" className="visual-artwork-card" onClick={onOpen} aria-label={`Open ${work.category} ${work.number} preview`}>
      <span className="visual-artwork-media">
        <span className="visual-artwork-placeholder" aria-hidden="true"><span>{work.number}</span><small>{work.image}</small></span>
        {imageAvailable && (
          <Image
            src={work.image}
            alt={`${work.category} ${work.number}`}
            width={work.width}
            height={work.height}
            sizes={work.layout === 'half' ? '(min-width: 1180px) 50vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1180px) 33vw, (min-width: 640px) 50vw, 100vw'}
            className="visual-artwork-image"
            loading="lazy"
            decoding="async"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <span className="visual-artwork-overlay" aria-hidden="true" />
      </span>
      <span className="visual-artwork-caption">
        <span className="visual-artwork-number">{work.number}</span>
        <span className="visual-artwork-text">{work.title && <strong>{work.title}</strong>}<small>{work.category}</small></span>
        <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
      </span>
    </button>
  );
}
