import React from 'react'
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { PiBedLight } from 'react-icons/pi';
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


const FeaturedListing = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Left Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
                    Featured Listing
                </h2>

                {/* Right Paragraph */}
                <p className="text-gray-600 text-base max-w-3xl leading-relaxed">
                    Discover our top featured properties, carefully selected to offer the best in
                    comfort, location, and design. Whether you're searching for a modern city apartment,
                    a spacious family home, or a luxurious villa, these exclusive listings provide the
                    perfect opportunity to find your dream home.
                </p>

            </div>


            <section className="bg-white py-12 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {listings.map((item, index) => (
                        <ListingCard key={index} {...item} />
                    ))}
                </div>
            </section>

        </div>
    )
}


const ListingCard = ({ image, price, title, location, bedrooms, oldPrice }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-sm max-w-xs bg-white">
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={280}
                    className="rounded-xl object-cover h-60 w-full"
                />
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                    ${price},-
                </span>
            </div>

            <div className="px-3 py-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

                <div className="flex items-center text-sm text-gray-600 space-x-4 mb-1">
                    <div className="flex items-center gap-1">
                        <FiMapPin className="text-gray-700" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <PiBedLight className="text-gray-700" />
                        <span>{bedrooms} Bedroom</span>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-400 line-through">${oldPrice}/night</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedListing