import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './WhatWeDo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import AcceleratorsSection from './AcceleratorsSection';
import CTASection from './CTASection';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperSpeedPresets';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';
import { AnimatePresence, motion } from 'framer-motion';
import envisionLogo from '../assets/envision 1.png';
import proveLogo from '../assets/prove 1.png';
import buildLogo from '../assets/build 1.png';
import adaptLogo from '../assets/Adopt 1.png';
import strategicIntelligence from '../assets/carousal/strategicintelligence.jpg.jpeg';
import documentIntelligence from '../assets/carousal/documentintelligence.jpg.jpeg';
import researchIntelligence from '../assets/carousal/research_intelligence.jpg.jpeg';
import processIntelligence from '../assets/carousal/Processintelligence.jpg.jpeg';
import functionalIntelligence from '../assets/carousal/functionalintelligence.jpg.jpeg';

function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const location = useLocation();

  const mobileScrollRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Handle mobile scroll sync
  const handleMobileScroll = () => {
    isUserScrolling.current = true;
    clearTimeout(scrollTimeout.current);

    // Reset user scrolling flag after 100ms of no scroll events
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 1000); // Increased buffer to prevent fighting

    if (mobileScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileScrollRef.current;
      const totalSlides = aiSlides.length;

      // Calculate index based on scroll progress
      // (scrollWidth - clientWidth) is the maximum possible scrollLeft
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const newIndex = Math.round(progress * (totalSlides - 1));

      if (newIndex !== currentSlide && newIndex >= 0 && newIndex < totalSlides) {
        setCurrentSlide(newIndex);
      }
    }
  };

  // Sync scroll when slide changes (if not from scroll)
  useEffect(() => {
    if (mobileScrollRef.current && !isUserScrolling.current) {
      const width = mobileScrollRef.current.offsetWidth;
      // We need to calculate based on card width + gap for more precision if needed, 
      // but here we are using the simple ratio assumption from before or just offsetWidth if 1 card per view.
      // Based on CSS, mobile card is 85% width. The scroll snap point is centered.
      // A more robust way is to query the specific child element.
      const card = mobileScrollRef.current.children[currentSlide];
      if (card) {
        const scrollLeft = card.offsetLeft - (mobileScrollRef.current.offsetWidth - card.offsetWidth) / 2;
        mobileScrollRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentSlide]);

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash === '#blog') {
      const scrollToBlog = () => {
        const element = document.getElementById('blog');
        if (element) {
          const headerOffset = 80; // Adjust for sticky navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // Try scrolling after a short delay to ensure DOM is ready
      const timer = setTimeout(scrollToBlog, 100);
      return () => clearTimeout(timer);
    }

    if (location.hash === '#what-we-do-section') {
      const scrollToSection = () => {
        const element = document.getElementById('what-we-do-section');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      const timer = setTimeout(scrollToSection, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]);

  const frameworks = [
    {
      title: 'Learn',
      description: 'We embed with your team to understand how you actually work.',
      icon: envisionLogo
    },
    {
      title: 'Shape',
      description: 'We identify where AI creates leverage, and configure products to fit.',
      icon: proveLogo
    },
    {
      title: 'Build',
      description: 'You ship. Prototypes, production systems, client demos, you\'d rather show than tell.',
      icon: buildLogo
    },
    {
      title: 'Run',
      description: 'We stay until it runs. Governance built-in. Audit-ready.',
      icon: adaptLogo
    }
  ];

  const aiSlides = [
    {
      title: 'Strategic Intelligence',
      image: strategicIntelligence,
      text: 'Where should AI go?',
      linkText: 'Where should AI go?',
      blogLink: '/contact'
    },
    {
      title: 'Document Intelligence',
      image: documentIntelligence,
      text: "What's trapped in your documents?",
      linkText: "What's trapped in your documents?",
      blogLink: '/contact'
    },
    {
      title: 'Research Intelligence',
      image: researchIntelligence,
      text: 'What are you missing?',
      linkText: 'What are you missing?',
      blogLink: '/contact'
    },
    {
      title: 'Process Intelligence',
      image: processIntelligence,
      text: "What's slowing you down?",
      linkText: "What's slowing you down?",
      blogLink: '/contact'
    },
    {
      title: 'Functional Intelligence',
      image: functionalIntelligence,
      text: 'What could run itself?',
      linkText: 'What could run itself?',
      blogLink: '/contact'
    }
  ];

  const cardVariants = {
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

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % aiSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + aiSlides.length) % aiSlides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Don't auto-advance if user is interacting
      if (!isUserScrolling.current) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % aiSlides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [aiSlides.length]);

  return (
    <div className="what-we-do-page">
      {/* Hero Section with Hyperspeed - Navbar inside like Careers */}
      <section className="what-we-do-hero-section">
        <Navbar />
        <div className="hyperspeed-container">
          <Hyperspeed effectOptions={hyperspeedPresets.one} />
        </div>
        <div className="hero-content-overlay">
          <div className="what-we-do-hero">
            <h1 className="what-we-do-title">THE VECTOR EDGE SUITE</h1>

            <p className="what-we-do-subtitle">
              Five forms of intelligence built to fit how you work.
            </p>



          </div>
          <div className="scroll-to-explore">
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="what-we-do-section" id="what-we-do-section">
        <div className="what-we-do-glow"></div>
        <div className="what-we-do-container">

          {/* AI Discovery card */}
          <div id="blog" className="ai-discovery-section">
            <div className="ai-discovery-bg-green-glow" />
            {/* Header - Restored to top for baseline alignment */}
            <div className="ai-discovery-header">
              <h2 className="ai-discovery-section-title">The Five Intelligences</h2>
              <p className="ai-discovery-section-subtitle">Intelligence, applied where it matters.</p>
            </div>

            <div className="ai-discovery-carousel-wrapper">
              {/* Mobile Scroll Setup */}
              <div
                className="ai-discovery-mobile-scroll"
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
              >
                {aiSlides.map((slide, index) => (
                  <div key={index} className="ai-discovery-mobile-card">
                    <div className="ai-discovery-card-glow" aria-hidden="true" />
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
                    <Link to={slide.blogLink || '#'} className="ai-discovery-mobile-link">
                      <div className="ai-discovery-mobile-image-container">
                        <img src={slide.image} alt="" className="ai-discovery-bg-image" />
                        <div className="ai-discovery-gradient-overlay" />
                      </div>
                    </Link>
                    <div className="ai-discovery-text-overlay">
                      <p className="ai-discovery-text">{slide.title}</p>
                      {slide.blogLink && (
                        <Link to={slide.blogLink} className="ai-discovery-blog-link">
                          {slide.linkText || 'Learn More →'}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Carousel */}
              <div className="ai-discovery-desktop-carousel">
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 260, damping: 34, mass: 0.9 },
                      opacity: { duration: 0.25, ease: 'easeOut' }
                    }}
                    className="ai-discovery-card"
                  >
                    <div className="ai-discovery-card-glow" aria-hidden="true" />
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
                    {/* Image Link Wrapper */}
                    <Link
                      to={aiSlides[currentSlide].blogLink || '#'}
                      className="ai-discovery-image-link"
                      style={{ textDecoration: 'none', display: 'block' }}
                    >
                      {/* Background with image */}
                      <div className="ai-discovery-image-container">
                        <img
                          src={aiSlides[currentSlide].image}
                          alt=""
                          className="ai-discovery-bg-image"
                        />
                        <div className="ai-discovery-gradient-overlay" />
                      </div>
                    </Link>

                    {/* Text overlay at bottom */}
                    <div className="ai-discovery-text-overlay">
                      <p className="ai-discovery-text">
                        {aiSlides[currentSlide].title}
                      </p>
                      {aiSlides[currentSlide].blogLink && (
                        <Link
                          to={aiSlides[currentSlide].blogLink}
                          className="ai-discovery-blog-link"
                        >
                          {aiSlides[currentSlide].linkText || 'Learn More →'}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination dots - outside card */}
            <div className="ai-discovery-pagination">
              {aiSlides.map((_, index) => (
                <span
                  key={index}
                  className={`ai-discovery-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>


            {/* Arrow buttons - moved to bottom */}
            <div className="ai-discovery-controls">
              <button className="ai-discovery-btn ai-discovery-btn-prev" onClick={prevSlide} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="ai-discovery-btn ai-discovery-btn-next" onClick={nextSlide} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Framework Cards Grid */}
          <div className="framework-grid">
            {frameworks.map((item, index) => (
              <div key={index} className="framework-card">
                <GlowingEffect
                  blur={0}
                  spread={25}
                  proximity={140}
                  movementDuration={1.2}
                  borderWidth={2}
                  inactiveZone={0.2}
                  disabled={false}
                  className="glowing-effect-overlay"
                />
                <div className="framework-card-inner">
                  <div className="framework-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h3 className="framework-title">{item.title}</h3>
                  <p className="framework-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <AcceleratorsSection />
      <CTASection
        title="What comes next is worth building together."
        buttonText="SEE IT IN ACTION"
      />
      <Footer />
    </div>
  );
}

export default WhatWeDo;
