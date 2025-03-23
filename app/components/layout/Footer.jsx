import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#333333] py-10 sm:py-20 sm:px-6 px-2">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20">

        <div>
          <h2 className="text-2xl font-bold mb-2">Propoke</h2>
          <p className="text-[#666666] leading-[32px] text-sm">
            Propoke Real Estate – Your Trusted <br />
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
              <FiMapPin className=" text-gray-800" />
              <span className='text-[#666666] text-sm leading-[32px]'>123 Anywhere Street, Any City, 12345 ST, Narowal</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-800" />
              <span className='text-[#666666] text-sm leading-[32px]'>+123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-800" />
              <span className='text-[#666666] text-sm leading-[32px]'>hello@propoke.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-base font-bold mb-4 w-full">Newsletter</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full border w-full border-gray-300 mb-2 text-sm"
            />
            <button
              type="submit"
              className="bg-[#3854B5] text-white w-full cursor-pointer rounded-full px-4 py-2 text-sm hover:bg-[#3853b5e1] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
