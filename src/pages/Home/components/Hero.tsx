import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Button, Section } from '@/components/ui';
import { heroSection } from '@/data/content';

const VIMEO_VIDEO_ID = '1128761634';

export function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-600 via-green-700 to-green-900" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {heroSection.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              {heroSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/invest">
                <Button size="lg" className="w-full sm:w-auto">
                  {heroSection.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  {heroSection.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden shadow-2xl border border-white/20">
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&muted=1&controls=1`}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Aerial video of Solano"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
