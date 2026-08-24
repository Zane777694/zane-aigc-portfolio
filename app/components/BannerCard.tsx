'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { LightboxWork } from './WorkLightbox';

export type BannerWork = LightboxWork & {
  width: number;
  height: number;
  featured?: boolean;
};

export default function BannerCard({ work, onOpen }: { work: BannerWork; onOpen: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <button type="button" className="banner-card" onClick={onOpen} aria-label={`Open banner ${work.number} preview`}>
      <span className="banner-card-media">
        <span className="banner-image-placeholder" aria-hidden="true">
          <span>{work.number}</span>
          <small>{work.image}</small>
        </span>
        {imageAvailable && (
          <Image
            src={work.image}
            alt={`Banner ${work.number} — ${work.category}`}
            width={work.width}
            height={work.height}
            sizes={work.featured ? '100vw' : '(min-width: 900px) 50vw, 100vw'}
            className="banner-card-image"
            loading="lazy"
            decoding="async"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <span className="banner-card-overlay" aria-hidden="true" />
      </span>
      <span className="banner-card-caption">
        <span className="banner-card-number">{work.number}</span>
        <small>{work.category}</small>
        <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
      </span>
    </button>
  );
}
