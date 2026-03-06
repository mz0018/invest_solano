import { Link } from 'react-router-dom';
import {
  Overview,
  Lens,
  MunicipalProfile,
  BusinessCore,
  PeopleAsPower,
} from './components';
import { Button, Container, Section, FadeIn } from '@/components/ui';

export function About() {
  return (
    <>
      <FadeIn>
        <Overview />
      </FadeIn>
      <FadeIn delay={100}>
        <Lens />
      </FadeIn>
      <FadeIn delay={200}>
        <MunicipalProfile />
      </FadeIn>
      <FadeIn delay={300}>
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Explore Our Barangays
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Discover the 22 barangays that make up Solano, each with its own unique character and community.
              </p>
              <Link to="/barangays">
                <Button>View All Barangays</Button>
              </Link>
            </div>
          </Container>
        </Section>
      </FadeIn>
      <FadeIn delay={400}>
        <BusinessCore />
      </FadeIn>
      <FadeIn delay={500}>
        <PeopleAsPower />
      </FadeIn>
    </>
  );
}
