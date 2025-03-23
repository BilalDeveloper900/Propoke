'use client';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import { FaSortDown } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white px-3 sm:px-6 py-4">
      <div className="max-w-[1232px] mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-[#333333]">Propoke</div>

        <div className='flex items-center gap-6'>
          <nav className="hidden md:flex space-x-6 items-center text-sm font-normal text-[#666666]">
            <Link href="/">Home</Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('listing')}
                className="flex items-center gap-1"
              >
                Listing <FaSortDown />
              </button>
              <div
                className={`absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10 transition-all duration-500 overflow-hidden ${openDropdown === 'listing' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <Link href="/listing/apartments" className="block py-1">Apartments</Link>
                <Link href="/listing/villas" className="block py-1">Villas</Link>
              </div>
            </div>

            <Link href="/services">Services</Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('blog')}
                className="flex items-center gap-1"
              >
                Blog <FaSortDown />
              </button>
              <div
                className={`absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10 transition-all duration-500 overflow-hidden ${openDropdown === 'blog' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <Link href="/blog/news" className="block py-1">News</Link>
                <Link href="/blog/tips" className="block py-1">Tips</Link>
              </div>
            </div>

            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('pages')}
                className="flex items-center gap-1"
              >
                Pages <FaSortDown />
              </button>
              <div
                className={`absolute bg-white shadow-md rounded p-4 top-full mt-2 min-w-[150px] z-10 transition-all duration-500 overflow-hidden ${openDropdown === 'pages' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <Link href="/faq" className="block py-1">FAQ</Link>
                <Link href="/team" className="block py-1">Team</Link>
              </div>
            </div>
          </nav>

          <div className="space-x-3 hidden md:flex">
            <Link href="/stay" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Stay With Us</Link>
            <Link href="/host" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Host With Us</Link>
            <Link href="/booking" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Booking Now</Link>
          </div>
        </div>

        <div className='flex items-center gap-6 md:hidden'>
          <button className="text-2xl" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link href="/booking" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Booking Now</Link>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[999px]' : 'max-h-0'
          }`}
      >
        <div className="px-6 space-y-2 pt-4 pb-6 text-gray-700 text-sm font-medium">

          <div >
            <Link href="/">Home</Link>
          </div>

          <div className=''>
            <button
              onClick={() => toggleDropdown('listing')}
              className="flex items-center gap-1 w-full"
            >
              Listing <FaSortDown />
            </button>
            <div
              className={`ml-4 transition-all duration-500 overflow-hidden ${openDropdown === 'listing' ? 'max-h-[200px]' : 'max-h-0'
                }`}
            >
              <Link href="/listing/apartments" className="block py-1">Apartments</Link>
              <Link href="/listing/villas" className="block py-1">Villas</Link>
            </div>
          </div>

          <div>
            <Link href="/services">Services</Link>
          </div>

          <div className=''>
            <button
              onClick={() => toggleDropdown('blog')}
              className="flex items-center gap-1 w-full"
            >
              Blog <FaSortDown />
            </button>
            <div
              className={`ml-4 transition-all duration-500 overflow-hidden ${openDropdown === 'blog' ? 'max-h-[200px]' : 'max-h-0'
                }`}
            >
              <Link href="/blog/news" className="block py-1">News</Link>
              <Link href="/blog/tips" className="block py-1">Tips</Link>
            </div>
          </div>

          <div>
            <Link className='pb-2' href="/about">About</Link>
          </div>

          <div>
            <Link className='pb-2' href="/contact">Contact Us</Link>
          </div>

          <div className=''>
            <button
              onClick={() => toggleDropdown('pages')}
              className="flex items-center gap-1 w-full"
            >
              Pages <FaSortDown />
            </button>
            <div
              className={`ml-4 transition-all duration-500 overflow-hidden ${openDropdown === 'pages' ? 'max-h-[200px]' : 'max-h-0'
                }`}
            >
              <Link href="/faq" className="block py-1">FAQ</Link>
              <Link href="/team" className="block py-1">Team</Link>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <Link href="/stay" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Stay With Us</Link>
            <Link href="/host" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Host With Us</Link>
            <Link href="/booking" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Booking Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
