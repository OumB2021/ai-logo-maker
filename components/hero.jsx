import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen w-full ">
      <div className="hidden md:block relative h-[98%] my-auto w-full bg-emerald-500">
        <Image
          src="/hero4.jpg"
          fill
          alt="hero-img"
          className="object-cover rounded-md"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-start text-left mx-auto  gap-8">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-lg">
          Design the <span className="text-red-500 font-black">Perfect</span>{" "}
          <span className="font-black">Logo</span> in Seconds
        </h1>
        {/* Subtitle (h4) */}
        <p className="text-base text-gray-600 max-w-sm md:max-w-md">
          Instantly generate high-quality logos using AI in just a few clicks.
          Our advanced algorithm ensures unique, professional designs tailored
          to your brand identity.
        </p>
        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200">
            Get Started
          </button>
          <button className="px-6 py-3 text-purple-600 rounded-lg border border-purple-600 font-semibold hover:bg-purple-200 transition duration-200">
            Learn More <MoveRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
