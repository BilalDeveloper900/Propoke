import React from 'react'
import FeaturedServices from '../components/Services/FeaturedServices'
import HomeCtaSection from '../components/Services/HomeCtaSection'
import MultiLogo from '../components/Services/MultiLogo'
import RealEstateServices from '../components/Services/RealEstateServices'

const page = () => {
    return (
        <div className=' px-4 sm:px-6 md:px-10'>
            <div data-aos="zoom-in"  className='h-[312px] px-4 flex justify-center items-center text-center flex-col'>
                <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Our Services</h1>

                <p className='leading-[32px] max-w-[600px]'>We specialize in providing high-quality construction and building services for various types of projects. Whether you need a new home, a corporate office, or a commercial space, we ensure top-tier craftsmanship, timely execution, and cost-effective solutions.</p>
            </div>

            <div>
                <FeaturedServices />
            </div>

            <div>
                <RealEstateServices />
            </div>

            <div>
                <MultiLogo />
            </div>

            <div>
                <HomeCtaSection />
            </div>
        </div>
    )
}

export default page