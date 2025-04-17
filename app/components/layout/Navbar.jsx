'use client';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import { FaSortDown } from "react-icons/fa";
import Image from 'next/image';
import logo from '../../assets/home/logo/logo.jpg'

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
        {/* <div className="text-2xl font-bold text-[#333333]">Propoke</div> */}
        <Link href={'/'} className="">
          <Image src={logo}
            alt="Modern House"
            className='rounded-full h-[50px] w-[50px] object-cover'
          />
        </Link>

        <div className='flex items-center gap-6'>
          <nav className="hidden lg:flex space-x-6 items-center text-sm font-normal text-[#666666]">
            <Link href="/">Home</Link>

            <Link
              href="/listing"
              className="flex items-center gap-1"
            >
              Listing
            </Link>

            <Link href="/services">Services</Link>

            {/* <div className="relative">
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
                <Link href="/coming-soon" className="block py-1">News</Link>
                <Link href="/coming-soon" className="block py-1">Tips</Link>
              </div>
            </div> */}

            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>

            {/* <div className="relative">
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
                <Link href="/coming-soon" className="block py-1">FAQ</Link>
                <Link href="/coming-soon" className="block py-1">Team</Link>
              </div>
            </div> */}
          </nav>

          <div className="space-x-3 hidden lg:flex">
            <Link href="/stay-with-us" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Stay With Us</Link>
            <Link href="/host-with-us" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Host With Us</Link>
            <Link href="/coming-soon" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Booking Now</Link>
          </div>
        </div>

        <div className='flex items-center gap-6 lg:hidden'>
          <button className="text-2xl" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link href="/coming-soon" className="bg-[#3854B5] text-white px-6 py-2 rounded-full text-sm">Booking Now</Link>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[999px]' : 'max-h-0'
          }`}
      >
        <div className="px-6 space-y-2 pt-4 pb-6 text-gray-700 text-sm font-medium">

          <div >
            <Link href="/">Home</Link>
          </div>

          <Link
            href="/listing"
            className="flex items-center gap-1 w-full"
          >
            Listing 
          </Link>

          <div>
            <Link href="/services">Services</Link>
          </div>

          {/* <div className=''>
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
              <Link href="/coming-soon" className="block py-1">News</Link>
              <Link href="/coming-soon" className="block py-1">Tips</Link>
            </div>
          </div> */}

          <div>
            <Link className='pb-2' href="/about">About</Link>
          </div>

          <div>
            <Link className='pb-2' href="/contact">Contact Us</Link>
          </div>

          {/* <div className=''>
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
              <Link href="/coming-soon" className="block py-1">FAQ</Link>
              <Link href="/coming-soon" className="block py-1">Team</Link>
            </div>
          </div> */}

          <div className="space-y-2 pt-4">
            <Link href="/stay-with-us" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Stay With Us</Link>
            <Link href="/host-with-us" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Host With Us</Link>
            <Link href="/coming-soon" className="block bg-[#3854B5] text-white px-6 py-2 rounded-full text-center">Booking Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
