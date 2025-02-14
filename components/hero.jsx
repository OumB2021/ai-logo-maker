"use client";

import { useState } from "react";

export default function HeroSection() {
  const [search, setSearch] = useState("");

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
        Create Stunning Logos with AI 🚀
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Generate unique, high-quality logos effortlessly. Enter a brand name or
        idea to get started.
      </p>

      {/* Search Bar */}
      <div className="mt-6 w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your brand name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-5 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
            Generate
          </button>
        </div>
      </div>
    </section>
  );
}
