export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-gray-400 text-sm mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-semibold tracking-wider uppercase">
            «БЛИЦ»
          </div>
          <div className="mt-3 text-xs leading-relaxed">
            Инженерные системы пожарной и охранной безопасности.
            <br />
            Монтаж, пуско-наладочные работы, обслуживание.
          </div>
        </div>

        <div>
          <div className="text-white font-medium">Навигация</div>
          <div className="mt-3 grid gap-2 text-xs">
            <a className="hover:text-white transition" href="/services/fire">
              Пожарная сигнализация
            </a>
            <a className="hover:text-white transition" href="/services/video">
              Видеонаблюдение
            </a>
            <a className="hover:text-white transition" href="/services/scs">
              СКС
            </a>
            <a className="hover:text-white transition" href="/services/skud">
              СКУД
            </a>
            <a className="hover:text-white transition" href="/documents">
              Документы
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-medium">Контакты</div>
          <div className="mt-3 grid gap-2 text-xs">
            <div>Телефон: +7 (___) ___-__-__</div>
            <div>Email: info@domain.ru</div>
            <div>Регион: (укажем позже)</div>
          </div>

          <div className="mt-5 text-[11px] text-gray-500 leading-relaxed">
            © ООО «БЛИЦ». Все права защищены.
            <br />
            Информация на сайте не является публичной офертой.
          </div>
        </div>
      </div>
    </footer>
  );
}
