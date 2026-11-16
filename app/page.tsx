"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, Logo, Reveal, ServiceIcon } from "@/components/ui";

const accents: Record<ServiceSlug, { text: string; border: string; glow: string }> = {
  fire: { text: "text-red-500", border: "border-red-600/40", glow: "bg-[radial-gradient(ellipse_at_center,rgb(220_38_38/0.12),transparent_62%)]" },
  scs: { text: "text-sky-400", border: "border-sky-500/40", glow: "bg-[radial-gradient(ellipse_at_center,rgb(56_189_248/0.10),transparent_62%)]" },
  video: { text: "text-amber-400", border: "border-amber-500/40", glow: "bg-[radial-gradient(ellipse_at_center,rgb(251_191_36/0.09),transparent_62%)]" },
  skud: { text: "text-emerald-400", border: "border-emerald-500/40", glow: "bg-[radial-gradient(ellipse_at_center,rgb(52_211_153/0.09),transparent_62%)]" },
  maintenance: { text: "text-neutral-200", border: "border-neutral-600/60", glow: "bg-[radial-gradient(ellipse_at_center,rgb(255_255_255/0.06),transparent_62%)]" },
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const total = services.length + 2;
  const labels = ["БЛИЦ", ...services.map((s) => s.title), "Контакты"];

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { root, threshold: 0.55 }
    );
    screensRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => screensRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  const setRef = (i: number) => (el: HTMLElement | null) => { screensRef.current[i] = el; };

  return (
    <div ref={containerRef} className="relative h-[calc(100dvh-5rem)] snap-y snap-mandatory overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* Точки навигации */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {labels.map((l, i) => (
          <button key={l} type="button" title={l} aria-label={l} onClick={() => goTo(i)} className={`h-2 w-2 rounded-full border transition-all ${active === i ? "scale-125 border-red-500 bg-red-600" : "border-neutral-600 bg-transparent hover:border-neutral-400"}`} />
        ))}
      </div>

      {/* Экран 0: бренд */}
      <section ref={setRef(0)} data-index={0} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(220_38_38/0.10),transparent_60%)]" />
        <Reveal className="relative"><Logo className="h-44 w-auto md:h-64" /></Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="mt-10 font-display text-base uppercase tracking-[0.35em] text-neutral-200 md:text-2xl">Инженерные системы безопасности</div>
          <div className="mx-auto mt-6 h-px w-24 bg-red-600/70" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">Пожарная сигнализация · СКС · Видеонаблюдение · СКУД · Обслуживание</p>
          <p className="mt-3 text-xs text-neutral-500 md:text-sm">От небольших помещений до школ, предприятий и складов</p>
        </Reveal>
        <Reveal delay={0.2} className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contacts" className="group flex items-center gap-2 bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700">Обсудить объект <ArrowIcon className="transition-transform group-hover:translate-x-1" /></Link>
          <Link href="/objects" className="border border-neutral-700 px-8 py-4 text-sm font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white">Объекты</Link>
        </Reveal>
        <NextHint onClick={() => goTo(1)} />
      </section>

      {/* Экраны услуг */}
      {services.map((s, i) => {
        const a = accents[s.slug];
        const idx = i + 1;
        return (
          <section key={s.slug} ref={setRef(idx)} data-index={idx} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-16 text-center">
            <div className={`absolute inset-0 ${a.glow}`} />
            <Reveal className="relative">
              <div className={`mx-auto flex h-16 w-16 items-center justify-center border bg-neutral-900/60 ${a.border} ${a.text}`}>
                <ServiceIcon slug={s.slug} className="h-8 w-8" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative">
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-tight text-white md:text-5xl">{s.title}</h2>
              <p className={`mt-3 font-mono text-xs uppercase tracking-[0.2em] md:text-sm ${a.text}`}>{s.tagline}</p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">{s.description}</p>
            </Reveal>
            <Reveal delay={0.14} className="relative mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
              {s.includes.map((x) => (<span key={x} className="border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">{x}</span>))}
            </Reveal>
            <Reveal delay={0.18} className="relative mt-3 flex max-w-3xl flex-wrap justify-center gap-2">
              {s.objects.map((x) => (<span key={x} className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">{x}</span>))}
            </Reveal>
            <Reveal delay={0.22} className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link href={`/services/${s.slug}`} className="border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white">Подробнее</Link>
              <Link href="/contacts" className="bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">Обсудить объект</Link>
            </Reveal>
            <NextHint onClick={() => goTo(idx + 1)} />
          </section>
        );
      })}

      {/* Финальный экран */}
      <section ref={setRef(total - 1)} data-index={total - 1} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(220_38_38/0.10),transparent_60%)]" />
        <Reveal className="relative"><Logo className="h-24 w-auto" /></Reveal>
        <Reveal delay={0.08} className="relative">
          <h2 className="mt-8 font-display text-2xl font-bold uppercase text-white md:text-4xl">Обсудим ваш объект?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">Расскажите о задаче — подготовим техническое решение, состав работ и порядок сдачи.</p>
        </Reveal>
        <Reveal delay={0.14} className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${company.email}`} className="bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700">{company.email}</a>
          <Link href="/contacts" className="border border-neutral-700 px-8 py-4 text-sm font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white">Оставить заявку</Link>
        </Reveal>
        <Reveal delay={0.18} className="relative mt-8 grid gap-1 text-xs text-neutral-500">
          <span>{company.phone}</span>
          <span>{company.address}</span>
        </Reveal>
        <Reveal delay={0.22} className="relative mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-neutral-400">
          <Link href="/about" className="hover:text-white">О компании</Link>
          <Link href="/objects" className="hover:text-white">Объекты</Link>
          <Link href="/documents" className="hover:text-white">Документы</Link>
        </Reveal>
        <div className="relative mt-10 text-[11px] text-neutral-600">© {new Date().getFullYear()} {company.legal}</div>
      </section>
    </div>
  );
}

function NextHint({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Следующий раздел" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-neutral-600 transition hover:text-white">
      <svg className="animate-bounce" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
}