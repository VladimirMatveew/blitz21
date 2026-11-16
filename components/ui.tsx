"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { ServiceSlug } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="ООО «БЛИЦ»"
      draggable={false}
      className={`invert mix-blend-screen select-none ${className}`}
    />
  );
}

export function Reveal({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export function Overline({ children }: { children: ReactNode }) {
  return <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-red-600">{children}</div>;
}

export function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold uppercase leading-tight text-white md:text-4xl">{title}</h2>
        {sub && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-400">{sub}</p>}
      </div>
    </Reveal>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4 10.5 4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIcon({ slug, className = "" }: { slug: ServiceSlug; className?: string }) {
  const common = { className, width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true as const };
  switch (slug) {
    case "fire":
      return (<svg {...common}><path d="M12 3c1 3-2 4-2 7a2.5 2.5 0 0 0 5 0c0-1-.5-2-1-3 3 2 4.5 4.5 4.5 7a6.5 6.5 0 1 1-13 0c0-4 3.5-6.5 6.5-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>);
    case "scs":
      return (<svg {...common}><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="8" cy="7" r="1.6" fill="currentColor" /><circle cx="15" cy="12" r="1.6" fill="currentColor" /><circle cx="10" cy="17" r="1.6" fill="currentColor" /></svg>);
    case "video":
      return (<svg {...common}><rect x="3" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="m15 10 6-3v10l-6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>);
    case "skud":
      return (<svg {...common}><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>);
    case "maintenance":
      return (<svg {...common}><path d="M14.5 6.5a4 4 0 0 0-5.6 4.9L4 16.3V20h3.7l4.9-4.9a4 4 0 0 0 4.9-5.6l-2.6 2.6-2.5-.6-.6-2.5 2.7-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>);
  }
}