import { useState } from 'react';
import './TestimonialsSection.css';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';

const testimonials = [
  {
    id: 1,
    quote: "We build AI agents with the same rigor as enterprise software — tested, governed, audit-ready. We embed with your teams to turn deployed systems into organizational capability, and identify what's next. Keep legal and policy documents aligned as regulations change, with automated updates at scale.",
    author: "Elena Rodriguez",
    role: "VP, Marketing & Sales",
    company: "Singapore General Hospital",
  },
  {
    id: 2,
    quote: "We build AI agents with the same rigor as enterprise software — tested, governed, audit-ready. We embed with your teams to turn deployed systems into organizational capability.",
    author: "Elena Rodriguez",
    role: "VP, Marketing & Sales",
    company: "Singapore General Hospital",
  },
  {
    id: 3,
    quote: "We build AI agents with the same rigor as enterprise software — tested, governed, audit-ready. We embed with your teams to turn deployed systems into organizational capability.",
    author: "Elena Rodriguez",
    role: "VP, Marketing & Sales",
    company: "Singapore General Hospital",
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const leftTestimonial = testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];
  const rightTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className="testimonials-section">
      <div className="ambient-glow">
        <div className="glow-spot-center"></div>
        <div className="gradient-circle-right"></div>
      </div>

      <main className="testimonials-container">
        <header className="testimonials-header">
          <h1 className="testimonials-title">
            Hear from the organizations<br className="testimonials-title-break" /> we work with
          </h1>
        </header>

        <section className="testimonials-carousel">
          {/* Left Card (Decorative) */}
          <div className="testimonial-card testimonial-card-side testimonial-card-left">
            <GlowingEffect blur={0} spread={15} proximity={60} movementDuration={1.2} borderWidth={1} inactiveZone={0.2} disabled={false} variant="white" className="glowing-effect-overlay" />
            <GlassBorder />
            <div className="testimonial-card-inner">
              <div className="testimonial-quote">
                <p className="testimonial-text">{leftTestimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-author-name">{leftTestimonial.author}</p>
                <p className="testimonial-author-role">
                  {leftTestimonial.role},<br />
                  {leftTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Center Card (Active) */}
          <div className="testimonial-card testimonial-card-active">
            <GlowingEffect blur={0} spread={15} proximity={60} movementDuration={1.2} borderWidth={1} inactiveZone={0.2} disabled={false} variant="white" className="glowing-effect-overlay" />
            <GlassBorder />
            <div className="testimonial-card-backdrop"></div>
            <div className="testimonial-card-inner">
              <div className="testimonial-quote">
                <p className="testimonial-text">{currentTestimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <h3 className="testimonial-author-name-active">{currentTestimonial.author}</h3>
                <p className="testimonial-author-role-active">
                  {currentTestimonial.role},<br />
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Right Card (Decorative) */}
          <div className="testimonial-card testimonial-card-side testimonial-card-right">
            <GlowingEffect blur={0} spread={15} proximity={60} movementDuration={1.2} borderWidth={1} inactiveZone={0.2} disabled={false} variant="white" className="glowing-effect-overlay" />
            <GlassBorder />
            <div className="testimonial-card-inner">
              <div className="testimonial-quote">
                <p className="testimonial-text">{rightTestimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <p className="testimonial-author-name">{rightTestimonial.author}</p>
                <p className="testimonial-author-role">
                  {rightTestimonial.role},<br />
                  {rightTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pagination Indicators */}
        <div className="testimonials-pagination">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`pagination-indicator ${index === currentIndex ? 'pagination-indicator-active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default TestimonialsSection;





