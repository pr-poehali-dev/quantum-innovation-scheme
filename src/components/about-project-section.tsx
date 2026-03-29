import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const roadmap = [
  { phase: "Сейчас", label: "Ранний доступ", desc: "Первые пользователи получают доступ к платформе и влияют на развитие продукта", active: true },
  { phase: "Скоро", label: "Расширение форматов", desc: "Новые типы контента, улучшенный анализ видео и поддержка подкастов", active: false },
  { phase: "Позже", label: "Тарифы и команды", desc: "Командные рабочие пространства, тарифные планы и API для интеграций", active: false },
  { phase: "Будущее", label: "AI-агенты", desc: "Автоматизированные агенты для полного цикла создания контента", active: false },
]

export function AboutProjectSection() {
  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            О проекте
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Платформа в развитии
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Blubsyy строится как масштабируемая система для профессионального создания контента. Ранние пользователи формируют продукт.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: values */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Rocket" size={20} className="text-violet-400" fallback="Zap" />
                <h3 className="font-bold text-white">Ранний доступ — это реальное влияние</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Первые пользователи не просто тестируют продукт — они участвуют в его формировании. Ваши запросы и обратная связь напрямую влияют на приоритеты разработки.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Shield" size={20} className="text-violet-400" fallback="Lock" />
                <h3 className="font-bold text-white">Масштабируемая архитектура</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Платформа строится с расчётом на рост. Сейчас — базовые функции, дальше — больше форматов, тарифов, интеграций и командных инструментов.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Users" size={20} className="text-violet-400" fallback="User" />
                <h3 className="font-bold text-white">Для профессионалов контента</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Blubsyy — не очередной AI-чат. Это рабочий инструмент, созданный специально для креаторов: с пониманием процессов, форматов и задач.
              </p>
            </div>
          </div>

          {/* Right: roadmap */}
          <div>
            <h3 className="font-bold text-white mb-6 font-orbitron text-lg">Дорожная карта</h3>
            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    item.active
                      ? "border-violet-500/40 bg-violet-500/10"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${item.active ? "bg-violet-500" : "bg-white/20"}`} />
                    {index !== roadmap.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-1" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-space-mono uppercase tracking-wider ${item.active ? "text-violet-400" : "text-gray-500"}`}>
                        {item.phase}
                      </span>
                      {item.active && (
                        <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full font-space-mono">
                          Сейчас
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-white text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Early access CTA */}
        <div className="text-center p-10 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-black">
          <div className="inline-flex items-center gap-2 text-xs font-space-mono text-violet-400 border border-violet-500/30 px-4 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            Ранний доступ открыт
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-orbitron">
            Станьте первым пользователем
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Присоединяйтесь сейчас — пока платформа в раннем доступе, вы получаете возможность влиять на продукт напрямую.
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white font-geist border-0 px-8 py-3 text-base">
            Получить ранний доступ
          </Button>
        </div>
      </div>
    </section>
  )
}
