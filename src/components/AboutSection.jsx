import { Link } from 'react-router-dom';
import './AboutSection.css';
import imgWomanWindow from '../assets/ Images/Web Images/HOMEPAGE/Top Right.jpg';
import imgAbstract from '../assets/Asset 1.svg';

function AboutSection() {

    return (
        <section className="about-section">
            <div className="about-glow-top-right">
                <div className="about-glow-ellipse"></div>
            </div>

            <div className="about-content">
                <div className="about-left">
                    <h2 className="about-heading">
                        <span className="about-heading-green">AI products</span> built for <br />
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
                        <img src={imgAbstract} alt="" className="abstract-image" />
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-image-container">
                        <img src={imgWomanWindow} alt="" className="about-image-main" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
