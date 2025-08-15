import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HRSection = () => {
  return (
    <section id="hr" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Кадровый отдел
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Управление персоналом и контактная информация интендантов галактики
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Staff Table Link */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Icon name="Table" size={24} />
                <span>База данных</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Полная таблица всех зарегистрированных интендантов с их статусами и назначениями.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Открыть таблицу интендантов
              </Button>
            </CardContent>
          </Card>

          {/* Contact Directory */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-secondary">
                <Icon name="Mail" size={24} />
                <span>Контакты</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Директория контактов всех активных сотрудников кадрового отдела.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-muted/20 rounded">
                  <span className="text-sm font-medium">Командир отряда</span>
                  <Badge variant="outline">Активен</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/20 rounded">
                  <span className="text-sm font-medium">Зам. командира</span>
                  <Badge variant="outline">Активен</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/20 rounded">
                  <span className="text-sm font-medium">Начальник логистики</span>
                  <Badge variant="outline">В отпуске</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-accent">
                <Icon name="BarChart3" size={24} />
                <span>Отчеты</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Статистика и аналитика работы кадрового состава.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Всего интендантов:</span>
                  <span className="font-bold text-primary">247</span>
                </div>
                <div className="flex justify-between">
                  <span>Активных:</span>
                  <span className="font-bold text-green-400">198</span>
                </div>
                <div className="flex justify-between">
                  <span>В отпуске:</span>
                  <span className="font-bold text-yellow-400">23</span>
                </div>
                <div className="flex justify-between">
                  <span>На задании:</span>
                  <span className="font-bold text-blue-400">26</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/30 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Zap" size={24} className="text-secondary" />
                <span>Структура отдела</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { position: 'Начальник кадрового отдела', name: 'Адмирал Ксерон', status: 'В штабе' },
                  { position: 'Заместитель начальника', name: 'Капитан Велариус', status: 'На Корусанте' },
                  { position: 'Старший инспектор', name: 'Майор Тарис', status: 'В командировке' },
                  { position: 'Инспектор по кадрам', name: 'Лейтенант Нова', status: 'В отделе' },
                  { position: 'Архивариус', name: 'Сержант Дрок', status: 'В архиве' }
                ].map((officer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border/50">
                    <div>
                      <h4 className="font-semibold text-sm">{officer.position}</h4>
                      <p className="text-muted-foreground text-xs">{officer.name}</p>
                    </div>
                    <Badge variant={officer.status === 'В отделе' || officer.status === 'В штабе' ? 'default' : 'secondary'} className="text-xs">
                      {officer.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Clock" size={24} className="text-accent" />
                <span>График работы</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Основной график</h4>
                  <p className="text-sm text-muted-foreground mb-1">Пн-Пт: 08:00 - 20:00 (Галактическое время)</p>
                  <p className="text-sm text-muted-foreground">Сб-Вс: 10:00 - 16:00 (Дежурный офицер)</p>
                </div>
                
                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Экстренная связь</h4>
                  <p className="text-sm text-muted-foreground mb-1">Круглосуточно через:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Центр управления флотом</li>
                    <li>• Аварийный канал HoloNet</li>
                    <li>• Командный мостик флагмана</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">Важные процедуры</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Прием новых кадров: вторник, четверг</li>
                    <li>• Аттестация: последняя неделя месяца</li>
                    <li>• Отчетность: каждое 1 число</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Emails */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-center justify-center">
              <Icon name="AtSign" size={24} className="text-primary" />
              <span>Официальные контакты кадрового отдела</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { dept: 'Общие вопросы', email: 'hr@rotr-server.galaxy', icon: 'Mail' },
                { dept: 'Прием на службу', email: 'recruitment@rotr-server.galaxy', icon: 'UserPlus' },
                { dept: 'Аттестация кадров', email: 'assessment@rotr-server.galaxy', icon: 'Award' },
                { dept: 'Дисциплинарные вопросы', email: 'discipline@rotr-server.galaxy', icon: 'Shield' },
                { dept: 'Отпуска и больничные', email: 'leave@rotr-server.galaxy', icon: 'Calendar' },
                { dept: 'Экстренная связь', email: 'emergency-hr@rotr-server.galaxy', icon: 'AlertTriangle' }
              ].map((contact, index) => (
                <div key={index} className="p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name={contact.icon} size={16} className="text-primary" />
                    <h4 className="font-semibold text-sm">{contact.dept}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono bg-muted/20 p-2 rounded">{contact.email}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HRSection;