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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0" aria-label="ООО «БЛИЦ» — на главную">
          <Logo className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button type="button" className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium ${pathname.startsWith("/services") ? "text-red-500" : "text-neutral-400 hover:text-white"}`}>
              Услуги
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 translate-y-1 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="w-72 border border-neutral-800 bg-neutral-950 p-2 shadow-2xl">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={`block px-3 py-2.5 text-sm ${active(`/services/${s.slug}`) ? "bg-red-600/10 text-red-500" : "text-neutral-400 hover:bg-neutral-900 hover:text-white"}`}>{s.title}</Link>
                ))}
              </div>
            </div>
          </div>
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 text-sm font-medium ${active(l.href) ? "text-red-500" : "text-neutral-400 hover:text-white"}`}>{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contacts" className="bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700">Обсудить проект</Link>
        </div>

        <button type="button" className="flex h-10 w-10 items-center justify-center border border-neutral-800 text-white lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open}>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-neutral-800 bg-neutral-950 lg:hidden">
            <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Услуги</div>
              <div className="mb-6 grid gap-1">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={`px-3 py-3 text-sm font-medium ${active(`/services/${s.slug}`) ? "bg-red-600/10 text-red-500" : "text-white hover:bg-neutral-900"}`}>{s.title}</Link>
                ))}
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Компания</div>
              <div className="mb-6 grid gap-1">
                {nav.map((l) => (
                  <Link key={l.href} href={l.href} className={`px-3 py-3 text-sm font-medium ${active(l.href) ? "bg-red-600/10 text-red-500" : "text-white hover:bg-neutral-900"}`}>{l.label}</Link>
                ))}
              </div>
              <Link href="/contacts" className="block bg-red-600 px-5 py-3.5 text-center text-sm font-semibold text-white">Обсудить проект</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}