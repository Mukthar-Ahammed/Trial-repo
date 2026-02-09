import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './ProductsSection.css';

import imgValidate4Weeks from '../assets/validate_4weeks.png';
import imgValidateDNA from '../assets/validate_dna.png';
import imgValidateFive from '../assets/validate_Five.png';

function ProductsSection() {
    // 1. Define the Data (Slides)
    const slides = [
        {
            title: <>Consulting<br />DNA</>,
            description: "We embed. We learn. We shape products to how you actually work.",
            descriptionClass: "consulting-dna-description",
            cta: "Discuss Your Workflow",
            link: "/whatwedo",
            images: {
                base: imgValidateDNA, // Mapped to Embed/DNA
                style: { objectPosition: '75% center' }
            }
        },
        {
            title: "Five Intelligences",
            description: "Strategic. Document. Research. Process. Functional. Configured to fit.",
            cta: "See Where Intelligence Fits",
            link: "/whatwedo",
            images: {
                base: imgValidateFive, // Mapped to Validate/Five Intelligences
            }
        },
        {
            title: "4 Weeks to Production",
            description: "AI generates. Humans steer. Products ship.",
            descriptionClass: "ai-generates-description",
            cta: "See What Can Ship",
            link: "/whatwedo",
            images: {
                base: imgValidate4Weeks, // Mapped to Transform/4 Weeks
            }
        }
    ];

    // 2. Desktop Carousel State
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    // 3. Animation Variants (Framer Motion)
    const panelVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 80 : -80,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir < 0 ? 80 : -80,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
        })
    };

    // 4. Navigation Functions
    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const currentImages = slides[currentSlide].images;

    // 5. Mobile Scroll State
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);
    const mobileScrollRef = useRef(null);
    const isUserScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    const handleScroll = (e) => {
        isUserScrolling.current = true;
        clearTimeout(scrollTimeout.current);

        // Reset user scrolling flag after 100ms of no scroll events
        scrollTimeout.current = setTimeout(() => {
            isUserScrolling.current = false;
        }, 1000);

        const scrollLeft = e.target.scrollLeft;
        const cardStep = 272 + 16; // 272px card width + 16px gap
        const index = Math.round(scrollLeft / cardStep);
        if (index !== activeMobileIndex && index >= 0 && index < slides.length) {
            setActiveMobileIndex(index);
        }
    };

    // Auto-scroll mobile view
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isUserScrolling.current && mobileScrollRef.current) {
                const nextIndex = (activeMobileIndex + 1) % slides.length;
                const cardStep = 272 + 16;

                // If wrapping back to 0, or just moving to next
                const targetScroll = nextIndex * cardStep;

                mobileScrollRef.current.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });

                // We update state here to keep it in sync, though onScroll will also fire
                setActiveMobileIndex(nextIndex);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [activeMobileIndex, slides.length]);

    return (
        <section className="products-section">
            {/* Background Glow Effect */}
            <div className="products-bg-glow"></div>

            <div className="products-container">

                {/* --- LEFT SIDE: Static Content --- */}
                <div className="products-left">
                    <p className="products-label">THE VECTOR EDGE SUITE</p>
                    <h2 className="products-title">
                        Consulting insight. <br className="title-break" />Product speed.
                    </h2>
                    <Link to="/whatwedo" className="btn-explore hide-mobile">
                        See it in Action
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5H12M12 5L8 1M12 5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* --- RIGHT SIDE: Desktop Carousel --- */}
                <div className="products-right desktop-view">
                    <div className="validate-card">
                        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={panelVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 260, damping: 34, mass: 0.9 },
                                    opacity: { duration: 0.25, ease: 'easeOut' }
                                }}
                                className="validate-inner"
                            >
                                {/* Text Content */}
                                <div className="validate-content-left">
                                    <h3 className="validate-title">{slides[currentSlide].title}</h3>
                                    <p className={`validate-description ${slides[currentSlide].descriptionClass || ''}`}>{slides[currentSlide].description}</p>
                                    <Link to={slides[currentSlide].link || "/contact"}>
                                        <button className="validate-cta">{slides[currentSlide].cta || "Explore Partnership"}</button>
                                    </Link>
                                </div>

                                {/* Image Content */}
                                <div className="validate-image-right">
                                    <img
                                        src={currentImages.base}
                                        alt=""
                                        className="validate-image"
                                        style={currentImages.style || {}}
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="validate-gradient-overlay"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Controls (Arrows) */}
                    <div className="carousel-controls">
                        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* --- MOBILE VIEW: Scrollable Cards --- */}
                <div className="mobile-products-view">
                    <div className="products-mobile-scroll" ref={mobileScrollRef} onScroll={handleScroll}>
                        {slides.map((slide, index) => (
                            <div className="mobile-card-item" key={index}>
                                <div className="validate-card">
                                    <div className="validate-inner">
                                        <div className="validate-image-right">
                                            <img
                                                src={slide.images.base}
                                                alt=""
                                                className="validate-image"
                                                style={slide.images.style || {}}
                                            />
                                        </div>
                                        <div className="validate-content-left">
                                            <h3 className="validate-title">{slide.title}</h3>
                                            <p className={`validate-description ${slide.descriptionClass || ''}`}>{slide.description}</p>
                                            <Link to={slide.link || "/contact"}>
                                                <button className="validate-cta">{slide.cta || "Explore Partnership"}</button>
                                            </Link>
                                        </div>
                                        <div className="validate-gradient-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="products-mobile-nav">
                        {/* Mobile Indicators */}
                        <div className="products-pagination">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`products-pagination-indicator ${index === activeMobileIndex ? 'products-pagination-indicator-active' : ''}`}
                                />
                            ))}
                        </div>

                        {/* Mobile Explore Button */}
                        <Link to="/whatwedo" className="btn-explore show-mobile-inline">
                            See it in Action
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H12M12 5L8 1M12 5L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;
