import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём Новиков",
    role: "YouTube-креатор, 380k подписчиков",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Раньше я тратил 3 часа на сценарий. С Blubsyy — 30 минут. AI понимает мой стиль и предлагает идеи, которые реально заходят аудитории.",
  },
  {
    name: "Дарья Кузнецова",
    role: "Контент-менеджер, TikTok 210k",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Лучшее открытие года. Загружаю длинный ролик — получаю 10 идей для Reels. Экономит огромное количество времени.",
  },
  {
    name: "Михаил Орлов",
    role: "Сценарист и монтажёр",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то один инструмент вместо пяти. Blubsyy помог разобраться, почему одни ролики набирают миллион, а другие нет.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят креаторы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Блогеры, авторы и контент-команды уже используют Blubsyy в работе каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}