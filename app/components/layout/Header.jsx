import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
    return (
        <div className='bg-[#FAFAFA] w-full sticky top-0 z-50 '>
            <div className='max-w-[1232px] mx-auto sm:flex-row flex-col flex justify-between p-3'>
                <div className='flex sm:flex-row flex-col items-center space-x-4'>
                    <div className='flex items-center'>
                        <MdEmail fontSize={18} className='mr-1 text-[#3854B5] cursor-pointer'/>
                        management@solidstayproperties.co.uk
                    </div>

                    <div className='flex items-center'>
                        <FaPhoneAlt className='mr-1 text-[#3854B5] cursor-pointer' />
                        +44 7857 678064
                    </div>
                </div>

                <div className=' hidden sm:flex items-center space-x-4 text-lg'>
                    <FaFacebook className='text-[#3854B5] cursor-pointer' />
                    <AiFillTwitterCircle className='text-[#3854B5] cursor-pointer' />
                    <FaInstagram className='text-[#3854B5] cursor-pointer' />
                    <FaLinkedin className='text-[#3854B5] cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Header;
