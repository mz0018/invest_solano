import { Container, Section } from '@/components/ui';
import { aboutOverview } from '@/data/content';

export function Overview() {
  return (
    <Section className="pt-24 md:pt-28 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Solano
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {aboutOverview.overview}
          </p>
        </div>
      </Container>
    </Section>
  );
}
