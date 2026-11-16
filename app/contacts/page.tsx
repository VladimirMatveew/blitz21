import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { company } from "@/lib/site";
import { Overline, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с ООО «БЛИЦ»: заявки на проектирование, монтаж и обслуживание инженерных систем безопасности.",
};

export default function ContactsPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal><Overline>Контакты</Overline></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight md:text-5xl">Обсудим объект</h1>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-400">Опишите задачу — подготовим техническое решение, состав работ и порядок сдачи.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="h-full border border-neutral-800 bg-neutral-900/40 p-8 text-center">
              <div className="grid gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">Почта</div>
                  <a href={`mailto:${company.email}`} className="mt-2 block text-lg font-semibold text-white hover:text-red-500">{company.email}</a>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">Телефон</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-400">{company.phone}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">Адрес</div>
                  <div className="mt-2 text-sm text-neutral-300">{company.address}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
              <div className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-red-600">Заявка</div>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}