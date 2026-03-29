import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Link } from "react-router-dom"

const WHY_NOW = [
  {
    icon: "Users",
    title: "Влияй на продукт",
    desc: "Ранние участники напрямую формируют функции платформы. Твои запросы — в приоритете.",
  },
  {
    icon: "Tag",
    title: "Фиксированная цена навсегда",
    desc: "Вступив сейчас, ты закрепляешь условия до масштабирования платформы.",
  },
  {
    icon: "Zap",
    title: "Доступ раньше всех",
    desc: "Новые инструменты и форматы — сначала тебе, потом всем остальным.",
  },
  {
    icon: "Star",
    title: "Особый статус",
    desc: "Founder-метка в профиле. Отдельный канал поддержки. Голос при голосованиях за роадмап.",
  },
]

const SUPPORT_TIERS = [
  {
    id: "starter",
    badge: "Старт",
    badgeColor: "border-gray-600 text-gray-400",
    glowColor: "hover:border-gray-500/60",
    title: "Поддержка проекта",
    price: "Скоро",
    priceNote: "Цена будет объявлена",
    credits: "—",
    highlight: false,
    features: [
      "Базовый доступ к платформе",
      "Основные инструменты контента",
      "Email-поддержка",
      "Founder-статус",
    ],
    cta: "Зарезервировать место",
    ctaVariant: "outline" as const,
  },
  {
    id: "creator",
    badge: "Самый популярный",
    badgeColor: "border-violet-500/60 text-violet-300",
    glowColor: "hover:border-violet-500/60",
    title: "Ранний креатор",
    price: "Скоро",
    priceNote: "Цена будет объявлена",
    credits: "—",
    highlight: true,
    features: [
      "Всё из «Старт»",
      "Расширенные лимиты кредитов",
      "Приоритетная обработка задач",
      "Закрытый Discord-канал",
      "Голос в голосованиях за фичи",
      "Перенос неиспользованных кредитов",
    ],
    cta: "Получить ранний доступ",
    ctaVariant: "default" as const,
  },
  {
    id: "studio",
    badge: "Команда",
    badgeColor: "border-amber-500/60 text-amber-400",
    glowColor: "hover:border-amber-500/40",
    title: "Студия / Агентство",
    price: "Скоро",
    priceNote: "Цена будет объявлена",
    credits: "—",
    highlight: false,
    features: [
      "Всё из «Ранний креатор»",
      "До 5 мест в команде",
      "Персональный менеджер",
      "Кастомные интеграции (по запросу)",
      "SLA и выделенная поддержка",
    ],
    cta: "Обсудить условия",
    ctaVariant: "outline" as const,
  },
]

const CREDIT_CONCEPTS = [
  {
    icon: "Film",
    title: "Анализ видео",
    desc: "Каждый разбор контента расходует кредиты пропорционально длине.",
  },
  {
    icon: "FileText",
    title: "Генерация текста",
    desc: "Сценарии, описания, хуки — по одному или пакетами.",
  },
  {
    icon: "Repeat",
    title: "Переупаковка",
    desc: "Адаптация формата под разные платформы — отдельный расход.",
  },
  {
    icon: "Sparkles",
    title: "AI-улучшения",
    desc: "Режиссура, смысловой апгрейд, A/B-варианты заголовков.",
  },
]

const ROADMAP = [
  { phase: "Q3 2025", title: "Закрытая бета", status: "done", desc: "Первые 50 пользователей. Сбор обратной связи." },
  { phase: "Q4 2025", title: "Ранний доступ", status: "active", desc: "Открытие для первых сотен участников. Фиксация условий." },
  { phase: "Q1 2026", title: "Публичный запуск", status: "upcoming", desc: "Полноценный выход с финальными тарифами." },
  { phase: "Q2 2026", title: "Команды и агентства", status: "upcoming", desc: "Мультиаккаунты, совместная работа, API." },
]

