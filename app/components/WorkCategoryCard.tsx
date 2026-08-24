'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState, type CSSProperties } from 'react';

export type WorkCategory = {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  featured?: boolean;
};

export default function WorkCategoryCard({ category }: { category: WorkCategory }) {
  const [imageAvailable, setImageAvailable] = useState(true);
  const angle = 118 + Number(category.number) * 13;

  return (
    <Link
      href={category.href}
      className={`work-category-card ${category.featured ? 'work-category-featured' : ''}`}
      style={{ '--work-angle': `${angle}deg` } as CSSProperties}
      aria-label={`${category.title}: ${category.subtitle}`}
    >
      <div className="work-card-media" aria-hidden="true">
        <div className="work-image-placeholder">
          <span>{category.number}</span>
          <small>{category.image}</small>
        </div>
        {imageAvailable && (
          <Image
            src={category.image}
            alt=""
            fill
            sizes={category.featured ? '(min-width: 1180px) 40vw, 100vw' : '(min-width: 1180px) 28vw, (min-width: 640px) 50vw, 100vw'}
            className="work-card-image"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <div className="work-card-overlay" />
      </div>

      <div className="work-card-topline">
        <span>{category.number}</span>
        <span>AI VISUAL</span>
      </div>
      <div className="work-card-content">
        <div>
          <h3>{category.title}</h3>
          <p>{category.subtitle}</p>
        </div>
        <span className="work-card-action">
          <span>VIEW WORKS</span>
          <ArrowRight size={17} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
