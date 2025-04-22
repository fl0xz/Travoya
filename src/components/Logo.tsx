import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        {/* House Roof */}
        <path
          d="M16 4L4 12V28H28V12L16 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Wave */}
        <path
          d="M8 20C10 18 14 18 16 20C18 22 22 22 24 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Sun */}
        <circle cx="24" cy="8" r="2" fill="currentColor" />
        <path
          d="M24 4V6M24 10V12M20 8H22M26 8H28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo; 