"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-neutral-950 border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* BRAND */}
        <Link
          href="/"
          className="flex flex-col items-center text-center leading-none"
        >
          <span className="text-[10px] md:text-[11px] text-gray-400 tracking-wide">
            Общество с ограниченной
          </span>
          <span className="text-[10px] md:text-[11px] text-gray-400 tracking-wide">
            ответственностью
          </span>
          <span className="mt-1 text-white text-lg md:text-xl font-bold tracking-[0.22em] uppercase">
            «БЛИЦ»
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold tracking-wide text-gray-300">
          <Link href="/services/fire" className="hover:text-white transition">
            Пожарная сигнализация
          </Link>
          <Link href="/services/video" className="hover:text-white transition">
            Видеонаблюдение
          </Link>
          <Link href="/services/scs" className="hover:text-white transition">
            СКС
          </Link>
          <Link href="/services/skud" className="hover:text-white transition">
            СКУД
          </Link>
          <Link href="/about" className="hover:text-white transition">
            О компании
          </Link>
          <Link href="/documents" className="hover:text-white transition">
            Документы
          </Link>
          <Link href="/contacts" className="hover:text-white transition">
            Контакты
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold tracking-wide text-gray-300">
            <Link href="/services/fire">Пожарная сигнализация</Link>
            <Link href="/services/video">Видеонаблюдение</Link>
            <Link href="/services/scs">СКС</Link>
            <Link href="/services/skud">СКУД</Link>
            <Link href="/about">О компании</Link>
            <Link href="/documents">Документы</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
