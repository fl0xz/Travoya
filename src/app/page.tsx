'use client';

import { Navbar } from '../components/layout/Navbar';
import { SearchBar } from '../components/search/SearchBar';
import { VillaCard } from '../components/villa/VillaCard';
import { VillaFilters } from '../components/filters/VillaFilters';
import { VillaSorting } from '../components/sorting/VillaSorting';
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
  },
];

export default function Home() {
  const [currentSort, setCurrentSort] = useState('price_asc');
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Holiday Villas in Lanzarote</h1>
        
        {/* Search and Filters Section */}
        <div className="space-y-4 mb-8">
          <SearchBar />
          <VillaFilters />
        </div>

        {/* Main Content */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <VillaSorting
              currentSort={currentSort}
              onSortChange={setCurrentSort}
            />
            <button
              onClick={() => setShowMap(!showMap)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              {showMap ? 'Show List' : 'Show Map'}
            </button>
          </div>

          {showMap ? (
            <div className="h-[600px] bg-gray-100 rounded-lg">
              {/* Map component will be added here */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Map view coming soon...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockVillas.map((villa) => (
                <VillaCard key={villa.id} {...villa} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 