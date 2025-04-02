'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CustomModal.css';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-hot-toast';

const CustomModal = ({ isOpen, title, onRequestClose, contentLabel = 'Book Now', width = '90%', height = 'fit-content' }) => {
  const [modalWidth, setModalWidth] = useState(width);
  const [mounted, setMounted] = useState(false); // Ensures modal only renders on the client

  useEffect(() => {
    setMounted(true); // Set mounted to true only on the client
  }, []);

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, houseTitle: title || "" }));
  }, [title]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setModalWidth("90%");
      } else {
        setModalWidth(width);
      }
    };

    // Call on mount
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const modalStyle = {
    content: {
      width: modalWidth,
      height: height,
      overflow: 'auto',
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    days: "",
    message: "",
    houseTitle: title || ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add additional fields to FormData
    const formDataObj = new FormData(event.target);
    formDataObj.append("houseTitle", formData.houseTitle); // Ensure houseTitle is included
    formDataObj.append("access_key", "e894f63a-b606-41a6-ab56-8a6c739b5d85");
    formDataObj.append("from_name", "propoke"); // Change notification name

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
        message: "",
        houseTitle: title || "", // Reset houseTitle properly
      });
      onRequestClose();
    } else {
      toast.error("Form submission failed");
    }
  };

  if (!mounted) return null; // Prevent rendering on server-side

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal relative outline-none bg-white border-none"
      style={modalStyle}
      contentLabel={contentLabel}
      overlayClassName="overlay"
    >
      <div className='absolute top-4 right-4 cursor-pointer' onClick={onRequestClose}>
        <IoClose fontSize={20} />
      </div>

      <div className='p-8'>
        <h2 className=" text-2xl sm:text-[32px] font-bold text-[#333333] mb-4 text-center">
          Book Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="hidden" name="houseTitle" value={formData.houseTitle} />
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
          <div className="grid md:grid-cols-2 gap-4">
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
              <label htmlFor="subject">For how many days</label>
              <input
                type="number"
                name="days"
                placeholder="Days"
                value={formData.days}
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
    </Modal>
  );
};

export default CustomModal;
