'use client';

import { Navbar } from '../../../components/layout/Navbar';
import { useState } from 'react';
import { FaStar, FaBed, FaBath, FaSwimmingPool, FaWifi, FaParking, FaUmbrellaBeach, FaSnowflake, FaTree, FaPlane, FaInfoCircle, FaShoppingBag, FaUtensils, FaTv, FaCoffee, FaHotTub, FaFan, FaDoorOpen, FaKey, FaShower, FaToilet, FaSink, FaChair, FaTable, FaGlassMartiniAlt, FaSwimmer, FaSun, FaMoon, FaHeart, FaHome, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import Map from '@/components/map/Map';
import Link from 'next/link';

const mockVilla = {
  id: '1',
  title: 'Luxury Villa with Private Pool',
  location: 'Playa Blanca, Lanzarote',
  price: 250,
  imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop',
  nearestSupermarket: '1.2 km',
  nearestRestaurant: '8.7 km',
  bedrooms: 3,
  bathrooms: 2,
  rating: 4.8,
  maxGuests: 6,
  description: 'A stunning modern villa located in the heart of Playa Blanca. This spacious property offers breathtaking ocean views and is just a short walk from the beach. Perfect for families or groups looking for a comfortable and relaxing stay in Lanzarote.',
  detailedDescription: 'Experience luxury living in this beautifully designed villa that combines modern comfort with traditional Canarian architecture. The property features a private heated pool, spacious outdoor dining area, and stunning views of the Atlantic Ocean. The villa is fully equipped with modern amenities and offers a perfect blend of indoor and outdoor living spaces.',
  amenities: [
    { name: 'Private Pool', icon: FaSwimmingPool, category: 'outdoor' },
    { name: 'Air Conditioning', icon: FaSnowflake, category: 'comfort' },
    { name: 'WiFi', icon: FaWifi, category: 'connectivity' },
    { name: 'Parking', icon: FaParking, category: 'transport' },
    { name: 'Beach Access', icon: FaUmbrellaBeach, category: 'location' },
    { name: 'Smart TV', icon: FaTv, category: 'entertainment' },
    { name: 'Coffee Maker', icon: FaCoffee, category: 'kitchen' },
    { name: 'Hot Tub', icon: FaHotTub, category: 'luxury' },
    { name: 'Ceiling Fans', icon: FaFan, category: 'comfort' },
    { name: 'Private Entrance', icon: FaDoorOpen, category: 'privacy' },
    { name: 'Safe', icon: FaKey, category: 'security' },
    { name: 'Outdoor Shower', icon: FaShower, category: 'outdoor' },
    { name: 'Bidet', icon: FaToilet, category: 'bathroom' },
    { name: 'Double Sink', icon: FaSink, category: 'bathroom' },
    { name: 'Patio Furniture', icon: FaChair, category: 'outdoor' },
    { name: 'Dining Table', icon: FaTable, category: 'kitchen' },
    { name: 'Wine Cooler', icon: FaGlassMartiniAlt, category: 'kitchen' },
    { name: 'Pool Toys', icon: FaSwimmer, category: 'outdoor' },
    { name: 'Sun Loungers', icon: FaSun, category: 'outdoor' },
    { name: 'Outdoor Lighting', icon: FaMoon, category: 'outdoor' },
  ],
  houseRules: [
    'No smoking inside the villa',
    'No pets allowed',
    'No parties or events',
    'Quiet hours after 10 PM',
    'Maximum 6 guests',
    'Check-in after 3 PM',
    'Check-out before 11 AM',
  ],
  availability: {
    bookedDates: [
      '2025-07-15',
      '2025-07-16',
      '2025-07-17',
      '2025-08-01',
      '2025-08-02',
      '2025-08-03',
    ],
  },
  images: [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop',
  ],
  host: {
    id: '1',
    name: 'Maria Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    joined: '2018',
    responseRate: '98%',
    responseTime: 'within an hour',
    isOnline: true,
  },
  reviews: [
    {
      id: 1,
      author: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
      rating: 5,
      date: 'March 2023',
      comment: 'Amazing villa with stunning views. The pool was perfect and the location was ideal for exploring Playa Blanca.',
    },
    {
      id: 2,
      author: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
      rating: 4,
      date: 'February 2023',
      comment: 'Great stay overall. The villa was clean and well-equipped. The only minor issue was the distance to the nearest restaurant.',
    },
  ],
  coordinates: {
    lat: 28.8638, // Playa Blanca coordinates
    lng: -13.8534
  }
};

// Define Flight type for fetched flights
interface Flight {
  id: number;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  departureAirport: string;
  arrivalAirport: string;
  date: string;
  price: number;
}

export default function VillaPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [adults, setAdults] = useState(2);
  const [childrenOver2, setChildrenOver2] = useState(0);
  const [childrenUnder2, setChildrenUnder2] = useState(0);
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);

  const [origin, setOrigin] = useState('LTN');
  const departureAirports = [
    { code: 'LTN', label: 'London Luton (LTN)' },
    { code: 'LHR', label: 'London Heathrow (LHR)' },
    { code: 'MAN', label: 'Manchester (MAN)' },
    { code: 'DUB', label: 'Dublin (DUB)' },
  ];
  const DESTINATION_AIRPORT = 'ACE';
  const [filteredFlights, setFilteredFlights] = useState<Flight[] | null>(null);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [selectedFlightId, setSelectedFlightId] = useState<number | null>(null);
  // Calculate nights between dates
  const nights = checkInDate && checkOutDate
    ? Math.max(1, Math.round((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const searchFlights = async () => {
    if (!checkInDate) return;
    setLoadingFlights(true);
    setFilteredFlights(null);
    setSelectedFlightId(null);
    try {
      const res = await fetch(`/api/flights?origin=${origin}&dest=${DESTINATION_AIRPORT}&date=${checkInDate}`);
      const data = await res.json();
      setFilteredFlights(data.flights);
    } catch (err) {
      console.error(err);
      setFilteredFlights([]);
    }
    setLoadingFlights(false);
  };

  const openGoogleFlights = () => {
    if (!checkInDate || !checkOutDate) return;
    const destAirport = DESTINATION_AIRPORT;
    const pax = `${adults},${childrenOver2},${childrenUnder2}`;
    const url = `https://www.google.com/travel/flights#search;f=${origin};t=${destAirport};d=${checkInDate};r=${checkOutDate};px=${pax}`;
    window.open(url, '_blank');
  };

  const openGoogleFlightsForFlight = (flight: Flight) => {
    if (!checkInDate || !checkOutDate) return;
    const destAirport = DESTINATION_AIRPORT;
    const pax = `${adults},${childrenOver2},${childrenUnder2}`;
    const d = checkInDate;
    const url = `https://www.google.com/travel/flights#search;f=${origin};t=${destAirport};d=${d};r=${checkOutDate};px=${pax}`;
    window.open(url, '_blank');
  };

  const totalGuests = adults + childrenOver2 + childrenUnder2;

  const additionalFees = {
    cleaningFee: 50,
    serviceFee: 30,
    localTax: 20,
  };

  const calculateTotal = () => {
    const villaCost = mockVilla.price * nights;
    const fees = additionalFees.cleaningFee + additionalFees.serviceFee + additionalFees.localTax;
    const flightCost = filteredFlights?.find(f => f.id === selectedFlightId)?.price || 0;
    return villaCost + fees + flightCost;
  };

  return (
    <>
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes takeoff {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: translate(-20px, -20px) rotate(360deg);
            opacity: 1;
          }
        }
        .book-now-button:hover .logo-icon {
          animation: takeoff 0.6s ease-out forwards;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
            <div className="md:col-span-2 row-span-2 h-64 sm:h-auto">
              <img
                src={mockVilla.images[selectedImage]}
                alt={mockVilla.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {mockVilla.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="cursor-pointer hidden md:block"
                onClick={() => setSelectedImage(index + 1)}
              >
                <img
                  src={image}
                  alt={`${mockVilla.title} - ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Mobile Image Navigation */}
          <div className="flex items-center justify-between mb-4 md:hidden">
            <button 
              onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : mockVilla.images.length - 1))}
              className="p-2 bg-white rounded-full shadow-md"
            >
              ←
            </button>
            <span className="text-sm text-gray-500">
              {selectedImage + 1} / {mockVilla.images.length}
            </span>
            <button 
              onClick={() => setSelectedImage(prev => (prev < mockVilla.images.length - 1 ? prev + 1 : 0))}
              className="p-2 bg-white rounded-full shadow-md"
            >
              →
            </button>
          </div>

          {!showAllImages && (
            <button
              onClick={() => setShowAllImages(true)}
              className="w-full py-2 sm:py-3 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 mb-4 sm:mb-8"
            >
              Show all photos
            </button>
          )}

          {showAllImages && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
              {mockVilla.images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer aspect-square"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${mockVilla.title} - ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mobile Navigation Bar */}
          <div className="md:hidden sticky top-0 bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm z-50 mb-6">
            <div className="flex justify-center overflow-x-auto hide-scrollbar">
              <a href="#about" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                About
              </a>
              <a href="#amenities" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                Amenities
              </a>
              <a href="#flights" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                Flights
              </a>
              <a href="#nearby" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                Nearby
              </a>
              <a href="#location" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                Location
              </a>
              <a href="#book" className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">
                Book Now
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8">
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">{mockVilla.title}</h1>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1 text-xs" />
                        <span>{mockVilla.rating}</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">{mockVilla.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right text-sm">
                      <Link href={`/host/${mockVilla.host.id}`} className="hover:underline">
                        <p className="font-medium">{mockVilla.host.name}</p>
                        <p className="text-gray-500 text-xs">Member since {mockVilla.host.joined}</p>
                      </Link>
                    </div>
                    <Link href={`/host/${mockVilla.host.id}`} className="relative ml-4">
                      <img
                        src={mockVilla.host.avatar}
                        alt={mockVilla.host.name}
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover hover:opacity-90 transition-opacity"
                      />
                      {mockVilla.host.isOnline && (
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </Link>
                  </div>
                </div>

                {/* Superhost Section - Centered on mobile only */}
                <div className="relative overflow-hidden mb-6 flex sm:block justify-center">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg relative z-10 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                        <FaStar className="text-yellow-500 text-sm sm:text-base animate-bounce" />
                      </div>
                    </div>
                    <div className="transform hover:scale-[1.02] transition-transform duration-300">
                      <h3 className="text-sm font-medium mb-1">Superhost</h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {mockVilla.host.name} is a Superhost with a {mockVilla.host.responseRate} response rate and typically responds {mockVilla.host.responseTime}.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div id="about" className="mb-6 sm:mb-8">
                  <h2 className="text-lg font-semibold mb-4">About this villa</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">{mockVilla.description}</p>
                    <p className="text-sm text-gray-700">{mockVilla.detailedDescription}</p>
                  </div>
                </div>

                {/* Amenities Section - Adjust grid for different screen sizes */}
                <div id="amenities" className="border-t border-gray-100 pt-6 sm:pt-8 mb-6 sm:mb-8">
                  <h2 className="text-lg font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {mockVilla.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <amenity.icon className="text-gray-500 text-sm flex-shrink-0" />
                        <span className="text-gray-700">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flights and Nearby Essentials Section */}
                <div id="flights" className="border-t border-gray-100 pt-6 sm:pt-8 mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Flights Section */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg font-semibold mb-4">Available Flights</h3>
                      <div className="space-y-3">
                        <div className="mb-4">
                          <label htmlFor="origin-select" className="block text-sm font-medium text-gray-700 mb-1">Departure Airport</label>
                          <select
                            id="origin-select"
                            value={origin}
                            onChange={(e) => { setOrigin(e.target.value); setFilteredFlights(null); setSelectedFlightId(null); }}
                            className="w-full text-sm border rounded-lg p-2 focus:outline-none"
                          >
                            {departureAirports.map((ap) => (
                              <option key={ap.code} value={ap.code}>
                                {ap.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-4 text-center">
                          <button
                            onClick={searchFlights}
                            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                          >
                            Search Flights
                          </button>
                        </div>
                      </div>
                      {checkInDate && (
                        <div className="mt-4">
                          {loadingFlights ? (
                            <p className="text-center text-gray-500">Loading flights...</p>
                          ) : filteredFlights === null ? (
                            <p className="text-center text-gray-500">Please click 'Search Flights' to load flights for the selected dates.</p>
                          ) : filteredFlights.length > 0 ? (
                            <div className="space-y-2">
                              {filteredFlights.map((flight) => {
                                const isSelected = selectedFlightId === flight.id;
                                return (
                                  <div
                                    key={flight.id}
                                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${isSelected ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                                    onClick={() => setSelectedFlightId(flight.id)}
                                  >
                                    <div className="flex items-center">
                                      <input
                                        type="radio"
                                        name="selectedFlight"
                                        checked={isSelected}
                                        onChange={() => setSelectedFlightId(flight.id)}
                                        className="mr-2"
                                      />
                                      <div className="text-sm">
                                        <div>{flight.departureTime} - {flight.arrivalTime}</div>
                                        <div className="text-xs text-gray-500">{flight.airline} • {flight.duration}</div>
                                      </div>
                                    </div>
                                    <button
                                      onClick={(e) => { e.stopPropagation(); openGoogleFlightsForFlight(flight); }}
                                      className="relative overflow-hidden group text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                      <span className="relative z-10">Book</span>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500">No flights found for the selected criteria.</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Nearby Essentials Section */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg font-semibold mb-4">Nearby Essentials</h3>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <div className="flex items-center mb-3">
                            <FaShoppingBag className="text-blue-500 mr-2" />
                            <h3 className="text-sm font-medium">Supermarkets</h3>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Spar Express</span>
                            <span className="text-gray-500">{mockVilla.nearestSupermarket}</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center mb-3">
                            <FaUtensils className="text-red-500 mr-2" />
                            <h3 className="text-sm font-medium">Restaurants</h3>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>La Taberna del Puerto</span>
                            <span className="text-gray-500">{mockVilla.nearestRestaurant}</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center mb-3">
                            <FaUmbrellaBeach className="text-yellow-500 mr-2" />
                            <h3 className="text-sm font-medium">Beaches</h3>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Playa Flamingo</span>
                            <span className="text-gray-500">1.8 km</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div id="location" className="border-t border-gray-100 pt-6 sm:pt-8">
                  <h3 className="text-lg font-semibold mb-4">Location</h3>
                  <div className="h-[300px] sm:h-[400px] w-full relative z-0 rounded-xl overflow-hidden">
                    <div className="h-full w-full">
                      <Map 
                        defaultCenter={{ lat: 28.8638, lng: -13.8534 }}
                        markers={[{ lat: 28.8638, lng: -13.8534 }]}
                        zoom={14}
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Exact location provided after booking for privacy and security reasons.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div id="book" className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-semibold">£{mockVilla.price}</span>
                    <span className="text-gray-500 text-sm"> / night</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1 text-xs" />
                    <span className="text-sm">{mockVilla.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check in</label>
                      <input 
                        type="date" 
                        className="w-full text-sm bg-transparent focus:outline-none [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                        value={checkInDate || ''}
                        onChange={(e) => { setCheckInDate(e.target.value); setFilteredFlights(null); setSelectedFlightId(null); }}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="border rounded-lg p-3 hover:border-blue-300 transition-colors">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check out</label>
                      <input 
                        type="date" 
                        className="w-full text-sm bg-transparent focus:outline-none [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                        value={checkOutDate || ''}
                        onChange={(e) => { setCheckOutDate(e.target.value); setFilteredFlights(null); setSelectedFlightId(null); }}
                        min={checkInDate || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Adults</span>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-sm w-4 text-center">{adults}</span>
                          <button 
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Children (2-12)</span>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setChildrenOver2(Math.max(0, childrenOver2 - 1))}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-sm w-4 text-center">{childrenOver2}</span>
                          <button 
                            onClick={() => setChildrenOver2(childrenOver2 + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Infants (under 2)</span>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setChildrenUnder2(Math.max(0, childrenUnder2 - 1))}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-sm w-4 text-center">{childrenUnder2}</span>
                          <button 
                            onClick={() => setChildrenUnder2(childrenUnder2 + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded-full text-sm hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flight Summary */}
                  {filteredFlights !== null && (
                    <div className="border-t pt-4 mb-4">
                      {selectedFlightId ? (
                        <>
                          <h4 className="text-sm font-medium mb-2">Selected Flight</h4>
                          <div className="flex justify-between items-center text-sm">
                            <span>
                              {(() => {
                                const f = filteredFlights.find(f => f.id === selectedFlightId);
                                return f ? `${f.departureTime} - ${f.arrivalTime}, ${f.airline}` : '';
                              })()}
                            </span>
                            <span>£{(() => {
                              const f = filteredFlights.find(f => f.id === selectedFlightId);
                              return f ? f.price : '0';
                            })()}</span>
                          </div>
                        </>
                      ) : (
                        <p className="text-xs text-gray-500">Select a flight to add its price here.</p>
                      )}
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Villa ({nights} nights)</span>
                        <span className="text-sm">£{mockVilla.price * nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Cleaning fee</span>
                        <span className="text-sm">£{additionalFees.cleaningFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Service fee</span>
                        <span className="text-sm">£{additionalFees.serviceFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Local tax</span>
                        <span className="text-sm">£{additionalFees.localTax}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold">
                          <span className="text-sm">Total</span>
                          <span className="text-sm">£{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-500 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10">Book Now</span>
                    </button>
                  </div>

                  <div className="text-center text-xs text-gray-500">
                    You won't be charged yet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 