import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import whyus1 from '../../assets/home/whyus1.svg';
import whyus2 from '../../assets/home/whyus2.svg';

const features = [
  {
    title: 'Comfortable Home Design',
    desc: 'A comfortable home is more than just a place to live—it’s a sanctuary where you can relax, unwind, and enjoy life. Whether you’re designing a new space or improving your current home.',
  },
  {
    title: 'Professional Developer',
    desc: 'Looking for a skilled and experienced developer to bring your vision to life? Whether you need a website, mobile app, or custom software, a professional developer ensures seamless.',
  },
  {
    title: 'Fast Response',
    desc: 'We prioritize quick and efficient service to ensure a seamless experience for our clients. Whether you’re inquiring about a property, requesting a visit, or need expert guidance, our team is ready to assist you immediately.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[1136px] mx-auto flex justify-between items-center">
        <div className='lg:max-w-[560px]'>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4">
            Why Choose Us for Your House Needs?
          </h2>
          <p className="text-[#666666] text-base leading-[32px]">
            At Propoke Real Estate, we make finding your dream home easy, transparent, and hassle-free. Whether you're buying, selling, or investing, we provide expert guidance and high-quality listings to match your needs.
          </p>

          {/* Feature Cards */}
          <div className="mt-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:p-4 bg-white rounded-xl hover:shadow-sm my-1 items-start">
                <div className=" mr-4 mb-4 mt-4 sm:mt-0" >
                  <BsCheckCircleFill className='' color='black' fontSize={40} />
                </div>
                <div>
                  <h3 className="text-[32px] font-bold text-[#333333] leading-[48px]">{feature.title}</h3>
                  <p className="text-[#666666] text-base leading-[32px]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative justify-center hidden lg:flex">
          <div className="w-[90%] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={whyus2}
              alt="Main Image"
              style={{ width: '456px', height: '720px' ,objectFit: 'cover'}}
              className="rounded-xl object-cover !w-[456px] !h-[720px]"
            />
          </div>
          <div className="absolute left-[-40px] bottom-10 w-[180px] h-auto rounded-[16px] overflow-hidden">
            <Image
              src={whyus1}
              alt="Secondary Image"
              className="rounded-xl object-cover w-[240px] h-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
