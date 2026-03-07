import { Container, Section, StatsCard } from '@/components/ui';
import { stats } from '@/data/content';

export function Stats() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solano by the Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A thriving municipality with strong economic indicators and endless opportunities for growth.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
