"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, services } from "@/lib/site";
import { Logo } from "@/components/ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1c242e] bg-[#08090b]/92 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--hdr)] max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0" aria-label="ООО «БЛИЦ» — на главную">
          <Logo className="logo-mark" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          <div className="group relative">
            <button type="button" className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-[15px] font-semibold transition ${pathname.startsWith("/services") ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-[#b8c4d0] hover:bg-[#141a21] hover:text-white"}`}>
              Услуги
              <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 rounded-2xl border border-[#26303c] bg-[#0e1116]/97 p-2 shadow-2xl backdrop-blur">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={`block rounded-xl px-3 py-2.5 text-[15px] transition ${active(`/services/${s.slug}`) ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-[#b8c4d0] hover:bg-[#141a21] hover:text-white"}`}>{s.title}</Link>
                ))}
              </div>
            </div>
          </div>
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={`rounded-xl px-3 py-2 text-[15px] font-semibold transition ${active(l.href) ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-[#b8c4d0] hover:bg-[#141a21] hover:text-white"}`}>{l.label}</Link>
          ))}
        </nav>

        <Link href="/contacts" className="hidden rounded-xl bg-[#ff4438] px-5 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227] lg:block">Обсудить проект</Link>

        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#26303c] bg-[#0e1116] text-white transition hover:border-[#4a5866] lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open}>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-[#1c242e] bg-[#08090b] lg:hidden">
            <nav className="max-h-[calc(100dvh-var(--hdr))] overflow-y-auto px-4 py-4">
              <div className="t-label mb-1.5 px-3 text-[#5f6d7b]">Услуги</div>
              <div className="mb-4 grid gap-0.5">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={`rounded-xl px-3 py-2.5 text-base font-semibold transition ${active(`/services/${s.slug}`) ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-white hover:bg-[#141a21]"}`}>{s.title}</Link>
                ))}
              </div>
              <div className="t-label mb-1.5 px-3 text-[#5f6d7b]">Компания</div>
              <div className="mb-4 grid gap-0.5">
                {nav.map((l) => (
                  <Link key={l.href} href={l.href} className={`rounded-xl px-3 py-2.5 text-base font-semibold transition ${active(l.href) ? "bg-[#ff4438]/12 text-[#ff6a5f]" : "text-white hover:bg-[#141a21]"}`}>{l.label}</Link>
                ))}
              </div>
              <Link href="/contacts" className="block rounded-2xl bg-[#ff4438] px-5 py-3.5 text-center text-base font-semibold text-white">Обсудить проект</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}