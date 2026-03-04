import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Section, Button } from '@/components/ui';

export function CTA() {
  return (
    <Section background="primary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Step Into Progress. Invest Now in Solano.
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Take the first step towards growing your business in a municipality committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/invest">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100"
              >
                Start Investment Process
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-primary-700"
              >
                Contact Investment Desk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