export default function EarlyAccess() {
  return (
    <div className="dark bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-900/20 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-space-mono text-violet-400 border border-violet-500/30 px-4 py-1.5 rounded-full mb-8">
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            Ранний доступ открыт · Осталось мест ограниченно
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron leading-tight">
            Стань частью<br />
            <span className="text-violet-400">Blubsyy</span> с первого дня
          </h1>

          <p className="text-xl text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Ранний доступ — это не просто подписка. Это участие в создании инструмента,
            которым ты будешь пользоваться каждый день.
          </p>

          <p className="text-sm text-gray-500 font-space-mono">
            Условия раннего доступа фиксируются навсегда. После публичного запуска цены вырастут.
          </p>
        </div>
      </section>

      {/* Why join now */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
              Зачем вступать сейчас?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ранние участники получают то, чего нельзя купить после запуска.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_NOW.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/40 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-violet-400" fallback="Star" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support tiers */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-900/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-space-mono text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full mb-6">
              <Icon name="Clock" size={12} fallback="AlertCircle" />
              Цены будут объявлены перед запуском
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
              Уровни поддержки проекта
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Выбери уровень участия. Условия фиксируются в момент вступления
              и не меняются даже после роста цен.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORT_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? "border-violet-500/60 bg-violet-950/20 shadow-lg shadow-violet-500/10"
                    : `border-white/10 bg-white/3 ${tier.glowColor}`
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                )}

                <div className="mb-6">
                  <span className={`inline-block text-xs font-space-mono border px-3 py-1 rounded-full mb-4 ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-1">{tier.title}</h3>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-space-mono mt-1">{tier.priceNote}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Icon name="Check" size={14} className="text-violet-400 mt-0.5 flex-shrink-0" fallback="CheckCircle" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.ctaVariant}
                  className={
                    tier.highlight
                      ? "w-full bg-violet-600 hover:bg-violet-700 text-white border-0 font-geist"
                      : "w-full border-white/20 text-gray-300 hover:bg-white/5 bg-transparent font-geist"
                  }
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs font-space-mono mt-8">
            * Все условия являются предварительными и могут быть уточнены до официального запуска.
          </p>
        </div>
      </section>

      {/* How credits work */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
              Как будут работать кредиты
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Кредиты — внутренняя валюта платформы. Каждое действие расходует кредиты.
              Ты контролируешь, на что тратить.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {CREDIT_CONCEPTS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 text-center hover:border-violet-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={22} className="text-violet-400" fallback="Zap" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Placeholder for future credit table */}
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/2 p-10 text-center">
            <Icon name="LayoutGrid" size={32} className="text-gray-600 mx-auto mb-4" fallback="Grid" />
            <p className="text-gray-600 text-sm font-space-mono">
              Детальная таблица кредитов по действиям · будет добавлена перед запуском
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
              Дорожная карта
            </h2>
            <p className="text-gray-400">Прозрачно о том, где мы и куда идём.</p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent" />
            <div className="space-y-8">
              {ROADMAP.map((item) => (
                <div key={item.phase} className="flex gap-6 pl-14 relative">
                  <div
                    className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      item.status === "done"
                        ? "bg-violet-500/20 border-violet-500"
                        : item.status === "active"
                        ? "bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/30"
                        : "bg-black border-white/20"
                    }`}
                  >
                    <Icon
                      name={item.status === "done" ? "Check" : item.status === "active" ? "Zap" : "Clock"}
                      size={14}
                      className={item.status === "upcoming" ? "text-gray-600" : "text-white"}
                      fallback="Circle"
                    />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-space-mono text-violet-400">{item.phase}</span>
                      {item.status === "active" && (
                        <span className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/40 px-2 py-0.5 rounded-full font-space-mono">
                          Сейчас
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-900/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
            Присоединяйся, пока это ещё возможно
          </h2>
          <p className="text-gray-400 mb-10">
            Количество мест раннего доступа ограничено. После достижения лимита
            условия изменятся.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white font-geist border-0 text-lg px-8 py-4 gap-2"
            >
              <Icon name="Rocket" size={18} fallback="Zap" />
              Получить ранний доступ
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 text-gray-300 hover:bg-white/5 bg-transparent font-geist text-lg px-8 py-4"
            >
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="Lock" size={13} className="text-violet-400" fallback="Shield" />
              Без обязательств
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="RefreshCw" size={13} className="text-violet-400" fallback="RotateCcw" />
              Условия фиксируются навсегда
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon name="Users" size={13} className="text-violet-400" fallback="User" />
              Влияй на продукт
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
