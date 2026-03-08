"use client"; // keep this if you're using the App Router and want client-side effects

import React from "react";

type Size = "sm" | "md" | "lg" | "xl";

interface LogoProps {
  /**
   * Choose a preset size. You can also pass custom classes with `className`.
   * Default: md
   */
  size?: Size;
  /** Additional classes to apply to the wrapper */
  className?: string;
  /** Accessible label (defaults to brand text) */
  ariaLabel?: string;
  /** Whether to animate the shimmer (default true) */
  shimmer?: boolean;
}

const sizeToClass: Record<Size, string> = {
  sm: "text-2xl md:text-3xl",
  md: "text-5xl md:text-7xl",
  lg: "text-7xl md:text-9xl",
  xl: "text-8xl md:text-[6.5rem]",
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
  ariaLabel,
  shimmer = true,
}) => {
  const textClass = sizeToClass[size];

  return (
    <div
      className={`inline-block select-none ${className}`}
      aria-label={ariaLabel ?? "Automate."}
      role="img"
    >
      <h1
        className={`${textClass} font-extrabold tracking-tight leading-none uppercase
          bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#f15bb5]
          bg-clip-text text-transparent
          drop-shadow-[0_0_18px_rgba(0,255,200,0.55)]
          drop-shadow-[0_0_36px_rgba(255,0,180,0.28)]`}
      >
        <span
          className={`relative inline-block ${
            shimmer
              ? "animate-automate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] bg-[length:200%_100%] bg-clip-text text-transparent"
              : ""
          }`}
          aria-hidden="true"
        >
          Automate
        </span>
        <span
          className={`ml-1 align-top bg-gradient-to-r from-amber-300 to-rose-500 bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(255,140,0,0.6)]`}
        >
          .
        </span>
      </h1>

      {/* Keyframes & utility animation — placed locally using styled-jsx global */}
      <style jsx global>{`
        @keyframes automate-shimmer {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }
        .animate-automate-shimmer {
          animation: automate-shimmer 10.2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Logo;
