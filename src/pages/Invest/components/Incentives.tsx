import { Container, Section, Card, Badge } from '@/components/ui';
import { incentives } from '@/data/content';

const typeLabels: Record<string, { label: string; color: 'primary' | 'accent' | 'success' | 'warning' }> = {
  fiscal: { label: 'Fiscal', color: 'primary' },
  'non-fiscal': { label: 'Non-Fiscal', color: 'accent' },
  environmental: { label: 'Environmental', color: 'success' },
  private: { label: 'Private', color: 'warning' },
};

export function Incentives() {
  const grouped = incentives.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, typeof incentives>);

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Incentives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Attractive benefits designed to maximize your return on investment.
          </p>
        </div>
        <div className="space-y-10">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Badge text={typeLabels[type]?.label || type} color={typeLabels[type]?.color || 'gray'} />
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <Card key={item.id} className="h-full">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
