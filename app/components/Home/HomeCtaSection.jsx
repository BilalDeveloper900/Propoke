import Image from "next/image";
import case1 from "../../assets/home/case1.svg";
import case2 from "../../assets/home/case2.svg";
import case3 from "../../assets/home/case3.svg";
import case4 from "../../assets/home/case4.svg";

export default function HomeCtaSection() {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-[1136px] mx-auto flex flex-col md:flex-row items-center gap-10">

        <div  className="flex sm:hidden lg:flex">
          <Image
            src={case1}
            alt="Real Estate Agent"
            className="rounded-[16px] w-[328px] h-[240px] sm:w-[448px] sm:h-[504px] object-cover"
          />
        </div>

        <div  className="w-full lg:w-1/2">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-[#333333] mb-4">
            Let's Move to Your Dream Family Home
          </h2>
          <p className="text-[#666666] text-base leading-[32px] mb-6">
            Finding the perfect home for your family is a journey filled with excitement, and Solid Stay Properties is here to make it effortless. Whether you're looking for a spacious home, a cozy retreat, or a vibrant neighborhood, we'll help you find the perfect place where memories are made.
          </p>

          <button className="bg-[#3854B5] cursor-pointer hover:bg-[#3853b5dc] text-white font-semibold w-full sm:w-[179px] h-[40px] flex justify-center items-center rounded-full mb-6">
            Booking Now
          </button>

          <div className="hidden sm:flex gap-4">
            <Image
              src={case2}
              alt="House 1"
              width={192}
              height={184}
              className="rounded-xl object-cover"
            />
            <Image
              src={case3}
              alt="House 2"
              width={192}
              height={184}
              className="rounded-xl object-cover"
            />
            <Image
              src={case4}
              alt="House 3"
              width={192}
              height={184}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
