import Link from "next/link";
import { company, objectScales, processSteps, stack } from "@/lib/site";
import { ArrowIcon, CheckIcon, Chip, Overline, Reveal } from "@/components/ui";

const principles = [
  "Проектные решения по действующим нормам",
  "Договорённости зафиксированы в договоре и смете",
  "Исполнительная документация и акты сдачи",
  "Фотофиксация этапов и прозрачность работ",
  "Гарантия на оборудование и работы",
  "Регламентное обслуживание после сдачи",
];

export default function AboutPage() {
  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.07),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>О компании</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Слаботочные системы полного цикла</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">
              {company.legal}: проект, монтаж, пусконаладка и&nbsp;обслуживание — от&nbsp;небольших помещений до&nbsp;предприятий и&nbsp;социальных учреждений.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="grid gap-3 md:grid-cols-3">
          {objectScales.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-[#26303c] bg-[#0e1116] p-5 text-center">
                <h3 className="t-lead text-white">{o.title}</h3>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">{o.examples.map((e) => <Chip key={e} tone="soft">{e}</Chip>)}</div>
                <p className="t-body mt-3 text-[#94a3b1]">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1c242e] bg-[#0e1116]/60">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <Reveal><h2 className="t-h2 text-center text-white">Как ведём объект</h2></Reveal>
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-[#26303c] bg-[#08090b] p-4 text-center">
                  <div className="mx-auto h-2 w-2 rounded-full bg-[#ff4438]" />
                  <h3 className="t-lead mt-2.5 text-white">{p.title}</h3>
                  <p className="t-body mt-1.5 text-[#94a3b1]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Reveal><h2 className="t-h2 text-white">Принципы работы</h2></Reveal>
            <div className="mt-5 grid gap-2.5">
              {principles.map((p, i) => (
                <Reveal key={p} delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4">
                    <span className="mt-0.5 shrink-0 text-[#35d07f]"><CheckIcon /></span>
                    <span className="t-body text-[#dbe4ec]">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal><h2 className="t-h2 text-white">Технологический стек</h2></Reveal>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {stack.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-[#26303c] bg-[#0e1116] p-4">
                    <h3 className="t-label text-[#ff6a5f]">{g.title}</h3>
                    <ul className="mt-2 grid gap-1">
                      {g.items.map((x) => (<li key={x} className="t-body text-[#b8c4d0]">{x}</li>))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-[#26303c] bg-[#0e1116] p-5 text-center">
            <span className="t-lead text-white">Нужен подрядчик для объекта?</span>
            <Link href="/contacts" className="t-chip flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Связаться <ArrowIcon /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}