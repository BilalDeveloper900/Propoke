'use client'
import React, { useState } from 'react'
import list1 from '../assets/list/list1.svg'
import list2 from '../assets/list/list2.svg'
import list3 from '../assets/list/list3.svg'
import { PiBedLight } from 'react-icons/pi';
import Image from 'next/image';
import { RiSendPlaneLine } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'
import { MdBathtub } from "react-icons/md";
import CustomModal from '../components/CustomModal/CustomModal'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaBed } from 'react-icons/fa'
import Link from 'next/link'

const listings = [
    {
        image: list1,
        price: '2,800',
        title: 'Qiri Minimalist House',
        location: 'Jupiter Street, Indonesia',
        bedrooms: 2,
        oldPrice: 140,
    },
    {
        image: list2,
        price: '4,800',
        title: 'Qanan Luxury House',
        location: 'Mars Street, Indonesia',
        bedrooms: 2,
        oldPrice: 140,
    },
    {
        image: list3,
        price: '5,800',
        title: 'Tingah Elegant House',
        location: 'Pluto Street, Indonesia',
        bedrooms: 3,
        oldPrice: 140,
    },
];

const page = () => {
    return (
        <div className='max-w-[1236px] mx-auto px-4 sm:px-6 md:px-10'>
            <div data-aos="zoom-in"  className='h-[312px] px-4 flex justify-center items-center text-center flex-col'>
                <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Our Listing</h1>

                <p className='leading-[32px] max-w-[600px]'>Discover the best properties with Propoke Real Estate! Whether you’re looking for a dream home, luxury villa, commercial space, or investment property, our curated listings offer verified, high-quality properties in prime locations.</p>
            </div>

            <section className="bg-white mt-6 sm:mt-10 md:mt-[66px]">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listings.map((item, index) => (
                        <Link key={index} href={`/detail-page/${index}`}>
                            <ListingCard  {...item} />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}


const ListingCard = ({ image, price, title, location, bedrooms, oldPrice }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div  data-aos="zoom-in"  className="rounded-xl overflow-hidden max-w-[368px] mx-auto bg-white mb-[40px]">
            <div data-aos="zoom-in" className="relative">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-xl object-cover h-60 w-full"
                />
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-semibold w-[111px] h-[40px] flex justify-center items-center rounded-full shadow">
                    £ {price},-
                </span>
            </div>

            <div data-aos="zoom-in" className="">
                <h3 className="text-[32px] font-semibold text-[#333333] my-3 leading-[48px]">{title}</h3>

                <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center gap-1">
                        <IoLocationSharp color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{location}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm bg-[#FAFAFA] p-3 rounded-xl space-x-4">
                    <div className="flex items-center gap-1">
                        <MdOutlineCheckBoxOutlineBlank color='#222430' fontSize={24} />

                        <span className='text-[#666666]'>3,800 Sq Ft</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaBed color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{bedrooms} Bedroom</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <MdBathtub color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{bedrooms} Bedroom</span>
                    </div>
                </div>
            </div>

            <CustomModal title={title} isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} width='700px' />
        </div>
    );
};

export default page