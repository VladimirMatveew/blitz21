"use client";

import type { CSSProperties } from "react";
import type { ServiceSlug } from "@/lib/site";

const VC: Record<ServiceSlug, string> = {
  fire: "255 68 56",
  scs: "83 194 255",
  video: "255 178 36",
  skud: "53 208 127",
  maintenance: "179 155 255",
};

const C: CSSProperties = { transformBox: "view-box", transformOrigin: "100px 100px" };
const at = (x: number, y: number): CSSProperties => ({ transformBox: "view-box", transformOrigin: `${x}px ${y}px` });

export default function ServiceVisual({ slug, className = "" }: { slug: ServiceSlug; className?: string }) {
  const c = VC[slug];
  return (
    <div className={`relative aspect-square ${className}`} style={{ "--vc": c } as CSSProperties}>
      <div className="aurora absolute -inset-8 rounded-full opacity-25 blur-3xl" style={{ background: `radial-gradient(circle, rgb(${c} / 0.55), transparent 70%)` }} />

      <svg viewBox="0 0 200 200" className="tick-ring absolute inset-0 h-full w-full text-[#3a4653]" aria-hidden="true">
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      </svg>
      <svg viewBox="0 0 200 200" className="tick-ring-rev absolute inset-0 h-full w-full" style={{ color: `rgb(${c} / 0.45)` }} aria-hidden="true">
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 10" />
      </svg>

      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-[#1c242e] bg-[#08090b]/85">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 32%, rgb(${c} / 0.12), transparent 66%)` }} />

        {/* Калибровочный слой: соосные окружности и риски по осям */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="100" cy="100" r="72" fill="none" stroke={`rgb(${c} / 0.18)`} strokeWidth="1" strokeDasharray="1 5" />
          <g stroke={`rgb(${c} / 0.35)`} strokeWidth="1.4" strokeLinecap="round">
            <path d="M100 22v8M100 170v8M22 100h8M170 100h8" />
          </g>
        </svg>

        {slug === "fire" && <FireInner />}
        {slug === "scs" && <ScsInner />}
        {slug === "video" && <VideoInner />}
        {slug === "skud" && <SkudInner />}
        {slug === "maintenance" && <MaintInner />}

        <div className="hemi-dome" />
        <div className="hemi-edge" />
        <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(160deg, rgb(255 255 255 / 0.06), transparent 42%)" }} />
      </div>

      <div className="pointer-events-none absolute inset-[8%] rounded-full border" style={{ borderColor: `rgb(${c} / 0.35)`, boxShadow: `0 0 60px -12px rgb(${c} / 0.45), inset 0 0 40px rgb(${c} / 0.08)` }} />
    </div>
  );
}

/* Пламя строго соосно: bbox 82..118 по X и 76..124 по Y, центр (100,100) */
function FireInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g style={{ color: "rgb(255 68 56)" }}>
        <circle className="ring-ping" style={{ ...C, animationDelay: "0s" }} cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle className="ring-ping" style={{ ...C, animationDelay: "0.9s" }} cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle className="ring-ping" style={{ ...C, animationDelay: "1.8s" }} cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>

      <circle className="strobe" cx="100" cy="100" r="40" fill="rgb(255 68 56 / 0.22)" />
      <circle cx="100" cy="100" r="32" fill="#08090b" stroke="rgb(255 68 56 / 0.6)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="26" fill="none" stroke="rgb(255 68 56 / 0.22)" strokeWidth="1" />

      <path className="strobe" d="M100 76 C92 88 82 96 82 106 A18 18 0 0 0 118 106 C118 96 108 88 100 76 Z" fill="rgb(255 68 56 / 0.92)" />
      <path d="M100 89 C97 96 94 100 94 105 A6 6 0 0 0 106 105 C106 100 103 96 100 89 Z" fill="#08090b" opacity="0.55" />

      <circle className="led-blink" cx="100" cy="52" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "0.25s" }} cx="148" cy="100" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "0.5s" }} cx="100" cy="148" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "0.75s" }} cx="52" cy="100" r="3" fill="#ff4438" />
    </svg>
  );
}

const cables = [
  "M -10 70 C 60 70, 60 100, 100 100 S 140 130, 210 130",
  "M -10 90 C 60 90, 60 100, 100 100 S 140 110, 210 110",
  "M -10 110 C 60 110, 60 100, 100 100 S 140 90, 210 90",
  "M -10 130 C 60 130, 60 100, 100 100 S 140 70, 210 70",
];

function ScsInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {cables.map((d, i) => (<path key={`b${i}`} d={d} fill="none" stroke="rgb(83 194 255 / 0.25)" strokeWidth="3" strokeLinecap="round" />))}
      {cables.map((d, i) => (<path key={`f${i}`} className="cable-flow" style={{ animationDelay: `${i * 0.5}s` }} d={d} fill="none" stroke="rgb(83 194 255 / 0.9)" strokeWidth="3" strokeLinecap="round" />))}
      <rect x="86" y="76" width="28" height="48" rx="5" fill="#08090b" stroke="rgb(83 194 255 / 0.6)" strokeWidth="1.5" />
      {[82, 94, 106, 118].map((y, i) => (
        <circle key={y} className="led-blink" style={{ animationDelay: `${i * 0.25}s` }} cx="100" cy={y} r="2.5" fill="#53c2ff" />
      ))}
      <circle cx="20" cy="70" r="3" fill="#53c2ff" />
      <circle cx="20" cy="130" r="3" fill="#53c2ff" />
      <circle cx="180" cy="70" r="3" fill="#53c2ff" />
      <circle cx="180" cy="130" r="3" fill="#53c2ff" />
    </svg>
  );
}

function VideoInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="blitz-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255 178 36 / 0.45)" />
          <stop offset="100%" stopColor="rgb(255 178 36 / 0)" />
        </linearGradient>
      </defs>
      <g className="cone-sweep" style={at(100, 60)}>
        <path d="M100 60 L62 144 A52 52 0 0 0 138 144 Z" fill="url(#blitz-cone)" />
        <path d="M100 60 L62 144 M100 60 L138 144" stroke="rgb(255 178 36 / 0.55)" strokeWidth="1" />
        <line className="scan-px" x1="74" y1="72" x2="126" y2="72" stroke="rgb(255 178 36 / 0.7)" strokeWidth="1" />
      </g>
      <path d="M66 116 A54 54 0 0 0 134 116" fill="none" stroke="rgb(255 178 36 / 0.3)" strokeWidth="1" strokeDasharray="3 5" />
      <path d="M54 138 A76 76 0 0 0 146 138" fill="none" stroke="rgb(255 178 36 / 0.2)" strokeWidth="1" strokeDasharray="3 5" />
      <rect x="84" y="40" width="32" height="20" rx="5" fill="#08090b" stroke="rgb(255 178 36 / 0.7)" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="6" fill="rgb(255 178 36 / 0.9)" />
      <circle className="led-blink" cx="138" cy="46" r="3" fill="#ff4438" />
      <path d="M56 40h10M56 40v10M144 40h-10M144 40v10" stroke="rgb(255 178 36 / 0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SkudInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect x="70" y="50" width="60" height="100" rx="8" fill="none" stroke="rgb(53 208 127 / 0.4)" strokeWidth="1.5" />
      <rect x="38" y="87" width="18" height="26" rx="4" fill="#08090b" stroke="rgb(53 208 127 / 0.7)" strokeWidth="1.5" />
      <g style={{ color: "rgb(53 208 127)" }}>
        <path className="rfid" style={{ ...at(56, 100), animationDelay: "0s" }} d="M62 91 a12 12 0 0 1 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path className="rfid" style={{ ...at(56, 100), animationDelay: "0.5s" }} d="M68 85 a20 20 0 0 1 0 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path className="rfid" style={{ ...at(56, 100), animationDelay: "1s" }} d="M74 79 a28 28 0 0 1 0 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
      <path className="shackle" style={at(92, 98)} d="M92 98 v-8 a8 8 0 0 1 16 0 v8" fill="none" stroke="rgb(53 208 127 / 0.9)" strokeWidth="3" strokeLinecap="round" />
      <rect x="88" y="98" width="24" height="20" rx="4" fill="#08090b" stroke="rgb(53 208 127 / 0.8)" strokeWidth="1.5" />
      <circle cx="100" cy="108" r="2.5" fill="rgb(53 208 127)" />
      <circle className="led-blink" cx="94" cy="38" r="3.5" fill="#ff4438" />
      <circle className="granted" cx="106" cy="38" r="3.5" fill="#35d07f" />
      <path className="granted" d="M94 136 l5 5 9-10" fill="none" stroke="#35d07f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaintInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g className="gear-spin" style={C}>
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgb(179 155 255 / 0.7)" strokeWidth="9" strokeDasharray="10 8" />
        <circle cx="100" cy="100" r="12" fill="none" stroke="rgb(179 155 255 / 0.8)" strokeWidth="2" />
      </g>
      <g className="wrench-swing" style={C}>
        <line x1="64" y1="136" x2="136" y2="64" stroke="rgb(179 155 255 / 0.85)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="138" cy="62" r="9" fill="none" stroke="rgb(179 155 255 / 0.9)" strokeWidth="5" strokeDasharray="30 12" />
        <circle cx="62" cy="138" r="5" fill="rgb(179 155 255 / 0.9)" />
      </g>
      <g className="tick-ring" style={C}>
        <circle cx="100" cy="30" r="3" fill="#b39bff" />
        <circle cx="100" cy="170" r="3" fill="#b39bff" />
      </g>
      <path d="M20 158 L86 158 L94 140 L100 176 L106 140 L114 158 L180 158" fill="none" stroke="rgb(179 155 255 / 0.22)" strokeWidth="2" strokeLinejoin="round" />
      <path className="ecg" d="M20 158 L86 158 L94 140 L100 176 L106 140 L114 158 L180 158" fill="none" stroke="rgb(179 155 255 / 0.9)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}