import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="slide-up">
          <div className="inline-flex items-center gap-2 text-xs font-space-mono text-violet-400 border border-violet-500/30 px-4 py-1.5 rounded-full mb-8">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            Ранний доступ открыт
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron text-balance">
            Создавайте больше.<br />Тратьте меньше времени.
          </h2>

          <p className="text-xl text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Присоединяйтесь к первым пользователям Blubsyy — AI-платформы, которая собирает весь процесс создания контента в одном месте.
          </p>

          <p className="text-sm text-gray-500 mb-10 font-space-mono">
            Один инструмент вместо пяти. Анализ + генерация + улучшение + все форматы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-violet-600 hover:bg-violet-700 text-white font-geist border-0 pulse-button text-lg px-8 py-4 gap-2"
            >
              <Link to="/early-access">
                <Icon name="Rocket" size={18} fallback="Zap" />
                Попробовать бесплатно
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-500 text-lg px-8 py-4 bg-transparent font-geist gap-2"
            >
              <Link to="/early-access">
                <Icon name="ArrowRight" size={18} fallback="ChevronRight" />
                Получить ранний доступ
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="Check" size={14} className="text-violet-400" fallback="CheckCircle" />
              Бесплатный старт
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="Check" size={14} className="text-violet-400" fallback="CheckCircle" />
              Без привязки карты
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="Check" size={14} className="text-violet-400" fallback="CheckCircle" />
              Все форматы контента
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
