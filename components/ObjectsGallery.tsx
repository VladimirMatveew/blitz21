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
          const on = filter === f.key;
          return (
            <button key={f.key} type="button" onClick={() => setFilter(f.key)}
              className={`t-chip flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition ${on ? "bg-[#ff4438] text-white shadow-lg shadow-red-900/40" : "border border-[#26303c] bg-[#0e1116] text-[#b8c4d0] hover:border-[#4a5866] hover:text-white"}`}>
              {f.label}<span className="t-label opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((o) => (
            <motion.article layout key={o.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-3xl border border-[#26303c] bg-[#0e1116] text-center">
              <div className="flex aspect-[4/3] items-center justify-center border-b border-[#1c242e] bg-[#08090b]">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#26303c] text-[#5f6d7b]"><ServiceIcon slug={o.category} /></div>
                  <div className="t-label mt-2.5 text-[#4c5966]">{o.media === "video" ? "Видео объекта" : "Фото объекта"}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="t-label text-[#5f6d7b]">{o.year}</div>
                <h3 className="t-lead mt-1.5 text-white">{o.title}</h3>
                <p className="t-body mt-1.5 text-[#94a3b1]">{o.scope}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}