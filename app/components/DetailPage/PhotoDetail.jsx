import React from 'react'
import { MdBathtub, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const PhotoDetail = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between mt-[33px]'>
                <div data-aos="zoom-in" className='md:max-w-[528px] '>
                    <p className='leading-[32px] max-w-[600px]'>Clean lines, neutral tones, and a clutter-free design. A seamless flow between indoor and outdoor areas. Energy-efficient lighting, large windows for natural ventilatio</p>

                    <div className="mt-4">
                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                            <div className="flex items-center gap-1">
                                <IoLocationSharp color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>Pakistan Faisalabad</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 text-sm bg-[#FAFAFA] p-3 rounded-xl space-x-4">
                            <div className="flex items-center gap-1">
                                <MdOutlineCheckBoxOutlineBlank color='#222430' fontSize={24} />

                                <span className='text-[#666666]'>3,800 Sq Ft</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <FaBed color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>12 Bedroom</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <MdBathtub color='#222430' fontSize={24} />
                                <span className='text-[#666666]'>3 Bedroom</span>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div data-aos="zoom-in" className='md:max-w-[528px] '>
                    <p className='leading-[32px] max-w-[600px]'> High-quality wood, stone, and glass for a luxurious feel. Advanced security, lighting, and temperature control.</p>

                    <div className='flex flex-col md:flex-row md:items-center mt-5'>
                        <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold '>£ 140</h1>

                        <button className='bg-[#3854B5] w-full md:w-[154px] h-[48px] flex justify-center items-center text-white mt-4 md:mt-0 md:ml-[40px] rounded-full'>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail
