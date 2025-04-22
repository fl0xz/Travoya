'use client';

import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { Slider } from '@mui/material';

export interface FilterState {
  priceRange: [number, number];
  maxSupermarketDistance: number;
  maxRestaurantDistance: number;
  amenities: string[];
}

interface VillaFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function VillaFilters({ filters, onFiltersChange }: VillaFiltersProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePriceRangeChange = (_event: Event | null, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) return;
    onFiltersChange({
      ...filters,
      priceRange: newValue as [number, number]
    });
  };

  const handleSupermarketDistanceChange = (_event: Event | null, newValue: number | number[]) => {
    const distance = Array.isArray(newValue) ? newValue[0] : newValue;
    onFiltersChange({
      ...filters,
      maxSupermarketDistance: distance
    });
  };

  const handleRestaurantDistanceChange = (_event: Event | null, newValue: number | number[]) => {
    const distance = Array.isArray(newValue) ? newValue[0] : newValue;
    onFiltersChange({
      ...filters,
      maxRestaurantDistance: distance
    });
  };

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

  const handleAmenitiesChange = (amenity: string) => {
    onFiltersChange({
      ...filters,
      amenities: filters.amenities.includes(amenity)
        ? filters.amenities.filter((a: string) => a !== amenity)
        : [...filters.amenities, amenity]
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={(): void => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
      >
        <FaFilter className="text-gray-500" />
        <span className="hidden sm:inline">Filters</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 p-3 bg-white border rounded-lg shadow-lg w-64 z-50">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Price Range (£)
              </label>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                min={0}
                max={1000}
                valueLabelDisplay="auto"
                size="small"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>£{filters.priceRange[0]}</span>
                <span>£{filters.priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Max Distance to Supermarket (km)
              </label>
              <Slider
                value={filters.maxSupermarketDistance}
                onChange={handleSupermarketDistanceChange}
                min={0}
                max={5}
                step={0.1}
                valueLabelDisplay="auto"
                size="small"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Max Distance to Restaurants (km)
              </label>
              <Slider
                value={filters.maxRestaurantDistance}
                onChange={handleRestaurantDistanceChange}
                min={0}
                max={5}
                step={0.1}
                valueLabelDisplay="auto"
                size="small"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 