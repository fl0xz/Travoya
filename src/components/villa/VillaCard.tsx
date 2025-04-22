import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VillaCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  nearestSupermarket: string;
  nearestRestaurant: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  amenities: string[];
}

export const VillaCard: React.FC<VillaCardProps> = ({
  id,
  title,
  location,
  price,
  imageUrl,
  nearestSupermarket,
  nearestRestaurant,
  bedrooms,
  bathrooms,
  rating,
  amenities,
}) => {
  return (
    <Link href={`/villa/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md">
            <span className="text-sm font-semibold">★ {rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{location}</p>
          
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
            <span>{bedrooms} beds</span>
            <span>•</span>
            <span>{bathrooms} baths</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {amenities.slice(0, 3).map(amenity => (
              <span 
                key={amenity}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {amenity}
              </span>
            ))}
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <p>Nearest Supermarket: {nearestSupermarket}</p>
            <p>Nearest Restaurant: {nearestRestaurant}</p>
          </div>

          <div className="mt-4">
            <div>
              <span className="text-lg font-bold">£{price}</span>
              <span className="text-gray-600"> / night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}; 