import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Space Background */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/img/226e3c68-fbd5-4d65-92ec-9b8b0c5e9779.jpg)' }}
      />
      
      {/* Cosmic Overlay Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-space-blue/20 via-background/60 to-space-dark/80 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                ROTR SERVER
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'guide', label: 'Гайд', icon: 'BookOpen' },
                { id: 'rules', label: 'Правила', icon: 'Shield' },
                { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50 ${
                    activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <Icon name="Star" size={80} className="text-secondary mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ROTR SERVER
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Добро пожаловать в галактику интендантов! Здесь вы найдете все необходимые материалы для эффективной работы в далекой галактике.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('guide')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button 
                onClick={() => scrollToSection('rules')}
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-3"
              >
                <Icon name="Shield" size={20} className="mr-2" />
                Правила галактики
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Гайд по Google Таблицам
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изучите основы работы с базой данных интендантов в Google Таблицах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Основы навигации",
                description: "Как перемещаться по таблице и находить нужную информацию",
                icon: "Navigation",
                steps: ["Откройте главную таблицу", "Изучите структуру листов", "Используйте фильтры для поиска"]
              },
              {
                title: "Ввод данных",
                description: "Правильное заполнение форм и ячеек",
                icon: "Edit3",
                steps: ["Проверьте формат ячейки", "Введите данные согласно шаблону", "Сохраните изменения"]
              },
              {
                title: "Отчетность",
                description: "Создание и отправка отчетов",
                icon: "FileText",
                steps: ["Заполните все обязательные поля", "Проверьте корректность данных", "Отправьте отчет командиру"]
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <Badge variant="outline" className="text-xs mt-0.5">
                          {stepIndex + 1}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/10 border-secondary">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-secondary">
                <Icon name="ExternalLink" size={24} />
                <span>Доступ к таблице</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Основная таблица интендантов находится в общем доступе. Убедитесь, что у вас есть разрешения для редактирования.
              </p>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Открыть Google Таблицы
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Правила и Поощрения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Кодекс интенданта и система мотивации в галактике ROTR
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rules Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <Icon name="Shield" size={28} />
                  <span>Основные правила</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Соблюдайте субординацию и уважайте командную структуру",
                  "Ведите точный учет всех ресурсов и материалов",
                  "Отчитывайтесь о проделанной работе еженедельно",
                  "Не разглашайте служебную информацию",
                  "Поддерживайте дисциплину и порядок в логистических операциях"
                ].map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Badge variant="destructive" className="text-xs mt-1">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{rule}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rewards Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-secondary">
                  <Icon name="Award" size={28} />
                  <span>Система поощрений</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { reward: "Повышение в звании", desc: "За выдающиеся заслуги в логистике" },
                  { reward: "Дополнительные ресурсы", desc: "Премиальные выплаты кредитов" },
                  { reward: "Доступ к технологиям", desc: "Новое оборудование и инструменты" },
                  { reward: "Именная благодарность", desc: "Признание в галактическом реестре" },
                  { reward: "Отпуск на Корусанте", desc: "Заслуженный отдых в столице" }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-secondary">{item.reward}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rocket" size={24} className="text-primary" />
            <span className="text-lg font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>ROTR SERVER</span>
          </div>
          <p className="text-muted-foreground">
            Да пребудет с вами Сила в служении галактике
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;