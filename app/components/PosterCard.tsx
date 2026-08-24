'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export type PosterWork = {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  orientation: 'portrait' | 'landscape' | 'square';
  layout: 'featured' | 'half' | 'wide' | 'closing-narrow' | 'closing-wide';
};

export default function PosterCard({ work, onOpen }: { work: PosterWork; onOpen: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <button
      type="button"
      className={`poster-card poster-${work.orientation}`}
      onClick={onOpen}
      aria-label={`Open ${work.title} poster preview`}
    >
      <span className="poster-card-media">
        <span className="poster-image-placeholder" aria-hidden="true">
          <span>{work.number}</span>
          <small>{work.image}</small>
        </span>
        {imageAvailable && (
          <Image
            src={work.image}
            alt={`${work.title} — ${work.category}`}
            fill
            sizes="(min-width: 1180px) 100vw, (min-width: 640px) 50vw, 100vw"
            className="poster-card-image"
            style={{ objectFit: 'contain' }}
            loading="lazy"
            decoding="async"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <span className="poster-card-overlay" aria-hidden="true" />
      </span>
      <span className="poster-card-caption">
        <span className="poster-card-number">{work.number}</span>
        <span className="poster-card-text">
          <strong>{work.title}</strong>
          <small>{work.category}</small>
        </span>
        <ArrowUpRight className="poster-card-arrow" size={18} strokeWidth={1.4} aria-hidden="true" />
      </span>
    </button>
  );
}
