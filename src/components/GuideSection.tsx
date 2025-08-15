import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const GuideSection = () => {
  return (
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
  );
};

export default GuideSection;