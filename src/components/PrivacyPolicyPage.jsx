import './PrivacyPolicyPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import termsBg from '../assets/terms_background.svg';

function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <div className="privacy-background">
        <img src={termsBg} alt="background" className="privacy-bg-image" />
      </div>
      
      <Navbar />
      
      <main className="privacy-main">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          
          <div className="privacy-content">
            <p className="privacy-date">January 2026</p>
            
            <div className="privacy-body">
              <div className="privacy-section">
                <h2 className="privacy-section-title">1. Introduction</h2>
                <p>
                  Chartered Vectorial Pte. Ltd. ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">2. Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <ul>
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide.</li>
                  <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">3. Use of Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul>
                  <li>Create and manage your account.</li>
                  <li>Process your transactions and send related information.</li>
                  <li>Email you regarding an order or account.</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                  <li>Generate a personal profile about you to make future visits to the Site easier.</li>
                  <li>Increase the efficiency and operation of the Site.</li>
                  <li>Monitor and analyze usage and trends to improve the Site.</li>
                  <li>Notify you of updates to the Site.</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">4. Disclosure of Your Information</h2>
                <p>
                  We may share your information in the following situations:
                </p>
                <ul>
                  <li><strong>By Law or to Protect Rights:</strong> If we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing, data analysis, and customer service.</li>
                  <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger, bankruptcy, or other business transaction.</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">5. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </div>

              <div className="privacy-section">
                <h2 className="privacy-section-title">6. Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
              </div>
            </div>

            <div className="privacy-contact">
              <p>
                <a href="mailto:hello@charteredvectorial.ai" className="privacy-contact-link">hello@charteredvectorial.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
