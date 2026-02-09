import LightRays from './LightRays';
import Navbar from './Navbar';
import './InsightsHero.css';

function InsightsHero() {
  return (
    <div className="insights-hero">
      <Navbar />
      <LightRays
        raysOrigin="top-center"
        raysColor="#A6F63B"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <div className="insights-hero-content">
        <h1 className="insights-hero-title">INSIGHTS</h1>
        <p className="insights-hero-subtitle">Practical perspectives on AI transformation, from strategy to production.</p>
      </div>
      <div className="insights-scroll-to-explore">
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}

export default InsightsHero;
