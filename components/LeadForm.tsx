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
      // При первой отправке FormSubmit пришлёт письмо активации на master@blitz21.ru —
      // нужно один раз перейти по ссылке из него, после этого заявки начнут приходить.
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
      <div className="flex min-h-[360px] flex-col items-center justify-center border border-emerald-600/40 bg-emerald-600/5 p-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center border border-emerald-600/50 text-emerald-400">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-xl font-bold uppercase text-white">Заявка отправлена</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-neutral-400">
          Мы получили описание задачи и свяжемся с вами для уточнения деталей.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 border border-neutral-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 transition hover:border-red-600 hover:text-red-500"
        >
          Отправить ещё
        </button>
      </div>
    );
  }

  const input =
    "w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-base text-neutral-100 placeholder:text-neutral-600 outline-none transition focus:border-red-600";
  const label = "font-mono text-xs uppercase tracking-[0.18em] text-neutral-500";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 text-left">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={label}>Имя *</span>
          <input name="name" required placeholder="Как к вам обращаться" className={input} />
        </label>
        <label className="grid gap-2">
          <span className={label}>Организация</span>
          <input name="company" placeholder="Компания или учреждение" className={input} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className={label}>Телефон или email *</span>
        <input name="contact" required placeholder="Как с вами связаться" className={input} />
      </label>

      <label className="grid gap-2">
        <span className={label}>Задача</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Тип объекта, площадь, какие системы нужны, сроки, особые требования..."
          className={`${input} resize-none`}
        />
      </label>

      {status === "error" && (
        <div className="border border-red-600/40 bg-red-600/10 px-4 py-3 text-base text-neutral-100">
          Не удалось отправить. Напишите напрямую:{" "}
          <a href={`mailto:${company.email}`} className="text-red-500 underline">
            {company.email}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center justify-center gap-2 bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем..." : "Отправить заявку"}
        {status !== "sending" && <ArrowIcon />}
      </button>

      <p className="text-sm leading-relaxed text-neutral-500">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}