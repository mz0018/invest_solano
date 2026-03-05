import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { peopleItems } from '@/data/content';

export function PeopleAsPower() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            People as Power
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our greatest asset is our people - skilled, motivated, and ready to contribute.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {peopleItems.map((item) => (
            <Card key={item.id} hover className="text-center h-full min-w-0">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-100 text-accent-600 mb-4 flex-shrink-0">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
