import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import real from '../../assets/services/real.svg'
import real1 from '../../assets/services/real1.png'

const estateServices = [
  'Property Consultants', 'Interior Decorators', 'Exterior Design',
  'Home Inspections', 'Architects', 'Property Design', 'Building Contractors',
  'Builders', 'Rent', 'Vastu Consultants', 'Agents', 'Investor'
];

const RealEstateServices = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-0 mb-20">
      <div className="max-w-[1136px] mx-auto flex justify-between items-center">
        <div  className="relative rounded-xl justify-center hidden lg:flex">
          <div className=" rounded-xl overflow-hidden shadow-lg">
            <Image
              src={real}
              alt="Main Image"
              style={{ width: '456px', height: '720px', objectFit: 'cover' }}
              className="rounded-xl object-cover !w-[456px] !h-[720px]"
            />
          </div>

          <div className="absolute right-[-50px] bottom-10 w-[180px] h-auto rounded-[16px] overflow-hidden">
            <Image
              src={real1}
              alt="Secondary Image"
              className="rounded-xl object-contain w-[240px] h-[240px]"
            />
          </div>
        </div>

        <div   className='lg:max-w-[560px]'>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4">
            Real Estate Services
          </h2>
          <p className="text-[#666666] text-base leading-[32px] pb-10">
            We offer a comprehensive range of real estate services, catering to residential, commercial, and corporate clients. Whether you’re buying, selling, renting, or investing
          </p>

          <div className='grid sm:grid-cols-2 md:grid-cols-3'>
            {
              estateServices.map((service, index) => (
                <div className='flex pb-4 text-sm sm:text-base' key={index}>
                  <FaCheckCircle fontSize={24} className='pr-2' />
                  {service}
                </div>
              ))
            }
          </div>

          <p className="text-[#666666] text-base leading-[32px] pt-6">
            Real estate is a dynamic industry that involves buying, selling, leasing, and managing properties. We provide expert real estate solutions tailored to meet the needs of homeowners, investors, businesses, and tenants. Our goal is to simplify the real estate process and ensure our clients make the best decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
