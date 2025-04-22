'use client';

import { Navbar } from '../../../components/layout/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaCheck, FaMedal, FaClock, FaHeart, FaEnvelope } from 'react-icons/fa';

const mockHost = {
  id: '1',
  name: 'Maria Rodriguez',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
  joined: '2018',
  location: 'Lanzarote, Spain',
  responseRate: '98%',
  responseTime: 'within an hour',
  languages: ['English', 'Spanish', 'French'],
  about: 'Hello! I\'m Maria, your dedicated host in beautiful Lanzarote. With over 5 years of experience in luxury villa management, I take pride in offering exceptional stays that combine comfort with authentic Canarian charm. My goal is to make every guest\'s experience memorable and hassle-free.',
  superhost: true,
  totalReviews: 245,
  averageRating: 4.9,
  identityVerified: true,
  achievements: [
    { title: 'Superhost', description: 'Maintained Superhost status for 3 years' },
    { title: 'Quick Responder', description: 'Typically responds within an hour' },
    { title: 'Experienced', description: 'Hosting since 2018' }
  ],
  villas: [
    {
      id: '1',
      title: 'Luxury Villa with Private Pool',
      location: 'Playa Blanca, Spain',
      price: 250,
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2940&auto=format&fit=crop',
      rating: 4.8,
      reviews: 52,
    },
    {
      id: '2',
      title: 'Beachfront Villa with Private Access',
      location: 'Puerto del Carmen, Spain',
      price: 520,
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop',
      rating: 4.9,
      reviews: 38,
    },
    {
      id: '3',
      title: 'Modern Villa with Rooftop Terrace',
      location: 'Costa Teguise, Spain',
      price: 410,
      imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop',
      rating: 4.8,
      reviews: 45,
    }
  ],
  recentReviews: [
    {
      id: 1,
      author: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
      rating: 5,
      date: 'March 2024',
      villa: 'Luxury Villa with Private Pool',
      comment: 'Maria was an exceptional host! Her attention to detail and quick responses made our stay perfect. The villa was exactly as described and she went above and beyond to make us feel welcome.',
    },
    {
      id: 2,
      author: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
      rating: 5,
      date: 'February 2024',
      villa: 'Beachfront Villa with Private Access',
      comment: 'Outstanding experience! Maria\'s local recommendations were spot-on, and she was always available when needed. The villa was immaculate and the welcome package was a lovely touch.',
    },
    {
      id: 3,
      author: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
      rating: 5,
      date: 'January 2024',
      villa: 'Modern Villa with Rooftop Terrace',
      comment: 'Maria is the perfect host! She arranged airport transfers for us and made sure everything was perfect for our arrival. The villa was beautiful and her hospitality made our vacation exceptional.',
    }
  ],
};

export default function HostProfile({ params }: { params: { id: string } }) {
  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .online-dot {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Host Header Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <Image
                  src={mockHost.avatar}
                  alt={mockHost.name}
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="rounded-full object-cover"
                  priority
                />
                {/* Online Status Dot */}
                <div className="absolute top-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 border-2 border-white rounded-full online-dot" />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{mockHost.name}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{mockHost.averageRating} ({mockHost.totalReviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-gray-400 mr-1" />
                    <span>Member since {mockHost.joined}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheck className="text-green-500 mr-1" />
                    <span>Identity verified</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-glow">
                Contact Host
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">About {mockHost.name}</h2>
                <p className="text-gray-600 mb-4">{mockHost.about}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-2">Languages</h3>
                    <div className="text-gray-600">
                      {mockHost.languages.join(', ')}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Response</h3>
                    <div className="text-gray-600">
                      Typically responds {mockHost.responseTime}
                      <br />
                      {mockHost.responseRate} response rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Host's Villas */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">{mockHost.name}'s Villas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockHost.villas.map((villa) => (
                    <Link href={`/villa/${villa.id}`} key={villa.id} className="group">
                      <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                        <div className="relative h-48">
                          <Image
                            src={villa.imageUrl}
                            alt={villa.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">{villa.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{villa.location}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm">
                              <FaStar className="text-yellow-400 mr-1" />
                              <span>{villa.rating}</span>
                              <span className="text-gray-400 ml-1">({villa.reviews})</span>
                            </div>
                            <div className="text-sm font-medium">£{villa.price}/night</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Reviews */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
                <div className="space-y-6">
                  {mockHost.recentReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.author}
                            fill
                            sizes="40px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium">{review.author}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-400">Stay at: {review.villa}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Achievements */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                <div className="space-y-4">
                  {mockHost.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <FaMedal className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Reviews</span>
                    <span className="font-medium">{mockHost.totalReviews}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Rating</span>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{mockHost.averageRating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-medium">{mockHost.responseRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Properties</span>
                    <span className="font-medium">{mockHost.villas.length}</span>
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