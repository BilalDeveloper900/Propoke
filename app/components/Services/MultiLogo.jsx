import React from 'react'
import logo1 from '../../assets/services/logo.svg'
import logo2 from '../../assets/services/logo1.svg'
import logo3 from '../../assets/services/logo2.svg'
import logo4 from '../../assets/services/logo3.svg'
import Image from 'next/image'

const MultiLogo = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 mb-10'>
            <div  className="max-w-[1136px] grid sm:grid-cols-2 mx-auto items-center mb-12">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4 max-w-[528px]">
                    Our Providers
                </h2>

                <p className=" text-[#666666] text-base leading-[32px]">
                    we collaborate with a network of esteemed partners to provide our clients with comprehensive and top-notch services.
                </p>
            </div>

            <div   className='max-w-[1236px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4'>
                <Image
                    src={logo1}
                    alt="Modern House"
                    className="rounded-[16px] h-full w-[250px] mx-auto object-contain"
                    priority
                />

                <Image
                    src={logo2}
                    alt="Modern House"
                    className="rounded-[16px] h-full w-[250px] mx-auto object-contain"
                    priority
                />

                <Image
                    src={logo3}
                    alt="Modern House"
                    className="rounded-[16px] h-full w-[250px] mx-auto object-contain"
                    priority
                />

                <Image
                    src={logo4}
                    alt="Modern House"
                    className="rounded-[16px] h-full w-[250px] mx-auto object-contain"
                    priority
                />
            </div>

        </div>
    )
}

export default MultiLogo