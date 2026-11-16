"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectObjects, services, type ObjectCategory } from "@/lib/site";
import { ServiceIcon } from "@/components/ui";

type Filter = "all" | ObjectCategory;

export default function ObjectsGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const filters: { key: Filter; label: string }[] = [{ key: "all", label: "Все" }, ...services.map((s) => ({ key: s.slug as Filter, label: s.title }))];
  const visible = useMemo(() => (filter === "all" ? projectObjects : projectObjects.filter((o) => o.category === filter)), [filter]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const count = f.key === "all" ? projectObjects.length : projectObjects.filter((o) => o.category === f.key).length;
          const active = filter === f.key;
          return (
            <button key={f.key} type="button" onClick={() => setFilter(f.key)} className={`flex items-center gap-2 border px-4 py-2.5 text-xs font-semibold uppercase tracking-wider ${active ? "border-red-600 bg-red-600 text-white" : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white"}`}>
              {f.label}<span className="font-mono text-[10px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
      <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((o) => (
            <motion.article layout key={o.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }} className="border border-neutral-800 bg-neutral-900/40 text-center">
              <div className="flex aspect-[4/3] items-center justify-center border-b border-neutral-800 bg-neutral-950">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center border border-neutral-800 text-neutral-500"><ServiceIcon slug={o.category} /></div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">{o.media === "video" ? "Видео объекта" : "Фото объекта"}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">{o.year}</div>
                <h3 className="mt-2 font-display text-sm font-bold uppercase">{o.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{o.scope}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}