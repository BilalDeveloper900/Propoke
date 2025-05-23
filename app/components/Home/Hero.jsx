
"use client";
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import heroImage from '../../assets/home/hero.svg'
import heroImage1 from '../../assets/home/hero1.svg'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import logo1 from '../../assets/home/logo/google.avif'
import logo2 from '../../assets/home/logo/airbnb.avif'
import logo3 from '../../assets/home/logo/logo.jpg'

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-white px-4 py-8 sm:px-6 md:px-10 sm:py-10 md:py-20 ">
      <div className="max-w-[1136px] mx-auto justify-between flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1 lg:max-w-[608px]">
          <h1 className=" text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#333333] sm:leading-[56px] md:leading-[72px]">
            Bring Your Family&apos;s
            Happiness to Your
            Dream House
          </h1>

          <p className="mt-2 sm:mt-4 text-[#666666] text-base leading-[32px]">
            Finding the perfect home isn’t just about bricks and mortar—it’s about
            creating a space where your family can grow, laugh, and make lasting
            memories. Your dream house is more than just a place to live; it’s
            where happiness begins, where every room tells a story, and where
            comfort meets love.
          </p>

          <div className=" mt-6 sm:mt-[40px]">

            <div className='flex gap-4'>
              <Image
                src={logo1}
                alt="House 1"
                width={100}
                height={20}
                className="object-contain"
              />

              <Image
                src={logo2}
                alt="House 1"
                width={103}
                height={20}
                className="object-contain"
              />

              <Image
                src={logo3}
                alt="House 1"
                width={60}
                height={20}
                className="rounded-full object-contain"
              />
            </div>

          </div>

          <div data-aos="zoom-in" ref={ref} className="mt-6 sm:mt-10 flex flex-wrap gap-[40px]">
            <div>
              <p className="text-[32px] font-bold">{inView && <CountUp end={300} duration={4} />}+</p>
              <span className="text-sm text-[#666666]">Awards Winning</span>
            </div>
            <div>
              <p className="text-[32px] font-bold">{inView && <CountUp end={80} duration={4} />}+</p>
              <span className="text-sm text-[#666666]">Property Ready</span>
            </div>
            <div>
              <p className="text-[32px] font-bold">{inView && <CountUp end={450} duration={4.5} />}+</p>
              <span className="text-sm text-[#666666]">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex">
          <Image
            src={heroImage}
            alt="Modern House"
            className="rounded-[16px] w-full md:w-[448px] h-[520] object-cover"
            priority
          />
        </div>

        <div className="flex md:hidden">
          <Image
            src={heroImage1}
            alt="Modern House"
            className="rounded-[16px] w-full h-[520] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
