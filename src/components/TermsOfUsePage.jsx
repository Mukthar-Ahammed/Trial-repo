import './TermsOfUsePage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import termsBg from '../assets/terms_background.svg';

function TermsOfUsePage() {
  return (
    <div className="terms-page">
      <div className="terms-background">
        <img src={termsBg} alt="background" className="terms-bg-image" />
      </div>
      
      <Navbar />
      
      <main className="terms-main">
        <div className="terms-container">
          <h1 className="terms-title">Terms of use</h1>
          
          <div className="terms-content">
            <p className="terms-date">January 2026</p>
            
            <div className="terms-body">
              <p>
                By accessing and using this website, you accept the following terms and conditions, without limitation or qualification.
              </p>

              <p>
                Unless otherwise stated, the contents of this website including, but not limited to, the text, images, graphics, and code contained herein and their arrangement are the property of Chartered Vectorial Pte. Ltd. All trademarks used or referred to in this website are the property of their respective owners.
              </p>

              <p>
                Nothing contained in this website shall be construed as conferring by implication, estoppel, or otherwise, any licence or right to any copyright, patent, trademark or other proprietary interest of Chartered Vectorial or any third party. This website and the content provided herein, including but not limited to graphic images, audio, video, html code, and text, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way, without the prior written consent of Chartered Vectorial, except that you may download, display, and print one copy of the materials on any single computer solely for your personal, non-commercial use, provided that you do not modify the material in any way and you keep intact all copyright, trademark, and other proprietary notices.
              </p>

              <p>
                The information provided on this website is free of charge and for informational purposes only and does not create a business or professional services relationship between you and Chartered Vectorial. Links on this website may lead to services or websites not operated by Chartered Vectorial. No judgement or warranty is made with respect to such other services or websites and Chartered Vectorial takes no responsibility for such other websites or services. A link to another website or service is not an endorsement of that website or service. Any use you make of the information provided on this website, or any website or service linked to by this website, is at your own risk.
              </p>

              <p>
                This website and its contents are provided "as is" and Chartered Vectorial makes no representation or warranty of any kind with respect to this website or any website or service accessible through this website. Chartered Vectorial expressly disclaims all express and implied warranties including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In no event will Chartered Vectorial or its third-party service providers be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) without regard to the form of action and whether in contract, tort, negligence, strict liability, or otherwise, arising out of or in connection with this website, any content on or accessed through this website or any website or service linked to, or any copying, displaying, or use thereof.
              </p>

              <p>
                Chartered Vectorial maintains this website in Singapore and you agree that these terms of use and any legal action or proceeding relating to this website shall be governed by the laws of Singapore without reference to its choice of law rules. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>

              <p>
                You are responsible for complying with the laws of the jurisdiction from which you are accessing this website and you agree that you will not access or use the information on this website in violation of such laws. Unless expressly stated otherwise herein, any information submitted by you through this website shall be deemed non-confidential and non-proprietary. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so. Because of the open nature of the Internet, we recommend that you not submit information you consider confidential.
              </p>

              <p>
                Chartered Vectorial does not accept unauthorised idea submissions outside of established business relationships. To protect the interests of our current clients and ourselves, we must treat the issue of such submissions with great care. Importantly, without a clear business relationship, Chartered Vectorial cannot and does not treat any such submissions in confidence. Accordingly, please do not communicate unauthorised idea submissions to Chartered Vectorial through this website. Any ideas disclosed to Chartered Vectorial outside a pre-existing and documented confidential business relationship are not confidential and Chartered Vectorial may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you. By submitting an idea or other detailed submission to Chartered Vectorial through this website, you agree to be bound by the terms of this stated policy.
              </p>
            </div>

            <div className="terms-contact">
              <p>If you have any questions about these terms, please contact us at<br />
                <a href="mailto:hello@charteredvectorial.ai" className="terms-contact-link">hello@charteredvectorial.ai</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfUsePage;
