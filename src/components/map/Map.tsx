'use client';

import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  markers: {
    lat: number;
    lng: number;
  }[];
  zoom?: number;
}

export default function Map({ defaultCenter, markers, zoom = 13 }: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = useMemo(() => ({ lat: defaultCenter.lat, lng: defaultCenter.lng }), [defaultCenter]);

  if (loadError) {
    return (
      <div className="h-[400px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 text-sm">Unable to load map</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-[400px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="w-full h-full rounded-lg"
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
} 