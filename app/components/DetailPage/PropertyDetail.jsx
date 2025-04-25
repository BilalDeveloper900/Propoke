'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaCircleCheck } from "react-icons/fa6";
import MapContainer from '../../components/Map/MapContainer';
import ListingCard from '../Home/ListingCard';
import React, { useEffect, useState } from 'react'
import propertyService from '../../api/propertyService';


const PropertyDetail = ({ property }) => {
    if (!property || !property.images || property.images.length === 0) return null;

    const [propertiesData, setPropertiesData] = useState(null);

    const getAllProperties = async () => {
        try {
            const response = await propertyService.getAllProperties();
            setPropertiesData(response);
            console.log(response, 'propertiesData');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProperties();
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between mt-20 '>
            <div className='md:w-[720px]'>
                <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Details Property</h1>
                {/* <p className='leading-[32px] max-w-[600px] mb-6'>Experience the perfect blend of simplicity and sophistication with the Qiri Minimalist House. Designed for modern living, this home offers a functional layout, premium finishes, and a serene atmosphere, making it an ideal choice for families, professionals, and investors.</p> */}

                <div className='grid grid-cols-4 gap-6'>
                    {property?.tags?.map((tag, index) => (
                        <div key={index} className='flex'>
                            <FaCircleCheck fontSize={20} />
                            <span className='pl-2'>{tag}</span>
                        </div>
                    ))}

                </div>

                <div className='flex flex-wrap mt-10'>
                    {property?.images?.map((image, index) => (
                        <Image
                            key={index}
                            alt={`Attachment ${index + 1}`}
                            className="w-[320px] h-[176px] rounded-[16px] mr-4 mb-4 object-cover shadow-md"
                            width={320}
                            height={176}
                            src={image}
                        />
                    ))}
                </div>

                <div className='mt-10'>
                    <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Locations</h1>
                    {/* <p className='leading-[32px] max-w-[600px] mb-6'>At Propoke Real Estate, we offer premium properties in top locations to match your lifestyle and investment needs. Whether you’re looking for a peaceful suburban home, a luxury city apartment, or a commercial property in a property hub, we have the perfect location for you.</p> */}

                    <MapContainer />
                </div>
            </div>

            <div className=' max-w-full md:max-w-[420px]'>
                <h1 className='md:text-[40px] sm:text-[32px] text-2xl font-bold mb-4'>Other Property</h1>
                <p className='leading-[32px] max-w-[600px] mb-6'>Browse our top listings below!</p>

                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-1">
                        {propertiesData?.map((item, index) => (
                            <Link key={index} href={`/detail-page/${item?._id}`} className='mt-6'>
                                <ListingCard
                                    images={item?.images[0]}
                                    price={item?.price}
                                    title={item?.propertyName}
                                    location={item?.location}
                                    bedrooms={item?.bedrooms}
                                    bathrooms={item?.bathrooms}
                                    squareFeet={item?.squareFeet} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail
