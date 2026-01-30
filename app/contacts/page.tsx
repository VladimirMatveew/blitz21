"use client";

import { motion } from "framer-motion";

export default function ContactsPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6">
        <div className="min-h-[calc(100vh-80px)] pt-6 pb-8 flex flex-col">
          
          {/* TITLE */}
          <div className="mt-10">
            <motion.h1
              initial={{ opacity: 0, x: -22, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              Контакты
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="mt-4 text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed"
            >
              Оставьте заявку — подготовим решение, расчёт и сроки. Телефон и регион
              добавим позже (пока заглушки).
            </motion.p>
          </div>

          {/* BLOCKS — ПОДНЯТЫ ВЫШЕ */}
          <div className="mt-10 grid lg:grid-cols-2 gap-4">
            {/* LEFT */}
            <div className="border border-neutral-800 p-5 bg-neutral-950">
              <div className="text-white font-semibold">Связь</div>

              <div className="mt-4 grid gap-4 text-sm">
                <Field label="Телефон" value="+7 (___) ___-__-__" />
                <Field label="Email" value="info@domain.ru" />
                <Field label="Регион" value="(укажем позже)" />
              </div>

              <div className="mt-6 text-xs text-gray-500 leading-relaxed">
                На следующем этапе подключим отправку заявок в Telegram / почту и фиксацию в CRM.
              </div>
            </div>

            {/* RIGHT */}
            <div className="border border-neutral-800 p-5 bg-neutral-950">
              <div className="text-white font-semibold">Заявка</div>

              <form className="mt-4 grid gap-3">
                <Input label="Имя" placeholder="Иван" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input label="Телефон" placeholder="+7 ___ ___-__-__" />
                  <Input label="Email" placeholder="mail@domain.ru" />
                </div>

                <div>
                  <div className="text-xs text-gray-500 mb-2">Описание задачи</div>
                  <textarea
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm outline-none focus:border-neutral-600 transition resize-none"
                    placeholder="Объект, площадь, сроки, что нужно сделать..."
                    rows={3}
                  />
                </div>

                <button
                  type="button"
                  className="mt-1 bg-red-600 hover:bg-red-700 transition px-6 py-3 text-sm font-medium"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-sm text-gray-200">{value}</div>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <div className="text-xs text-gray-500 mb-2">{label}</div>
      <input
        className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm outline-none focus:border-neutral-600 transition"
        placeholder={placeholder}
      />
    </div>
  );
}
