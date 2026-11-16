import type { Metadata } from "next";
import ObjectsGallery from "@/components/ObjectsGallery";
import { Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Объекты",
  description: "Объекты ООО «БЛИЦ»: пожарная сигнализация, СКС, видеонаблюдение, СКУД и обслуживание.",
};

export default function ObjectsPage() {
  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_68_56/0.13),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Портфолио</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Объекты</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Производственные, коммерческие и социальные объекты. Раздел готов под реальные фото и видео работ.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <ObjectsGallery />
      </section>
    </main>
  );
}