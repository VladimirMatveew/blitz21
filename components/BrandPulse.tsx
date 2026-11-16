"use client";

import { useId } from "react";

export default function BrandPulse({ className = "" }: { className?: string }) {
  const raw = useId();
  const id = `bp${raw.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <span className={`brand-pulse relative inline-flex ${className}`}>
      <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}c`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#ffd9d5" />
            <stop offset="100%" stopColor="#ff4438" />
          </radialGradient>
          <linearGradient id={`${id}f`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff4438" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#ff8a7f" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff4438" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <circle className="bp-spin" cx="24" cy="24" r="21" fill="none" stroke="#ff4438" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="3 6" />
        <circle cx="24" cy="24" r="16.5" fill="none" stroke="#ff4438" strokeOpacity="0.16" strokeWidth="1" />

        <path d="M3 24C13 11 35 37 45 24" fill="none" stroke={`url(#${id}f)`} strokeWidth="1.7" strokeLinecap="round" />
        <path className="bp-flow" d="M3 24C13 11 35 37 45 24" fill="none" stroke="#ffffff" strokeOpacity="0.95" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M3 24C13 37 35 11 45 24" fill="none" stroke={`url(#${id}f)`} strokeWidth="1.7" strokeLinecap="round" />
        <path className="bp-flow2" d="M3 24C13 37 35 11 45 24" fill="none" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1.7" strokeLinecap="round" />

        <circle className="bp-ping" cx="24" cy="24" r="8" fill="none" stroke="#ff4438" strokeWidth="1.4" />
        <circle className="bp-ping2" cx="24" cy="24" r="8" fill="none" stroke="#ff4438" strokeWidth="1.4" />

        <circle className="bp-core" cx="24" cy="24" r="5.2" fill={`url(#${id}c)`} />
      </svg>
    </span>
  );
}