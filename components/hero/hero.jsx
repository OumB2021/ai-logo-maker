import Image from "next/image";
import Footer from "./footer";
import Cta from "./cta";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen w-full ">
      <div className="hidden md:block relative h-[98%] ml-2 my-auto w-full ">
        <Image
          src="https://j90aldrpnd.ufs.sh/f/H5P49jZha6JpPwExwePvqBAxRzMZjSo671Pf8lms0eUCEVIb"
          fill
          alt="hero-img"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col  items-center text-center justify-center">
        <div
          className="flex-1 flex flex-col gap-8 
        items-center text-center 
        md:items-start md:text-left 
        justify-center mx-auto md:px-10 sm:px-4 px-0"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-lg">
            Design the{" "}
            <span className="text-purple-500 font-black">Perfect</span>{" "}
            <span className="font-black">Logo</span> in Seconds
          </h1>
          {/* Subtitle (h4) */}
          <p className="text-base text-gray-600 max-w-sm md:max-w-md">
            Instantly generate high-quality logos using AI in just a few clicks.
            Our advanced algorithm ensures unique, professional designs tailored
            to your brand identity.
          </p>
          {/* Buttons */}
          <Cta />
        </div>
      </div>
    </section>
  );
}
