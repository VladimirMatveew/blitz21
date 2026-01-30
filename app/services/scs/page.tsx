"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SCSPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              СКС — структурированные кабельные системы
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Проектирование и монтаж СКС для офисов, складов и коммерческих объектов:
              надежная инфраструктура для связи, интернета и рабочих мест.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contacts"
                className="bg-red-600 text-white px-6 py-3 rounded-lg"
              >
                Запросить расчёт
              </Link>
              <Link
                href="/documents"
                className="border border-gray-300 px-6 py-3 rounded-lg"
              >
                Документы
              </Link>
            </div>
          </motion.div>

          <div className="bg-gray-200 rounded-2xl h-80" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Что входит в работы</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Обследование и техзадание",
              "Проектирование трасс и узлов",
              "Монтаж кабельных линий и лотков",
              "Коммутационные шкафы, патч-панели",
              "Маркировка и тестирование линий",
              "Исполнительная документация",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border rounded-xl p-5"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold">Обсудить проект СКС</h2>
        <Link
          href="/contacts"
          className="inline-block mt-8 bg-red-600 px-8 py-4 rounded-lg"
        >
          Оставить заявку
        </Link>
      </section>
    </div>
  );
}
