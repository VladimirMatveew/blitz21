"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.01, 0.25, 0.5] }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[var(--hdr)] z-30 border-b border-[#1c242e] bg-[#08090b]/95 backdrop-blur-md">
      <div className="subnav-scroll mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 md:px-6">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`}
            className={`t-label shrink-0 rounded-full px-3.5 py-2 transition ${active === i.id ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-[#7d8b99] hover:bg-[#141a21] hover:text-white"}`}>
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="grid gap-2.5">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={it.q} className={`overflow-hidden rounded-2xl border transition ${on ? "border-[#ff4438]/40 bg-[#0e1116]" : "border-[#26303c] bg-[#0e1116]"}`}>
            <button type="button" onClick={() => setOpen(on ? null : i)} aria-expanded={on}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left">
              <span className="t-lead text-white">{it.q}</span>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${on ? "rotate-180 border-[#ff4438] text-[#ff6a5f]" : "border-[#26303c] text-[#7d8b99]"}`}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                  <p className="t-body px-5 pb-4 text-[#94a3b1]">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}