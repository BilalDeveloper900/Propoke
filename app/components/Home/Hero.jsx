
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import heroImage from '../../assets/home/hero.svg'

const Hero = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Bring Your Family&apos;s <br />
            Happiness to Your <br />
            Dream House
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Finding the perfect home isn’t just about bricks and mortar—it’s about
            creating a space where your family can grow, laugh, and make lasting
            memories. Your dream house is more than just a place to live; it’s
            where happiness begins, where every room tells a story, and where
            comfort meets love.
          </p>

          {/* Search Bar */}
          <div className="mt-8">
            <div className="flex items-center bg-white border rounded-full shadow-md px-4 py-2 w-full max-w-md">
              <FiSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search Here"
                className="flex-grow px-4 py-2 outline-none text-sm bg-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <p className="text-xl font-semibold">300+</p>
              <span className="text-sm text-gray-600">Awards Winning</span>
            </div>
            <div>
              <p className="text-xl font-semibold">80+</p>
              <span className="text-sm text-gray-600">Property Ready</span>
            </div>
            <div>
              <p className="text-xl font-semibold">450+</p>
              <span className="text-sm text-gray-600">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={heroImage} 
            alt="Modern House"
            width={448}
            height={520}
            className="rounded-[16px] object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
