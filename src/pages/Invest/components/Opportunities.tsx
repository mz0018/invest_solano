import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { investmentSectors } from '@/data/content';

export function Opportunities() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore sectors with high growth potential and government support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentSectors.map((sector) => (
            <Card key={sector.id} hover className="h-full min-w-0">
              <div className="flex items-start gap-4 mb-4 min-w-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center">
                    <Icon name={sector.icon} size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 min-w-0">{sector.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{sector.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
