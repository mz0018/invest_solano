import { Container, Section } from '@/components/ui';
import { whyInvestItems } from '@/data/content';
import { Icon } from '@/components/ui/Icon';

export function WhySolano() {
  return (
    <Section className="pt-24 md:pt-28 pb-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Solano?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strategic location, cost-competitive advantages, and a business-friendly environment make Solano the ideal investment destination.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyInvestItems.map((item) => (
            <div key={item.id} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
