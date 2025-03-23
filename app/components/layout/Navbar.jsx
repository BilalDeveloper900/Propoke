'use client';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Propoke</div>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>

          {/* Listing Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('listing')}
              className="flex items-center gap-1"
            >
              Listing <FiChevronDown />
            </button>
            {openDropdown === 'listing' && (
              <div className="absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10">
                <Link href="/listing/apartments" className="block py-1">Apartments</Link>
                <Link href="/listing/villas" className="block py-1">Villas</Link>
              </div>
            )}
          </div>

          <Link href="/services">Services</Link>

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('blog')}
              className="flex items-center gap-1"
            >
              Blog <FiChevronDown />
            </button>
            {openDropdown === 'blog' && (
              <div className="absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10">
                <Link href="/blog/news" className="block py-1">News</Link>
                <Link href="/blog/tips" className="block py-1">Tips</Link>
              </div>
            )}
          </div>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('pages')}
              className="flex items-center gap-1"
            >
              Pages <FiChevronDown />
            </button>
            {openDropdown === 'pages' && (
              <div className="absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10">
                <Link href="/faq" className="block py-1">FAQ</Link>
                <Link href="/team" className="block py-1">Team</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="space-x-3 hidden md:flex">
          <Link href="/stay" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Stay With Us</Link>
          <Link href="/host" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Host With Us</Link>
          <Link href="/booking" className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm">Booking Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
