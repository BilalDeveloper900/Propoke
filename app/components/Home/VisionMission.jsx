import Image from 'next/image';
import vision from '../../assets/home/vision.svg';
import mission from '../../assets/home/mission.svg';

const VisionMission = () => {
  return (
    <section className="bg-[#f9f9f9] px-6 py-16">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Vision */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
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
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Right: Mission */}
        <div className="flex flex-col justify-between h-full">
          <Image
            src={mission}
            alt="Mission"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto mb-6"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
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
