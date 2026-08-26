'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
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
  onSelectExtension: (index: number) => void;
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
  onSelectExtension,
}: IpViFeaturedStageProps) {
  const hasExtensions = project.extensions.length > 0;
  const extension = project.extensions[extensionIndex];
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  const showPrevious = () => {
    setSlideDirection('right');
    onPrevious();
  };

  const showNext = () => {
    setSlideDirection('left');
    onNext();
  };

  const selectExtension = (index: number) => {
    if (index === extensionIndex) return;
    setSlideDirection(index > extensionIndex ? 'left' : 'right');
    onSelectExtension(index);
  };

  return (
    <article className="ipvi-featured-card" aria-label={`${project.title} featured project`}>
      <div className="ipvi-featured-stage">
        <div className={`ipvi-featured-flipper ${flipped ? 'is-flipped' : ''}`}>
            <div className="ipvi-featured-face ipvi-featured-face-front" aria-hidden={flipped}>
              <button type="button" className="ipvi-featured-trigger" onClick={onFlip} disabled={!hasExtensions} tabIndex={flipped ? -1 : 0} aria-label={hasExtensions ? `Flip ${project.title} to view VI extensions` : `${project.title} VI extensions coming soon`}>
              <Image src={project.image} alt={`${project.title} IP project cover`} fill sizes="100vw" className="ipvi-featured-image" priority unoptimized />
              <span className="ipvi-featured-overlay" aria-hidden="true" />
              <span className="ipvi-featured-index">{String(projectIndex + 1).padStart(2, '0')}</span>
              </button>
            </div>
            <div className="ipvi-featured-face ipvi-featured-face-back" aria-hidden={!flipped}>
              <div className="ipvi-extension-backdrop">
              <AnimatePresence initial={false} custom={slideDirection}>
                {extension && (
                  <motion.div
                    key={`${project.id}-${extensionIndex}`}
                    className="ipvi-extension-slide"
                    custom={slideDirection}
                    variants={{
                      enter: (direction: 'left' | 'right') => ({ x: direction === 'left' ? '100%' : '-100%', opacity: .72 }),
                      center: { x: 0, opacity: 1 },
                      exit: (direction: 'left' | 'right') => ({ x: direction === 'left' ? '-100%' : '100%', opacity: .72 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: .58, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={extension} alt={`${project.title} VI extension ${extensionIndex + 1}`} fill sizes="100vw" className="ipvi-extension-image" unoptimized />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="ipvi-extension-shade" aria-hidden="true" />
              </div>
              <div className="ipvi-extension-toolbar">
                <span aria-live="polite"><small>{project.title}</small><strong>VI EXTENSION {String(extensionIndex + 1).padStart(2, '0')} / {String(project.extensions.length).padStart(2, '0')}</strong></span>
                <button type="button" tabIndex={flipped ? 0 : -1} onClick={(event) => { event.stopPropagation(); onClose(); }} aria-label="Flip back to project cover"><RotateCcw size={18} /></button>
              </div>
              <div className="ipvi-extension-controls">
                <button type="button" tabIndex={flipped ? 0 : -1} onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous VI extension"><ChevronLeft size={22} /></button>
                <div aria-label="VI extension position">
                  {project.extensions.map((item, index) => (
                    <button key={item} type="button" tabIndex={flipped ? 0 : -1} className={index === extensionIndex ? 'is-active' : ''} onClick={(event) => { event.stopPropagation(); selectExtension(index); }} aria-label={`Show VI extension ${index + 1}`} />
                  ))}
                </div>
                <button type="button" tabIndex={flipped ? 0 : -1} onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next VI extension"><ChevronRight size={22} /></button>
              </div>
            </div>
        </div>
      </div>

      <div className="ipvi-featured-info">
        <div><p>{project.category}</p><h2>{project.title}</h2><span>{project.subtitle}</span></div>
        <p>{project.description}</p>
        <span className={`ipvi-featured-action ${hasExtensions ? '' : 'is-disabled'}`}>
          <span>{hasExtensions ? 'VI EXTENSION' : 'COMING SOON'}</span>
          {hasExtensions && <em>{project.extensions.length} VIEWS</em>}
          {hasExtensions && <RotateCcw size={18} strokeWidth={1.5} aria-hidden="true" />}
        </span>
      </div>
    </article>
  );
}
