'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { LightboxWork } from './WorkLightbox';

export type AppWork = LightboxWork & {
  width: number;
  height: number;
  featured: boolean;
  orientation: 'portrait';
  layout: 'third' | 'half' | 'closing';
};

export default function AppLaunchCard({ work, onOpen }: { work: AppWork; onOpen: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <button type="button" className="app-launch-card" data-work-id={work.id} onClick={onOpen} aria-label={`Open ${work.title} app launch screen preview`}>
      <span className="app-launch-card-media">
        <span className="app-launch-placeholder" aria-hidden="true"><span>{work.number}</span><small>{work.image}</small></span>
        {imageAvailable && (
          <Image
            src={work.image}
            alt={`${work.title} — ${work.category}`}
            width={work.width}
            height={work.height}
            sizes={work.layout === 'half' ? '(min-width: 1180px) 50vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1180px) 33vw, (min-width: 640px) 50vw, 100vw'}
            className="app-launch-card-image"
            loading="lazy"
            decoding="async"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <span className="app-launch-card-overlay" aria-hidden="true" />
      </span>
      <span className="app-launch-card-caption">
        <span className="app-launch-card-number">{work.number}</span>
        <span className="app-launch-card-text"><strong>{work.title}</strong><small>{work.category}</small></span>
        <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
      </span>
    </button>
  );
}
