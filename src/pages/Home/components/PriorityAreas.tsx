import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { priorityAreas } from '@/data/content';

export function PriorityAreas() {
  return (
    <Section background="gradient">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Priority Investment Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore sectors with high growth potential and government support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityAreas.map((area) => (
            <Link key={area.id} to="/invest">
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center">
                      <Icon name={area.icon} size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {area.name}
                    </h3>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      View opportunities <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
