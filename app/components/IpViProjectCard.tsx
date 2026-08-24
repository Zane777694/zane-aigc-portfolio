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
};

export default function IpViProjectCard({ project, index }: { project: IpViProject; index: number }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <article
      className={`ipvi-project-card ${project.featured ? 'ipvi-project-card-featured' : ''}`}
      aria-label={`${project.title}, project details coming soon`}
      data-project-href={project.href}
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
        <p className="ipvi-project-description">{project.description}</p>
        <span className="ipvi-project-action" aria-disabled="true">
          <span>VIEW PROJECT</span>
          <em>COMING SOON</em>
          <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
