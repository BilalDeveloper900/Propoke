'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import propertyService from '../../api/propertyService';
import image3 from '../../assets/about/about3.svg';
import PhotoDetail from '../../components/DetailPage/PhotoDetail';
import PhotoSection from '../../components/DetailPage/PhotoSection';
import PropertyDetail from '../../components/DetailPage/PropertyDetail';
import Loader from '../../components/Loader/Loader';

const Page = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null)

  useEffect(() => {
    if (id) {
      // Fetch property by ID
      propertyService.getPropertyById(id)
        .then((res) => setProperty(res))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!property) return <Loader />;

  const banner = image3;

  return (
    <div className='max-w-[1136px] mx-auto px-4 sm:px-6 md:px-10 lg:px-0 mb-20'>
      <div  className='h-[250px] px-4 flex justify-center items-start text-start flex-col'>
        <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>{property?.propertyName}</h1>

        <p className='leading-[32px] max-w-[600px]'>{property?.location}</p>
      </div>

      <PhotoSection property={property} banner={banner} />

      <PhotoDetail property={property}/>

      <PropertyDetail property={property} />
    </div>
  );
};

export default Page;
