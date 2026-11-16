"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { workSteps } from "@/lib/site";

export default function WorkFlow({ rgb, className = "" }: { rgb: string; className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % workSteps.length), 1600);
    return () => clearInterval(t);
  }, [reduce]);

  const active = reduce ? workSteps.length - 1 : i;
  const pct = (active / (workSteps.length - 1)) * 100;

  return (
    <div className={className} aria-hidden="true">
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="absolute left-[8%] right-[8%] top-[7px] h-px bg-[#1c242e]">
          <div className="h-px transition-all duration-700 ease-out" style={{ width: `${pct}%`, background: `rgb(${rgb} / 0.85)` }} />
        </div>
        <ol className="relative flex justify-between">
          {workSteps.map((s, k) => {
            const done = k <= active;
            const now = k === active;
            return (
              <li key={s} className="flex w-[16%] flex-col items-center gap-2">
                <span
                  className="h-3.5 w-3.5 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: done ? `rgb(${rgb} / 0.9)` : "#26303c",
                    background: now ? `rgb(${rgb})` : "#08090b",
                    boxShadow: now ? `0 0 16px rgb(${rgb} / 0.7)` : "none",
                  }}
                />
                <span className="t-label hidden text-center transition-colors duration-500 sm:block" style={{ color: now ? `rgb(${rgb})` : done ? "#8b98a6" : "#4c5966" }}>
                  {s}
                </span>
              </li>
            );
          })}
        </ol>
        <div className="t-label mt-2 text-center sm:hidden" style={{ color: `rgb(${rgb})` }}>{workSteps[active]}</div>
      </div>
    </div>
  );
}