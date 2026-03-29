import Icon from "@/components/ui/icon"

const pillars = [
  {
    icon: "BarChart2",
    title: "Анализ",
    description: "Загружай любой материал — AI разберёт структуру, качество и эффективность.",
    color: "violet",
  },
  {
    icon: "Sparkles",
    title: "Генерация",
    description: "Идеи, сценарии, тексты, подписи — по вашему стилю и под вашу аудиторию.",
    color: "violet",
  },
  {
    icon: "Wand2",
    title: "Улучшение",
    description: "Готовый контент? AI найдёт слабые места и предложит конкретные правки.",
    color: "violet",
  },
  {
    icon: "Layers",
    title: "Все форматы",
    description: "Видео, изображения, тексты, заметки, сайты — один инструмент для всего.",
    color: "violet",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Решение
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Один workspace.<br />Все задачи.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Blubsyy объединяет анализ, генерацию и улучшение контента в единой системе — без переключений, без потери контекста.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/30 transition-all duration-300">
                  <Icon name={pillar.icon} size={22} className="text-violet-400" fallback="Zap" />
                </div>
                <h3 className="text-xl font-bold text-white font-orbitron">{pillar.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="relative p-8 md:p-12 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-900/20 via-black to-violet-900/10 text-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/5 to-transparent pointer-events-none" />
          <p className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
            Всё — в одном месте.
          </p>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Загружай материал → получай анализ → генерируй новое → улучшай готовое. Один инструмент, полный цикл.
          </p>
        </div>
      </div>
    </section>
  )
}
