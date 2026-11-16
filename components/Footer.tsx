"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav, services } from "@/lib/site";
import { Logo } from "@/components/ui";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-center md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex justify-center"><Logo className="h-16 w-auto" /></div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">Инженерные системы пожарной и охранной безопасности. Проектирование, монтаж, ПНР, обслуживание.</p>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-600">Услуги</div>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`} className="text-neutral-400 hover:text-white">{s.title}</Link></li>))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-600">Компания</div>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {nav.map((l) => (<li key={l.href}><Link href={l.href} className="text-neutral-400 hover:text-white">{l.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-600">Контакты</div>
          <ul className="mt-4 grid gap-2.5 text-sm text-neutral-400">
            <li><a href={`mailto:${company.email}`} className="text-white hover:text-red-500">{company.email}</a></li>
            <li>{company.phone}</li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-neutral-500 md:flex-row">
          <span>© {new Date().getFullYear()} {company.legal}. Все права защищены.</span>
          <span>Информация на сайте не является публичной офертой.</span>
        </div>
      </div>
    </footer>
  );
}