'use client';
import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import propertyService from '../api/propertyService';
import bookingService from '../api/bookingService';

const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const [propertiesData, setPropertiesData] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        days: "",
        date: "",
        message: "",
        houseTitle: "",
        propertyLocation: ""
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        setLoading(true)

        event.preventDefault();

        const formDataObj = new FormData(event.target);
        formDataObj.append("houseTitle", formData.houseTitle);
        formDataObj.append("access_key", "e894f63a-b606-41a6-ab56-8a6c739b5d85");
        formDataObj.append("from_name", "solidstayproperties");
        formDataObj.append("date", formData.date);

        const object = Object.fromEntries(formDataObj);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });

        const data = await res.json();
        if (data.success) {
            toast.success("Form submitted successfully");
            setFormData({
                name: "",
                email: "",
                phone: "",
                days: "",
                date: "",
                message: "",
                houseTitle: '',
            });

            await bookingService.createBooking({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                days: formData.days,
                date: formData.date,
                message: formData.message,
                houseTitle: formData.houseTitle,
                propertyLocation: formData.propertyLocation,
            });

            router.push("/"); // Go back or redirect somewhere else
        } else {
            toast.error("Form submission failed");
        }
        setLoading(false)

    };


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
        <div className="max-w-4xl mx-auto p-6 pt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Booking Now</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input type="hidden" name="houseTitle" value={formData.houseTitle} />
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-xl h-[64px]"
                        />
                    </div>

                    <div>
                        <label>Your Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-xl h-[64px]"
                        />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2  gap-4">
                    <div>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+123-456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-xl h-[64px]"
                        />
                    </div>

                    <div>
                        <label>Booking Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-xl h-[64px]"
                        />
                    </div>


                </div>
                <input type="hidden" name="propertyLocation" value={formData.propertyLocation} />

                <div className='grid sm:grid-cols-2  gap-4'>
                    <div>
                        <label>Days</label>
                        <input
                            type="number"
                            name="days"
                            placeholder="Number of days"
                            value={formData.days}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-xl h-[64px]"
                        />
                    </div>

                        <div>
                            <label>Select Property</label>
                            <select
                                name="property"
                                onChange={(e) => {
                                    const selected = propertiesData?.find(
                                        (p) => p._id === e.target.value
                                    );
                                    setFormData({
                                        ...formData,
                                        houseTitle: selected?.propertyName || "",
                                        propertyLocation: selected?.location || ""
                                    });
                                }}
                                className="w-full p-4 border rounded-xl h-[64px]"
                            >
                                <option value="">Select property</option>
                                {propertiesData?.map((property) => (
                                    <option key={property?._id} value={property?._id}>
                                        {property?.propertyName}
                                    </option>
                                ))}
                            </select>
                        </div>

                </div>



                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border rounded-xl h-[120px]"
                ></textarea>

                <button
                    type="submit"
                    className="text-base bg-[#3854B5] cursor-pointer text-white h-[48px] w-[186px] p-2 rounded-full hover:bg-[#2e45a0] transition"
                >
                    {loading ? 'Loading...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default page;
