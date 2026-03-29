import Icon from "@/components/ui/icon"

const benefits = [
  {
    icon: "Zap",
    title: "Быстрее выпускать контент",
    description: "Сценарий за 20 минут вместо 3 часов. Анализ ролика за секунды вместо часов просмотра и заметок.",
    metric: "×5",
    metricLabel: "быстрее на подготовку",
  },
  {
    icon: "Copy",
    title: "Больше из каждого материала",
    description: "Один ролик превращается в серию постов, статью, подкаст-сценарий и карточки. Максимальная отдача от каждого часа съёмки.",
    metric: "5+",
    metricLabel: "форматов из одного источника",
  },
  {
    icon: "FlaskConical",
    title: "Тестировать больше гипотез",
    description: "Генерируйте альтернативные хуки, заголовки и структуры. Больше тестов — быстрее находите что работает.",
    metric: "10×",
    metricLabel: "больше идей за то же время",
  },
  {
    icon: "TrendingUp",
    title: "Повышать качество подачи",
    description: "AI находит слабые места в структуре и подаче, объясняет причины и даёт конкретные рекомендации.",
    metric: "↑",
    metricLabel: "удержание и вовлечённость",
  },
  {
    icon: "Clock",
    title: "Освободить время",
    description: "Рутинные задачи — анализ, структуризация, переупаковка — выполняет AI. Вы фокусируетесь на творчестве.",
    metric: "−",
    metricLabel: "рутины, + творчества",
  },
  {
    icon: "Network",
    title: "Масштабировать команду",
    description: "Единый workspace для всей команды: один контекст, никаких переключений, общие материалы и аналитика.",
    metric: "1",
    metricLabel: "инструмент для команды",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-900/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Результаты
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Работайте эффективнее
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Blubsyy не обещает магию — он просто делает рабочий процесс быстрее, умнее и масштабируемее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/25 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <Icon name={benefit.icon} size={18} className="text-violet-400" fallback="Zap" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-violet-400 font-orbitron">{benefit.metric}</div>
                  <div className="text-xs text-gray-500 font-space-mono">{benefit.metricLabel}</div>
                </div>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
