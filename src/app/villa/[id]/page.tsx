'use client';

import { Navbar } from '../../../components/layout/Navbar';
import { useState } from 'react';
import { FaStar, FaBed, FaBath, FaSwimmingPool, FaWifi, FaParking, FaUmbrellaBeach, FaSnowflake, FaTree, FaPlane, FaInfoCircle, FaShoppingBag, FaUtensils, FaTv, FaCoffee, FaHotTub, FaFan, FaDoorOpen, FaKey, FaShower, FaToilet, FaSink, FaChair, FaTable, FaGlassMartiniAlt, FaSwimmer, FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';

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
    name: 'Maria Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    joined: '2018',
    responseRate: '98%',
    responseTime: 'within an hour',
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
};

const flights = [
  {
    id: 1,
    airline: 'Ryanair',
    airlineLogo: '/images/airlines/ryanair.png',
    departureTime: '06:45',
    arrivalTime: '10:35',
    duration: '3h 50m',
    price: 89,
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '17 Aug 2025',
  },
  {
    id: 2,
    airline: 'Ryanair',
    airlineLogo: '/images/airlines/ryanair.png',
    departureTime: '21:15',
    arrivalTime: '01:05',
    duration: '3h 50m',
    price: 102,
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '17 Aug 2025',
  },
  {
    id: 3,
    airline: 'EasyJet',
    airlineLogo: '/images/airlines/easyjet.png',
    departureTime: '07:30',
    arrivalTime: '11:20',
    duration: '3h 50m',
    price: 95,
    stops: 'Nonstop',
    departureAirport: 'LTN',
    arrivalAirport: 'ACE',
    date: '17 Aug 2025',
  },
];

