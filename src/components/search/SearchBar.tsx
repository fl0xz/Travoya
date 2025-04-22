'use client';

import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

// Define the shape of search parameters
export type SearchParams = {
  location: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  infants: number;
};

type SearchBarProps = {
  onSearch: (params: SearchParams) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const locations = [
    'Playa Blanca, Spain',
    'Puerto del Carmen, Spain',
    'Costa Teguise, Spain',
    'Yaiza, Spain',
    'Puerto Calero, Spain',
    'Tías, Spain',
  ];
  const [location, setLocation] = useState('');
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">Where are you going?</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
          <div
            onClick={() => setShowDateOptions(!showDateOptions)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          >
            {checkIn || 'Check in'} - {checkOut || 'Check out'}
          </div>
          {showDateOptions && (
            <div className="absolute z-10 top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Check in</label>
                <input
                  type="date"
                  className="block w-full mt-1 border border-gray-300 rounded-lg py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Check out</label>
                <input
                  type="date"
                  className="block w-full mt-1 border border-gray-300 rounded-lg py-1 px-2 focus:ring-blue-500 focus:border-blue-500"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaUsers className="h-5 w-5 text-gray-400" />
          </div>
          <div
            onClick={() => setShowGuestOptions(!showGuestOptions)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          >
            {adults + childrenCount + infants} guest{adults + childrenCount + infants !== 1 ? 's' : ''}
          </div>
          {showGuestOptions && (
            <div className="absolute z-10 top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Adults</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-sm w-4 text-center">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Children</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-sm w-4 text-center">{childrenCount}</span>
                    <button
                      onClick={() => setChildrenCount(childrenCount + 1)}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Infants</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setInfants(Math.max(0, infants - 1))}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-sm w-4 text-center">{infants}</span>
                    <button
                      onClick={() => setInfants(infants + 1)}
                      className="w-8 h-8 border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => onSearch({ location, checkIn, checkOut, adults, children: childrenCount, infants })}
          className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105"
        >
          <FaSearch className="h-5 w-5 mr-2" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
} 