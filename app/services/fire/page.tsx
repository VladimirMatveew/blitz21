"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FirePage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO */}
      <section className="pt-32 pb-14 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Пожарная сигнализация
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-3xl leading-relaxed">
          Проектирование, монтаж и пуско-наладочные работы систем пожарной
          сигнализации. Работаем под объект, по нормативам, с комплектом
          исполнительной документации.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/contacts"
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-sm font-medium"
          >
            Запросить расчёт
          </Link>
          <Link
            href="/documents"
            className="border border-neutral-700 hover:border-white transition px-6 py-3 text-sm"
          >
            Документы
          </Link>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 max-w-7xl mx-auto pb-14">
        <h2 className="text-xl md:text-2xl font-medium mb-6">
          Что входит в работы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {scope.map((x, i) => (
            <motion.div
              key={x}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="border border-neutral-800 p-6"
            >
              <div className="text-white font-semibold">{x}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 max-w-7xl mx-auto pb-14 border-t border-neutral-800 pt-12">
        <h2 className="text-xl md:text-2xl font-medium mb-6">Этапы</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="border border-neutral-800 p-6"
            >
              <div className="text-gray-500 text-xs tracking-widest">
                0{i + 1}
              </div>
              <div className="mt-2 text-white font-semibold">{s.title}</div>
              <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                {s.text}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="border border-neutral-800 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-white font-semibold text-lg">
              Нужен расчёт по объекту?
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Кратко опишите задачу — подготовим решение и стоимость.
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contacts"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-sm font-medium"
            >
              Оставить заявку
            </Link>
            <Link
              href="/services/video"
              className="border border-neutral-700 hover:border-white transition px-6 py-3 text-sm"
            >
              Видеонаблюдение →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const scope = [
  "Обследование объекта и сбор исходных данных",
  "Подбор оборудования и проектные решения",
  "Монтаж кабельных линий и оборудования",
  "Пуско-наладочные работы и тестирование",
  "Сдача в эксплуатацию (акты/исполнительная документация)",
  "Сопровождение и техническое обслуживание (по договору)",
];

const steps = [
  {
    title: "Обследование и ТЗ",
    text: "Фиксируем вводные данные и требования, определяем состав системы и зоны контроля.",
  },
  {
    title: "Монтаж",
    text: "Прокладка линий, установка оборудования, коммутация. Соблюдение норм и аккуратность выполнения.",
  },
  {
    title: "ПНР и сдача",
    text: "Настройка, проверка, запуск. Передача документации и инструктаж, при необходимости — обслуживание.",
  },
];
