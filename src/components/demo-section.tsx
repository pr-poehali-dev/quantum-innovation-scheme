import { useState } from "react"
import Icon from "@/components/ui/icon"

const demoTabs = [
  {
    id: "video",
    label: "Видео",
    icon: "Play",
    title: "Анализ видеоролика",
    description: "Загружаете ролик — AI разбирает хук, структуру, темп и подачу. Получаете конкретный разбор: что работает, что мешает удержанию и как улучшить.",
    tags: ["Анализ хука", "Удержание аудитории", "Структура ролика", "Рекомендации"],
    mockLines: [
      { label: "Хук (0–5 сек)", value: 62, comment: "Слабый — нет конкретики" },
      { label: "Удержание", value: 78, comment: "Выше среднего" },
      { label: "CTA в конце", value: 45, comment: "Можно усилить" },
      { label: "Общая оценка", value: 71, comment: "Хороший потенциал" },
    ],
  },
  {
    id: "script",
    label: "Сценарий",
    icon: "FileText",
    title: "Генерация сценария",
    description: "Опишите тему или загрузите референс — Blubsyy создаст полный сценарий в вашем стиле с учётом формата платформы и целевой аудитории.",
    tags: ["По вашему стилю", "Под платформу", "С хуком", "Готово к съёмке"],
    mockScript: [
      { time: "0–5s", text: "Хук: задаём острый вопрос, который бьёт в боль аудитории" },
      { time: "5–20s", text: "Контекст: почему это важно прямо сейчас" },
      { time: "20–60s", text: "Основной контент: 3 ключевых тезиса с примерами" },
      { time: "60–80s", text: "Демонстрация или доказательство" },
      { time: "80–90s", text: "CTA: чёткое действие для зрителя" },
    ],
  },
  {
    id: "repurpose",
    label: "Переупаковка",
    icon: "RefreshCw",
    title: "Один источник → много форматов",
    description: "Загружаете одно видео или статью — Blubsyy автоматически генерирует контент для разных платформ и форматов.",
    tags: ["Экономия времени", "Все платформы", "Без потери смысла"],
    repurposeItems: [
      { icon: "Youtube", label: "YouTube Short", desc: "Вертикальный формат 60 сек с ключевым моментом" },
      { icon: "Instagram", label: "Reels / TikTok", desc: "Динамичный монтаж с субтитрами" },
      { icon: "FileText", label: "Статья в блог", desc: "Структурированный текст с SEO-логикой" },
      { icon: "MessageSquare", label: "Пост в соцсети", desc: "Короткий цепляющий текст с тезисами" },
    ],
  },
  {
    id: "improve",
    label: "Улучшение",
    icon: "Wand2",
    title: "Доработка готового контента",
    description: "Загрузите уже готовый материал — AI найдёт слабые места, даст конкретные рекомендации и предложит варианты улучшений.",
    tags: ["Конкретные правки", "До и после", "По вашему запросу"],
    improvements: [
      { type: "before", text: "«Сегодня поговорим о том, как создавать контент»" },
      { type: "after", text: "«Ваш контент набирает 500 просмотров? Вот что нужно изменить прямо сейчас»" },
      { type: "before", text: "«Это очень важный инструмент для работы»" },
      { type: "after", text: "«Этот инструмент сэкономил мне 3 часа в неделю — показываю как»" },
    ],
  },
]

export function DemoSection() {
  const [activeTab, setActiveTab] = useState("video")
  const active = demoTabs.find((t) => t.id === activeTab)!

  return (
    <section id="demo" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            Платформа
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Как это работает
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Посмотрите, что Blubsyy делает с вашим контентом
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {demoTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 font-geist ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white border border-violet-500"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-violet-500/40 hover:text-white"
              }`}
            >
              <Icon name={tab.icon} size={15} fallback="Circle" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo window */}
        <div className="rounded-2xl border border-violet-500/20 bg-white/[0.02] overflow-hidden">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-gray-500 font-space-mono">blubsyy.app / workspace</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                    <Icon name={active.icon} size={18} className="text-violet-400" fallback="Zap" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-orbitron">{active.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{active.description}</p>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-space-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: mock result */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                {active.id === "video" && active.mockLines && (
                  <div className="space-y-4">
                    <p className="text-xs text-gray-500 font-space-mono uppercase mb-4">Результат анализа</p>
                    {active.mockLines.map((line, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{line.label}</span>
                          <span className="text-violet-400 font-space-mono">{line.value}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full transition-all duration-700"
                            style={{ width: `${line.value}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 font-space-mono">{line.comment}</p>
                      </div>
                    ))}
                  </div>
                )}

                {active.id === "script" && active.mockScript && (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 font-space-mono uppercase mb-4">Структура сценария</p>
                    {active.mockScript.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-xs font-space-mono text-violet-400 mt-0.5 w-14 flex-shrink-0">{item.time}</span>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {active.id === "repurpose" && active.repurposeItems && (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 font-space-mono uppercase mb-4">Форматы на выходе</p>
                    {active.repurposeItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                        <Icon name={item.icon} size={16} className="text-violet-400 mt-0.5 flex-shrink-0" fallback="File" />
                        <div>
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {active.id === "improve" && active.improvements && (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 font-space-mono uppercase mb-4">До → После</p>
                    {active.improvements.map((item, i) => (
                      <div key={i} className={`p-3 rounded-lg text-sm leading-relaxed ${
                        item.type === "before"
                          ? "bg-red-500/5 border border-red-500/20 text-gray-400"
                          : "bg-violet-500/10 border border-violet-500/30 text-violet-200"
                      }`}>
                        <span className={`text-xs font-space-mono mr-2 ${item.type === "before" ? "text-red-400" : "text-violet-400"}`}>
                          {item.type === "before" ? "↓ БЫЛО" : "↑ СТАЛО"}
                        </span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
