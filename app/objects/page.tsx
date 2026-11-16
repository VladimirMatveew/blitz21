import type { Metadata } from "next";
import ObjectsGallery from "@/components/ObjectsGallery";
import { Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Объекты",
  description: "Объекты ООО «БЛИЦ»: пожарная сигнализация, СКС, видеонаблюдение, СКУД и обслуживание.",
};

export default function ObjectsPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal><Overline>Портфолио</Overline></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">Объекты</h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-400">Производственные, коммерческие и социальные объекты. Раздел готов под реальные фото и видео работ.</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ObjectsGallery />
      </section>
    </main>
  );
}