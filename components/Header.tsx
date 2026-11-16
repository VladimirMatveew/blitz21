"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, nav, services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, Logo, ServiceIcon } from "@/components/ui";

const tone: Record<ServiceSlug, string> = {
  fire: "text-[#ff6a5f]",
  scs: "text-[#53c2ff]",
  video: "text-[#ffb224]",
  skud: "text-[#35d07f]",
  maintenance: "text-[#b39bff]",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-snap-root]");
    const read = () => {
      if (root) {
        const max = root.scrollHeight - root.clientHeight;
        setProgress(max > 0 ? Math.min(1, root.scrollTop / max) : 0);
      } else {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      }
    };
    const id = requestAnimationFrame(read);
    const target: HTMLElement | Window = root ?? window;
    target.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      cancelAnimationFrame(id);
      target.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [pathname]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
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
                <div className="w-80 rounded-2xl border border-[#26303c] bg-[#0e1116]/97 p-2 shadow-2xl backdrop-blur">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${active(`/services/${s.slug}`) ? "bg-[#ff4438]/12" : "hover:bg-[#141a21]"}`}>
                      <span className={tone[s.slug]}><ServiceIcon slug={s.slug} /></span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold text-white">{s.title}</span>
                        <span className="t-label block text-[#5f6d7b]">{s.short}</span>
                      </span>
                    </Link>
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
        <div className="h-[2px] w-full bg-transparent">
          <div className="h-full bg-gradient-to-r from-[#ff4438] to-[#ff8a7f] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[var(--hdr)] z-40 overflow-y-auto bg-[#08090b]/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="mx-auto flex min-h-full max-w-lg flex-col px-4 py-5">
              <div className="t-label mb-2 px-1 text-[#5f6d7b]">Направления</div>
              <div className="grid gap-1.5">
                {services.map((s, i) => (
                  <motion.div key={s.slug} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i, duration: 0.25 }}>
                    <Link href={`/services/${s.slug}`} className={`flex items-center gap-3 rounded-2xl border p-3.5 transition ${active(`/services/${s.slug}`) ? "border-[#ff4438]/50 bg-[#ff4438]/10" : "border-[#1c242e] bg-[#0e1116] hover:border-[#4a5866]"}`}>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#26303c] ${tone[s.slug]}`}><ServiceIcon slug={s.slug} /></span>
                      <span className="min-w-0 flex-1">
                        <span className="t-lead block text-white">{s.title}</span>
                        <span className="t-label block text-[#5f6d7b]">{s.short}</span>
                      </span>
                      <ArrowIcon className="shrink-0 text-[#5f6d7b]" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="t-label mb-2 mt-5 px-1 text-[#5f6d7b]">Компания</div>
              <div className="grid grid-cols-2 gap-1.5">
                {nav.map((l) => (
                  <Link key={l.href} href={l.href} className={`rounded-2xl border px-4 py-3 text-center text-base font-semibold transition ${active(l.href) ? "border-[#ff4438]/50 bg-[#ff4438]/10 text-[#ff6a5f]" : "border-[#1c242e] bg-[#0e1116] text-white hover:border-[#4a5866]"}`}>{l.label}</Link>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <a href={`mailto:${company.email}`} className="t-body block break-all text-center text-[#94a3b1]">{company.email}</a>
                <Link href="/contacts" className="mt-3 block rounded-2xl bg-[#ff4438] px-5 py-4 text-center text-base font-semibold text-white shadow-lg shadow-red-900/40">Обсудить проект</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}