import React from "react";

/**
 * A lightweight utility for combining classes.
 */
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const LOADER_STYLES = `
  @keyframes logo-single-travel {
    from { stroke-dashoffset: 100; }
    to { stroke-dashoffset: 0; }
  }
`;

/**
 * HighVelocityLoader - Animated logo loader
 * Pre-configured with #a6f63b and a fast 1.5s duration.
 * Optimized for smaller "loader" dimensions.
 */
const HighVelocityLoader = React.forwardRef(({
    className = "",
    size = 48,
    duration = 1.5,
    strokeWidth = 2.5,
    glowColor = "#a6f63b",
    ...props
}, ref) => {
    // Original SVG Paths for the Mask
    const originalLogoPaths = "M36.1665 0L32.7896 9.26001H9.29297V0H36.1665Z M38.6219 31.74L35.0731 41H0V16.4141L3.24545 11.6884H9.29149V31.74H38.6219Z M64.9992 0L50.0762 41H39.3086L54.3226 0H64.9992Z";

    // The seamless circuit path connecting all segments
    const continuousLoopPath = `
    M9.29,0 L36.17,0 L32.79,9.26 H9.29 V0 
    L9.29,11.69 L3.25,11.69 L0,16.41 V41 H35.07 L38.62,31.74 H9.29 V11.69 
    L54.32,0 H64.99 L50.08,41 H39.31 L54.32,0 
    L9.29,0
  `.replace(/\s+/g, ' ').trim();

    const maskId = React.useId().replace(/:/g, "");
    const filterId = React.useId().replace(/:/g, "");

    return (
        <div
            ref={ref}
            role="status"
            aria-live="polite"
            className={cn("flex items-center justify-center", className)}
            {...props}
        >
            <style>{LOADER_STYLES}</style>
            <svg
                viewBox="0 0 65 41"
                height={size}
                width={(size * 65) / 41}
                aria-hidden="true"
                className="overflow-visible"
            >
                <defs>
                    <mask id={maskId}>
                        <path
                            d={originalLogoPaths}
                            fill="none"
                            stroke="white"
                            strokeWidth={strokeWidth}
                            strokeLinejoin="round"
                        />
                    </mask>
                    <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Static Background Track */}
                <path
                    d={originalLogoPaths}
                    fill="none"
                    stroke="#333"
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    opacity="0.2"
                />

                {/* The High-Velocity Glowing Segment */}
                <g mask={`url(#${maskId})`}>
                    <path
                        d={continuousLoopPath}
                        pathLength="100"
                        strokeDasharray="25 75"
                        fill="none"
                        stroke={glowColor}
                        strokeWidth={strokeWidth + 2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter={`url(#${filterId})`}
                        style={{
                            animation: `logo-single-travel ${duration}s linear infinite`,
                        }}
                    />
                </g>
            </svg>
        </div>
    );
});

HighVelocityLoader.displayName = "HighVelocityLoader";

export default HighVelocityLoader;
