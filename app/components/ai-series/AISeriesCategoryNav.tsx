import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type AISeriesCategory = 'drama' | 'tvc' | 'short-video';

const categories: Array<{ key: AISeriesCategory; href: string; number: string; title: string; subtitle: string }> = [
  { key: 'drama', href: '/series#ai-drama', number: '01', title: 'AI DRAMA', subtitle: 'AI 漫剧' },
  { key: 'tvc', href: '/series/tvc', number: '02', title: 'TVC', subtitle: '商业广告' },
  { key: 'short-video', href: '/series/short-video', number: '03', title: 'SHORT VIDEO', subtitle: '短视频' },
];

export default function AISeriesCategoryNav({ active }: { active: AISeriesCategory }) {
  return (
    <nav className="ai-series-index ai-series-persistent-nav" aria-label="AI Series categories">
      {categories.map((category) => (
        <Link key={category.key} href={category.href} aria-current={active === category.key ? 'page' : undefined}>
          <span>{category.number}</span>
          <strong>{category.title}</strong>
          <small>{category.subtitle}</small>
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}
