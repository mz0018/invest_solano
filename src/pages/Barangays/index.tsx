import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section, Card } from '@/components/ui';
import { barangays } from '@/data/barangays';

export function Barangays() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBarangays = barangays.filter((brgy) =>
    brgy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getImageUrl = (id: string) => {
    const imageMap: Record<string, string> = {
      'aggub': '/img/brgy/Aggub.webp',
      'bagahabag': '/img/brgy/Bagahabag.webp',
      'bangaan': '/img/brgy/Bangaan.webp',
      'bangar': '/img/brgy/Bangar.webp',
      'bascaran': '/img/brgy/Bascaran.webp',
      'communal': '/img/brgy/communal.webp',
      'concepcion': '/img/brgy/Concepcion.webp',
      'curifang': '/img/brgy/Curifang.webp',
      'dadap': '/img/brgy/Dadap.webp',
      'lactawan': '/img/brgy/Lactawan.webp',
      'osmena': '/img/brgy/Osmena.webp',
      'pd-galima': '/img/brgy/PD-Galima.webp',
      'poblacion-north': '/img/brgy/Poblacion-North.webp',
      'poblacion-south': '/img/brgy/Poblacion-South.webp',
      'quezon': '/img/brgy/Quezon.webp',
      'quirino': '/img/brgy/Quirino.webp',
      'roxas': '/img/brgy/Roxas.webp',
      'san-juan': '/img/brgy/San-Juan.webp',
      'san-luis': '/img/brgy/San-Luis.webp',
      'tucal': '/img/brgy/Tucal.webp',
      'uddiawan': '/img/brgy/Uddiawan.webp',
      'wacal': '/img/brgy/Wacal.webp',
    };
    return imageMap[id] || '/img/brgy/communal.webp';
  };

  return (
    <Section className="min-h-screen bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Barangays of Solano
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore the 22 barangays of Solano, Nueva Vizcaya. Each with its own unique history, 
            culture, and community.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search barangays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBarangays.map((brgy) => (
            <Link key={brgy.id} to={`/barangays/${brgy.id}`}>
              <Card hover className="h-full p-0 overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={getImageUrl(brgy.id)}
                    alt={brgy.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{brgy.name}</h3>
                    {brgy.patronFiesta && (
                      <p className="text-white/80 text-sm">
                        Fiesta: {brgy.patronFiesta}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {brgy.briefHistory.substring(0, 120)}...
                  </p>
                  {brgy.profile?.populationTotal && (
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <span className="font-medium text-primary-600">
                        Pop: {brgy.profile.populationTotal.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredBarangays.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No barangays found matching "{searchQuery}"
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