export default function VillaPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(flights[0]);
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  const additionalFees = {
    cleaningFee: 50,
    serviceFee: 30,
    localTax: 20,
  };

  const calculateTotal = () => {
    const villaCost = mockVilla.price * 10;
    const flightCost = selectedFlight.price * guests;
    const fees = additionalFees.cleaningFee + additionalFees.serviceFee + additionalFees.localTax;
    return villaCost + flightCost + fees;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 row-span-2">
            <img
              src={mockVilla.images[selectedImage]}
              alt={mockVilla.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {mockVilla.images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
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

        {!showAllImages && (
          <button
            onClick={() => setShowAllImages(true)}
            className="w-full py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-8"
          >
            Show all photos
          </button>
        )}

        {showAllImages && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {mockVilla.images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">{mockVilla.title}</h1>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1 text-xs" />
                      <span>{mockVilla.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{mockVilla.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm">
                    <p className="font-medium">Hosted by {mockVilla.host.name}</p>
                    <p className="text-gray-500 text-xs">Member since {mockVilla.host.joined}</p>
                  </div>
                  <img
                    src={mockVilla.host.avatar}
                    alt={mockVilla.host.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="border-t border-b py-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FaBed className="text-gray-500 text-sm" />
                    <span>{mockVilla.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBath className="text-gray-500 text-sm" />
                    <span>{mockVilla.bathrooms} bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaSwimmingPool className="text-gray-500 text-sm" />
                    <span>Private pool</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaWifi className="text-gray-500 text-sm" />
                    <span>WiFi</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg mb-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <FaStar className="text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Superhost</h3>
                  <p className="text-sm text-gray-600">
                    {mockVilla.host.name} is a Superhost with a {mockVilla.host.responseRate} response rate and typically responds {mockVilla.host.responseTime}.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-6">{mockVilla.description}</p>
              <p className="text-gray-700 text-sm mb-6">{mockVilla.detailedDescription}</p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {mockVilla.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full text-xs"
                    >
                      <amenity.icon className="text-gray-500 text-xs" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">House Rules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {mockVilla.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600 text-sm">
                      <span className="text-gray-400">•</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11199.999999999998!2d-13.827999999999999!3d28.864999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc461f4c32b9d8a9%3A0x3d2f2b8b4c8c8c8c!2sPlaya%20Blanca%2C%20Lanzarote%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus&markers=color:red%7C28.864999999999998,-13.827999999999999"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Nearby Attractions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <FaUmbrellaBeach className="mr-2 text-gray-400" />
                      Playa Blanca Beach - 0.5 km
                    </li>
                    <li className="flex items-center">
                      <FaTree className="mr-2 text-gray-400" />
                      Timanfaya National Park - 15 km
                    </li>
                    <li className="flex items-center">
                      <FaSwimmingPool className="mr-2 text-gray-400" />
                      Marina Rubicon - 2 km
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Getting Around</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <FaParking className="mr-2 text-gray-400" />
                      Free parking on premises
                    </li>
                    <li className="flex items-center">
                      <FaPlane className="mr-2 text-gray-400" />
                      Lanzarote Airport (ACE) - 30 km
                    </li>
                    <li className="flex items-center">
                      <FaWifi className="mr-2 text-gray-400" />
                      Public transport nearby
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Reviews</h2>
              {mockVilla.reviews.map((review) => (
                <div key={review.id} className="border-b last:border-b-0 py-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-sm">{review.author}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{review.date}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <FaStar className="text-yellow-400 mr-1 text-xs" />
                          <span>{review.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {/* Flights Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Available Flights</h2>
                <div className="space-y-2">
                  {flights.map((flight) => (
                    <div
                      key={flight.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedFlight.id === flight.id ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedFlight(flight)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="font-medium">{flight.departureTime}</span>
                            <span className="text-gray-400">-</span>
                            <span className="font-medium">{flight.arrivalTime}</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {flight.airline} • {flight.duration} • {flight.stops}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-sm">€{flight.price}</div>
                          <div className="text-xs text-gray-500">per person</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Essentials Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Nearby Essentials</h2>
                <div className="space-y-4">
                  {/* Supermarkets */}
                  <div>
                    <div className="flex items-center mb-2">
                      <FaShoppingBag className="text-blue-500 mr-2 text-sm" />
                      <h3 className="text-sm font-medium">Supermarkets</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span>Spar Express</span>
                        <span className="text-gray-500">{mockVilla.nearestSupermarket}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>HiperDino</span>
                        <span className="text-gray-500">2.5 km</span>
                      </div>
                    </div>
                  </div>

                  {/* Restaurants */}
                  <div>
                    <div className="flex items-center mb-2">
                      <FaUtensils className="text-red-500 mr-2 text-sm" />
                      <h3 className="text-sm font-medium">Restaurants</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span>La Taberna del Puerto</span>
                        <span className="text-gray-500">{mockVilla.nearestRestaurant}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>El Chiringuito</span>
                        <span className="text-gray-500">9.2 km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-semibold">€{mockVilla.price}</span>
                    <span className="text-gray-500 text-sm"> / night</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1 text-xs" />
                    <span className="text-sm">{mockVilla.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check in</label>
                      <input 
                        type="date" 
                        className="w-full text-sm"
                        value={checkInDate || ''}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="border rounded-lg p-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check out</label>
                      <input 
                        type="date" 
                        className="w-full text-sm"
                        value={checkOutDate || ''}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        min={checkInDate || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select 
                      className="w-full text-sm"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      <option value={1}>1 guest</option>
                      <option value={2}>2 guests</option>
                      <option value={3}>3 guests</option>
                      <option value={4}>4 guests</option>
                      <option value={5}>5+ guests</option>
                    </select>
                  </div>

                  <div className="border-t pt-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Villa (10 nights)</span>
                        <span>€{mockVilla.price * 10}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Flights ({guests} {guests === 1 ? 'adult' : 'adults'})</span>
                        <span>€{selectedFlight.price * guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cleaning fee</span>
                        <span>€{additionalFees.cleaningFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service fee</span>
                        <span>€{additionalFees.serviceFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Local tax</span>
                        <span>€{additionalFees.localTax}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>€{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                    Book Now
                  </button>

                  <div className="text-center text-sm text-gray-500">
                    You won't be charged yet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 