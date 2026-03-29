import Icon from "@/components/ui/icon"

const cases = [
  {
    icon: "Youtube",
    role: "YouTube-креатор",
    action: "Загружает видео → получает разбор структуры и хука → генерирует новый сценарий",
    result: "Выпускает ролики быстрее и с более высоким удержанием аудитории",
    color: "red",
  },
  {
    icon: "Smartphone",
    role: "Автор TikTok / Reels",
    action: "Вводит тему → получает 10 идей для коротких видео → выбирает лучшие хуки",
    result: "Никогда не страдает от творческого блока и всегда знает, что снять",
    color: "violet",
  },
  {
    icon: "PenTool",
    role: "Блогер-эксперт",
    action: "Загружает статью → AI переупаковывает в пост, карточки и видеосценарий",
    result: "Один материал превращается в 5+ единиц контента для разных платформ",
    color: "violet",
  },
  {
    icon: "Film",
    role: "Монтажёр / продюсер",
    action: "Анализирует референсы конкурентов → понимает, что делает их контент успешным",
    result: "Принимает обоснованные решения по структуре и монтажу на основе данных",
    color: "violet",
  },
  {
    icon: "Users",
    role: "Контент-команда",
    action: "Работает в едином workspace → все материалы и анализы в одном месте",
    result: "Нет хаоса из сервисов, быстрее согласования, больше готового контента",
    color: "violet",
  },
  {
    icon: "GraduationCap",
    role: "Автор курса / продукта",
    action: "Загружает уроки и материалы → получает рекомендации по улучшению подачи",
    result: "Курс становится понятнее, удержание учеников растёт",
    color: "violet",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Кейсы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Узнайте себя
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Blubsyy подходит для разных ролей — посмотрите, как платформа работает именно для вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center group-hover:bg-violet-500/25 transition-all duration-300">
                  <Icon name={c.icon} size={20} className="text-violet-400" fallback="User" />
                </div>
                <h3 className="font-bold text-white font-orbitron text-sm">{c.role}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-space-mono uppercase mb-1 tracking-wider">Что делает</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{c.action}</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <p className="text-xs text-violet-400 font-space-mono uppercase mb-1 tracking-wider">Результат</p>
                  <p className="text-sm text-violet-200 leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
