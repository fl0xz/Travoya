'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';

interface Villa {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface VillaMapProps {
  villas: Villa[];
}

// Fix for default marker icon in Leaflet with Next.js
const markerIcon = new Icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const VillaMap: React.FC<VillaMapProps> = ({ villas }) => {
  const center = { lat: 28.9637, lng: -13.5477 }; // Lanzarote's approximate center

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {villas.map((villa) => (
        <Marker
          key={villa.id}
          position={[villa.coordinates.lat, villa.coordinates.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="p-2 max-w-[200px]">
              <Link href={`/villa/${villa.id}`} className="block hover:text-blue-600">
                <h3 className="font-semibold text-sm mb-1">{villa.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{villa.location}</p>
                <p className="text-sm font-semibold">£{villa.price} / night</p>
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}; 