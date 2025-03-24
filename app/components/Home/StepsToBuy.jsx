const steps = [
  {
    number: '1.',
    title: 'View Listing',
    description: `Find your dream home with Propoke Real Estate! Explore our exclusive listings featuring the best properties in prime locations. Whether you’re looking for a cozy apartment, a spacious family home, or a luxurious villa, we have the perfect option for you.`,
  },
  {
    number: '2.',
    title: 'Contact Us',
    description: `We’re here to help you find your dream home! Whether you have questions about a listing, need assistance with buying a property, or require expert real estate advice, our team is ready to assist you.`,
  },
  {
    number: '3.',
    title: 'Request a Visit',
    description: `Experience your dream home in person! Schedule a visit to any of our featured properties and let us guide you through every detail. Our team is here to ensure a smooth and personalized home tour.`,
  },
  {
    number: '4.',
    title: 'Rent The House',
    description: `Ready to make your dream home a reality? Our expert team is here to guide you through every step of the buying process, ensuring a smooth and hassle-free experience.`,
  },
];

const StepsToBuy = () => {
  return (
    <section className="bg-white px-4 sm:px-10 lg:px-0 py-10">
      <div className="max-w-[1136px] grid sm:grid-cols-2 mx-auto items-center mb-12">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4 max-w-[528px]">
          Easy Step to Buy Property on Propoke Real Estate
        </h2>

        <p className=" text-[#666666] text-base leading-[32px]">
          Buying your dream home with Propoke Real Estate is simple and hassle-free!
          Follow these easy steps to secure your perfect property:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1136px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="">
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

      <div className='max-w-[1136px] mx-auto pt-6 '>
        <div className='flex flex-col sm:flex-row  justify-between items-center'>
          <div className='text-[#666666] text-base leading-[32px]'>
            Have questions about buying or selling a property with Propoke Real Estate? Check out our Frequently Asked Questions (FAQ).
          </div>

          <span className=' w-full mt-2 sm:mt-0 sm:w-[175px] h-[48px] flex justify-center items-center border rounded-full border-[#666666] text-[#333333]'>
            See Our FAQ
          </span>
        </div>
      </div>
    </section>
  );
};

export default StepsToBuy;
