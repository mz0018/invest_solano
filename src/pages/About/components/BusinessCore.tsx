import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { businessCoreItems } from '@/data/content';

export function BusinessCore() {
  return (
    <Section background="gradient">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Core
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The heartbeat of commerce and trade in the region.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessCoreItems.map((item) => (
            <Card key={item.id} hover className="text-center h-full min-w-0">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4 flex-shrink-0">
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
