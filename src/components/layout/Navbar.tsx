'use client';

import Link from 'next/link';
import { UserCircle } from '../icons/UserCircle';

const Logo = () => {
  return (
    <Link href="/" className="group">
      <div className="flex items-center space-x-3">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform rotate-45" />
          <div className="absolute inset-1 bg-white rounded-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full" />
          </div>
        </div>
        <span className="text-2xl font-light lowercase tracking-wider text-gray-800">
          travoya
        </span>
      </div>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden sm:flex space-x-8 items-center">
            <Link href="/book" className="text-gray-700 hover:text-gray-900">
              Book
            </Link>
            <Link 
              href="/list-your-villa" 
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              List Your Villa
            </Link>
            <Link href="/signin" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <UserCircle className="w-6 h-6 text-gray-700" />
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