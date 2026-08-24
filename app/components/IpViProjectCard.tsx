'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export type IpViProject = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  description: string;
  href: string;
  featured: boolean;
  extensions: string[];
};

export default function IpViProjectCard({ project, index, onSelect }: { project: IpViProject; index: number; onSelect: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <button
      type="button"
      className="ipvi-project-card ipvi-project-selector-card"
      aria-label={`Show ${project.title} in the featured project area`}
      data-project-href={project.href}
      onClick={onSelect}
    >
      <div className="ipvi-project-media">
        <div className="ipvi-project-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
        {imageAvailable && (
          <Image
            src={project.image}
            alt={`${project.title} IP and visual identity project cover`}
            fill
            sizes={project.featured ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
            className="ipvi-project-image"
            onError={() => setImageAvailable(false)}
            unoptimized
          />
        )}
        <div className="ipvi-project-overlay" aria-hidden="true" />
        <span className="ipvi-project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="ipvi-project-content">
        <div>
          <p>{project.category}</p>
          <h2>{project.title}</h2>
          <span>{project.subtitle}</span>
        </div>
        <span className="ipvi-project-action">
          <span>VIEW LARGE</span>
          <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}
