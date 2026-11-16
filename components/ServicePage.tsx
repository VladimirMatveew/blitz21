import Link from "next/link";
import { notFound } from "next/navigation";
import { processSteps, services, type ServiceSlug } from "@/lib/site";
import { ArrowIcon, CheckIcon, Reveal, SectionHead, ServiceIcon } from "@/components/ui";
import ServiceVisual from "@/components/ServiceVisual";

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(220_38_38/0.10),transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <Reveal><ServiceVisual slug={service.slug} className="mx-auto h-[200px] w-[200px] md:h-[280px] md:w-[280px]" /></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display text-4xl font-bold uppercase leading-tight md:text-6xl">{service.title}</h1>
            <p className="mt-4 font-mono text-base uppercase tracking-wider text-neutral-400 md:text-lg">{service.tagline}</p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-xl">{service.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contacts" className="flex items-center gap-2 bg-red-600 px-8 py-4 text-base font-semibold text-white hover:bg-red-700">Обсудить проект <ArrowIcon /></Link>
              <Link href="/documents" className="border border-neutral-700 px-8 py-4 text-base font-semibold hover:border-neutral-500">Документы</Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {service.objects.map((o) => (<span key={o} className="rounded-full border border-neutral-800 px-4 py-1.5 text-sm text-neutral-400 md:text-base">{o}</span>))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead title="Состав работ" />
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {service.scope.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="flex h-full items-start gap-4 border border-neutral-800 bg-neutral-900/40 p-6">
                <span className="mt-0.5 text-red-600"><CheckIcon /></span>
                <span className="text-base leading-relaxed text-neutral-200">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <SectionHead title="Результат для заказчика" />
          <div className="mt-10 grid gap-4">
            {service.result.map((r) => (
              <Reveal key={r}>
                <div className="flex items-center justify-center gap-3 border border-neutral-800 bg-neutral-950 p-6">
                  <span className="text-red-600"><CheckIcon /></span>
                  <span className="text-base text-neutral-300">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead title="Этапы" />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full border border-neutral-800 bg-neutral-900/40 p-6 text-center">
                <div className="mx-auto h-2 w-2 rounded-full bg-red-600" />
                <h3 className="mt-4 font-display text-base font-bold uppercase">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHead title="Другие направления" />
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {others.map((s) => (
            <Reveal key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group flex items-center justify-between border border-neutral-800 bg-neutral-900/40 p-6 hover:border-red-600/50">
                <div className="flex items-center gap-4">
                  <span className="text-red-600"><ServiceIcon slug={s.slug} /></span>
                  <span className="text-base font-semibold">{s.title}</span>
                </div>
                <ArrowIcon className="text-neutral-500 group-hover:text-red-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}