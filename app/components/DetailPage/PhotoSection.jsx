'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const PhotoSection = ({ banner, business }) => {
    const [showGallery, setShowGallery] = useState(false);

    return (
        <di data-aos="zoom-in" v>
            <div className="">
                <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4">
                    {/* Main Image Section */}
                    <div className="w-full md:w-2/3">
                        <Image
                            alt="Main placeholder"
                            className="w-full h-[400px] rounded-lg object-cover shadow-md"
                            src={business?.cover_image || banner}
                        />
                    </div>

                    {/* Thumbnail Side Images */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 relative">
                        {business?.attachments?.slice(0, 2).map((image, index) => (
                            <Image
                                key={index}
                                alt={`Attachment ${index + 1}`}
                                className="w-full h-[190px] rounded-lg object-cover shadow-md"
                                src={image || banner}
                            />
                        ))}

                        {/* {business?.attachments?.length > 2 && (
            <button
              className="absolute bottom-3 right-3 mt-2 px-4 py-2 bg-white text-black rounded-lg shadow"
              onClick={() => setShowGallery(true)}
            >
              See All {business.attachments.length} Photos
            </button>
          )} */}
          
                    </div>
                </div>

                {/* Fullscreen Gallery Modal */}
                {showGallery && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                        <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
                            <button
                                className="absolute top-3 right-3 text-black text-xl font-bold hover:text-red-600 transition"
                                onClick={() => setShowGallery(false)}
                            >
                                ✕
                            </button>

                            <ImageGallery
                                items={
                                    business?.attachments?.map((img, idx) => ({
                                        original: img.src,
                                        thumbnail: img.src,
                                        originalAlt: `Attachment ${idx + 1}`,
                                        thumbnailAlt: `Thumbnail ${idx + 1}`,
                                    })) || []
                                }
                                showThumbnails={true}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                thumbnailPosition="right"
                                lazyLoad={true}
                                showIndex={true}
                                additionalClass="max-h-[80vh]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </di>
    )
}

export default PhotoSection
