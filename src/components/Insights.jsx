import InsightsHero from './InsightsHero';
import InsightsSection from './InsightsSection';
import Footer from './Footer';

function Insights() {
  return (
    <div className="insights-page" style={{ display: 'flex', flexDirection: 'column' }}>
      <InsightsHero />
      <InsightsSection />
      <Footer />
    </div>
  );
}

export default Insights;
