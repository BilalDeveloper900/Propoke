'use client';
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Header = () => {
    const whatsappNumber = '447857678064'; // without + or spaces

    return (
        <div className='bg-[#3854B5] text-white w-full sticky top-0 z-50'>
            <div className='max-w-[1232px] mx-auto sm:flex-row flex-col flex justify-between p-3'>
                <div data-aos="zoom-in" className='flex sm:flex-row flex-col items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0'>
                    <a href="mailto:management@solidstayproperties.co.uk" className='flex items-center hover:underline'>
                        <MdEmail fontSize={18} className='mr-1 cursor-pointer' />
                        management@solidstayproperties.co.uk
                    </a>

                    <a href="tel:+447857678064" className='flex items-center hover:underline'>
                        <FaPhoneAlt className='mr-1 cursor-pointer' />
                        +44 7857 678064
                    </a>
                </div>

                <div data-aos="zoom-in" className='flex justify-center items-center space-x-4 text-lg mt-2 sm:mt-0'>
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center bg-green-500 text-white px-4 py-1 rounded-full font-medium hover:bg-green-600 transition'
                    >
                        <FaWhatsapp className='mr-2 text-xl' />
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
