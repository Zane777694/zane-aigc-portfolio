'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import type { IpViProject } from './IpViProjectCard';

type IpViFeaturedStageProps = {
  project: IpViProject;
  projectIndex: number;
  flipped: boolean;
  extensionIndex: number;
  onFlip: () => void;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function IpViFeaturedStage({
  project,
  projectIndex,
  flipped,
  extensionIndex,
  onFlip,
  onClose,
  onPrevious,
  onNext,
}: IpViFeaturedStageProps) {
  const hasExtensions = project.extensions.length > 0;
  const extension = project.extensions[extensionIndex];

  return (
    <article className="ipvi-featured-stage" aria-label={`${project.title} featured project`}>
      <div className={`ipvi-featured-flipper ${flipped ? 'is-flipped' : ''}`}>
        <div className="ipvi-featured-face ipvi-featured-face-front" aria-hidden={flipped}>
          <button
            type="button"
            className="ipvi-featured-trigger"
            onClick={onFlip}
            disabled={!hasExtensions}
            tabIndex={flipped ? -1 : 0}
            aria-label={hasExtensions ? `Flip ${project.title} to view VI extensions` : `${project.title} VI extensions coming soon`}
          >
            <Image src={project.image} alt={`${project.title} IP project cover`} fill sizes="100vw" className="ipvi-featured-image" priority unoptimized />
            <span className="ipvi-featured-overlay" aria-hidden="true" />
            <span className="ipvi-featured-index">{String(projectIndex + 1).padStart(2, '0')}</span>
            <span className="ipvi-featured-copy">
              <small>{project.category}</small>
              <strong>{project.title}</strong>
              <em>{project.subtitle}</em>
              <span className="ipvi-featured-description">{project.description}</span>
              <span className={`ipvi-featured-flip-label ${hasExtensions ? '' : 'is-disabled'}`}>
                {hasExtensions ? 'CLICK TO VIEW VI EXTENSION' : 'VI EXTENSION COMING SOON'}
                {hasExtensions && <RotateCcw size={17} strokeWidth={1.5} aria-hidden="true" />}
              </span>
            </span>
          </button>
        </div>

        <div className="ipvi-featured-face ipvi-featured-face-back" aria-hidden={!flipped}>
          {extension && <Image src={extension} alt={`${project.title} VI extension ${extensionIndex + 1}`} fill sizes="100vw" className="ipvi-extension-image" unoptimized />}
          <div className="ipvi-extension-shade" aria-hidden="true" />
          <div className="ipvi-extension-toolbar">
            <span><small>{project.title}</small><strong>VI EXTENSION {String(extensionIndex + 1).padStart(2, '0')} / {String(project.extensions.length).padStart(2, '0')}</strong></span>
            <button type="button" onClick={onClose} tabIndex={flipped ? 0 : -1} aria-label="Flip back to project cover"><RotateCcw size={18} /></button>
          </div>
          <div className="ipvi-extension-controls">
            <button type="button" onClick={onPrevious} tabIndex={flipped ? 0 : -1} aria-label="Previous VI extension"><ChevronLeft size={22} /></button>
            <div aria-label="VI extension position">
              {project.extensions.map((item, index) => <span key={item} className={index === extensionIndex ? 'is-active' : ''} />)}
            </div>
            <button type="button" onClick={onNext} tabIndex={flipped ? 0 : -1} aria-label="Next VI extension"><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
