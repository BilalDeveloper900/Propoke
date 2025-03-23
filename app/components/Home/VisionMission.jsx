import Image from 'next/image';
import vision from '../../assets/home/vision.svg';
import mission from '../../assets/home/mission.svg';

const VisionMission = () => {
  return (
    <section className="bg-[#FAFAFA] pb-[48px] px-4 sm:px-10 lg:px-0 ">

      <div className='max-w-[1136px] mx-auto pt-4 pb-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <div className='text-[#666666] text-base leading-[32px]'>
            Find the home that fits your lifestyle. Browse our featured listings today! 🏠✨
          </div>

          <span className='w-full mt-2 sm:mt-0 sm:w-[149px] h-[48px] flex justify-center items-center border rounded-full border-[#666666] text-[#333333]'>
            See More
          </span>
        </div>
      </div>

      <div className="max-w-[1136px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:gap-12 items-start ">
        <div className='sm:px-6 lg:px-10'>
          <h2 className="text-[32px] font-bold text-[#333333] mb-4">Our Vision</h2>

          <Image
            src={vision}
            alt="Vision"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto flex sm:hidden mb-6"
          />

          <p className="text-[#666666] text-base leading-[32px] mb-6">
            Propoke our vision is to create a world where every family finds their perfect
            home—one that brings happiness, comfort, and a sense of belonging. We strive to
            redefine real estate by offering seamless experiences, trustworthy guidance, and
            exceptional properties that cater to every lifestyle. Whether it’s a first home,
            a dream upgrade, or an investment for the future, we believe that every home
            tells a story, and we are here to help you write yours.
          </p>
          <Image
            src={vision}
            alt="Vision"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto hidden sm:flex"
          />
        </div>

        <div className="flex  sm:px-6 lg:px-10 flex-col justify-between h-full">
          <Image
            src={mission}
            alt="Mission"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto mb-6"
          />

          <div>
            <h2 className="text-[32px] font-bold text-[#333333] mb-4">Our Mission</h2>
            <p className="text-[#666666] text-base leading-[32px] mb-6">
              Our mission is to help individuals and families find not just houses, but homes
              filled with warmth, comfort, and happiness. We are committed to providing
              exceptional real estate services, ensuring a seamless buying and selling
              experience with honesty, transparency, and professionalism. By understanding
              the unique needs of our clients, we strive to match them with properties that
              truly reflect their dreams and aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
