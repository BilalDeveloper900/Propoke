import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-gray-800 py-10 px-6">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Propoke</h2>
          <p className="text-sm text-gray-600">
            Propoke Real Estate – Your Trusted <br />
            Partner in Property 🏡
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/listing">Listing</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/team">Our Team</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 text-gray-800" />
              <span>123 Anywhere Street, Any City,<br />12345 ST, Narowal</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-800" />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-800" />
              <span>hello@propoke.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-md font-semibold mb-2">Newsletter</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-700 transition"
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
