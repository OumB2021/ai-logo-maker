"use client";

import Link from "next/link";
import { useState } from "react";

function InputBar() {
  const [logoTitle, setLogoTile] = useState("");
  console.log(logoTitle);
  return (
    <form className="mt-5 max-w-xl flex items-center gap-3 w-full">
      <input
        type="text"
        onChange={(event) => setLogoTile(event.target.value)}
        placeholder="Enter your company name"
        className="flex-1 w-full rounded-md border border-[2px]-input bg-transparent px-3 py-4 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
      <Link href={`/create?title=${logoTitle}`}>
        <button
          type="submit"
          className="px-3 py-[15px] bg-zinc-900 text-white rounded-md"
        >
          Generate
        </button>
      </Link>
    </form>
  );
}
export default InputBar;
