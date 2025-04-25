'use client'
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const data = {
      access_key: 'e894f63a-b606-41a6-ab56-8a6c739b5d85', // Replace with your own from Web3Forms
      subject: 'New Newsletter Subscriber',
      from_name: 'Solid Stay Properties Newsletter',
      email,
      message: 'User subscribed to the newsletter.',
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      toast.success('Thanks for subscribing!');
      setEmail('');
    } else {
      toast.error('Something went wrong. Please try again!');
    }
    setLoading(false)
  };

  return (
    <footer className="bg-[#FAFAFA] text-[#333333] py-10 sm:py-20 sm:px-6 px-2">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20">

        <div>
          <h2 className="text-2xl font-bold mb-2">Solid Stay Properties</h2>
          <p className="text-[#666666] leading-[32px] text-sm">
            Solid Stay Properties – Your Trusted <br />
            Partner in Property 🏡
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm text-[#666666] leading-[32px]">
            <li><Link href="/listing">Listing</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/team">Our Team</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold mb-2">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FiMapPin className="text-gray-800" />
              <span className="text-[#666666] text-sm leading-[32px]">
                368A Fulwood Road; Sheffield; S10 3GD
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-800" />
              <a
                href="tel:+447857678064"
                className="text-[#666666] text-sm leading-[32px] hover:underline"
              >
                +44 7857 678064
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiMail className="text-gray-800" />
              <a
                href="mailto:management@solidstayproperties.co.uk"
                className="text-[#666666] text-sm leading-[32px] hover:underline"
              >
                management@solidstayproperties.co.uk
              </a>
            </li>
          </ul>
        </div>


        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-base font-bold mb-4 w-full">Newsletter</h3>
          <form className="flex flex-col" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full border w-full border-gray-300 mb-2 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-[#3854B5] text-white w-full cursor-pointer rounded-full px-4 py-2 text-sm hover:bg-[#3853b5e1] transition"
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
