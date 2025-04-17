import Image from 'next/image';
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import MapContainer from '../../components/Map/MapContainer'
import ListingCard from '../Home/ListingCard';
import list1 from '../../assets/home/list1.svg'
import list2 from '../../assets/home/list2.svg'
import list3 from '../../assets/home/list3.svg'
import list4 from '../../assets/home/list4.svg'

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

const PropertyDetail = ({ business }) => {
    const items = new Array(16).fill(null);
    return (
        <div className='flex flex-col md:flex-row justify-between mt-20 '>
            <div className='md:w-[720px]'>
                <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Details Property</h1>
                <p className='leading-[32px] max-w-[600px] mb-6'>Experience the perfect blend of simplicity and sophistication with the Qiri Minimalist House. Designed for modern living, this home offers a functional layout, premium finishes, and a serene atmosphere, making it an ideal choice for families, professionals, and investors.</p>

                <div className='grid grid-cols-4 gap-6'>
                    {items.map((_, index) => (
                        <div key={index} className='flex'>
                            <FaCircleCheck fontSize={20} />
                            <span className='pl-2'>Backyard</span>
                        </div>
                    ))}

                </div>

                <div className='flex flex-wrap mt-10'>
                    {business?.attachments?.map((image, index) => (
                        <Image
                            key={index}
                            alt={`Attachment ${index + 1}`}
                            className="w-[320px] h-[176px] rounded-[16px] mr-4 mb-4 object-cover shadow-md"
                            src={image || banner}
                        />
                    ))}
                </div>

                <div className='mt-10'>
                    <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Locations</h1>
                    <p className='leading-[32px] max-w-[600px] mb-6'>At Propoke Real Estate, we offer premium properties in top locations to match your lifestyle and investment needs. Whether you’re looking for a peaceful suburban home, a luxury city apartment, or a commercial property in a business hub, we have the perfect location for you.</p>

                    <MapContainer />
                </div>
            </div>

            <div className=' max-w-full md:max-w-[420px]'>
                <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Other Property</h1>
                <p className='leading-[32px] max-w-[600px] mb-6'>Browse our top listings below!</p>

                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-1">
                        {listings.map((item, index) => (
                            <div key={index} className='mt-6'>
                                <ListingCard  {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail
