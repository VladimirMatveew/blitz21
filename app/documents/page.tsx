"use client";

import { motion } from "framer-motion";

export default function DocumentsPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Лицензии и документы
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-3xl leading-relaxed">
          Раздел предназначен для размещения лицензии МЧС, регистрационных
          документов и реквизитов. Сейчас стоят аккуратные образцы-заглушки —
          заменишь на реальные сканы позже.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {docs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
              className="border border-neutral-800 p-6"
            >
              <div className="text-white font-semibold">{d.title}</div>
              <div className="mt-2 text-xs text-gray-500">{d.note}</div>

              <div className="mt-5 h-40 border border-neutral-800 bg-neutral-900/40 flex items-center justify-center text-xs text-gray-500">
                Превью документа (заглушка)
              </div>

              <div className="mt-5 text-sm text-gray-400 leading-relaxed">
                {d.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

const docs = [
  {
    title: "Лицензия МЧС",
    note: "Добавим номер и дату позже",
    desc: "Официальный документ, подтверждающий право выполнять работы по монтажу и обслуживанию средств обеспечения пожарной безопасности.",
  },
  {
    title: "Выписка ЕГРЮЛ",
    note: "Актуальная редакция",
    desc: "Регистрационные сведения организации. Заменишь на актуальный файл при необходимости.",
  },
  {
    title: "Реквизиты",
    note: "ИНН/ОГРН/р/с (добавим позже)",
    desc: "Карточка организации для договоров и счетов. Здесь будет удобный блок для скачивания.",
  },
];
