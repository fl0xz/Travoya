import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaCar, FaUmbrellaBeach, FaStore, FaUtensils } from 'react-icons/fa';

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
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <FaWifi />;
      case 'pool': return <FaSwimmingPool />;
      case 'parking': return <FaCar />;
      case 'beach access': return <FaUmbrellaBeach />;
      default: return null;
    }
  };

  return (
    <Link href={`/villa/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="flex flex-col">
          {/* Image section */}
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-md">
              <span className="text-xs font-medium">★ {rating.toFixed(1)}</span>
            </div>
            <button 
              className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
              onClick={(e) => {
                e.preventDefault();
                // Add to favorites functionality here
              }}
            >
              <FaHeart className="w-3 h-3 text-gray-400 hover:text-red-500" />
            </button>
          </div>

          {/* Details section */}
          <div className="p-3 flex flex-col">
            <div className="space-y-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1 mb-0.5">{title}</h3>
                <div className="flex items-center text-xs text-gray-600">
                  <FaMapMarkerAlt className="w-3 h-3 mr-1 flex-shrink-0" />
                  <p className="line-clamp-1">{location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500 border-t border-b border-gray-100 py-1.5">
                <span>{bedrooms} beds</span>
                <span>•</span>
                <span>{bathrooms} baths</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {amenities.slice(0, 4).map(amenity => {
                  const icon = getAmenityIcon(amenity);
                  return icon && (
                    <div 
                      key={amenity}
                      className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-md text-blue-600 hover:bg-blue-100"
                      title={amenity}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-1 border-t border-gray-100 pt-1.5">
                <div className="flex items-center text-xs text-gray-500" title="Distance to nearest supermarket">
                  <FaStore className="w-3 h-3 mr-1.5 flex-shrink-0" />
                  <span>{nearestSupermarket}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500" title="Distance to nearest restaurant">
                  <FaUtensils className="w-3 h-3 mr-1.5 flex-shrink-0" />
                  <span>{nearestRestaurant}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-xs pt-2 border-t border-gray-100 mt-2">
              <span className="font-medium">£{price}</span>
              <span className="text-gray-600">per night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}; 