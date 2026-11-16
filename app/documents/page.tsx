import type { Metadata } from "next";
import { company, documents, services } from "@/lib/site";
import { ArrowIcon, Chip, DocIcon, Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Документы",
  description: "Лицензия МЧС и документы ООО «БЛИЦ» для проверки контрагента и заключения договора.",
};

const allStandards = Array.from(new Set(services.flatMap((s) => s.standards)));

export default function DocumentsPage() {
  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.07),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Документы</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Лицензии и документы</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Работаем прозрачно: ниже — документы, подтверждающие право на&nbsp;выполнение инженерных работ.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <div className="grid gap-3 md:grid-cols-2">
          {documents.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-[#26303c] bg-[#0e1116] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#26303c] text-[#ff6a5f]"><DocIcon /></div>
                <h2 className="t-lead mt-4 text-white">{d.title}</h2>
                <p className="t-label mt-1.5 break-words text-[#ff6a5f]">{d.number}</p>
                <p className="t-body mt-3 flex-1 text-[#94a3b1]">{d.text}</p>
                <div className="mt-5">
                  {d.file ? (
                    <a href={d.file} target="_blank" rel="noopener noreferrer" className="t-chip flex items-center justify-center gap-2 rounded-2xl border border-[#26303c] py-3 font-semibold text-[#dbe4ec] transition hover:border-[#4a5866] hover:bg-[#141a21]">Скачать PDF <ArrowIcon /></a>
                  ) : (
                    <a href={`mailto:${company.email}?subject=${encodeURIComponent(d.title)}`} className="t-chip flex items-center justify-center gap-2 rounded-2xl bg-[#ff4438] py-3 font-semibold text-white transition hover:bg-[#e13227]">Запросить <ArrowIcon /></a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1c242e] bg-[#0e1116]/60">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center md:px-6">
          <Reveal>
            <h2 className="t-h2 text-white">Нормативная база</h2>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Проектируем, монтируем и&nbsp;принимаем работы по&nbsp;действующим сводам правил и&nbsp;стандартам.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {allStandards.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-[#26303c] bg-[#0e1116] p-6 text-center">
            <h2 className="t-h2 text-white">Пакет для закупки или договора</h2>
            <p className="t-body mx-auto mt-2 max-w-lg text-[#94a3b1]">Подготовим комплект для проверки контрагента и&nbsp;участия в&nbsp;закупочных процедурах.</p>
            <a href={`mailto:${company.email}?subject=${encodeURIComponent("Пакет документов для закупки")}`} className="t-chip mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Запросить пакет <ArrowIcon /></a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}