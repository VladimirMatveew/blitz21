"use client";

import type { CSSProperties } from "react";
import type { ServiceSlug } from "@/lib/site";

const VC: Record<ServiceSlug, string> = {
  fire: "255 68 56",
  scs: "56 189 248",
  video: "251 191 36",
  skud: "52 211 153",
  maintenance: "167 139 250",
};

const center: CSSProperties = { transformBox: "view-box", transformOrigin: "100px 100px" };

export default function ServiceVisual({ slug, className = "" }: { slug: ServiceSlug; className?: string }) {
  const c = VC[slug];
  return (
    <div className={`relative aspect-square ${className}`} style={{ "--vc": c } as CSSProperties}>
      <div className="aurora absolute -inset-8 rounded-full opacity-25 blur-3xl" style={{ background: `radial-gradient(circle, rgb(${c} / 0.55), transparent 70%)` }} />

      <svg viewBox="0 0 200 200" className="tick-ring absolute inset-0 h-full w-full text-neutral-700" aria-hidden="true">
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      </svg>
      <svg viewBox="0 0 200 200" className="tick-ring-rev absolute inset-0 h-full w-full" style={{ color: `rgb(${c} / 0.5)` }} aria-hidden="true">
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 10" />
      </svg>

      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-neutral-800 bg-neutral-950/80">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 30%, rgb(${c} / 0.12), transparent 65%)` }} />
        {slug === "fire" && <FireInner />}
        {slug === "scs" && <ScsInner />}
        {slug === "video" && <VideoInner />}
        {slug === "skud" && <SkudInner />}
        {slug === "maintenance" && <MaintInner />}
        <div className="hemi-dome" />
        <div className="hemi-edge" />
        <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(160deg, rgb(255 255 255 / 0.07), transparent 40%)" }} />
      </div>

      <div className="pointer-events-none absolute inset-[8%] rounded-full border" style={{ borderColor: `rgb(${c} / 0.35)`, boxShadow: `0 0 60px -12px rgb(${c} / 0.45), inset 0 0 40px rgb(${c} / 0.08)` }} />
    </div>
  );
}

function FireInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g style={{ color: "rgb(255 68 56)" }}>
        <circle className="ring-ping" style={{ ...center, animationDelay: "0s" }} cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle className="ring-ping" style={{ ...center, animationDelay: "0.9s" }} cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle className="ring-ping" style={{ ...center, animationDelay: "1.8s" }} cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
      <circle className="strobe" cx="100" cy="100" r="42" fill="rgb(255 68 56 / 0.25)" />
      <circle cx="100" cy="100" r="34" fill="#0a0a0a" stroke="rgb(255 68 56 / 0.6)" strokeWidth="1.5" />
      <path className="strobe" d="M100 78c4 12-8 16-8 28a10 10 0 0 0 20 0c0-4-2-8-4-12 12 8 18 18 18 28a26 26 0 1 1-52 0c0-16 14-26 26-44Z" fill="rgb(255 68 56 / 0.9)" />
      <circle className="led-blink" cx="100" cy="52" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "0.4s" }} cx="148" cy="100" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "0.8s" }} cx="100" cy="148" r="3" fill="#ff4438" />
      <circle className="led-blink" style={{ animationDelay: "1.2s" }} cx="52" cy="100" r="3" fill="#ff4438" />
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
      {cables.map((d, i) => (
        <path key={`b${i}`} d={d} fill="none" stroke="rgb(56 189 248 / 0.25)" strokeWidth="3" strokeLinecap="round" />
      ))}
      {cables.map((d, i) => (
        <path key={`f${i}`} className="cable-flow" style={{ animationDelay: `${i * 0.5}s` }} d={d} fill="none" stroke="rgb(56 189 248 / 0.9)" strokeWidth="3" strokeLinecap="round" />
      ))}
      <rect x="86" y="76" width="28" height="48" rx="4" fill="#0a0a0a" stroke="rgb(56 189 248 / 0.6)" strokeWidth="1.5" />
      {[84, 94, 104, 114].map((y, i) => (
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
        <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(251 191 36 / 0.5)" />
          <stop offset="100%" stopColor="rgb(251 191 36 / 0)" />
        </linearGradient>
      </defs>
      <g className="cone-sweep" style={{ transformBox: "view-box", transformOrigin: "100px 60px" }}>
        <path d="M100 60 L58 152 A 62 62 0 0 0 142 152 Z" fill="url(#coneGrad)" />
        <path d="M100 60 L58 152" stroke="rgb(251 191 36 / 0.6)" strokeWidth="1" />
        <path d="M100 60 L142 152" stroke="rgb(251 191 36 / 0.6)" strokeWidth="1" />
        <line className="scan-px" x1="70" y1="70" x2="130" y2="70" stroke="rgb(251 191 36 / 0.7)" strokeWidth="1" />
      </g>
      <path d="M60 118 A 60 60 0 0 0 140 118" fill="none" stroke="rgb(251 191 36 / 0.35)" strokeWidth="1" strokeDasharray="3 5" />
      <path d="M48 140 A 80 80 0 0 0 152 140" fill="none" stroke="rgb(251 191 36 / 0.25)" strokeWidth="1" strokeDasharray="3 5" />
      <rect x="84" y="40" width="32" height="20" rx="4" fill="#0a0a0a" stroke="rgb(251 191 36 / 0.7)" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="6" fill="rgb(251 191 36 / 0.9)" />
      <circle className="led-blink" cx="140" cy="46" r="3" fill="#ff4438" />
      <path d="M52 52 h10 M52 52 v10 M148 52 h-10 M148 52 v10" stroke="rgb(251 191 36 / 0.5)" strokeWidth="1.5" />
    </svg>
  );
}

function SkudInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect x="70" y="50" width="60" height="100" rx="6" fill="none" stroke="rgb(52 211 153 / 0.4)" strokeWidth="1.5" />
      <rect x="40" y="92" width="18" height="26" rx="3" fill="#0a0a0a" stroke="rgb(52 211 153 / 0.7)" strokeWidth="1.5" />
      <g style={{ color: "rgb(52 211 153)" }}>
        <path className="rfid" style={{ transformBox: "view-box", transformOrigin: "58px 105px", animationDelay: "0s" }} d="M64 96 a12 12 0 0 1 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path className="rfid" style={{ transformBox: "view-box", transformOrigin: "58px 105px", animationDelay: "0.5s" }} d="M70 90 a20 20 0 0 1 0 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path className="rfid" style={{ transformBox: "view-box", transformOrigin: "58px 105px", animationDelay: "1s" }} d="M76 84 a28 28 0 0 1 0 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
      <path className="shackle" style={{ transformBox: "view-box", transformOrigin: "92px 100px" }} d="M92 100 v-8 a8 8 0 0 1 16 0 v8" fill="none" stroke="rgb(52 211 153 / 0.9)" strokeWidth="3" strokeLinecap="round" />
      <rect x="88" y="100" width="24" height="20" rx="3" fill="#0a0a0a" stroke="rgb(52 211 153 / 0.8)" strokeWidth="1.5" />
      <circle cx="100" cy="110" r="2.5" fill="rgb(52 211 153)" />
      <circle className="led-blink" cx="100" cy="40" r="4" fill="#ff4438" />
      <circle className="granted" cx="112" cy="40" r="4" fill="#35d07f" />
      <path className="granted" d="M94 140 l5 5 9-10" fill="none" stroke="#35d07f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaintInner() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g className="gear-spin" style={center}>
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgb(167 139 250 / 0.7)" strokeWidth="9" strokeDasharray="10 8" />
        <circle cx="100" cy="100" r="12" fill="none" stroke="rgb(167 139 250 / 0.8)" strokeWidth="2" />
      </g>
      <g className="wrench-swing" style={center}>
        <line x1="100" y1="100" x2="138" y2="62" stroke="rgb(167 139 250 / 0.9)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="142" cy="58" r="9" fill="none" stroke="rgb(167 139 250 / 0.9)" strokeWidth="5" strokeDasharray="30 12" />
      </g>
      <g className="tick-ring" style={center}>
        <circle cx="100" cy="30" r="3" fill="#a78bfa" />
        <circle cx="100" cy="170" r="3" fill="#a78bfa" />
      </g>
      <path d="M20 158 L60 158 L70 138 L82 176 L94 158 L180 158" fill="none" stroke="rgb(167 139 250 / 0.25)" strokeWidth="2" />
      <path className="ecg" d="M20 158 L60 158 L70 138 L82 176 L94 158 L180 158" fill="none" stroke="rgb(167 139 250 / 0.9)" strokeWidth="2" />
    </svg>
  );
}