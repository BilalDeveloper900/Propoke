import Image from 'next/image';
import serviceImage from '../../assets/services/service.svg'

const steps = [
  {
    number: '1.',
    title: 'Residential Building',
    description: `We construct modern and durable residential buildings, including apartment complexes and gated communities.`,
  },
  {
    number: '2.',
    title: 'Individual House Building',
    description: `For those looking to build their dream home, we offer custom house construction services tailored to your needs.`,
  },
  {
    number: '3.',
    title: 'Corporate Building',
    description: `Our corporate building services cater to businesses looking for office spaces, headquarters, and commercial offices.`,
  },
  {
    number: '4.',
    title: 'Commercial Building',
    description: `We specialize in constructing shopping malls, retail stores, hotels, and other commercial spaces.`,
  },
];

const FeaturedServices = () => {
  return (
    <section className="bg-white px-4 sm:px-10 lg:px-0 py-10">
      <div data-aos="zoom-in" className="max-w-[1136px] grid sm:grid-cols-2 mx-auto items-center mb-12">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4 max-w-[528px]">
          Featured Services
        </h2>

        <p className=" text-[#666666] text-base leading-[32px]">
          Contact us today for a free consultation.
        </p>
      </div>

      <div  data-aos="zoom-in"  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1136px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} data-aos="zoom-in" className="">
            <div className="sm:flex block">
              <div className="w-[56px] h-[56px] rounded-full bg-black text-white font-bold text-center flex items-center justify-center mb-4">
                {step.number}
              </div>
            </div>
            <h3 className="text-[32px] font-bold text-[#333333] mb-2">{step.title}</h3>
            <p className="text-[#666666] text-base leading-[32px]">{step.description}</p>
          </div>
        ))}
      </div>

      <div data-aos="zoom-in" className='max-w-[1136px] mx-auto py-[80px] '>
        <Image
          src={serviceImage}
          alt="Modern House"
          className="rounded-[16px] w-full h-[400px] object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default FeaturedServices;
