import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  return (
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
  );
};

export default RulesSection;