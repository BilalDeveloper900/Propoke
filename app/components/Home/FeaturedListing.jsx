'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { PiBedLight } from 'react-icons/pi';
import list1 from '../../assets/home/list1.svg'
import list2 from '../../assets/home/list2.svg'
import list3 from '../../assets/home/list3.svg'
import list4 from '../../assets/home/list4.svg'
import { RiSendPlaneLine } from "react-icons/ri";
import CustomModal from '../CustomModal/CustomModal'

const listings = [
    {
        image: list1,
        price: '2,800',
        title: 'Ataz Standard House',
        location: 'Indonesia',
        bedrooms: 2,
        oldPrice: 140,
    },
    {
        image: list2,
        price: '4,800',
        title: 'Qiri Minimalist House',
        location: 'Indonesia',
        bedrooms: 2,
        oldPrice: 140,
    },
    {
        image: list3,
        price: '6,800',
        title: 'Qanan Luxury House',
        location: 'Indonesia',
        bedrooms: 3,
        oldPrice: 140,
    },
    {
        image: list4,
        price: '8,800',
        title: 'Tingah Elegant House',
        location: 'Indonesia',
        bedrooms: 2,
        oldPrice: 140,
    },
];


const FeaturedListing = () => {
    return (
        <div className='max-w-[1136px] mx-auto px-4 pb-8 sm:px-6 md:px-10 lg:px-0 sm:pb-10 md:pb-20'>
            <div className="flex flex-col sm:flex-row justify-between">
                <h2 data-aos="zoom-in" className="text-[32px] md:text-[40px] font-bold text-[#333333]">
                    Featured Listing
                </h2>

                <p data-aos="zoom-in" className="text-[#666666] text-base sm:w-[324px] md:w-[560px] leading-[32px]">
                    Discover our top featured properties, carefully selected to offer the best in
                    comfort, location, and design. Whether you're searching for a modern city apartment,
                    a spacious family home, or a luxurious villa, these exclusive listings provide the
                    perfect opportunity to find your dream home.
                </p>

            </div>


            <section className="bg-white mt-6 sm:mt-10 md:mt-[66px]">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {listings.map((item, index) => (
                        <ListingCard key={index} {...item} />
                    ))}
                </div>
            </section>

        </div>
    )
}


const ListingCard = ({ image, price, title, location, bedrooms, oldPrice }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="rounded-xl overflow-hidden max-w-xs bg-white">
            <div data-aos="zoom-in" className="relative">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-xl object-cover h-60 w-full"
                />
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-semibold w-[111px] h-[40px] flex justify-center items-center rounded-full shadow">
                    £ {oldPrice}
                </span>
            </div>

            <div data-aos="zoom-in" className="">
                <h3 className="text-[32px] font-semibold text-[#333333] my-3 leading-[48px]">{title}</h3>

                <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center gap-1">
                        <RiSendPlaneLine />
                        <span className='text-[#666666]'>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <PiBedLight className="text-gray-700" />
                        <span className='text-[#666666]'>{bedrooms} Bedroom</span>
                    </div>
                </div>

                <div className="mt-3 flex items-center space-x-4">
                    <p className="text-sm text-gray-400 ">£ {oldPrice}/night</p>
                    <button onClick={() => setModalOpen(true)} className="bg-[#3854B5] text-white w-[105px] cursor-pointer h-[32px] rounded-full text-sm hover:bg-[#3853b5d7] transition">
                        Book Now
                    </button>
                </div>
            </div>

            <CustomModal title={title} isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} width='700px' />
        </div>
    );
};

export default FeaturedListing