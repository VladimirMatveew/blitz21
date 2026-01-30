"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* ONE SCREEN */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="min-h-[calc(100vh-80px)] pt-10 pb-6 flex flex-col justify-between">
          {/* TITLE */}
          <div className="text-center">
            <motion.h1
              initial="hidden"
              animate="show"
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              <motion.span variants={lineLeft} className="block">
                Инженерные системы пожарной
              </motion.span>
              <motion.span variants={lineRight} className="block">
                и охранной безопасности
              </motion.span>
            </motion.h1>
          </div>

          {/* STAGES */}
          <div className="mt-6 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 + index * 0.14 }}
                className="border border-neutral-800 p-4 bg-neutral-950"
              >
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SERVICES (3 + 3 layout) */}
          <div className="mt-6 max-w-6xl mx-auto w-full">
            <h2 className="text-sm md:text-base font-medium text-gray-300 mb-3 text-center">
              Услуги
            </h2>

            <div className="grid grid-cols-6 gap-4">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="col-span-6 md:col-span-2 border border-neutral-800 p-4 hover:border-red-600 transition"
                >
                  <h3 className="text-sm md:text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-400">
                    {s.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/contacts"
              className="bg-red-600 hover:bg-red-700 transition px-5 py-2.5 text-xs md:text-sm font-medium"
            >
              Оставить заявку
            </Link>
            <Link
              href="/documents"
              className="border border-neutral-700 hover:border-white transition px-5 py-2.5 text-xs md:text-sm"
            >
              Документы
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ANIMATION */

const lineLeft = {
  hidden: { opacity: 0, x: -22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const lineRight = {
  hidden: { opacity: 0, x: 22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.12 } },
};

/* DATA */

const stages = [
  {
    title: "Проектирование",
    description: "Технические решения и рабочая документация под объект.",
  },
  {
    title: "Монтаж",
    description: "Установка оборудования и прокладка линий.",
  },
  {
    title: "Пуско-наладочные работы",
    description: "Настройка, тестирование и ввод в эксплуатацию.",
  },
];

const services = [
  {
    title: "Пожарная сигнализация",
    description: "Проектирование и монтаж ПС.",
    href: "/services/fire",
  },
  {
    title: "Видеонаблюдение",
    description: "Системы видеоконтроля.",
    href: "/services/video",
  },
  {
    title: "СКС",
    description: "Структурированные кабельные системы.",
    href: "/services/scs",
  },
  {
    title: "Техническое обслуживание",
    description: "Регламентное обслуживание систем.",
    href: "/services/maintenance",
  },
  {
    title: "СКУД",
    description: "Контроль и управление доступом.",
    href: "/services/skud",
  },
];
