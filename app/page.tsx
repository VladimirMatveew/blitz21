"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-red-50/30" />
        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-red-600 mb-4">
              ООО «БЛИЦ» — инженерные системы безопасности
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Пожарная и охранная{" "}
              <span className="text-red-600">безопасность</span> под ключ
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl">
              Проектирование, монтаж и обслуживание систем пожарной сигнализации,
              видеонаблюдения, СКУД и структурированных кабельных сетей.
              Работаем по нормативам, сдаём с исполнительной документацией.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 text-sm font-semibold rounded-lg transition shadow-lg shadow-red-600/20"
              >
                Оставить заявку
              </Link>
              <Link
                href="/services/fire"
                className="border border-neutral-300 hover:border-neutral-900 px-7 py-3.5 text-sm font-semibold rounded-lg transition"
              >
                Наши услуги →
              </Link>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-neutral-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STAGES ===== */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            Как мы работаем
          </motion.h2>
          <p className="text-center text-neutral-500 mb-12 max-w-xl mx-auto">
            Три чётких этапа от заявки до сдачи объекта
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            Услуги
          </motion.h2>
          <p className="text-center text-neutral-500 mb-12 max-w-xl mx-auto">
            Полный цикл работ по инженерным системам безопасности
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <Link
                  href={s.href}
                  className="group block border border-neutral-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all"
                >
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h3 className="text-base font-semibold group-hover:text-red-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-4 text-xs font-medium text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold"
          >
            Нужен расчёт по вашему объекту?
          </motion.h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Кратко опишите задачу — подготовим техническое решение, смету и сроки
            в течение 1–2 рабочих дней.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacts"
              className="bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm font-semibold rounded-lg transition shadow-lg shadow-red-600/25"
            >
              Оставить заявку
            </Link>
            <Link
              href="/documents"
              className="border border-neutral-600 hover:border-white px-8 py-3.5 text-sm font-semibold rounded-lg transition"
            >
              Лицензии и документы
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== DATA ===== */

const stats = [
  { value: "10+", label: "Лет опыта" },
  { value: "200+", label: "Объектов сдано" },
  { value: "5", label: "Направлений работ" },
  { value: "24/7", label: "Техподдержка" },
];

const stages = [
  {
    title: "Проектирование",
    description:
      "Технические решения и рабочая документация под конкретный объект. Учитываем нормы и особенности площадки.",
  },
  {
    title: "Монтаж",
    description:
      "Установка оборудования, прокладка кабельных линий. Аккуратно, по проекту, с фотофиксацией этапов.",
  },
  {
    title: "Пуско-наладка",
    description:
      "Настройка, тестирование всех зон, ввод в эксплуатацию. Передаём акты и исполнительную документацию.",
  },
];

const services = [
  {
    icon: "🔥",
    title: "Пожарная сигнализация",
    description: "Проектирование и монтаж систем пожарной сигнализации по нормативам.",
    href: "/services/fire",
  },
  {
    icon: "📹",
    title: "Видеонаблюдение",
    description: "Системы видеоконтроля для офисов, складов и промышленных объектов.",
    href: "/services/video",
  },
  {
    icon: "🔌",
    title: "СКС",
    description: "Структурированные кабельные системы для надёжной IT-инфраструктуры.",
    href: "/services/scs",
  },
  {
    icon: "🔧",
    title: "Техобслуживание",
    description: "Регламентное обслуживание и оперативный ремонт установленных систем.",
    href: "/services/maintenance",
  },
  {
    icon: "🔐",
    title: "СКУД",
    description: "Контроль и управление доступом: турникеты, считыватели, программное обеспечение.",
    href: "/services/skud",
  },
];
