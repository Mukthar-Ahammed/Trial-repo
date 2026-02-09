import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPost.css';
import featuredImage from '../assets/featured.png'; // Placeholder fallback

const BlogPost = ({
    category = "AI STRATEGY",
    date = "FEB 08, 2026",
    title = "The Agentic AI Blueprint: From Intelligence to Execution",
    subtitle = "In a world of static automation, agentic AI marks a fundamental shift from systems that follow instructions to systems that achieve objectives.",
    author = null,
    content = null,
    image = featuredImage,
    prevPost = null,
    nextPost = null
}) => {
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Share handlers
    const handleShareX = () => {
        const url = window.location.href;
        const text = `${title} - ${subtitle}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
    };

    const handleShareLinkedIn = () => {
        const url = window.location.href;
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    };

    const handleCopyLink = async () => {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    return (
        <div className="blog-post-page">
            <Navbar />

            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="blog-back-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </button>

            <main>
                {/* Blog Hero */}
                <section className="blog-hero">
                    <div className="blog-hero-container">
                        <motion.div
                            className="blog-meta"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        >
                            <span>{category}</span>
                            <span style={{ height: '1px', width: '30px', background: 'rgba(255,255,255,0.2)' }}></span>
                            <span>{date}</span>
                        </motion.div>

                        <motion.h1
                            className="blog-title"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="blog-subtitle"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.3 }}
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Featured Image */}
                <motion.section
                    className="blog-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    <img src={image} alt={title} className="blog-featured-image" />
                </motion.section>

                {/* Main Content Layout */}
                <section className="blog-content-layout">
                    <aside className="blog-sidebar">
                        {author && (
                            <div className="author-card">
                                <p className="author-label">Written by</p>
                                <h4 className="author-name">{author.name}</h4>
                                <p className="author-title">{author.title}</p>
                            </div>
                        )}

                        <div className="share-links">
                            <p className="author-label">Share</p>
                            <button className="share-btn" onClick={handleShareX}>X</button>
                            <button className="share-btn" onClick={handleShareLinkedIn}>LinkedIn</button>
                            <button className="share-btn" onClick={handleCopyLink}>Copy Link</button>
                        </div>
                    </aside>

                    <article className="blog-post-body">
                        {content ? content : (
                            <>
                                <p className="lead">
                                    Modern enterprises are built on a foundation of process. For decades, those processes have been codified into static workflows—reliable, but rigid. The arrival of Agentic AI represents the end of that rigidity.
                                </p>

                                <p>
                                    At Chartered Vectorial, we define Agentic AI as software that doesn't just process data, but autonomously navigates complexity to achieve a high-level goal. It is the difference between a tool and a teammate.
                                </p>

                                <h2>The Three Pillars of Agency</h2>
                                <p>
                                    To transition from simple automation to true agency, a system must exhibit three core characteristics: Reasoning, Tool-Use, and Autonomy within Guardrails.
                                </p>

                                <ul>
                                    <li><strong>Reasoning:</strong> The ability to plan and adapt.</li>
                                    <li><strong>Tool-Use:</strong> Interacting with other systems.</li>
                                    <li><strong>Autonomy:</strong> Acting without constant hand-holding.</li>
                                </ul>

                                <blockquote>
                                    "The goal isn't to replace the human, but to provide the human with an army of experts who can handle the cognitive load of execution."
                                </blockquote>

                                <p>
                                    When we build agentic systems for our clients, we start by mapping the "Cognitive Path"—the series of decisions a human expert currently makes. We then architect a multi-agent swarm where each agent is a specialist in one segment of that path.
                                </p>

                                <h2>Scaling the Unscalable</h2>
                                <p>
                                    The true power of this approach lies in its scalability. Whether it is reviewing 50,000 legal amendments or monitoring real-time global supply chain signals, agentic AI provides the same level of focus at 2 AM as it does at 10 AM.
                                </p>

                                <p>
                                    As we move deeper into 2026, the question is no longer whether you are using AI, but how much agency you are willing to give it. The future belongs to those who build for intelligence, not just instructions.
                                </p>
                            </>
                        )}
                    </article>
                </section>

                {/* Bottom Navigation */}
                <section className="blog-footer-nav">
                    <div className="blog-nav-item">
                        <p className="nav-label">Back to</p>
                        <Link to="/insights#blogs" className="nav-item-link">
                            <h3 className="nav-title">Insights</h3>
                        </Link>
                    </div>

                    {nextPost ? (
                        <div className="blog-nav-item" style={{ textAlign: 'right' }}>
                            <p className="nav-label">Next Insight</p>
                            <Link to={nextPost.slug} className="nav-item-link">
                                <h3 className="nav-title">{nextPost.title}</h3>
                            </Link>
                        </div>
                    ) : (
                        <div className="blog-nav-item" style={{ textAlign: 'right' }}>
                            <p className="nav-label">Next Insight</p>
                            <Link to="/blog/agentic-ai-blueprint" className="nav-item-link">
                                <h3 className="nav-title">The Agentic AI Blueprint</h3>
                            </Link>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;