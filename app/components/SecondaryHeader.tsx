import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SecondaryDotGrid from './SecondaryDotGrid';

type SecondaryHeaderProps = {
  backHref?: string;
};

export default function SecondaryHeader({ backHref = '/' }: SecondaryHeaderProps) {
  return (
    <>
      <SecondaryDotGrid />
      <nav className="top-nav secondary-nav" aria-label="Secondary page navigation">
        <Link className="brand-wordmark" href="/" aria-label="ZANE home">ZANE</Link>
        <div className="secondary-nav-actions">
          <Link className="secondary-back-link" href={backHref}>
            <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>BACK / 返回上一级</span>
          </Link>
          <Link href="/">HOME / 主界面</Link>
        </div>
      </nav>
    </>
  );
}
