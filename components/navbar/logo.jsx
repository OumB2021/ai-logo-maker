"use client";

import useMediaQuery from "@/lib/useMediaQuery";
import { Brain } from "lucide-react";
import Link from "next/link";

function Logo() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Link href="/" className="flex items-center justify-center gap-2 ">
      <Brain className="text-zinc-50" size={30} />
      <p
        className={`text-xl font-extrabold ${
          isMobile ? "text-zinc-900" : "text-zinc-50"
        }`}
      >
        Logo
        <span className={`${isMobile ? "text-violet-500" : "text-violet-300"}`}>
          Pilot
        </span>
      </p>
    </Link>
  );
}
export default Logo;
