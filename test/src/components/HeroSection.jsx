import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperSpeedPresets';
import './HeroSection.css';

// Hero Section Component with Hyperspeed
export default function HeroSection() {
  return (
    <div className="hero-container">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  );
}
