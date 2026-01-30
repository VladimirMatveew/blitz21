"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6">
        <div className="min-h-[calc(100vh-80px)] pt-6 pb-8 flex flex-col justify-between">
          {/* TOP */}
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -22, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              О компании
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="mt-4 text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed"
            >
              ООО «БЛИЦ» — инженерные системы пожарной и охранной безопасности:
              проектирование, монтаж, пуско-наладочные работы и сопровождение.
              Работаем под объект, по нормативам.
            </motion.p>
          </div>

          {/* MIDDLE */}
          <div className="mt-6 grid lg:grid-cols-3 gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="border border-neutral-800 p-5 bg-neutral-950"
              >
                <div className="text-white font-semibold">{c.title}</div>
                <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/documents"
              className="border border-neutral-700 hover:border-white transition px-5 py-2.5 text-sm"
            >
              Документы
            </Link>
            <Link
              href="/contacts"
              className="bg-red-600 hover:bg-red-700 transition px-5 py-2.5 text-sm font-medium"
            >
              Связаться
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const cards = [
  {
    title: "Подход",
    text: "Проектирование → монтаж → пуско-наладочные работы. Сдача с комплектом документации.",
  },
  {
    title: "Качество",
    text: "Соблюдаем нормативы, аккуратно ведём линии и коммутацию. Тестируем и проверяем режимы.",
  },
  {
    title: "Сопровождение",
    text: "Техническое обслуживание, модернизация и расширение систем после сдачи объекта.",
  },
];
