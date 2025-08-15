import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы интендантов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                id: "item-1",
                question: "Как получить доступ к Google Таблицам?",
                answer: "Доступ предоставляется командиром отряда после прохождения базового обучения. Свяжитесь с вашим непосредственным начальником для получения ссылки и разрешений."
              },
              {
                id: "item-2", 
                question: "Как часто нужно подавать отчеты?",
                answer: "Еженедельные отчеты подаются каждое воскресенье до 23:59 по галактическому времени. Дополнительные отчеты могут потребоваться при форс-мажорных обстоятельствах."
              },
              {
                id: "item-3",
                question: "Что делать при обнаружении ошибок в данных?",
                answer: "Немедленно сообщите об ошибке вашему командиру и зафиксируйте в системе учета. Не вносите исправления самостоятельно без согласования с руководством."
              },
              {
                id: "item-4",
                question: "Как работает система поощрений?",
                answer: "Оценка производится ежемесячно на основе качества работы, соблюдения дедлайнов и инициативности. Лучшие интенданты получают повышения и дополнительные привилегии."
              },
              {
                id: "item-5",
                question: "Куда обращаться за технической поддержкой?",
                answer: "Техническая поддержка доступна через внутреннюю систему связи. В экстренных случаях используйте аварийный канал связи с центральным командованием."
              }
            ].map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-card/30 backdrop-blur-sm border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;