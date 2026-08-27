import VisualArtworkSection from './VisualArtworkSection';
import type { VisualArtwork } from './VisualArtworkCard';

export const illustrationWorks: VisualArtwork[] = [
  { id: 'illustration-01', number: '01', image: '/works/illustration/illustration-01.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 1024, height: 1536, orientation: 'portrait', layout: 'third' },
  { id: 'illustration-02', number: '02', image: '/works/illustration/illustration-02.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 1024, height: 1536, orientation: 'portrait', layout: 'third' },
  { id: 'illustration-03', number: '03', image: '/works/illustration/illustration-03.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 1024, height: 1536, orientation: 'portrait', layout: 'third' },
  { id: 'illustration-04', number: '04', image: '/works/illustration/illustration-04.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 1024, height: 1536, orientation: 'portrait', layout: 'third' },
  { id: 'illustration-05', number: '05', image: '/works/illustration/illustration-05.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 1024, height: 1536, orientation: 'portrait', layout: 'third' },
  { id: 'illustration-06', number: '06', image: '/works/illustration/illustration-06.webp', title: '', category: 'AI ILLUSTRATION / ART DIRECTION', width: 941, height: 1672, orientation: 'portrait', layout: 'third' },
];

export default function IllustrationSection() {
  return (
    <VisualArtworkSection
      sectionNumber="06"
      title="ILLUSTRATION"
      titleLines={['ILLUS', 'TRATION']}
      subtitle="AI ILLUSTRATION / ART DIRECTION"
      description="Selected illustration works spanning narrative scenes, character-led imagery, decorative composition, and visual art direction."
      className="illustration"
      works={illustrationWorks}
      previous={{ href: '/visual/typography', label: 'TYPOGRAPHY', detail: 'VIEW TYPE EXPERIMENTS' }}
    />
  );
}

