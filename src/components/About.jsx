import './About.css';
import officeWindow from '../assets/office-window.png';
import greenAbstract from '../assets/green-abstract.png';

function About() {
    return (
        <section id="who-we-are" className="about-section">
            <div className="about-container">
                {/* Left Column */}
                <div className="about-left-column">
                    <h2 className="about-title">
                        We think. We build.<br />
                        We stay.
                    </h2>

                    <div className="about-bottom">
                        {/* Small Green Image */}
                        <div className="about-image-abstract">
                            <img src={greenAbstract} alt="Abstract Green" className="about-green-image" />
                        </div>

                        {/* Text Content */}
                        <div className="about-text-content">
                            <p className="about-tagline">
                                We make AI adoption real.
                            </p>
                            <p className="about-description">
                                By embedding with your teams, we turn high-value opportunities into production-grade AI agents and stay until they deliver.
                            </p>
                            <p className="about-promise">
                                Not a report. Not a promise. Transformation you can see.
                            </p>

                            <button className="btn-see-work">
                                see how we work
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Large Image */}
                <div className="about-image-container">
                    <img
                        src={officeWindow}
                        alt="Office View"
                        className="about-office-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
