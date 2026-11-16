"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav, services, version } from "@/lib/site";
import { Logo } from "@/components/ui";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-[#1c242e] bg-[#0e1116]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-center md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <div className="flex justify-center"><Logo className="logo-foot" /></div>
          <p className="t-body mt-3 text-[#94a3b1]">Слаботочные системы: проект, монтаж, пусконаладка и&nbsp;обслуживание.</p>
        </div>
        <div>
          <div className="t-label text-[#ff6a5f]">Услуги</div>
          <ul className="mt-3 grid gap-1.5">
            {services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`} className="t-body rounded-lg px-2 py-1 text-[#94a3b1] transition hover:bg-[#141a21] hover:text-white">{s.title}</Link></li>))}
          </ul>
        </div>
        <div>
          <div className="t-label text-[#ff6a5f]">Компания</div>
          <ul className="mt-3 grid gap-1.5">
            {nav.map((l) => (<li key={l.href}><Link href={l.href} className="t-body rounded-lg px-2 py-1 text-[#94a3b1] transition hover:bg-[#141a21] hover:text-white">{l.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <div className="t-label text-[#ff6a5f]">Контакты</div>
          <ul className="mt-3 grid gap-1.5 text-[#94a3b1]">
            <li><a href={`mailto:${company.email}`} className="t-body break-all text-white transition hover:text-[#ff6a5f]">{company.email}</a></li>
            <li className="t-body">{company.phone}</li>
            <li className="t-label text-[#5f6d7b]">{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1c242e]">
        <div className="t-label mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-4 py-4 text-[#5f6d7b] md:flex-row md:px-6">
          <span>© {new Date().getFullYear()} {company.legal}</span>
          <span>Информация на сайте не является публичной офертой</span>
          <span className="rounded-full border border-[#26303c] px-3 py-1 text-[#7d8b99]">v{version}</span>
        </div>
      </div>
    </footer>
  );
}