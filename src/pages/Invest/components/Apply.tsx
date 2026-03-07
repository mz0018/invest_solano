import { Link } from 'react-router-dom';
import { Container, Section, Button, Card } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { contactInfo } from '@/data/content';

export function Apply() {
  return (
    <Section background="primary">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Investing in Solano
          </h2>
          <p className="text-primary-100 text-lg mb-10">
            Ready to take the next step? Connect with our Investment Desk today.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4">
                <Icon name="Mail" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-primary-100 text-sm">{contactInfo.email}</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4">
                <Icon name="Phone" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-primary-100 text-sm">{contactInfo.phone}</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4">
                <Icon name="MapPinned" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-100 text-sm">{contactInfo.address}</p>
            </Card>
          </div>
          <Link to="/contact" className="inline-block mt-10">
            <Button size="lg" className="!bg-white !text-primary-600 hover:!bg-gray-100">
              Contact Investment Desk
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
