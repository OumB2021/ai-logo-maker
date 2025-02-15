"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="hidden md:block relative h-[98%] ml-2 my-auto w-full ">
        <Image
          src="/hero3.jpg"
          fill
          alt="hero-img"
          className="object-cover rounded-md scale-x-[-1]"
        />
      </div>
      <div className="flex flex-col justify-center items-start text-left pl-20 gap-8">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-xl">
          Design the <span className="text-red-500">Perfect</span> Logo in
          Seconds
        </h1>
        {/* Subtitle (h4) */}
        <h4 className="text-sm text-gray-600 max-w-sm md:max-w-lg w-full mt-2 ">
          Instantly generate high-quality logos using AI. Just enter your brand
          name, and let our AI craft the perfect logo for you.
        </h4>
      </div>
    </section>
  );
}
