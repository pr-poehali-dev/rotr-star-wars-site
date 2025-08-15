import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GuideSection from '@/components/GuideSection';
import RulesSection from '@/components/RulesSection';
import HRSection from '@/components/HRSection';
import FAQSection from '@/components/FAQSection';

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
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Guide Section */}
      <GuideSection />

      {/* Rules Section */}
      <RulesSection />

      {/* HR Section */}
      <HRSection />

      {/* FAQ Section */}
      <FAQSection />

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