import type { Metadata } from "next";
import { company, documents } from "@/lib/site";
import { ArrowIcon, DocIcon, Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Документы",
  description: "Лицензия МЧС и документы ООО «БЛИЦ» для проверки контрагента и заключения договора.",
};

export default function DocumentsPage() {
  return (
    <main className="flex min-h-[calc(100dvh-var(--hdr))] flex-col bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_68_56/0.13),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Документы</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Лицензии и документы</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Работаем прозрачно. Ниже — документы, подтверждающие право на выполнение инженерных работ.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
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
    </main>
  );
}