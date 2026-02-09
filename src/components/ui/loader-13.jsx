import * as React from "react";
import { cn } from "@/lib/utils";
import "./loader-13.css";

export const InfinityLoader = React.forwardRef(
  ({ className, size = 40, ...props }, ref) => {
    const strokeRadius = (size / 2) - 6;
    const circumference = 2 * Math.PI * strokeRadius;
    const dashLength = circumference * 0.25;
    
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn("loader-container", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        {/* CV Logo SVG - Static (not rotating) */}
        <svg
          className="loader-svg-logo"
          viewBox="0 0 65 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size * 0.6}
          height={size * 0.6 * (41/65)}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="clip1_45_47">
              <rect width="65" height="41" fill="white" transform="translate(0, 0)"/>
            </clipPath>
          </defs>
          <g clipPath="url(#clip1_45_47)">
            <path 
              className="logo-path"
              d="M36.1646,0l-3.3769,9.26h-23.4967v-9.26z" 
              fill="var(--accent-green, #a6f63b)"
            />
            <path 
              className="logo-path"
              d="M38.6219,31.74l-3.5488,9.26h-35.0731v-24.5859l3.2455,-4.7257h6.046v20.0516z" 
              fill="var(--accent-green, #a6f63b)"
            />
            <path 
              className="logo-path"
              d="M65,0l-14.9228,41h-10.7676l15.014,-41z" 
              fill="var(--accent-green, #a6f63b)"
            />
          </g>
        </svg>

        {/* Rotating circular stroke around the logo */}
        <svg
          className="loader-rotating-stroke"
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          aria-hidden="true"
        >
          <circle
            className="stroke-circle"
            fill="none"
            strokeWidth={3}
            strokeDasharray={`${dashLength} ${circumference - dashLength}`}
            strokeLinecap="round"
            cx={size / 2}
            cy={size / 2}
            r={strokeRadius}
            stroke="var(--accent-green, #a6f63b)"
          />
        </svg>

        {/* Accessible text for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

InfinityLoader.displayName = "InfinityLoader";
