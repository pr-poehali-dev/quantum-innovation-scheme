import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Для кого подходит Blubsyy?",
      answer:
        "Для любого, кто создаёт контент: YouTube-блогеры, TikTokers, авторы Reels, сценаристы, монтажёры, контент-менеджеры и небольшие команды. Подходит как начинающим, так и профессионалам.",
    },
    {
      question: "С какими форматами работает платформа?",
      answer:
        "Blubsyy работает с видео, изображениями, текстовыми документами, заметками и ссылками на сайты. Просто загружайте материал в любом формате — AI разберётся.",
    },
    {
      question: "Может ли AI понять мой стиль?",
      answer:
        "Да. Чем больше вашего контента вы загружаете, тем точнее Blubsyy понимает ваш голос, подачу и аудиторию — и генерирует идеи именно в вашем стиле.",
    },
    {
      question: "Как Blubsyy помогает экономить время?",
      answer:
        "Вместо нескольких разных сервисов вы работаете в одном месте. Анализ, генерация идей, сценарии, репёрпоуз контента — всё в одном окне без переключений.",
    },
    {
      question: "Нужны ли технические знания для работы?",
      answer:
        "Нет. Интерфейс максимально простой: загружаете материал, задаёте задачу обычным языком — и получаете результат. Специальных навыков не нужно.",
    },
    {
      question: "Можно ли попробовать бесплатно?",
      answer:
        "Да, есть бесплатный доступ. Зарегистрируйтесь и попробуйте основные функции без оплаты — чтобы убедиться, что платформа подходит вашему рабочему процессу.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о платформе Blubsyy и работе с контентом.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-violet-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-violet-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}