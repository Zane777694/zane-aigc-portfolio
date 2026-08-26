import AnimatedElement from './AnimatedElement';
import AIDramaSection from './ai-series/AIDramaSection';
import AISeriesCategoryNav from './ai-series/AISeriesCategoryNav';
import { aiDramaProjects } from '../data/aiSeries';

export default function SeriesLanding() {
  return (
    <div className="series-landing">
      <div className="series-landing-inner">
        <AnimatedElement>
          <header className="series-page-heading">
            <p>AI FILM / NARRATIVE / COMMERCIAL / SHORT FORM</p>
            <h1 id="series-page-title">AI SERIES</h1>
            <span>AI 影像作品</span>
            <small>Narrative · Commercial · Short-form</small>
          </header>
        </AnimatedElement>
        <AISeriesCategoryNav active="drama" />
        <AIDramaSection projects={aiDramaProjects} />
      </div>
    </div>
  );
}
