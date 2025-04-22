'use client';

import { Navbar } from '../../components/layout/Navbar';

export default function ListYourVilla() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">List Your Villa</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Villa Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="mt-1 block w-full rounded-md"
                    placeholder="e.g., Luxury Beachfront Villa"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="mt-1 block w-full rounded-md"
                    placeholder="e.g., Playa Blanca, Lanzarote"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    className="mt-1 block w-full rounded-md"
                    min="1"
                  />
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    id="bathrooms"
                    className="mt-1 block w-full rounded-md"
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price per Night (£)
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="mt-1 block w-full rounded-md"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Pool', 'Beach Access', 'Garden', 'Air Conditioning', 'WiFi', 'Parking'].map((amenity) => (
                  <label key={amenity} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Upload Photos
                </button>
                <p className="mt-2 text-sm text-gray-500">
                  Upload high-quality photos of your villa (max 10 photos)
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md"
                placeholder="Describe your villa..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
              >
                List Your Villa
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 