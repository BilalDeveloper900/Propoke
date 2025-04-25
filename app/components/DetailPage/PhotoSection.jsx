import Image from 'next/image';
import React, { useState } from 'react'

const PhotoSection = ({ banner, property }) => {
    if (!property || !property.images || property.images.length === 0) return null;
  
    return (
      <div >
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4">
          {/* Main Image Section */}
          <div className="w-full md:w-2/3">
            <Image
              alt="Main placeholder"
              className="w-full h-[400px] rounded-lg object-cover shadow-md"
              src={property.images[0]}
              width={800}
              height={400}
            />
          </div>
  
          {/* Thumbnail Side Images */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 relative">
            {property.images.slice(1, 3).map((image, index) => (
              <Image
                key={index}
                alt={`Attachment ${index + 1}`}
                className="w-full h-[190px] rounded-lg object-cover shadow-md"
                src={image}
                width={400}
                height={190}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default PhotoSection
