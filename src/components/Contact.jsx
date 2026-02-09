import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { GlowingEffect } from './GlowingEffect';
import GlassBorder from './GlassBorder';
import contactHero from '../assets/contact-hero.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: ''
  });

  const contentRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);



  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    const formPayload = new FormData(e.target);
    formPayload.append("access_key", "3062a272-a6d3-4041-8521-7cd48342648f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          message: ''
        });
      } else {
        setSubmitStatus('idle');
      }
    } catch (error) {
      setSubmitStatus('idle');
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">


        <div className="contact-container">
          <div ref={contentRef} className={`contact-content ${contentVisible ? 'visible' : ''}`}>
            {/* Left Section */}
            <div className="contact-left">
              <p className="contact-label animate-item">CONTACT US</p>
              <h1 className="contact-title animate-item">Let's Explore What's Possible Together</h1>
              <p className="contact-description animate-item">
                A focused, exploratory conversation to understand your problem, context, and align on the way forward.
              </p>
              <div className="contact-image-wrapper animate-item">
                <img
                  src={contactHero}
                  alt="Contact us"
                  className="contact-image"
                />
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="contact-right">
              <form className="contact-form animate-item" onSubmit={handleSubmit}>
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
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company/Organization (optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role" className="form-label">Role / Title (optional)</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">What are you looking to explore?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Briefly describe the problem, idea, or system you're evaluating."
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`form-submit ${submitStatus === 'success' ? 'form-submit--success' : ''}`}
                    disabled={!isFormValid || submitStatus === 'sending' || submitStatus === 'success'}
                  >
                    {submitStatus === 'success'
                      ? 'Submission successful'
                      : submitStatus === 'sending'
                        ? 'Sending...'
                        : 'Request an Exploratory Call'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="contact-direct">
          <p className="contact-direct-label">Reach us directly</p>
          <a href="mailto:info@charteredvectorial.ai" className="contact-email">
            info@charteredvectorial.ai
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
