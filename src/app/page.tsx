'use client';

import { Navbar } from '../components/layout/Navbar';
import { SearchBar } from '../components/search/SearchBar';
import { VillaCard } from '../components/villa/VillaCard';
import VillaFilters from '../components/filters/VillaFilters';
import type { FilterState } from '../components/filters/VillaFilters';
import { VillaSorting } from '../components/sorting/VillaSorting';
import VillaMap from '../components/map/VillaMap';
import { useState } from 'react';

const mockVillas = [
  {
    id: '1',
    title: 'Holiday Villa in Lanzarote',
    location: 'Playa Blanca, Spain',
    price: 250,
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '1.2 km',
    nearestRestaurant: '8.7 km',
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.8,
    amenities: ['Pool', 'Beach Access', 'WiFi', 'Parking'],
    coordinates: {
      lat: 28.8638,
      lng: -13.8534
    }
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    location: 'Playa Blanca, Spain',
    price: 350,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '0.8 km',
    nearestRestaurant: '1.2 km',
    bedrooms: 4,
    bathrooms: 3,
    rating: 4.9,
    amenities: ['Pool', 'Garden', 'Air Conditioning', 'WiFi'],
    coordinates: {
      lat: 28.8672,
      lng: -13.8602
    }
  },
  {
    id: '3',
    title: 'Modern Beachfront Villa',
    location: 'Puerto del Carmen, Spain',
    price: 420,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '0.3 km',
    nearestRestaurant: '0.5 km',
    bedrooms: 5,
    bathrooms: 4,
    rating: 4.7,
    amenities: ['Beach Access', 'Pool', 'Garden', 'Parking'],
    coordinates: {
      lat: 28.9223,
      lng: -13.6588
    }
  },
  {
    id: '4',
    title: 'Family Villa with Garden',
    location: 'Costa Teguise, Spain',
    price: 280,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '1.0 km',
    nearestRestaurant: '1.5 km',
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.6,
    amenities: ['Garden', 'Pool', 'WiFi', 'Air Conditioning'],
    coordinates: {
      lat: 28.9972,
      lng: -13.4925
    }
  },
  {
    id: '5',
    title: 'Exclusive Ocean View Villa',
    location: 'Puerto Calero, Spain',
    price: 550,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '2.0 km',
    nearestRestaurant: '0.8 km',
    bedrooms: 6,
    bathrooms: 5,
    rating: 5.0,
    amenities: ['Pool', 'Beach Access', 'Garden', 'Parking'],
    coordinates: {
      lat: 28.9147,
      lng: -13.7019
    }
  },
  {
    id: '6',
    title: 'Cozy Villa with Private Pool',
    location: 'Yaiza, Spain',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
    nearestSupermarket: '1.5 km',
    nearestRestaurant: '2.0 km',
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.5,
    amenities: ['Pool', 'WiFi', 'Air Conditioning', 'Parking'],
    coordinates: {
      lat: 28.9522,
      lng: -13.7674
    }
  },
];

export default function Home() {
  const [currentSort, setCurrentSort] = useState('price_asc');
  const [showMap, setShowMap] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000] as [number, number],
    maxSupermarketDistance: 5,
    maxRestaurantDistance: 5,
    amenities: [] as string[]
  });

  // Convert distance string to number (e.g., "1.2 km" -> 1.2)
  const parseDistance = (distance: string) => {
    return parseFloat(distance.split(' ')[0]);
  };

  // Filter villas based on current filters
  const filteredVillas = mockVillas.filter(villa => {
    const supermarketDistance = parseDistance(villa.nearestSupermarket);
    const restaurantDistance = parseDistance(villa.nearestRestaurant);

    return (
      villa.price >= filters.priceRange[0] &&
      villa.price <= filters.priceRange[1] &&
      supermarketDistance <= filters.maxSupermarketDistance &&
      restaurantDistance <= filters.maxRestaurantDistance
    );
  });

  // Sort villas based on current sort option
  const sortedVillas = [...filteredVillas].sort((a, b) => {
    switch (currentSort) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Holiday Villas in Lanzarote</h1>
        
        {/* Search and Filters Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-grow">
            <SearchBar />
          </div>
          <VillaFilters
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>

        {/* Main Content */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <VillaSorting
              currentSort={currentSort}
              onSortChange={setCurrentSort}
            />
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {sortedVillas.length} {sortedVillas.length === 1 ? 'villa' : 'villas'} found
              </span>
              <button
                onClick={() => setShowMap(!showMap)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                {showMap ? 'Show List' : 'Show Map'}
              </button>
            </div>
          </div>

          {showMap ? (
            <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden">
              <VillaMap villas={sortedVillas} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedVillas.map((villa) => (
                <div key={villa.id} className="transition-shadow duration-300 hover:shadow-xl rounded-lg">
                  <VillaCard {...villa} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 