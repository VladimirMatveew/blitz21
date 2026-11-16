"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { company, services, stack, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, Chip, Logo, Reveal } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";
import SignalChain from "@/components/SignalChain";
import WorkFlow from "@/components/WorkFlow";

const accent: Record<ServiceSlug, { text: string; hover: string; rgb: string }> = {
  fire: { text: "text-[#ff6a5f]", hover: "hover:border-[#ff4438] hover:text-[#ff6a5f]", rgb: "255 68 56" },
  scs: { text: "text-[#53c2ff]", hover: "hover:border-[#53c2ff] hover:text-[#53c2ff]", rgb: "83 194 255" },
  video: { text: "text-[#ffb224]", hover: "hover:border-[#ffb224] hover:text-[#ffb224]", rgb: "255 178 36" },
  skud: { text: "text-[#35d07f]", hover: "hover:border-[#35d07f] hover:text-[#35d07f]", rgb: "53 208 127" },
  maintenance: { text: "text-[#b39bff]", hover: "hover:border-[#b39bff] hover:text-[#b39bff]", rgb: "179 155 255" },
};

const pillWrap: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 1.15 } } };
const pillItem: Variants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function HomePage() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const stackIndex = services.length + 1;
  const contactIndex = services.length + 2;
  const total = services.length + 3;
  const labels = ["БЛИЦ", ...services.map((s) => s.title), "Слаботочный стек", "Контакты"];

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.index))),
      { root, threshold: 0.55 }
    );
    screensRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(total - 1, i));
    screensRef.current[clamped]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
  const setRef = (i: number) => (el: HTMLElement | null) => { screensRef.current[i] = el; };

  return (
    <>
      <div ref={containerRef} data-snap-root className="snap-root snap-scroll">
        <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          {labels.map((l, i) => (
            <button key={l} type="button" title={l} aria-label={l} onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${active === i ? "scale-150 bg-white" : "bg-[#3a4653] hover:bg-[#6d7c8b]"}`} />
          ))}
        </div>

        {/* Логотип встречает */}
        <section ref={setRef(0)} data-index={0} className="screen">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_36%,rgb(255_255_255/0.09),transparent_62%),radial-gradient(ellipse_at_82%_92%,rgb(83_194_255/0.06),transparent_55%)]" />
          <div className="grain pointer-events-none absolute inset-0" />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[36%] h-[46vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgb(255 255 255 / 0.22), rgb(214 226 240 / 0.07) 45%, transparent 70%)" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0.5] }}
            transition={{ duration: 2.1, times: [0, 0.35, 1], ease: "easeOut" }}
          />
          <motion.div className="relative" initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.95, ease: "easeOut" }}>
            <Logo className="logo-hero" />
          </motion.div>
          <motion.div className="relative mt-3 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" initial={reduce ? false : { width: 0, opacity: 0 }} animate={{ width: 112, opacity: 1 }} transition={{ duration: 0.55, delay: 1, ease: "easeOut" }} />
          <motion.nav aria-label="Направления работ" className="relative mt-4 flex max-w-3xl flex-wrap justify-center gap-2" variants={pillWrap} initial={reduce ? "show" : "hidden"} animate="show">
            {services.map((s, i) => (
              <motion.button key={s.slug} type="button" variants={pillItem} onClick={() => goTo(i + 1)}
                className={`t-chip rounded-full border border-[#26303c] bg-[#0e1116]/80 px-4 py-2 font-semibold text-[#b8c4d0] backdrop-blur transition ${accent[s.slug].hover} hover:bg-[#141a21]`}>
                {s.title}
              </motion.button>
            ))}
          </motion.nav>
          <motion.div className="relative mt-5 flex flex-wrap justify-center gap-3" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 1.85, ease: "easeOut" }}>
            <Link href="/contacts" className="t-chip group flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">
              Обсудить объект <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/objects" className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Объекты</Link>
          </motion.div>
          <NextHint onClick={() => goTo(1)} />
        </section>

        {/* Направления */}
        {services.map((s, i) => {
          const idx = i + 1;
          const a = accent[s.slug];
          return (
            <section key={s.slug} ref={setRef(idx)} data-index={idx} className="screen">
              <div className="grain pointer-events-none absolute inset-0" />
              <WorkFlow rgb={a.rgb} className="compact-hide pointer-events-none absolute inset-x-0 bottom-[6%] hidden px-6 opacity-80 lg:block" />
              <Reveal className="relative"><ServiceVisual slug={s.slug} className="emblem" /></Reveal>
              <Reveal delay={0.08} className="relative mt-4 tight w-full">
                <h2 className="t-title mx-auto max-w-3xl text-white">{s.title}</h2>
                <p className={`t-lead mx-auto mt-2 max-w-xl ${a.text}`}>{s.lead}</p>
                <p className="t-body mx-auto mt-2 hidden max-w-xl text-[#94a3b1] sm:block">{s.description}</p>
              </Reveal>
              <Reveal delay={0.14} className="relative mt-4 tight flex max-w-3xl flex-wrap justify-center gap-2">
                {s.includes.map((x) => <Chip key={x}>{x}</Chip>)}
              </Reveal>
              <Reveal delay={0.2} className="relative mt-5 tight flex flex-wrap justify-center gap-3">
                <Link href={`/services/${s.slug}`} className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Все работы</Link>
                <Link href="/contacts" className="t-chip rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Обсудить</Link>
              </Reveal>
              <NextHint onClick={() => goTo(idx + 1)} />
            </section>
          );
        })}

        {/* Слаботочный стек */}
        <section ref={setRef(stackIndex)} data-index={stackIndex} className="screen">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgb(83_194_255/0.10),transparent_60%)]" />
          <div className="grain pointer-events-none absolute inset-0" />
          <Reveal className="relative w-full">
            <h2 className="t-title mx-auto max-w-3xl text-white">Слаботочный стек</h2>
            <p className="t-lead mx-auto mt-2 max-w-xl text-[#53c2ff]">Шины, тракты, протоколы и&nbsp;нормативы нашей ежедневной работы</p>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-4 tight w-full max-w-4xl rounded-3xl border border-[#26303c] bg-[#0e1116]/70 px-4 py-3">
            <SignalChain />
          </Reveal>
          <div className="relative mt-3 tight grid w-full max-w-5xl grid-cols-2 gap-2.5 lg:grid-cols-4">
            {stack.map((g, i) => (
              <Reveal key={g.title} delay={0.14 + i * 0.05}>
                <div className="h-full rounded-2xl border border-[#26303c] bg-[#0e1116] p-3.5 text-left">
                  <h3 className="t-label text-[#ff6a5f]">{g.title}</h3>
                  <ul className="mt-2 grid gap-1">
                    {g.items.map((x) => (<li key={x} className="t-body text-[#b8c4d0]">{x}</li>))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.34} className="relative mt-4 tight">
            <button type="button" onClick={() => goTo(contactIndex)} className="t-chip rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Обсудить вашу систему</button>
          </Reveal>
          <NextHint onClick={() => goTo(contactIndex)} />
        </section>

        {/* Финал */}
        <section ref={setRef(contactIndex)} data-index={contactIndex} className="screen">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(255_255_255/0.08),transparent_60%)]" />
          <div className="grain pointer-events-none absolute inset-0" />
          <Reveal className="relative"><Logo className="h-auto w-[clamp(140px,30vmin,280px)]" /></Reveal>
          <Reveal delay={0.08} className="relative mt-3 tight">
            <h2 className="t-h1 mx-auto max-w-2xl text-white">Обсудим ваш объект?</h2>
            <p className="t-body mx-auto mt-3 max-w-lg text-[#94a3b1]">Расскажите о&nbsp;задаче — подготовим решение, состав работ и&nbsp;порядок сдачи.</p>
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

      {/* Мобильная навигация: гарантированно доводит до конца */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-3 lg:hidden">
        <div className="flex items-center gap-1 rounded-full border border-[#26303c] bg-[#0e1116]/95 p-1.5 shadow-2xl backdrop-blur">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Предыдущий экран"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#b8c4d0] transition hover:bg-[#141a21] disabled:opacity-30">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="m12.5 5-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <span className="t-label min-w-[3.5rem] text-center text-[#94a3b1]">{active + 1} / {total}</span>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === total - 1} aria-label="Следующий экран"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#b8c4d0] transition hover:bg-[#141a21] disabled:opacity-30">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="m7.5 5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <Link href="/contacts" className="t-chip ml-1 rounded-full bg-[#ff4438] px-4 py-2 font-semibold text-white">Заявка</Link>
        </div>
      </div>
    </>
  );
}

function NextHint({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Следующий раздел"
      className="absolute bottom-2.5 left-1/2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#26303c] bg-[#0e1116]/80 text-[#94a3b1] backdrop-blur transition hover:border-white hover:text-white lg:flex">
      <svg className="animate-bounce" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
}