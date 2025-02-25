"use client";

import { useState } from "react";

function InputBar() {
  const [input, setInput] = useState("");

  return (
    <form className="flex items-center gap-3 w-full">
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter your logo name"
        className="flex-1 w-full rounded-md border border-[2px]-input bg-transparent px-3 py-4 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
    </form>
  );
}
export default InputBar;
