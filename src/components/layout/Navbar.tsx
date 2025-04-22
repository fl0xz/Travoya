'use client';

import Link from 'next/link';
import { UserCircle } from '../icons/UserCircle';
import { useState } from 'react';
import { FaHeart, FaBell, FaGlobe } from 'react-icons/fa';

const Logo = () => {
  return (
    <Link href="/" className="group">
      <div className="flex items-center space-x-2">
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md transform rotate-45" />
          <div className="absolute inset-[3px] bg-white rounded-[2px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full" />
          </div>
        </div>
        <span className="text-xl font-sans font-semibold tracking-tight text-gray-800 group-hover:text-blue-600 transition-colors">
          Travoya
        </span>
      </div>
    </Link>
  );
};

export const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <Logo />
          
          <div className="hidden sm:flex space-x-6 items-center">
            <Link
              href="/favorites"
              className="text-gray-500 hover:text-gray-700"
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

            <Link 
              href="/list-your-villa" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              List Your Villa
            </Link>

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