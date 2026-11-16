import Link from "next/link";
import { notFound } from "next/navigation";
import { processSteps, services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, CheckIcon, Chip, Reveal, SectionHead, ServiceIcon } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";
import SignalChain from "@/components/SignalChain";

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_68_56/0.12),transparent_62%)]" />
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
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {service.standards.map((x) => (
                <span key={x} className="t-label rounded-full border border-[#1c242e] bg-[#08090b] px-3 py-1 text-[#7d8b99]">{x}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <SectionHead title="Состав работ" />
        <div className="mt-6 grid gap-2.5 md:grid-cols-2">
          {service.scope.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4">
                <span className="mt-0.5 shrink-0 text-[#ff6a5f]"><CheckIcon /></span>
                <span className="t-body text-[#dbe4ec]">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1c242e] bg-[#0e1116]/60">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center md:px-6">
          <SectionHead title="Результат для заказчика" />
          <div className="mt-6 grid gap-2.5">
            {service.result.map((r) => (
              <Reveal key={r}>
                <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#26303c] bg-[#08090b] p-4">
                  <span className="shrink-0 text-[#35d07f]"><CheckIcon /></span>
                  <span className="t-body text-[#dbe4ec]">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <SectionHead title="Этапы" />
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#26303c] bg-[#0e1116] p-4 text-center">
                <div className="mx-auto h-2 w-2 rounded-full bg-[#ff4438]" />
                <h3 className="t-lead mt-2.5 text-white">{p.title}</h3>
                <p className="t-body mt-1.5 text-[#94a3b1]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <SectionHead title="Другие направления" />
        <div className="mt-6 grid gap-2.5 md:grid-cols-2">
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
      </section>
    </main>
  );
}