import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import whyus1 from '../../assets/about/about3.svg';
import whyus2 from '../../assets/about/about2.svg';

const features = [
  {
    title: 'Create The Developer Team',
    desc: '2010',
  },
  {
    title: 'Have a 2 Big Office',
    desc: '2015',
  },
  {
    title: 'Have a 400+ Member Team Arround The World',
    desc: '2019',
  },
];

const OurHistory = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[1136px] mx-auto flex justify-between items-center">
        <div className='lg:max-w-[560px]'>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4">
            Our History
          </h2>
          <p className="text-[#666666] text-base leading-[32px]">
            For over 12 years, Solid Stay Properties has been a trusted name in the real estate industry, helping countless families, investors, and businesses.
          </p>

          {/* Feature Cards */}
          <div className="mt-10">
            {features.map((feature, index) => (
              <div key={index}  className="flex flex-col sm:items-center sm:flex-row sm:p-4 bg-white rounded-xl hover:shadow-sm my-1 items-start">
                <div className=" mr-4 mb-4 mt-4 sm:mt-0" >
                  <BsCheckCircleFill className='' color='black' fontSize={40} />
                </div>
                <div>
                  <p className="text-[#666666] text-base leading-[32px]">{feature.desc}</p>
                  <h3 className="sm:text-[24px] font-bold text-[#333333] leading-[48px]">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div  className="relative justify-center hidden lg:flex">
          <div className="w-[90%] sm:ml-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={whyus2}
              alt="Main Image"
              style={{ width: '456px', height: '720px', objectFit: 'cover' }}
              className="rounded-xl object-contain !w-[456px] !h-[720px]"
            />
          </div>
          <div className="absolute left-[-40px] bottom-10 w-[180px] h-auto rounded-[16px] overflow-hidden">
            <Image
              src={whyus1}
              alt="Secondary Image"
              className="rounded-xl object-contain w-[240px] h-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
