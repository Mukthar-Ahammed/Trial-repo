import { Link } from 'react-router-dom';
import './Hero.css';
import Navbar from './Navbar';
import heroVideo from '../assets/Output_converted(3).mp4';

function Hero() {
    return (
        <div className="hero">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <Navbar />

                {/* Main Content */}
                <div className="hero-main">
                    <h1 className="hero-title">
                        ENGINEERING INTELLIGENCE. CREATING VALUE.
                    </h1>
                    <p className="hero-subtitle blauer-neue">
                        AI-native. AI products that fit your business. Configured to your workflows.
                    </p>
                    <Link to="/contact">
                        <button className="btn-primary">
                            <div className="btn-primary-text">SEE IT IN ACTION</div>
                        </button>
                    </Link>
                </div>
                <div className="scroll-to-explore-hero">
                    <span>Scroll to explore</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
