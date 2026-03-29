import Icon from "@/components/ui/icon"

const rows = [
  { feature: "Количество инструментов", without: "5–7 разных сервисов", with: "Один workspace" },
  { feature: "Переключение между задачами", without: "Постоянно, теряется контекст", with: "Всё в одном месте" },
  { feature: "Анализ контента", without: "Вручную, по ощущениям", with: "AI-разбор за секунды" },
  { feature: "Форматы материалов", without: "Каждый сервис под свой тип", with: "Видео, текст, фото — всё" },
  { feature: "Генерация идей", without: "ChatGPT отдельно, без контекста", with: "Встроено, знает ваш стиль" },
  { feature: "Переупаковка контента", without: "Вручную, долго", with: "Автоматически, быстро" },
  { feature: "Понимание эффективности", without: "Сложно, нет единой картины", with: "Чёткий анализ причин" },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-900/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Сравнение
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Обычный подход vs Blubsyy
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Посмотрите, что меняется, когда весь процесс собирается в одном инструменте
          </p>
        </div>

        {/* Header */}
        <div className="grid grid-cols-3 gap-4 mb-3 px-4">
          <div className="text-xs font-space-mono text-gray-500 uppercase tracking-wider">Параметр</div>
          <div className="text-center">
            <span className="text-xs font-space-mono text-red-400 uppercase tracking-wider border border-red-500/20 px-3 py-1 rounded-full">
              Обычный подход
            </span>
          </div>
          <div className="text-center">
            <span className="text-xs font-space-mono text-violet-400 uppercase tracking-wider border border-violet-500/30 px-3 py-1 rounded-full">
              С Blubsyy
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 overflow-hidden">
          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 p-4 md:p-5 items-center ${
                index !== rows.length - 1 ? "border-b border-white/5" : ""
              } hover:bg-white/[0.015] transition-colors duration-200`}
            >
              <p className="text-sm text-gray-400 font-medium">{row.feature}</p>

              <div className="flex items-center gap-2 justify-center">
                <Icon name="X" size={14} className="text-red-400 flex-shrink-0" fallback="Minus" />
                <p className="text-sm text-gray-500 text-center leading-tight">{row.without}</p>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <Icon name="Check" size={14} className="text-violet-400 flex-shrink-0" fallback="Plus" />
                <p className="text-sm text-violet-200 text-center leading-tight">{row.with}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-center">
          <p className="text-lg font-bold text-white mb-2">Меньше хаоса. Больше контента. Лучше результаты.</p>
          <p className="text-gray-400 text-sm">Один инструмент закрывает весь цикл создания контента.</p>
        </div>
      </div>
    </section>
  )
}
