'use client';

import React, { useState } from 'react';

interface FilterState {
  priceRange: [number, number];
  location: string;
  bedrooms: number | '';
  amenities: string[];
  maxSupermarketDistance: number;
  maxRestaurantDistance: number;
}

export const VillaFilters = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    location: '',
    bedrooms: '',
    amenities: [],
    maxSupermarketDistance: 5,
    maxRestaurantDistance: 5,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const locations = [
    'All Locations',
    'Playa Blanca',
    'Puerto del Carmen',
    'Costa Teguise',
    'Puerto Calero',
    'Yaiza',
  ];

  const amenitiesList = [
    'Pool',
    'Beach Access',
    'Garden',
    'Air Conditioning',
    'WiFi',
    'Parking',
  ];

  const handleAmenityToggle = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-6">
          {/* Price Range */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Price:</span>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [parseInt(e.target.value), prev.priceRange[1]]
                }))}
                className="w-24 rounded-md text-sm"
                min="0"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                }))}
                className="w-24 rounded-md text-sm"
                min="0"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Beds:</span>
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                bedrooms: e.target.value ? parseInt(e.target.value) : ''
              }))}
              className="w-28 rounded-md text-sm"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}+ beds</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Distance Filters */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Supermarket:</span>
            <select
              value={filters.maxSupermarketDistance}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                maxSupermarketDistance: parseInt(e.target.value)
              }))}
              className="w-36 rounded-md text-sm"
            >
              <option value="5">Any distance</option>
              <option value="0.5">Under 0.5 km</option>
              <option value="1">Under 1 km</option>
              <option value="2">Under 2 km</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Restaurant:</span>
            <select
              value={filters.maxRestaurantDistance}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                maxRestaurantDistance: parseInt(e.target.value)
              }))}
              className="w-36 rounded-md text-sm"
            >
              <option value="5">Any distance</option>
              <option value="0.5">Under 0.5 km</option>
              <option value="1">Under 1 km</option>
              <option value="2">Under 2 km</option>
            </select>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {isExpanded ? 'Show less' : 'More filters'}
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="p-4 border-t">
          <div className="grid grid-cols-3 gap-4">
            {amenitiesList.map(amenity => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="rounded text-blue-600"
                />
                <span className="text-sm">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 