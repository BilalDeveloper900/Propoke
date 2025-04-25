'use client'
import { useEffect, useState } from 'react';
import ListingCard from './ListingCard'
import Link from 'next/link';
import propertyService from '../../api/propertyService';


const FeaturedListing = () => {
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
        <div className='max-w-[1136px] mx-auto px-4 pb-8 sm:px-6 md:px-10 lg:px-0 sm:pb-10 md:pb-20'>
            <div className="flex flex-col sm:flex-row justify-between">
                <h2  className="text-[32px] md:text-[40px] font-bold text-[#333333]">
                    Featured Listing
                </h2>

                <p  className="text-[#666666] text-base sm:w-[324px] md:w-[560px] leading-[32px]">
                    Discover our top featured properties, carefully selected to offer the best in
                    comfort, location, and design. Whether you're searching for a modern city apartment,
                    a spacious family home, or a luxurious villa, these exclusive listings provide the
                    perfect opportunity to find your dream home.
                </p>

            </div>


            <section className="bg-white mt-6 sm:mt-10 md:mt-[66px]">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {propertiesData?.slice(0, 4)?.map((item, index) => (
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
            </section>

        </div>
    )
}


export default FeaturedListing