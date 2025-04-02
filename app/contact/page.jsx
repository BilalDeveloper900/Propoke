'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    questions: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "e894f63a-b606-41a6-ab56-8a6c739b5d85");
    formData.append("from_name", "propoke"); // Change notification name

    const object = Object.fromEntries(formData);
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
        questions: "",
        message: "",
      });
    } else {
      toast.error("Form submission failed");
    }
  };


  return (
    <div className=' px-4 sm:px-6 md:px-10'>
      <div className='h-[312px] px-4 flex justify-center items-center text-center flex-col'>
        <h1 className=' mb-4 md:text-[56px] sm:text-[40px] text-[32px] sm:leading-[56px] md:leading-[72px] leading-[48px] font-bold'>Contact Us</h1>

        <p className='leading-[32px] max-w-[600px]'>We’re here to help you find your dream home! Whether you have questions about a property, need assistance with buying or selling, or want expert real estate advice</p>
      </div>

      <div className='flex flex-col md:flex-row justify-between w-full max-w-[1136px] mx-auto py-[40px] md:py-[80px]'>
        <div className='max-w-370px hidden md:block'>
          <h2 className='mb-4 text-[24px] sm:text-[32px] md:text-[40px] md:leading-[56px] leading-[40px] font-bold'>Get in Touch</h2>

          <p className='leading-[32px] mb-6'>We’re here to help you with all your real estate needs.</p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FiMapPin className=" text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>368A Fulwood Road; Sheffield; S10 3GD</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>+447857678064</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>management@solidstayproperties.co.uk</span>
            </li>
          </ul>
        </div>

        <div className='max-w-[688px]'>
          <h2 className='mb-4 text-[24px] sm:text-[32px] md:text-[40px] md:leading-[56px] leading-[40px] font-bold'>Have a Question? Request a Visit? or Request a Quote? Don’t be Shy to Message Us!</h2>

          <p className='leading-[32px] mb-6'>We’re here to help! Whether you need more details about a property, assistance with buying or selling, or expert real estate advice, our team is ready to assist you.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-[16px] border rounded-[16px] h-[64px]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-[16px] border rounded-[16px] h-[64px]"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label htmlFor="phone">Your Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-[16px] border rounded-[16px] h-[64px]"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject">Your Subject</label>

                <input
                  type="text"
                  name="questions"
                  placeholder="Ask a question"
                  value={formData.questions}
                  onChange={handleChange}
                  className="w-full p-[16px] border rounded-[16px] h-[64px]"
                  required
                />
              </div>

            </div>

            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              placeholder="Type Here"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-[16px] border rounded-[16px] h-[120px]"
              required
            ></textarea>

            <button type="submit" className="text-base cursor-pointer bg-[#3854B5] text-white h-[48px] w-[186px] p-2 rounded-full">
              Send Message
            </button>
          </form>
        </div>

        <div className='max-w-370px block md:hidden mt-6'>
          <h2 className='mb-4 text-[24px] sm:text-[32px] md:text-[40px] md:leading-[56px] leading-[40px] font-bold'>Get in Touch</h2>

          <p className='leading-[32px] mb-6'>We’re here to help you with all your real estate needs.</p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FiMapPin className=" text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>368A Fulwood Road; Sheffield; S10 3GD</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>+447857678064</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#222430]" />
              <span className='text-[#666666] text-sm leading-[32px]'>management@solidstayproperties.co.uk</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page