'use client'
import React, { useState } from 'react'
import list1 from '../../assets/home/list1.svg'
import list2 from '../../assets/home/list2.svg'
import list3 from '../../assets/home/list3.svg'
import list4 from '../../assets/home/list4.svg'
import ListingCard from './ListingCard'

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
        <div className='max-w-[1136px] mx-auto px-4 pb-8 sm:px-6 md:px-10 lg:px-0 sm:pb-10 md:pb-20'>
            <div className="flex flex-col sm:flex-row justify-between">
                <h2 data-aos="zoom-in" className="text-[32px] md:text-[40px] font-bold text-[#333333]">
                    Featured Listing
                </h2>

                <p data-aos="zoom-in" className="text-[#666666] text-base sm:w-[324px] md:w-[560px] leading-[32px]">
                    Discover our top featured properties, carefully selected to offer the best in
                    comfort, location, and design. Whether you're searching for a modern city apartment,
                    a spacious family home, or a luxurious villa, these exclusive listings provide the
                    perfect opportunity to find your dream home.
                </p>

            </div>


            <section className="bg-white mt-6 sm:mt-10 md:mt-[66px]">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {listings.map((item, index) => (
                        <ListingCard key={index} {...item} />
                    ))}
                </div>
            </section>

        </div>
    )
}


export default FeaturedListing