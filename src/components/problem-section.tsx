import Icon from "@/components/ui/icon"

const problems = [
  { icon: "AppWindow", text: "5–7 разных сервисов для одного проекта" },
  { icon: "GitBranch", text: "Постоянная потеря контекста при переключении" },
  { icon: "Clock", text: "Часы уходят на рутину, а не на творчество" },
  { icon: "HelpCircle", text: "Непонятно, почему одни ролики работают, а другие нет" },
  { icon: "RefreshCw", text: "Переупаковка одного материала занимает целый день" },
  { icon: "Frown", text: "Идеи заканчиваются раньше, чем заканчивается дедлайн" },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Знакомо?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Контент-процесс сломан
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Большинство креаторов работают в хаосе из вкладок, сервисов и этапов — и тратят лучшее время не на контент, а на инструменты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Icon name={problem.icon} size={18} className="text-red-400" fallback="AlertCircle" />
              </div>
              <p className="text-gray-300 leading-relaxed pt-1">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white font-orbitron">
            Это не ваша вина — это проблема инструментов.
          </p>
          <p className="text-gray-400 mt-3 text-lg">Blubsyy создан, чтобы это исправить.</p>
        </div>
      </div>
    </section>
  )
}
