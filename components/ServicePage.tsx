import Link from "next/link";
import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, CheckIcon, Chip, Reveal, ServiceIcon } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";
import SignalChain from "@/components/SignalChain";
import { Accordion, SectionNav } from "@/components/Interactive";

const sections = [
  { id: "stages", label: "Этапы работ" },
  { id: "delivery", label: "Что передаём" },
  { id: "equipment", label: "Оборудование" },
  { id: "checks", label: "Проверки" },
  { id: "standards", label: "Нормативы" },
  { id: "faq", label: "Вопросы" },
];

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.07),transparent_62%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="hero-inner relative mx-auto max-w-4xl text-center">
          <Reveal><ServiceVisual slug={service.slug} className="emblem-sm mx-auto" /></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-3 text-white">{service.title}</h1>
            <p className="t-lead mx-auto mt-2 max-w-2xl text-[#ff6a5f]">{service.lead}</p>
            <p className="t-body mx-auto mt-2 max-w-2xl text-[#94a3b1]">{service.description}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              <Link href="/contacts" className="t-chip flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Обсудить проект <ArrowIcon /></Link>
              <Link href="/documents" className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Документы</Link>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {service.objects.map((o) => <Chip key={o} tone="soft">{o}</Chip>)}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionNav items={sections} />

      {service.slug === "fire" && (
        <section className="border-b border-[#1c242e] bg-[#0e1116]/60">
          <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
            <Reveal>
              <div className="rounded-3xl border border-[#26303c] bg-[#08090b] px-4 py-4">
                <div className="t-label mb-3 text-center text-[#ff6a5f]">Тракт системы</div>
                <SignalChain />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section id="stages" className="anchor mx-auto max-w-6xl px-4 py-10 md:px-6">
        <Reveal><h2 className="t-h2 text-center text-white">Этапы работ</h2></Reveal>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {service.stages.map((st, i) => (
            <Reveal key={st.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-[#26303c] bg-[#0e1116] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ff4438]/12 text-[#ff6a5f]">
                    <span className="t-label">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <h3 className="t-lead text-white">{st.title}</h3>
                </div>
                <ul className="mt-4 grid gap-2.5">
                  {st.items.map((x) => (
                    <li key={x} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4438]" />
                      <span className="t-body text-[#b8c4d0]">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="delivery" className="anchor border-y border-[#1c242e] bg-[#0e1116]/60">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
          <Reveal><h2 className="t-h2 text-center text-white">Что передаём заказчику</h2></Reveal>
          <div className="mt-6 grid gap-2.5">
            {service.deliverables.map((d, i) => (
              <Reveal key={d} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-[#26303c] bg-[#08090b] p-4">
                  <span className="mt-0.5 shrink-0 text-[#35d07f]"><CheckIcon /></span>
                  <span className="t-body text-[#dbe4ec]">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="anchor mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Reveal><h2 className="t-h2 text-white">Оборудование и решения</h2></Reveal>
            <div className="mt-5 grid gap-2.5">
              {service.equipment.map((e, i) => (
                <Reveal key={e} delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4">
                    <span className="mt-0.5 shrink-0 text-[#ff6a5f]"><ServiceIcon slug={service.slug} /></span>
                    <span className="t-body text-[#b8c4d0]">{e}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div id="checks" className="anchor">
            <Reveal><h2 className="t-h2 text-white">Измерения и проверки при ПНР</h2></Reveal>
            <div className="mt-5 grid gap-2.5">
              {service.checks.map((c, i) => (
                <Reveal key={c} delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4">
                    <span className="mt-0.5 shrink-0 text-[#53c2ff]"><CheckIcon /></span>
                    <span className="t-body text-[#b8c4d0]">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="standards" className="anchor border-y border-[#1c242e] bg-[#0e1116]/60">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center md:px-6">
          <Reveal>
            <h2 className="t-h2 text-white">Нормативная база</h2>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Проектируем, монтируем и&nbsp;принимаем работы по&nbsp;действующим сводам правил и&nbsp;стандартам.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {service.standards.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="anchor mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Reveal><h2 className="t-h2 text-center text-white">Частые вопросы</h2></Reveal>
        <div className="mt-6"><Accordion items={service.faq} /></div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-[#ff4438]/35 bg-gradient-to-br from-[#ff4438]/12 via-[#0e1116] to-[#0e1116] p-6 text-center md:p-8">
            <h2 className="t-h2 text-white">Нужен расчёт по&nbsp;вашему объекту?</h2>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Опишите площадку и&nbsp;задачи — подготовим состав работ, спецификацию и&nbsp;порядок сдачи.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/contacts" className="t-chip rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Оставить заявку</Link>
              <Link href="/objects" className="t-chip rounded-2xl border border-[#26303c] px-6 py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Смотреть объекты</Link>
            </div>
          </div>
        </Reveal>
        <div className="mt-8">
          <Reveal><h2 className="t-h2 text-center text-white">Другие направления</h2></Reveal>
          <div className="mt-5 grid gap-2.5 md:grid-cols-2">
            {others.map((s) => (
              <Reveal key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4 transition hover:border-[#ff4438]/50 hover:bg-[#141a21]">
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 text-[#ff6a5f]"><ServiceIcon slug={s.slug} /></span>
                    <span className="t-body font-semibold text-white">{s.title}</span>
                  </span>
                  <ArrowIcon className="shrink-0 text-[#5f6d7b] transition group-hover:translate-x-1 group-hover:text-[#ff6a5f]" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}