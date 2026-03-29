import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое Blubsyy?",
      answer:
        "Blubsyy — AI-платформа для создания контента. В одной системе собраны анализ материалов, генерация идей и сценариев, улучшение готового контента и работа с разными форматами: видео, текст, изображения, документы.",
    },
    {
      question: "Для кого подходит платформа?",
      answer:
        "Для всех, кто создаёт контент: YouTube-блогеры, авторы TikTok и Reels, сценаристы, монтажёры, блогеры-эксперты, контент-команды и авторы курсов. Подходит как для начинающих, так и для профессионалов.",
    },
    {
      question: "Можно ли использовать Blubsyy для разных типов контента?",
      answer:
        "Да. Платформа работает с видео, изображениями, текстовыми документами, заметками и ссылками на сайты. Загружайте любой формат — AI разберётся и даст релевантный анализ или результат.",
    },
    {
      question: "Что входит в ранний доступ?",
      answer:
        "В раннем доступе вы получаете возможность пользоваться основными функциями платформы: анализом контента, генерацией сценариев и идей, переупаковкой материалов. А ещё — прямое влияние на развитие продукта через обратную связь.",
    },
    {
      question: "Когда появятся тарифы и кредиты?",
      answer:
        "Платформа сейчас в раннем доступе. Платные тарифы появятся позже — ранние пользователи получат приоритетные условия. Следите за обновлениями.",
    },
    {
      question: "Нужна ли оплата уже сейчас?",
      answer:
        "Нет. На этапе раннего доступа вы можете попробовать платформу без оплаты. Это возможность оценить инструмент и повлиять на его развитие, прежде чем появятся тарифные планы.",
    },
    {
      question: "Как попасть в бета-тест?",
      answer:
        "Зарегистрируйтесь через кнопку «Получить ранний доступ» на странице. Мы открываем доступ постепенно — оставьте email, и мы уведомим вас, как только ваш аккаунт будет активирован.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-space-mono text-violet-400 uppercase tracking-widest mb-4 border border-violet-500/30 px-4 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о платформе Blubsyy
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
