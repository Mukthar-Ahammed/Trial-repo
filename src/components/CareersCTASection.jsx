import './CareersCTASection.css';
import ctaBg from '../assets/cta-background.png';

function CareersCTASection() {
  return (
    <section className="careers-cta-section">
      <div className="careers-cta-background">
        <img
          src={ctaBg}
          alt="Background pattern"
          className="careers-cta-bg-image"
        />
      </div>
      <div className="careers-cta-content">
        <h2 className="careers-cta-title">Shape what’s next!</h2>
        <p className="careers-cta-subtitle">We're always looking for exceptional people. Reach out.</p>
        <a href="https://www.linkedin.com/company/charteredvectorial" target="_blank" rel="noopener noreferrer">
          <button className="careers-cta-button">FOLLOW ON LINKEDIN</button>
        </a>
      </div>
    </section>
  );
}

export default CareersCTASection;
