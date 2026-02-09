import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './NewPage.css'
import './AboutSection.css'
import './ProductsSection.css'
import Hero from './Hero'
import aboutLogo from '../assets/about logo .png'
import aboutLeft from '../assets/ Images/Web Images/HOMEPAGE/Top Right.jpg'

// Lazy load below-the-fold sections
const ProductsSection = lazy(() => import('./ProductsSection'));
const WhySection = lazy(() => import('./WhySection'));
const CaseStudiesSection = lazy(() => import('./CaseStudiesSection'));
const TestimonialsCarousel = lazy(() => import('./TestimonialsCarousel'));
const CTASection = lazy(() => import('./CTASection'));
const Footer = lazy(() => import('./Footer'));

// Lightweight loader for sections
const SectionLoader = () => (
  <div style={{ minHeight: '50vh', background: 'transparent' }} />
);

function AboutGlow() {
  return (
    <div className="about-glow-top-right">
      <div className="about-glow-ellipse" />
    </div>
  )
}

function NewPage() {
  return (
    <div className="new-page">
      <Hero />
      <section className="about-section">
        <AboutGlow />
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-heading">
              <span className="about-heading-green">AI products</span> <br className="about-mob-break" />
              built for<br />
              how you work.
            </h2>
            <div className="about-text-container">
              <p className="about-description">
                A new model for AI adoption.<br /><br />
                Production-ready AI products, configured to how you work. From our library or built for you, deployed in weeks.<br /><br />
                No adaptation. No compromise. Just results.
              </p>
              <Link to="/whatwedo" className="btn-see-how">See it in Action</Link>
            </div>
            <div className="about-image-abstract">
              <img src={aboutLogo} alt="" className="abstract-image" />
            </div>
          </div>
          <div className="about-right">
            <div className="about-image-container">
              <img src={aboutLeft} alt="" className="about-image-main" />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <ProductsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhySection variant="embedded" />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsCarousel />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default NewPage
