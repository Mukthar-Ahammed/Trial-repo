import React, { useState, useLayoutEffect, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useLocation } from 'react-router-dom';
import HighVelocityLoader from './HighVelocityLoader';

const MIN_SHOW_MS = 450;
const MAX_SHOW_MS = 4000;

const GlobalLoader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const shouldShowLoader = () => true;

    // Show loader immediately on internal link click (before navigation)
    useEffect(() => {
        const handleClick = (e) => {
            const a = e.target.closest('a[href^="/"]');
            if (!a || a.getAttribute('href')?.startsWith('/#')) return;
            if (a.origin !== window.location.origin) return;
            if (isInitialLoad) return;
            flushSync(() => setIsLoading(true));
            document.body.style.overflow = 'hidden';
        };
        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true);
    }, [isInitialLoad]);

    // Initial page load
    useEffect(() => {
        if (!isInitialLoad) return;
        document.body.style.overflow = 'hidden';
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                setIsInitialLoad(false);
                document.body.style.overflow = 'unset';
            }, 300);
        };
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [isInitialLoad]);

    // Also show on location change (in case navigation wasn't from a click)
    useLayoutEffect(() => {
        if (isInitialLoad) return;
        if (shouldShowLoader(location.pathname)) {
            setIsLoading(true);
            document.body.style.overflow = 'hidden';
        }
    }, [location.pathname, isInitialLoad]);

    // Hide after min duration; max cap so it never gets stuck
    useEffect(() => {
        if (!isLoading || isInitialLoad) return;
        const hide = () => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
        };
        const minT = setTimeout(hide, MIN_SHOW_MS);
        const maxT = setTimeout(hide, MAX_SHOW_MS);
        return () => {
            clearTimeout(minT);
            clearTimeout(maxT);
        };
    }, [isLoading, isInitialLoad]);

    if (!isLoading) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 20000, // Ensure it's strictly on top of everything (Navbar is 10000)
            background: '#020f14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            transition: 'opacity 0.3s ease-out'
        }}>
            <HighVelocityLoader size={64} />
        </div>
    );
};

export default GlobalLoader;
