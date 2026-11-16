"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, services } from "@/lib/site";
import { ArrowIcon, Logo, Reveal } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";

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
    <div ref={containerRef} className="snap-scroll relative h-[calc(100dvh-5rem)] snap-y snap-mandatory overflow-y-auto">
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {labels.map((l, i) => (
          <button key={l} type="button" title={l} aria-label={l} onClick={() => goTo(i)} className={`h-2.5 w-2.5 rounded-full border transition-all ${active === i ? "scale-125 border-red-500 bg-red-600" : "border-neutral-600 bg-transparent hover:border-neutral-400"}`} />
        ))}
      </div>

      {/* Бренд */}
      <section ref={setRef(0)} data-index={0} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-14 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(220_38_38/0.12),transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <Reveal className="relative"><Logo className="h-64 w-auto md:h-96" /></Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="mt-8 font-display text-lg uppercase tracking-[0.3em] text-neutral-200 md:text-3xl">Инженерные системы безопасности</div>
          <div className="mx-auto mt-6 h-px w-28 bg-red-600/70" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-xl">Пожарная сигнализация · СКС · Видеонаблюдение · СКУД · Обслуживание</p>
          <p className="mt-3 text-sm text-neutral-500 md:text-base">От небольших помещений до школ, предприятий и складов</p>
        </Reveal>
        <Reveal delay={0.2} className="relative mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contacts" className="group flex items-center gap-2 bg-red-600 px-9 py-4 text-base font-semibold text-white transition hover:bg-red-700 md:text-lg">Обсудить объект <ArrowIcon className="transition-transform group-hover:translate-x-1" /></Link>
          <Link href="/objects" className="border border-neutral-700 px-9 py-4 text-base font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white md:text-lg">Объекты</Link>
        </Reveal>
        <NextHint onClick={() => goTo(1)} />
      </section>

      {/* Системы */}
      {services.map((s, i) => {
        const idx = i + 1;
        return (
          <section key={s.slug} ref={setRef(idx)} data-index={idx} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-14 text-center">
            <div className="grain pointer-events-none absolute inset-0" />
            <Reveal className="relative">
              <ServiceVisual slug={s.slug} className="h-[210px] w-[210px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[340px] lg:w-[340px]" />
            </Reveal>
            <Reveal delay={0.08} className="relative">
              <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{s.title}</h2>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-neutral-400 md:text-lg">{s.tagline}</p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-xl">{s.description}</p>
            </Reveal>
            <Reveal delay={0.14} className="relative mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
              {s.includes.map((x) => (<span key={x} className="border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-sm text-neutral-300 md:text-base">{x}</span>))}
            </Reveal>
            <Reveal delay={0.18} className="relative mt-3 flex max-w-4xl flex-wrap justify-center gap-2">
              {s.objects.map((x) => (<span key={x} className="rounded-full border border-neutral-800 px-4 py-1.5 text-sm text-neutral-500 md:text-base">{x}</span>))}
            </Reveal>
            <Reveal delay={0.22} className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link href={`/services/${s.slug}`} className="border border-neutral-700 px-8 py-4 text-base font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white">Подробнее</Link>
              <Link href="/contacts" className="bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700">Обсудить объект</Link>
            </Reveal>
            <NextHint onClick={() => goTo(idx + 1)} />
          </section>
        );
      })}

      {/* Финал */}
      <section ref={setRef(total - 1)} data-index={total - 1} className="relative flex min-h-full snap-start snap-always flex-col items-center justify-center px-6 py-14 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(220_38_38/0.12),transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <Reveal className="relative"><Logo className="h-32 w-auto md:h-44" /></Reveal>
        <Reveal delay={0.08} className="relative">
          <h2 className="mt-8 font-display text-3xl font-bold uppercase text-white md:text-5xl">Обсудим ваш объект?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-xl">Расскажите о задаче — подготовим техническое решение, состав работ и порядок сдачи.</p>
        </Reveal>
        <Reveal delay={0.14} className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${company.email}`} className="bg-red-600 px-9 py-4 text-base font-semibold text-white transition hover:bg-red-700 md:text-lg">{company.email}</a>
          <Link href="/contacts" className="border border-neutral-700 px-9 py-4 text-base font-semibold text-neutral-300 transition hover:border-neutral-500 hover:text-white md:text-lg">Оставить заявку</Link>
        </Reveal>
        <Reveal delay={0.18} className="relative mt-8 grid gap-1 text-sm text-neutral-500 md:text-base">
          <span>{company.phone}</span>
          <span>{company.address}</span>
        </Reveal>
        <Reveal delay={0.22} className="relative mt-8 flex flex-wrap justify-center gap-7 text-sm uppercase tracking-wider text-neutral-400 md:text-base">
          <Link href="/about" className="hover:text-white">О компании</Link>
          <Link href="/objects" className="hover:text-white">Объекты</Link>
          <Link href="/documents" className="hover:text-white">Документы</Link>
        </Reveal>
        <div className="relative mt-10 text-xs text-neutral-600 md:text-sm">© {new Date().getFullYear()} {company.legal}</div>
      </section>
    </div>
  );
}

function NextHint({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Следующий раздел" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-neutral-600 transition hover:text-white">
      <svg className="animate-bounce" width="26" height="26" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
}