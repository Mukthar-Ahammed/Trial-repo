import { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';
import { testimonials } from '../data/testimonials';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';

function TestimonialsCarousel() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle card centered

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-heading">
                Hear from the organizations<br />we work with
            </h2>

            <div className="testimonials-carousel">
                <div className="carousel-track">
                    {testimonials.map((testimonial, index) => {
                        const position = index - activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${isActive ? 'active' : ''} position-${position}`}
                                onClick={() => handleDotClick(index)}
                            >
                                <GlowingEffect
                                    blur={0}
                                    spread={15}
                                    proximity={60}
                                    movementDuration={1.2}
                                    borderWidth={1}
                                    inactiveZone={0.2}
                                    disabled={false}
                                    variant="white"
                                    className="glowing-effect-overlay"
                                />
                                <GlassBorder />
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <div className="testimonial-meta">
                                    <h3 className="testimonial-client">{testimonial.clientName}</h3>
                                    <p className="testimonial-solution">
                                        CV Solution: {testimonial.cvSolution}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="carousel-pagination">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default TestimonialsCarousel;
