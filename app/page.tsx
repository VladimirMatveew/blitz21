"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, Chip, Logo, Reveal } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";

const accent: Record<ServiceSlug, string> = {
  fire: "text-[#ff6a5f]",
  scs: "text-[#53c2ff]",
  video: "text-[#ffb224]",
  skud: "text-[#35d07f]",
  maintenance: "text-[#b39bff]",
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
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.index))),
      { root, threshold: 0.5 }
    );
    screensRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => screensRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  const setRef = (i: number) => (el: HTMLElement | null) => { screensRef.current[i] = el; };

  return (
    <div ref={containerRef} className="snap-scroll relative h-[calc(100dvh-var(--hdr))] snap-y snap-proximity overflow-y-auto overflow-x-hidden lg:snap-mandatory">
      <div className="fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2.5 md:right-4">
        {labels.map((l, i) => (
          <button key={l} type="button" title={l} aria-label={l} onClick={() => goTo(i)}
            className={`h-1.5 w-1.5 rounded-full transition-all md:h-2.5 md:w-2.5 ${active === i ? "scale-150 bg-[#ff4438]" : "bg-[#3a4653] hover:bg-[#6d7c8b]"}`} />
        ))}
      </div>

      {/* Бренд — логотип главный */}
      <section ref={setRef(0)} data-index={0} className="screen relative flex snap-start flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgb(255_68_56/0.16),transparent_60%),radial-gradient(ellipse_at_80%_90%,rgb(83_194_255/0.08),transparent_55%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <Reveal className="relative"><Logo className="logo-hero" /></Reveal>
        <Reveal delay={0.12} className="relative mt-2 tight">
          <h1 className="t-hero mx-auto max-w-2xl text-white">Инженерные системы безопасности</h1>
          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#ff4438]" />
          <p className="t-label mt-3 text-[#94a3b1]">Пожарная сигнализация · СКС · Видеонаблюдение · СКУД · Обслуживание</p>
        </Reveal>
        <Reveal delay={0.2} className="relative mt-5 tight flex flex-wrap justify-center gap-3">
          <Link href="/contacts" className="t-chip group flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">
            Обсудить объект <ArrowIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/objects" className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Объекты</Link>
        </Reveal>
        <NextHint onClick={() => goTo(1)} />
      </section>

      {/* Системы */}
      {services.map((s, i) => {
        const idx = i + 1;
        return (
          <section key={s.slug} ref={setRef(idx)} data-index={idx} className="screen relative flex snap-start flex-col items-center justify-center text-center">
            <div className="grain pointer-events-none absolute inset-0" />
            <Reveal className="relative"><ServiceVisual slug={s.slug} className="emblem" /></Reveal>
            <Reveal delay={0.08} className="relative mt-4 tight w-full">
              <h2 className="t-title mx-auto max-w-3xl text-white">{s.title}</h2>
              <p className={`t-lead mx-auto mt-2 max-w-2xl ${accent[s.slug]}`}>{s.lead}</p>
              <p className="t-body compact-hide mx-auto mt-2 max-w-2xl text-[#94a3b1]">{s.description}</p>
            </Reveal>
            <Reveal delay={0.14} className="relative mt-4 tight flex max-w-3xl flex-wrap justify-center gap-2">
              {s.includes.map((x) => <Chip key={x}>{x}</Chip>)}
            </Reveal>
            <Reveal delay={0.18} className="compact-hide relative mt-2.5 w-full">
              <p className="t-label mx-auto max-w-3xl rounded-2xl border border-[#1c242e] bg-[#0e1116] px-4 py-2 text-[#7d8b99]">
                Объекты: {s.objects.join(" · ")}
              </p>
            </Reveal>
            <Reveal delay={0.22} className="relative mt-5 tight flex flex-wrap justify-center gap-3">
              <Link href={`/services/${s.slug}`} className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Подробнее</Link>
              <Link href="/contacts" className="t-chip rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Обсудить объект</Link>
            </Reveal>
            <NextHint onClick={() => goTo(idx + 1)} />
          </section>
        );
      })}

      {/* Финал */}
      <section ref={setRef(total - 1)} data-index={total - 1} className="screen relative flex snap-start flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(255_68_56/0.16),transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <Reveal className="relative"><Logo className="h-auto w-[clamp(150px,32vmin,300px)]" /></Reveal>
        <Reveal delay={0.08} className="relative mt-3 tight">
          <h2 className="t-h1 mx-auto max-w-2xl text-white">Обсудим ваш объект?</h2>
          <p className="t-body mx-auto mt-3 max-w-xl text-[#94a3b1]">Расскажите о задаче — подготовим техническое решение, состав работ и порядок сдачи.</p>
        </Reveal>
        <Reveal delay={0.14} className="relative mt-5 tight flex flex-wrap justify-center gap-3">
          <a href={`mailto:${company.email}`} className="t-chip rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">{company.email}</a>
          <Link href="/contacts" className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Оставить заявку</Link>
        </Reveal>
        <Reveal delay={0.18} className="compact-hide relative mt-4 grid gap-1">
          <span className="t-body text-[#94a3b1]">{company.phone}</span>
          <span className="t-label text-[#5f6d7b]">{company.address}</span>
        </Reveal>
        <Reveal delay={0.22} className="relative mt-4 tight flex flex-wrap justify-center gap-4">
          {[["/about", "О компании"], ["/objects", "Объекты"], ["/documents", "Документы"]].map(([h, l]) => (
            <Link key={h} href={h} className="t-label rounded-full px-3 py-1.5 text-[#94a3b1] transition hover:bg-[#141a21] hover:text-white">{l}</Link>
          ))}
        </Reveal>
        <div className="t-label relative mt-4 text-[#4c5966]">© {new Date().getFullYear()} {company.legal}</div>
      </section>
    </div>
  );
}

function NextHint({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Следующий раздел"
      className="absolute bottom-2.5 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#26303c] bg-[#0e1116]/80 text-[#94a3b1] backdrop-blur transition hover:border-[#ff4438] hover:text-white">
      <svg className="animate-bounce" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
}