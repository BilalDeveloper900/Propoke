'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image1 from '../../assets/about/about1.svg';
import image2 from '../../assets/about/about2.svg';
import image3 from '../../assets/about/about3.svg';
import PhotoSection from '../../components/DetailPage/PhotoSection'
import PhotoDetail from '../../components/DetailPage/PhotoDetail'
import PropertyDetail from '../../components/DetailPage/PropertyDetail'

const Page = () => {

  // Example fallback/mock data (replace this with actual props/data)
  const business = {
    cover_image: image1,
    profile_image: image2,
    attachments: [image1, image2, image3],
  };

  const banner = image3;

  return (
    <div className='max-w-[1136px] mx-auto px-4 sm:px-6 md:px-10 lg:px-0 mb-20'>
      <div data-aos="zoom-in" className='h-[250px] px-4 flex justify-center items-start text-start flex-col'>
        <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Qiri Minimalist House</h1>

        <p className='leading-[32px] max-w-[600px]'>Qiri Minimalist House – Modern Living with Elegance 🏡✨</p>
      </div>

      <PhotoSection business={business} banner={banner} />

      <PhotoDetail />

      <PropertyDetail business={business} />
    </div>
  );
};

export default Page;
