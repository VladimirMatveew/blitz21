"use client";

import { signalChain } from "@/lib/site";

const C = "255 68 56";

export default function SignalChain({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {/* Десктоп: горизонтальная шина */}
      <svg viewBox="0 0 760 116" className="hidden w-full sm:block" role="img" aria-label="Тракт слаботочной системы: извещатель, шлейф, ППКП, СОУЭ и АСПИ, пульт диспетчера">
        <line x1="60" y1="46" x2="700" y2="46" stroke={`rgb(${C} / 0.22)`} strokeWidth="2" />
        <line className="cable-flow" x1="60" y1="46" x2="700" y2="46" stroke={`rgb(${C} / 0.95)`} strokeWidth="2" strokeLinecap="round" />
        {signalChain.map((n, i) => {
          const x = 60 + i * 160;
          return (
            <g key={n.label}>
              <circle cx={x} cy="46" r="13" fill="#08090b" stroke={`rgb(${C} / 0.55)`} strokeWidth="1.6" />
              <circle className="led-blink" style={{ animationDelay: `${i * 0.4}s` }} cx={x} cy="46" r="5" fill={`rgb(${C})`} />
              <text x={x} y="80" textAnchor="middle" fill="#eef3f8" style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 700, fontSize: "15px" }}>{n.label}</text>
              <text x={x} y="99" textAnchor="middle" fill="#7d8b99" style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11.5px" }}>{n.note}</text>
            </g>
          );
        })}
      </svg>

      {/* Мобильный: компактная шина */}
      <svg viewBox="0 0 360 62" className="w-full sm:hidden" role="img" aria-label="Тракт слаботочной системы">
        <line x1="30" y1="24" x2="330" y2="24" stroke={`rgb(${C} / 0.22)`} strokeWidth="2" />
        <line className="cable-flow" x1="30" y1="24" x2="330" y2="24" stroke={`rgb(${C} / 0.95)`} strokeWidth="2" strokeLinecap="round" />
        {signalChain.map((n, i) => {
          const x = 30 + i * 75;
          return (
            <g key={n.short}>
              <circle cx={x} cy="24" r="9" fill="#08090b" stroke={`rgb(${C} / 0.55)`} strokeWidth="1.4" />
              <circle className="led-blink" style={{ animationDelay: `${i * 0.4}s` }} cx={x} cy="24" r="3.5" fill={`rgb(${C})`} />
              <text x={x} y="52" textAnchor="middle" fill="#b8c4d0" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.5px" }}>{n.short}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}