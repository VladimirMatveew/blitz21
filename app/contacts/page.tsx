import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { company, services } from "@/lib/site";
import { ArrowIcon, Overline, Reveal, ServiceIcon } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с ООО «БЛИЦ»: заявки на проектирование, монтаж и обслуживание слаботочных систем.",
};

export default function ContactsPage() {
  return (
    <main className="bg-[#08090b]">
      <section className="relative overflow-hidden border-b border-[#1c242e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.07),transparent_62%)]" />
        <div className="hero-inner relative mx-auto max-w-3xl text-center">
          <Reveal><Overline>Контакты</Overline></Reveal>
          <Reveal delay={0.06}>
            <h1 className="t-h1 mt-2 text-white">Обсудим объект</h1>
            <p className="t-body mx-auto mt-2 max-w-xl text-[#94a3b1]">Опишите задачу — подготовим техническое решение, состав работ и&nbsp;порядок сдачи.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6 md:px-6">
        <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr]">
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
                <div className="t-body mt-1 text-[#94a3b1]">Выезд, обследование, смета, договор, монтаж, сдача с&nbsp;документацией.</div>
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

        <Reveal delay={0.16}>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-3 rounded-2xl border border-[#26303c] bg-[#0e1116] p-4 transition hover:border-[#ff4438]/50 hover:bg-[#141a21]">
                <span className="shrink-0 text-[#ff6a5f]"><ServiceIcon slug={s.slug} /></span>
                <span className="t-label text-[#b8c4d0] group-hover:text-white">{s.title}</span>
                <ArrowIcon className="ml-auto shrink-0 text-[#5f6d7b] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}