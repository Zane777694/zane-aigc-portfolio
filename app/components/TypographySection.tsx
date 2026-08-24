import VisualArtworkSection from './VisualArtworkSection';
import type { VisualArtwork } from './VisualArtworkCard';

export const typographyWorks: VisualArtwork[] = [
  { id: 'typography-01', number: '01', image: '/works/typography/typography-01.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1254, height: 1254, orientation: 'square', layout: 'half' },
  { id: 'typography-02', number: '02', image: '/works/typography/typography-02.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1254, height: 1254, orientation: 'square', layout: 'half' },
  { id: 'typography-03', number: '03', image: '/works/typography/typography-03.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1086, height: 1448, orientation: 'portrait', layout: 'third' },
  { id: 'typography-04', number: '04', image: '/works/typography/typography-04.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1086, height: 1448, orientation: 'portrait', layout: 'third' },
  { id: 'typography-05', number: '05', image: '/works/typography/typography-05.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1122, height: 1402, orientation: 'portrait', layout: 'third' },
  { id: 'typography-06', number: '06', image: '/works/typography/typography-06.png', title: '', category: 'TYPOGRAPHY / GRAPHIC EXPERIMENT', width: 1086, height: 1448, orientation: 'portrait', layout: 'closing' },
];

export default function TypographySection() {
  return (
    <VisualArtworkSection
      sectionNumber="05"
      title="TYPOGRAPHY"
      titleLines={['TYPO', 'GRAPHY']}
      subtitle="TYPE / GRAPHIC EXPERIMENT"
      description="Selected type-led visual studies exploring expressive letterforms, structure, texture, and graphic rhythm."
      className="typography"
      works={typographyWorks}
      previous={{ href: '/visual/app', label: 'APP LAUNCH SCREEN', detail: 'VIEW STARTUP VISUALS' }}
      next={{ href: '/visual/illustration', label: 'ILLUSTRATION', detail: 'VIEW ILLUSTRATION WORKS' }}
    />
  );
}
