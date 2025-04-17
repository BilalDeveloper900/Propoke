'use client'
import React, { useState } from 'react'
import { RiSendPlaneLine } from "react-icons/ri";
import CustomModal from '../CustomModal/CustomModal';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { PiBedLight } from 'react-icons/pi';

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

export default ListingCard
