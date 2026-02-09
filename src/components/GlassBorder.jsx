import React from 'react';

const GlassBorder = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden ${className}`}>
            {/* Top Border Reflection */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                }}
            />

            {/* Bottom Border Reflection */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                }}
            />

            {/* Left Border Reflection */}
            <div
                className="absolute top-0 bottom-0 left-0 w-[1px]"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                }}
            />

            {/* Right Border Reflection */}
            <div
                className="absolute top-0 bottom-0 right-0 w-[1px]"
                style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                }}
            />


        </div>
    );
};

export default GlassBorder;
