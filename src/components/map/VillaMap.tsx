'use client';

import dynamic from 'next/dynamic';
import { Villa } from '@/types';

const Map = dynamic(() => import('./Map').then(mod => mod.default), {
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse"></div>,
  ssr: false
});

interface VillaMapProps {
  villas: Villa[];
}

const VillaMap: React.FC<VillaMapProps> = ({ villas }) => {
  const markers = villas.map(villa => ({
    lat: villa.coordinates.lat,
    lng: villa.coordinates.lng,
    title: villa.title,
    description: villa.location
  }));

  const defaultCenter = markers[0] || { lat: 28.8638, lng: -13.8534 };

  return (
    <Map
      defaultCenter={defaultCenter}
      markers={markers}
      zoom={12}
    />
  );
};

export default VillaMap; 