'use client';

import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
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

export default function IpViProjectCard({ project, index, onSelect }: { project: IpViProject; index: number; onSelect?: () => void }) {
  const [imageAvailable, setImageAvailable] = useState(true);
  const [showMobileExtensions, setShowMobileExtensions] = useState(false);
  const [mobileExtensionIndex, setMobileExtensionIndex] = useState(0);
  const interactive = Boolean(onSelect);
  const mobileExtensionsEnabled = !interactive && project.extensions.length > 0;
  const mobileExtension = project.extensions[mobileExtensionIndex];

  const showPreviousMobileExtension = () => {
    setMobileExtensionIndex((value) => (value - 1 + project.extensions.length) % project.extensions.length);
  };

  const showNextMobileExtension = () => {
    setMobileExtensionIndex((value) => (value + 1) % project.extensions.length);
  };

  const content = (
    <>
      <div className="ipvi-project-media">
        <div className="ipvi-project-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
        {imageAvailable && !showMobileExtensions && (
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
        {showMobileExtensions && mobileExtension && (
          <Image
            key={`${project.id}-mobile-${mobileExtensionIndex}`}
            src={mobileExtension}
            alt={`${project.title} VI extension ${mobileExtensionIndex + 1}`}
            fill
            sizes="100vw"
            className="ipvi-project-image ipvi-mobile-extension-image"
            unoptimized
          />
        )}
        <div className="ipvi-project-overlay" aria-hidden="true" />
        <span className="ipvi-project-index">{String(index + 1).padStart(2, '0')}</span>
        {mobileExtensionsEnabled && (
          <>
            <button
              type="button"
              className="ipvi-mobile-media-toggle"
              onClick={() => setShowMobileExtensions((value) => !value)}
              aria-label={showMobileExtensions ? `Return to ${project.title} project cover` : `View ${project.title} VI extensions`}
            />
            {showMobileExtensions && (
              <>
                <span className="ipvi-mobile-vi-counter" aria-live="polite">
                  VI {String(mobileExtensionIndex + 1).padStart(2, '0')} / {String(project.extensions.length).padStart(2, '0')}
                </span>
                <div className="ipvi-mobile-extension-controls">
                  <button type="button" onClick={(event) => { event.stopPropagation(); showPreviousMobileExtension(); }} aria-label="Previous VI extension"><ChevronLeft size={18} /></button>
                  <div>
                    {project.extensions.map((item, extensionItemIndex) => (
                      <button key={item} type="button" className={extensionItemIndex === mobileExtensionIndex ? 'is-active' : ''} onClick={(event) => { event.stopPropagation(); setMobileExtensionIndex(extensionItemIndex); }} aria-label={`Show VI extension ${extensionItemIndex + 1}`} />
                    ))}
                  </div>
                  <button type="button" onClick={(event) => { event.stopPropagation(); showNextMobileExtension(); }} aria-label="Next VI extension"><ChevronRight size={18} /></button>
                  <button type="button" onClick={(event) => { event.stopPropagation(); setShowMobileExtensions(false); }} aria-label="Return to project cover"><RotateCcw size={16} /></button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className="ipvi-project-content">
        <div>
          <p>{project.category}</p>
          <h2>{project.title}</h2>
          <span>{project.subtitle}</span>
        </div>
        <p className="ipvi-project-description">{project.description}</p>
        <span className="ipvi-project-action">
          <span>{interactive ? 'VIEW PROJECT' : 'VIEW PROJECT'}</span>
          <em>{interactive ? 'SELECT' : 'COMING SOON'}</em>
          <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </>
  );

  if (!interactive) {
    return (
      <article className="ipvi-project-card ipvi-project-card-static" aria-label={`${project.title}, project details coming soon`} data-project-href={project.href}>
        {content}
      </article>
    );
  }

  return (
    <button type="button" className="ipvi-project-card ipvi-project-selector-card" aria-label={`Show ${project.title} in the featured project area`} data-project-href={project.href} onClick={onSelect}>
      {content}
    </button>
  );
}
