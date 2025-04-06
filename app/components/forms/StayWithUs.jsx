'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const StayWithUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        propertyType: '',
        city: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        form.append('access_key', 'e894f63a-b606-41a6-ab56-8a6c739b5d85');
        form.append('from_name', 'propoke');

        const object = Object.fromEntries(form);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        });

        const data = await res.json();
        if (data.success) {
            toast.success('Form submitted successfully');
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                propertyType: '',
                city: '',
                message: '',
            });
        } else {
            toast.error('Form submission failed');
        }
    };

    return (
        <div className="max-w-[1146px] mx-auto mb-20">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>

                    <div>
                        <label>Property Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Property Location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>

                    <div>
                        <label>Property Type</label>
                        <input
                            type="text"
                            name="propertyType"
                            placeholder="Property Type"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>

                    <div>
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-[16px] border rounded-[16px] h-[64px]"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Write Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-md h-[120px]"
                        required
                    />
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="bg-[#E0E0E0] text-[#333] h-[48px] px-6 rounded-full"
                        onClick={() =>
                            setFormData({
                                name: '',
                                email: '',
                                phone: '',
                                location: '',
                                propertyType: '',
                                city: '',
                                message: '',
                            })
                        }
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="bg-[#3854B5] hover:bg-[#3853b5ce] text-white h-[48px] px-6 rounded-full"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StayWithUs;
