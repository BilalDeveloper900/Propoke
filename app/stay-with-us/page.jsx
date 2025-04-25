'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '../../app/assets/stayWithUs/stayMain.svg'
import e1 from '../../app/assets/stayWithUs/e1.svg'
import e2 from '../../app/assets/stayWithUs/e2.svg'
import e3 from '../../app/assets/stayWithUs/e3.svg'
import e4 from '../../app/assets/stayWithUs/e4.svg'
import e5 from '../../app/assets/stayWithUs/e5.svg'
import e6 from '../../app/assets/stayWithUs/e6.svg'
import e7 from '../../app/assets/stayWithUs/e7.svg'
import e8 from '../../app/assets/stayWithUs/e8.svg'
import e9 from '../../app/assets/stayWithUs/e9.svg'
import e10 from '../../app/assets/stayWithUs/e10.svg'
import e11 from '../../app/assets/stayWithUs/e11.svg'
import e12 from '../../app/assets/stayWithUs/e12.svg'
import StayWithUsForm from '../components/forms/StayWithUs'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from '../assets/stayWithUs/slide3.svg'
import sliderImg2 from '../assets/stayWithUs/slider2.svg'
import sliderImg3 from '../assets/stayWithUs/slider3.svg'

const page = () => {
    const images = [
        e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12
    ]

    const sliderImages = [
        sliderImg1, sliderImg2, sliderImg3
    ]

    return (
        <div>
            <section className="bg-white px-4 sm:px-10 lg:px-0 ">
                <div  className="max-w-[1146px] mx-auto relative">
                    <Image
                        src={heroImage}
                        alt="Modern House"
                        className="rounded-[16px] w-full object-cover"
                        priority
                    />

                    <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12 text-white">
                        <h1 className="text-[24px] sm:text-[40px] md:text-[56px] font-extrabold  sm:leading-[56px] md:leading-[72px]">
                            Experience Comfort & Luxury <br />
                            Stay With Us
                        </h1>

                        <button className="bg-[#3854B5] hover:bg-[#3853b5ce] mt-3 sm:mt-8 py-1 text-white w-[140px] sm:w-[170px] !h-[48px] flex justify-center items-center rounded-full font-semibold">
                            Booking Now
                        </button>
                    </div>
                </div>


                <div className='bg-[#9B9B9B] py-10 mt-16 mb-20  px-4 sm:px-10 lg:px-0'>
                    <span className='leading-[21.3px] max-w-[1146px] mx-auto text-white font-semibold flex'>
                        Experience luxurious stylish and convenient serviced accommodation in South Yorkshire with Stay
                        <br />
                        <br />
                        Host Save.
                        <br />
                        <br />
                        Our apartments provide fully furnished spaces with bedding, linen, and towels. Stay connected with ultra-fast WIFI and enjoy bathroom amenities. A dedicated property manager is available 24/7, and welcome packs enhance your arrival. Entertainment is at your fingertips with a Smart TV featuring Netflix
                    </span>
                </div>

                <div  className='h-[220px] px-4 flex justify-center items-center text-center flex-col'>
                    <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Explore Our Featured Apartments</h1>

                    <p className='leading-[32px] max-w-[600px]'>Stay in our handpicked apartments with top-class amenities and comfort. Scroll to explore!</p>
                </div>

                <div  className='max-w-[1146px] mx-auto mb-16'>
                    <Carousel showThumbs={false} infiniteLoop autoPlay>
                        {sliderImages.map((img) => (
                            <div >
                                <Image
                                    src={img}
                                    alt={`priority`}
                                    className="w-full h-[300px] sm:h-[546px] object-cover rounded-t-[10px]"
                                    priority
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div  className='h-[220px] px-4 flex justify-center items-center text-center flex-col'>
                    <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Photo Gallery</h1>

                    <p className='leading-[32px] max-w-[600px]'>Browse through our gallery to explore beautifully designed apartments, cozy homes, and luxury stays.</p>
                </div>

                <div className='max-w-[1146px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20'>
                    {images.map((img) => (
                        <div className='w-full h-full object-cover overflow-hidden relative'>
                            <Image
                                src={img}
                                alt="Modern House"
                                className="rounded-[16px] w-full object-cover"
                                priority
                            />
                        </div>
                    ))}
                </div>

                <StayWithUsForm />

            </section>
        </div>
    )
}

export default page