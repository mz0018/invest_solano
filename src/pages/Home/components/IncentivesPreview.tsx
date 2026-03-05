import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Card, Button } from '@/components/ui';
import { incentivesPreview } from '@/data/content';

export function IncentivesPreview() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competitive Incentives for Investors
            </h2>
            <p className="text-gray-600">
              Attractive benefits designed to maximize your return on investment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {incentivesPreview.map((item) => (
              <Card key={item.id} className="text-center h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/invest">
              <Button variant="outline" size="lg">
                View Full Incentives
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
