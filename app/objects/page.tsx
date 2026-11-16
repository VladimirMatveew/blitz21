import type { Metadata } from "next";
import Link from "next/link";
import ObjectsGallery from "@/components/ObjectsGallery";
import { ArrowIcon, Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Объекты",
  description: "Объекты ООО «БЛИЦ»: пожарная сигнализация, СКС, видеонаблюдение, СКУД и обслуживание.",
};

export default function ObjectsPage() {
  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.07),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Портфолио</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Объекты</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Производственные, коммерческие и&nbsp;социальные объекты. Раздел готов под реальные фото и&nbsp;видео работ.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <ObjectsGallery />
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-[#26303c] bg-[#0e1116] p-5 text-center">
            <span className="t-lead text-white">Похожий объект? Обсудим решение</span>
            <Link href="/contacts" className="t-chip flex items-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227]">Оставить заявку <ArrowIcon /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}