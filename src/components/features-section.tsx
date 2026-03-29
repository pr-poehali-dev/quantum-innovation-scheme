import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Анализ контента",
    description: "AI разбирает ваш материал: определяет сильные и слабые стороны, даёт конкретные рекомендации по улучшению.",
    icon: "BarChart2",
    badge: "Аналитика",
  },
  {
    title: "Генерация идей и сценариев",
    description: "Блокируете с идеями? Blubsyy генерирует сценарии, темы и структуры роликов под ваш стиль и аудиторию.",
    icon: "Lightbulb",
    badge: "Генерация",
  },
  {
    title: "Все форматы в одном месте",
    description: "Видео, изображения, документы, заметки, сайты — загружайте любой тип контента и работайте с ним.",
    icon: "Layers",
    badge: "Форматы",
  },
  {
    title: "Улучшение материалов",
    description: "Загрузите уже готовый контент — AI найдёт точки роста и предложит конкретные правки.",
    icon: "Sparkles",
    badge: "AI",
  },
  {
    title: "Переиспользование контента",
    description: "Один видеоролик → пост, статья, сценарий для Reels, цитаты для Twitter. Максимум из каждого материала.",
    icon: "RefreshCw",
    badge: "Репёрпоуз",
  },
  {
    title: "Понимание эффективности",
    description: "Узнайте, почему одни ролики взлетают, а другие нет. Blubsyy объясняет причины и показывает паттерны.",
    icon: "TrendingUp",
    badge: "Инсайты",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что нужно креатору</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Один AI-инструмент заменяет пять разных сервисов — от идеи до готового сценария
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500">
                    <Icon name={feature.icon} size={28} fallback="Zap" />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}