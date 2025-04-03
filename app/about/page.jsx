import React from 'react'
import MultiLogoAbout from '../components/about/MultiLogo'
import aboutImage from '../assets/about/about1.svg'
import Image from 'next/image'
import OurHistory from '../components/about/OurHistory'
import AgentList from '../components/about/AgentList'

const page = () => {
    return (
        <div className=' px-4 sm:px-6 md:px-10'>
            <div data-aos="zoom-in" className='h-[312px] px-4 flex justify-center items-center text-center flex-col'>
                <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>About Us</h1>

                <p className='leading-[32px] max-w-[600px]'>At Propoke Real Estate, We believe that finding the perfect home should be seamless and enjoyable experience. With a passion for real estate and a commitment to excellence, we help individuals and families buy, sell, and invest in properties with confidence.</p>
            </div>

            <div data-aos="zoom-in" className="max-w-[1136px] grid sm:grid-cols-2 mx-auto items-center mt-10">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4 max-w-[528px]">
                    Over 12+ Years Experience in Real Estate Services
                </h2>

                <p className=" text-[#666666] text-base leading-[32px]">
                    With over 12 years of experience in the real estate industry, Propoke Real Estate has built a reputation for trust, expertise, and outstanding service
                </p>
            </div>

            <div data-aos="zoom-in" className='max-w-[1136px] mx-auto py-[80px] '>
                <Image
                    src={aboutImage}
                    alt="Modern House"
                    className="rounded-[16px] w-full h-[400px] object-cover"
                    priority
                />
            </div>

            <div data-aos="zoom-in" className="max-w-[1136px] grid sm:grid-cols-2 mx-auto items-center mt-10 mb-20 pb-10">
                <div>
                    <h3 className="text-[20px] md:text-[32px] font-bold text-[#333333] mb-4 max-w-[528px]">
                        Our Vision
                    </h3>

                    <p className=" text-[#666666] text-base leading-[32px]">
                        With over 12 years of experience in the real estate industry, Propoke Real Estate has built a reputation for trust, expertise, and outstanding service
                    </p>
                </div>

                <div>
                    <h3 className="text-[20px] md:text-[32px] font-bold text-[#333333] mb-4 max-w-[528px]">
                        Our Mission
                    </h3>

                    <p className=" text-[#666666] text-base leading-[32px]">
                        Provide exceptional service with integrity and transparency. Offer a seamless property search experience with verified listings. Ensure a hassle-free buying and selling process for all clients.
                        Deliver expert real estate advice to help you make the right investment.
                    </p>
                </div>
            </div>

            <MultiLogoAbout />

            <div>
                <OurHistory />
            </div>

            <div>
                <AgentList />
            </div>



            <div data-aos="zoom-in" className='max-w-[1136px] mx-auto pt-4 pb-5 my-20'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className='text-[#666666] text-base leading-[32px]'>
                        Need Expert Guidance? Our agents are ready to assist you!
                    </div>

                    <span className='w-full  cursor-pointer mt-2 sm:mt-0 sm:w-[149px] h-[48px] flex justify-center items-center border rounded-full border-[#666666] text-[#333333]'>
                        See More
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page