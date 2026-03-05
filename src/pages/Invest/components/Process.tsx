import { Container, Section, Card } from '@/components/ui';
import { processSteps } from '@/data/content';

export function Process() {
  return (
    <Section background="gradient">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Process of Availing Incentives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined four-step process to get your investment up and running.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  {step.step}
                </div>
                <div className="h-1 w-16 bg-primary-200 rounded mx-auto md:hidden" />
              </div>
              <Card className="text-center h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-3">
                  <div className="w-6 h-1 bg-primary-300 rounded" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
