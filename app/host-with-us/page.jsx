import React from 'react'
import Image from 'next/image'
import heroImage from '../assets/hostWithUs/main.svg'
import StayWithUsForm from '../components/forms/StayWithUs'
import star from '../assets/hostWithUs/star.svg'

const page = () => {
  const starData = [
    { image: star, text: 'Multiple Platform Listing' },
    { image: star, text: 'List Management and Optimization' },
    { image: star, text: 'Professional Photography' },
    { image: star, text: 'Dynamic rate Systems' },
    { image: star, text: 'Guest Mangement' },
    { image: star, text: 'Multiple Plateform Listing' },
    { image: star, text: 'List Management and Optimization' },
    { image: star, text: 'Professional Photography' },
    { image: star, text: 'Dynamic rate Systems' },
    { image: star, text: 'Guest Mangement' },
  ]

  return (
    <div className='px-4 sm:px-10 lg:px-0'>
      <section className="bg-white  py-8 sm:px-6 md:px-10 sm:py-10 md:py-20 ">
        <div className="max-w-[1136px] mx-auto justify-between flex flex-col md:flex-row items-center gap-10">

          <div  className="flex-1 lg:max-w-[608px]">
            <h1 className=" text-[32px] sm:text-[40px] md:text-[56px] font-extrabold text-[#333333] sm:leading-[56px] md:leading-[72px]">
              Maximize Your Property Earnings with Expert Management
            </h1>

            <p className="mt-2 sm:mt-4 text-[#666666] text-base leading-[32px]">
              We take care of guest bookings, maintenance, and revenue optimization, ensuring your property stays occupied and generates consistent income—without you lifting a finger.
            </p>
          </div>


          <div  className="hidden md:flex">
            <Image
              src={heroImage}
              alt="Modern House"
              className="rounded-[16px] w-full md:w-[448px] h-[520] object-cover"
              priority
            />
          </div>

          <div className="flex md:hidden">
            <Image
              src={heroImage}
              alt="Modern House"
              className="rounded-[16px] w-full h-[520] object-cover"
              priority
            />
          </div>
        </div>

        <div  className='h-[300px] pt-10 flex justify-center items-center text-center flex-col'>
          <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Unlock Exclusive Hosting Features</h1>

          <p className='leading-[32px] max-w-[600px]'>Take the stress out of property management and maximize your rental income with our expert hosting solutions. From seamless guest bookings to property maintenance and revenue optimization.</p>
        </div>
      </section >

      <div className='bg-[#F2F2F2]'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center max-w-[1146px] mx-auto py-10 mb-20'>
          {starData.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <Image
                src={item.image}
                alt={item.text}
                className="rounded-full w-[62px] h-[62px] mx-auto object-cover"
                priority
              />
              <span className='p-2 text-lg font-semibold'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <StayWithUsForm />
    </div >
  )
}

export default page