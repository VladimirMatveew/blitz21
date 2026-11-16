"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "@/components/ui";

type Status = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;
    setStatus("sending");
    try {
      // Первая отправка требует активации: FormSubmit пришлёт письмо на master@blitz21.ru.
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          contact: data.get("contact"),
          message: data.get("message"),
          _subject: "Заявка с сайта blitz21.ru",
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json();
      if (!res.ok || json.success === false) throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-[#35d07f]/40 bg-[#35d07f]/6 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#35d07f]/50 text-[#35d07f]"><CheckIcon className="h-7 w-7" /></span>
        <h3 className="t-lead mt-4 text-white">Заявка отправлена</h3>
        <p className="t-body mt-2 max-w-sm text-[#94a3b1]">Мы получили описание задачи и свяжемся с вами для уточнения деталей.</p>
        <button type="button" onClick={() => setStatus("idle")} className="t-chip mt-5 rounded-2xl border border-[#26303c] px-5 py-2.5 font-semibold text-[#dbe4ec] transition hover:border-[#ff4438] hover:text-[#ff6a5f]">Отправить ещё</button>
      </div>
    );
  }

  const input = "t-body w-full rounded-2xl border border-[#26303c] bg-[#08090b] px-4 py-3 text-white placeholder:text-[#5f6d7b] outline-none transition focus:border-[#ff4438]";
  const label = "t-label text-[#5f6d7b]";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 text-left">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5"><span className={label}>Имя *</span><input name="name" required placeholder="Как к вам обращаться" className={input} /></label>
        <label className="grid gap-1.5"><span className={label}>Организация</span><input name="company" placeholder="Компания или учреждение" className={input} /></label>
      </div>
      <label className="grid gap-1.5"><span className={label}>Телефон или email *</span><input name="contact" required placeholder="Как с вами связаться" className={input} /></label>
      <label className="grid gap-1.5"><span className={label}>Задача</span><textarea name="message" rows={3} placeholder="Тип объекта, площадь, какие системы нужны, сроки..." className={`${input} resize-none`} /></label>

      {status === "error" && (
        <div className="t-body rounded-2xl border border-[#ff4438]/40 bg-[#ff4438]/10 px-4 py-2.5 text-white">
          Не удалось отправить. Напишите напрямую: <a href={`mailto:${company.email}`} className="break-all text-[#ff6a5f] underline">{company.email}</a>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="t-chip flex items-center justify-center gap-2 rounded-2xl bg-[#ff4438] px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-[#e13227] disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Отправляем..." : "Отправить заявку"}
        {status !== "sending" && <ArrowIcon />}
      </button>
      <p className="t-label text-[#4c5966]">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
    </form>
  );
}