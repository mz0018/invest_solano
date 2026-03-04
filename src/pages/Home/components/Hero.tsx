import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Button, Section } from '@/components/ui';
import { heroSection } from '@/data/content';

export function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {heroSection.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {heroSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/invest">
                <Button size="lg" className="w-full sm:w-auto">
                  {heroSection.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {heroSection.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-200 to-accent-200 overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-primary-600 text-opacity-50">
                <span className="text-2xl font-medium">Aerial Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
