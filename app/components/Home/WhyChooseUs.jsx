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
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text & Cards */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us for Your House Needs?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            At Propoke Real Estate, we make finding your dream home easy, transparent, and hassle-free. Whether you're buying, selling, or investing, we provide expert guidance and high-quality listings to match your needs.
          </p>

          {/* Feature Cards */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 items-start">
                <div className="text-blue-600 text-xl mt-1">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Stack */}
        <div className="relative w-full h-full flex justify-center">
          <div className="w-[90%] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={whyus2}
              alt="Main Image"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="absolute bottom-[-40px] left-10 w-[180px] h-auto rounded-xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={whyus1}
              alt="Secondary Image"
              width={200}
              height={150}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
