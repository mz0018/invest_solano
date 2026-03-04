import { Container, Section, Card, Badge } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { downloadItems } from '@/data/content';

export function Downloads() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download Center
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access important documents and guides for your investment journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {downloadItems.map((item) => (
            <Card key={item.id} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Icon name="Download" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Badge text={item.fileType} color="gray" />
              <Button variant="outline" size="sm" className="mt-4 w-full">
                Download
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
