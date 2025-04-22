'use client';

import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export function SearchBar() {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Check in - Check out"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaUsers className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105"
        >
          <FaSearch className="h-5 w-5 mr-2" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
} 