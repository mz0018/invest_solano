import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { whyInvestItems } from '@/data/content';

export function WhyInvest() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Invest in Solano
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make Solano the ideal destination for your next investment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyInvestItems.map((item) => (
            <Card key={item.id} hover className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Link
                to="/invest"
                className="inline-flex items-center text-primary-600 font-medium text-sm hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
