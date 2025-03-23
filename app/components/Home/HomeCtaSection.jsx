import Image from "next/image";
import case1 from "../../assets/home/case1.svg";
import case2 from "../../assets/home/case2.svg";
import case3 from "../../assets/home/case3.svg";
import case4 from "../../assets/home/case4.svg";

export default function HomeCtaSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={case1} 
            alt="Real Estate Agent"
            width={600}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Let's Move to Your <br />
            <span className="text-gray-300">Dream Family Home</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Finding the perfect home for your family is a journey filled with excitement, and Propoke Real Estate is here to make it effortless. Whether you're looking for a spacious home, a cozy retreat, or a vibrant neighborhood, we'll help you find the perfect place where memories are made.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full mb-8">
            Booking Now
          </button>

          {/* Thumbnails */}
          <div className="flex gap-4">
            <Image
              src={case2}
              alt="House 1"
              width={100}
              height={100}
              className="rounded-xl w-24 h-24 object-cover"
            />
            <Image
              src={case3}
              alt="House 2"
              width={100}
              height={100}
              className="rounded-xl w-24 h-24 object-cover"
            />
            <Image
              src={case4}
              alt="House 3"
              width={100}
              height={100}
              className="rounded-xl w-24 h-24 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
