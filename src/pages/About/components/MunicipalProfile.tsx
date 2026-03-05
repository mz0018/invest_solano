import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { municipalItems } from '@/data/content';

export function MunicipalProfile() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Municipal Profile
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding Solano's geographic and demographic landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {municipalItems.map((item) => (
            <Card key={item.id} className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Icon name="MapPin" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
