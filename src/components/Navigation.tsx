import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
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
              { id: 'hr', label: 'Кадровый отдел', icon: 'Users' },
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
  );
};

export default Navigation;