'use client';

/* eslint-disable @next/next/no-img-element */
import { Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { AssetGroup } from '../../data/aiSeries';
import type { AssetItem } from '../../data/aiSeries';

type AssetGalleryProps = {
  groups: AssetGroup[];
  emptyBehavior?: 'placeholder' | 'hide';
  compact?: boolean;
};

export default function AssetGallery({ groups, emptyBehavior = 'hide', compact = false }: AssetGalleryProps) {
  const [selected, setSelected] = useState<AssetItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const visibleGroups = emptyBehavior === 'hide' ? groups.filter((group) => group.items.length > 0) : groups;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  if (visibleGroups.length === 0) return null;

  return (
    <>
      <div className="ai-assets">
      {visibleGroups.map((group) => (
        <section className="ai-asset-group" data-asset-group={group.key} key={group.key} aria-label={group.label}>
          <div className="ai-asset-heading">
            <span>{group.label}</span>
            <small>{group.items.length ? `${String(group.items.length).padStart(2, '0')} ASSETS · CLICK TO EXPAND` : 'READY FOR ASSETS'}</small>
          </div>
          {group.items.length > 0 ? (
            <div className={`ai-asset-grid ${compact ? 'ai-asset-grid-compact' : ''}`}>
              <div className="ai-asset-column">
                  {group.items.map((asset) => (
                    <button className="ai-asset-item" type="button" key={asset.src} onClick={() => setSelected(asset)} aria-label={`放大查看：${asset.alt}`}>
                      <span className="ai-asset-media"><img src={asset.src} alt={asset.alt} loading="lazy" /></span>
                      <span className="ai-asset-caption">{asset.alt}<Maximize2 size={14} /></span>
                    </button>
                  ))}
              </div>
            </div>
          ) : (
            <div className="ai-asset-empty"><span>+</span><p>ADD {group.key.toUpperCase()} ASSETS</p></div>
          )}
        </section>
      ))}
      </div>
      {mounted && selected && createPortal(
        <div className="ai-asset-lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}>
          <button className="ai-lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="关闭大图"><X size={21} /></button>
          <figure className="ai-lightbox-figure"><img src={selected.src} alt={selected.alt} /><figcaption>{selected.alt}</figcaption></figure>
        </div>,
        document.body,
      )}
    </>
  );
}
