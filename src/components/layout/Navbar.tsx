'use client';

import Link from 'next/link';
import { UserCircle } from '../icons/UserCircle';
import { useState } from 'react';
import { FaHeart, FaBell, FaGlobe } from 'react-icons/fa';
import Logo from '../Logo';

export const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-2xl font-sans font-semibold tracking-tight text-gray-800 group-hover:text-blue-600 transition-colors">
                Travoya
              </span>
            </div>
          </Link>
          
          <div className="hidden sm:flex space-x-6 items-center">
            <Link
              href="/favorites"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Favorites"
            >
              <FaHeart className="w-5 h-5" />
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaBell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    No new notifications
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaGlobe className="w-5 h-5" />
              </button>
              {showLanguages && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Deutsch</a>
                </div>
              )}
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <UserCircle className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </button>
          </div>

          <button className="sm:hidden p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}; 