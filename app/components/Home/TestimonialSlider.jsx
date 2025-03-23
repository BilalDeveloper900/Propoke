// components/TestimonialSlider.jsx
'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import Avatar from '../../assets/home/Avatar.svg';

const testimonials = [
    {
        text: "I couldn't have asked for a better real estate service. They truly care about their clients and go the extra mile!",
        name: 'Shoo Phar Mhan',
        title: 'Kang Masak',
        image: Avatar,
    },
    {
        text: 'Highly recommend! Professional, responsive, and truly care about finding the best property for their clients.',
        name: 'Shoo Phar Dhie',
        title: 'Kang Bakso',
        image: Avatar,
    },
    {
        text: '"Excellent service! They guided me through every step, making home-buying stress-free and enjoyable."',
        name: 'Shoo Yha Thi',
        title: 'Kang Ngomel',
        image: Avatar,
    },
    {
        text: '"The process was seamless, and the team was incredibly helpful. I found my perfect home within days!"',
        name: 'Shoo Mhar Nhi',
        title: 'Kang Gombal',
        image: Avatar,
    },
];

const settings = {
    infinite: true,
    speed: 5000,             
    autoplay: true,
    autoplaySpeed: 0,         
    cssEase: "linear",         
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    swipe: false,              
    draggable: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 }
        }
    ]
};


export default function TestimonialSlider() {
    return (
        <div className="py-12 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">What Says from Our Happy Customers</h2>
                <p className="text-gray-500 mb-8 max-w-xl">
                    Don’t just take our word for it—hear from our satisfied clients who found their dream homes with Propoke!
                </p>
                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white shadow-md rounded-lg p-6 h-full">
                                <p className="text-gray-700 mb-6">"{t.text}"</p>
                                <div className="flex items-center">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div className="ml-3">
                                        <p className="font-semibold text-gray-800">{t.name}</p>
                                        <p className="text-gray-500 text-sm">{t.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
