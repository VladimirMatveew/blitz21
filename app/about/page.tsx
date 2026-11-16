import Link from "next/link";
import { company, objectScales } from "@/lib/site";
import { ArrowIcon, CheckIcon, Overline, Reveal, SectionHead } from "@/components/ui";

const principles = [
  "Проектные решения по действующим нормам",
  "Фиксация договорённостей в договоре и смете",
  "Исполнительная документация и акты сдачи",
  "Фотофиксация этапов и прозрачность работ",
  "Гарантия на оборудование и работы",
  "Регламентное обслуживание после сдачи",
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal><Overline>О компании</Overline></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">Инженерная компания полного цикла</h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-400">
              {company.legal} проектирует, монтирует и обслуживает системы пожарной и охранной безопасности. Работаем с объектами любого масштаба — от небольших помещений до предприятий и социальных учреждений.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead title="Для кого работаем" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {objectScales.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="h-full border border-neutral-800 bg-neutral-900/40 p-8 text-center">
                <h3 className="font-display text-base font-bold uppercase">{o.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHead title="Принципы работы" />
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div className="flex items-start gap-4 border border-neutral-800 bg-neutral-950 p-5">
                  <span className="mt-0.5 text-red-600"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-6 border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <h2 className="font-display text-xl font-bold uppercase md:text-2xl">Нужен подрядчик для объекта?</h2>
            <Link href="/contacts" className="flex items-center gap-2 bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700">Связаться <ArrowIcon /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}