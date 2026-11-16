import type { Metadata } from "next";
import { company, documents } from "@/lib/site";
import { ArrowIcon, DocIcon, Overline, Reveal, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Документы",
  description: "Лицензия МЧС и документы ООО «БЛИЦ» для проверки контрагента и заключения договора.",
};

export default function DocumentsPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal><Overline>Документы</Overline></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">Лицензии и документы</h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-400">Работаем прозрачно. Ниже — ключевые документы, подтверждающие право на выполнение инженерных работ.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-neutral-800 bg-neutral-900/40 p-8 text-center">
                <div className="mx-auto text-red-600"><DocIcon /></div>
                <h2 className="mt-6 font-display text-lg font-bold uppercase">{d.title}</h2>
                <p className="mt-2 font-mono text-xs text-red-500">{d.number}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-400">{d.text}</p>
                <div className="mt-8">
                  {d.file ? (
                    <a href={d.file} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-neutral-700 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:border-white hover:text-white">Скачать PDF</a>
                  ) : (
                    <a href={`mailto:${company.email}?subject=${encodeURIComponent(d.title)}`} className="flex items-center justify-center gap-2 bg-red-600 py-3 text-xs font-semibold text-white hover:bg-red-700">Запросить <ArrowIcon /></a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}