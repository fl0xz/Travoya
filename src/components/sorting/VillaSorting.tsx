'use client';

import React from 'react';

interface VillaSortingProps {
  onSortChange: (value: string) => void;
  currentSort: string;
}

export const VillaSorting = ({ onSortChange, currentSort }: VillaSortingProps) => {
  const sortOptions = [
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'distance', label: 'Distance to Beach' },
    { value: 'rating', label: 'Guest Rating' },
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}; 