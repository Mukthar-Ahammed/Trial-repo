import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === '/' && currentPath === '/') return true;
        if (path !== '/' && currentPath.startsWith(path)) return true;
        return false;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) return; // Don't hide if menu is open

            const currentScrollY = window.scrollY;

            // Only show navbar if we are at the very top (within 20px)
            if (currentScrollY < 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        closeMenu();
    }, [currentPath]);

    return (
        <>
            <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''} ${isMenuOpen ? 'navbar-open' : ''} ${currentPath === '/insights' ? 'navbar--insights' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to="/" className="navbar-logo" onClick={closeMenu}>
                            <svg viewBox="0 0 65 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-logo-svg">
                                <path d="M36.165 0L32.7882 9.26001H9.2915V0H36.165Z" fill="currentColor" />
                                <path d="M38.6219 31.74L35.0731 41H0V16.4141L3.24545 11.6884H9.29149V31.74H38.6219Z" fill="currentColor" />
                                <path d="M64.9999 0L50.0769 41H39.3093L54.3233 0H64.9999Z" fill="currentColor" />
                            </svg>
                        </Link>
                        <ul className="navbar-menu">
                            <li>
                                <Link to="/whoweare" className={`navbar-link ${isActive('/whoweare') ? 'active' : ''}`}>
                                    Who We Are
                                </Link>
                            </li>
                            <li>
                                <Link to="/whatwedo" className={`navbar-link ${isActive('/whatwedo') ? 'active' : ''}`}>
                                    What we do
                                </Link>
                            </li>
                            <li>
                                <Link to="/insights" className={`navbar-link ${isActive('/insights') ? 'active' : ''}`}>
                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'active' : ''}`}>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/contact" className="navbar-cta">
                        See it in Action
                    </Link>
                    <button
                        className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="hamburger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link to="/whoweare" className={`mobile-link ${isActive('/whoweare') ? 'active' : ''}`}>
                                Who We Are
                            </Link>
                        </li>
                        <li>
                            <Link to="/whatwedo" className={`mobile-link ${isActive('/whatwedo') ? 'active' : ''}`}>
                                What we do
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights" className={`mobile-link ${isActive('/insights') ? 'active' : ''}`}>
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className={`mobile-link ${isActive('/careers') ? 'active' : ''}`}>
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`mobile-link ${isActive('/contact') ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-menu-footer">
                        <Link to="/contact" className="mobile-cta">See it in Action</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;