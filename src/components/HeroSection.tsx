import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;