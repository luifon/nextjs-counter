// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          <Link href="/">Task Manager App</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" passHref className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link
            href="/tasks"
            className="text-white hover:text-gray-300"
            passHref
          >
            Tasks
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
