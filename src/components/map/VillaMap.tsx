import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import Link from 'next/link';

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

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 28.9637, // Lanzarote's approximate center
  lng: -13.5477,
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
};

export const VillaMap: React.FC<VillaMapProps> = ({ villas }) => {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        options={options}
      >
        {villas.map((villa) => (
          <Marker
            key={villa.id}
            position={villa.coordinates}
            onClick={() => setSelectedVilla(villa)}
          />
        ))}

        {selectedVilla && (
          <InfoWindow
            position={selectedVilla.coordinates}
            onCloseClick={() => setSelectedVilla(null)}
          >
            <div className="p-2 max-w-[200px]">
              <Link href={`/villa/${selectedVilla.id}`} className="block">
                <h3 className="font-semibold text-sm mb-1">{selectedVilla.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{selectedVilla.location}</p>
                <p className="text-sm font-semibold">£{selectedVilla.price} / night</p>
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}; 