"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

function InputBar({ onHandleInputChange }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("title");
  const [logoTitle, setLogoTile] = useState(search);
  return (
    <form className="mt-4 flex items-center gap-3 w-full">
      <input
        type="text"
        defaultValue={logoTitle || ""}
        onChange={(e) => {
          setLogoTile(e.target.value);
          onHandleInputChange(e.target.value);
        }}
        placeholder="Enter your logo name"
        className="placeholder:text-zinc-400 flex-1 w-full text-base md:text-lg rounded-md placeholder:text-base border border-[2px]-input bg-transparent px-3 py-4  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
      />
    </form>
  );
}
export default InputBar;
