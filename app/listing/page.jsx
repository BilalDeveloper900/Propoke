'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBed } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdBathtub, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import propertyService from '../api/propertyService'
import CustomModal from '../components/CustomModal/CustomModal'

const page = () => {
    const [properties, setProperties] = useState(null);

    const getAllProperties = async () => {
        try {
            const response = await propertyService.getAllProperties();
            setProperties(response);
            console.log(response, 'response');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProperties();
    }, []);

    if (!properties) return null

    return (
        <div className='max-w-[1236px] mx-auto px-4 sm:px-6 md:px-10'>
            <div  className='h-[312px] px-4 flex justify-center items-center text-center flex-col'>
                <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Our Listing</h1>

                <p className='leading-[32px] max-w-[600px]'>Discover the best properties with Solid Stay Properties! Whether you’re looking for a dream home, luxury villa, commercial space, or investment property, our curated listings offer verified, high-quality properties in prime locations.</p>
            </div>

            <section className="bg-white mt-6 sm:mt-10 md:mt-[66px]">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties.map((item, index) => (
                        <Link key={index} href={`/detail-page/${item._id}`}>
                            <ListingCard
                                images={item?.images[0]}
                                price={item?.price}
                                title={item?.propertyName}
                                location={item?.location}
                                bedrooms={item?.bedrooms}
                                bathrooms={item?.bathrooms}
                                squareFeet={item?.squareFeet}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}


const ListingCard = ({ images, price, title, location, bedrooms, bathrooms, squareFeet }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    console.log(images, 'image')

    return (
        <div  className="rounded-xl overflow-hidden max-w-[368px] mx-auto bg-white mb-[40px]">
            <div className="relative">
                <Image
                    src={images}
                    alt={title}
                    width={368}
                    height={240}
                    className="rounded-xl object-cover h-60 w-full"
                />

                <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-semibold w-[111px] h-[40px] flex justify-center items-center rounded-full shadow">
                    £ {price}
                </span>
            </div>

            <div>
                <h3 className="text-[32px] font-semibold text-[#333333] my-3 leading-[48px]">{title}</h3>

                <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center gap-1">
                        <IoLocationSharp color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{location}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm bg-[#FAFAFA] p-3 rounded-xl space-x-4">
                    <div className="flex items-center gap-1">
                        <MdOutlineCheckBoxOutlineBlank color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{squareFeet} Sq Ft</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaBed color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{bedrooms} Bedroom</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <MdBathtub color='#222430' fontSize={24} />
                        <span className='text-[#666666]'>{bathrooms} Bathroom</span>
                    </div>
                </div>
            </div>

            <CustomModal title={title} location={location} isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} width='700px' />
        </div>
    );
};

export default page