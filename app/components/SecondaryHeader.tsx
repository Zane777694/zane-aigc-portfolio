import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SecondaryHeader({ siblingHref, siblingLabel }: { siblingHref: string; siblingLabel: string }) {
  return (
    <nav className="top-nav secondary-nav" aria-label="Secondary page navigation">
      <Link className="brand-wordmark" href="/" aria-label="ZANE home">ZANE</Link>
      <div className="secondary-nav-actions">
        <Link className="secondary-back-link" href="/">
          <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" />
          <span>BACK HOME</span>
        </Link>
        <Link href={siblingHref}>{siblingLabel}</Link>
      </div>
    </nav>
  );
}
