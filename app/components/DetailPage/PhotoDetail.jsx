'use client'
import React, { useState } from 'react'
import { MdBathtub, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import CustomModal from '../CustomModal/CustomModal';

const PhotoDetail = ({ property }) => {
    if (!property || !property.images || property.images.length === 0) return null;
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between mt-[33px]'>
                <div  className='md:max-w-[528px] '>
                    <p className='leading-[32px] max-w-[600px]'>{property?.propertyDetail}</p>

                    <div className="mt-4">
                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                            <div className="flex items-center gap-1">
                                <IoLocationSharp color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>{property?.location}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 text-sm bg-[#FAFAFA] p-3 rounded-xl space-x-4">
                            <div className="flex items-center gap-1">
                                <MdOutlineCheckBoxOutlineBlank color='#222430' fontSize={24} />

                                <span className='text-[#666666]'>{property?.squareFeet} Sq Ft</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <FaBed color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>{property?.bedrooms} Bedroom</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <MdBathtub color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>{property?.bathrooms} Bathrooms</span>
                            </div>
                        </div>

                    </div>
                </div>




                <div  className='md:max-w-[528px] '>
                    {/* <p className='leading-[32px] max-w-[600px]'> High-quality wood, stone, and glass for a luxurious feel. Advanced security, lighting, and temperature control.</p> */}

                    <div className='flex flex-col md:flex-row md:items-center mt-5'>
                        <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold '>£ {property?.price}</h1>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setModalOpen(true);
                            }}
                            className='bg-[#3854B5] w-full md:w-[154px] h-[48px] flex justify-center cursor-pointer items-center text-white mt-4 md:mt-0 md:ml-[40px] rounded-full'>Book now</button>
                    </div>
                </div>
            </div>

            <CustomModal title={property?.title} location={property?.location} isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} width='700px' />
        </div>
    )
}

export default PhotoDetail
