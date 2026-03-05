import { useEffect, useRef } from 'react';
import L from 'leaflet';

const SOLANO_COORDS: [number, number] = [16.517766, 121.180988];

export function SolanoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: SOLANO_COORDS,
      zoom: 14,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    const marker = L.marker(SOLANO_COORDS, { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="text-align: center;">
        <strong style="font-size: 14px;">Solano, Nueva Vizcaya</strong><br/>
        <span style="font-size: 12px;">Municipality of Solano</span><br/>
        <span style="font-size: 11px; color: #666;">16.5177°N, 121.1810°E</span>
      </div>
    `);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[300px] rounded-lg"
      style={{ zIndex: 1 }}
    />
  );
}
