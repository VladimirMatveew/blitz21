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
    <main className="flex min-h-[calc(100dvh-var(--hdr))] flex-col bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_68_56/0.13),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Контакты</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Обсудим объект</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Опишите задачу — подготовим техническое решение, состав работ и порядок сдачи.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl flex-1 px-4 py-5 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="grid h-full gap-3 rounded-3xl border border-[#26303c] bg-[#0e1116] p-5 text-center">
              <div>
                <div className="t-label text-[#5f6d7b]">Почта</div>
                <a href={`mailto:${company.email}`} className="t-lead mt-1 block break-all text-white transition hover:text-[#ff6a5f]">{company.email}</a>
              </div>
              <div>
                <div className="t-label text-[#5f6d7b]">Телефон</div>
                <div className="t-lead mt-1 text-[#b8c4d0]">{company.phone}</div>
              </div>
              <div>
                <div className="t-label text-[#5f6d7b]">Адрес</div>
                <div className="t-body mt-1 text-[#b8c4d0]">{company.address}</div>
              </div>
              <div className="rounded-2xl border border-[#1c242e] bg-[#08090b] p-3.5">
                <div className="t-label text-[#5f6d7b]">Формат работы</div>
                <div className="t-body mt-1 text-[#94a3b1]">Выезд, обследование, смета, договор, монтаж, сдача с документацией.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-[#26303c] bg-[#0e1116] p-5 md:p-6">
              <div className="t-label mb-4 text-center text-[#ff6a5f]">Заявка</div>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}