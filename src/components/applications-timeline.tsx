import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Видео и ролики",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Загрузите видео — Blubsyy разберёт структуру, темп, хуки и подачу. Получите готовый сценарий для
            следующего ролика и идеи для Reels из уже снятого материала.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              YouTube, TikTok, Reels, Shorts
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Анализ хуков и удержания аудитории
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Генерация сценариев по вашему стилю
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Тексты и документы",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Статьи, посты, заметки, брифы — Blubsyy работает с любым текстовым форматом. Превратите
            одну статью в серию постов, подкаст-сценарий и карточки для Instagram.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Посты, статьи, сценарии, брифы
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Переработка контента в разные форматы
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Улучшение стиля и структуры текста
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Изображения и визуал",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Загружайте фото, скриншоты, инфографику. AI понимает визуальный контент и помогает
            придумать описания, подписи и идеи для будущих постов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Фото, скриншоты, инфографика
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Генерация подписей и описаний
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Идеи для визуального контента
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Работает с любым форматом</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Blubsyy понимает видео, тексты, изображения, заметки и сайты — загружайте любой материал
            и получайте AI-анализ и идеи в секунды.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}