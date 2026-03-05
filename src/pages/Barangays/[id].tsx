import { useParams, Link } from 'react-router-dom';
import { Container, Section, Card } from '@/components/ui';
import { getBarangayById } from '@/data/barangays';

export function BarangayDetail() {
  const { id } = useParams<{ id: string }>();
  const barangay = getBarangayById(id || '');

  if (!barangay) {
    return (
      <Section className="min-h-screen bg-gray-50">
        <Container>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Barangay Not Found
            </h1>
            <Link to="/barangays" className="text-primary-600 hover:underline">
              Back to all barangays
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const getImageUrl = (brgyId: string) => {
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
    return imageMap[brgyId] || '/img/brgy/communal.webp';
  };

  return (
    <Section className="min-h-screen bg-gray-50 py-8">
      <Container>
        <Link
          to="/barangays"
          className="inline-flex items-center text-primary-600 hover:underline mb-6"
        >
          ← Back to all barangays
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <img
                src={getImageUrl(barangay.id)}
                alt={barangay.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {barangay.name}
                </h1>
                {barangay.patronFiesta && (
                  <p className="text-white/90">
                    Patronal Fiesta: {barangay.patronFiesta}
                  </p>
                )}
              </div>
            </div>

            <Card className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Brief History</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {barangay.briefHistory}
              </p>
            </Card>

            {(barangay.developmentThrust?.vision || barangay.developmentThrust?.mission) && (
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Development Thrust</h2>
                {barangay.developmentThrust.vision && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Vision</h3>
                    <p className="text-gray-600">{barangay.developmentThrust.vision}</p>
                  </div>
                )}
                {barangay.developmentThrust.mission && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Mission</h3>
                    {Array.isArray(barangay.developmentThrust.mission) ? (
                      <ul className="list-disc list-inside text-gray-600">
                        {barangay.developmentThrust.mission.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{barangay.developmentThrust.mission}</p>
                    )}
                  </div>
                )}
              </Card>
            )}

            {barangay.notes && (
              <Card className="mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Notes</h2>
                <p className="text-gray-600">{barangay.notes}</p>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            {(barangay.profile || barangay.dateOfCreation || barangay.legalBasis) && (
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Profile</h2>
                <div className="space-y-3">
                  {barangay.dateOfCreation && (
                    <div>
                      <span className="text-sm text-gray-500">Date of Creation</span>
                      <p className="font-medium">{barangay.dateOfCreation}</p>
                    </div>
                  )}
                  {barangay.legalBasis && (
                    <div>
                      <span className="text-sm text-gray-500">Legal Basis</span>
                      <p className="font-medium">{barangay.legalBasis}</p>
                    </div>
                  )}
                  {barangay.profile?.populationTotal && (
                    <div>
                      <span className="text-sm text-gray-500">Population</span>
                      <p className="font-medium">{barangay.profile.populationTotal.toLocaleString()}</p>
                    </div>
                  )}
                  {barangay.profile?.landAreaHectares && (
                    <div>
                      <span className="text-sm text-gray-500">Land Area</span>
                      <p className="font-medium">{barangay.profile.landAreaHectares} hectares</p>
                    </div>
                  )}
                  {barangay.profile?.landArea && (
                    <div>
                      <span className="text-sm text-gray-500">Land Area</span>
                      <p className="font-medium">{barangay.profile.landArea}</p>
                    </div>
                  )}
                  {barangay.profile?.puroks && (
                    <div>
                      <span className="text-sm text-gray-500">Puroks</span>
                      <p className="font-medium">{barangay.profile.puroks}</p>
                    </div>
                  )}
                  {barangay.profile?.mainEconomicActivity && (
                    <div>
                      <span className="text-sm text-gray-500">Main Economic Activity</span>
                      <p className="font-medium">{barangay.profile.mainEconomicActivity}</p>
                    </div>
                  )}
                  {barangay.profile?.registeredVoters && (
                    <div>
                      <span className="text-sm text-gray-500">Registered Voters</span>
                      <p className="font-medium">{barangay.profile.registeredVoters.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Officials</h2>
              <div className="space-y-3">
                {barangay.officials.map((official, idx) => (
                  <div key={idx} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                    <p className="font-medium text-gray-900">{official.name}</p>
                    <p className="text-sm text-primary-600">{official.position}</p>
                    {official.contact && (
                      <p className="text-xs text-gray-500">{official.contact}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
