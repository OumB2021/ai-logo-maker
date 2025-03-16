"use client";

import { UserDetailContext } from "@/app/_context/user-detail-context";
import { Coins, CoinsIcon, ImageDown, Images, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

function Info() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-14 w-full gap-4 py-4 rounded-md">
      {/* left */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Hello,{" "}
          <span className="text-purple-500 capitalize">
            {userDetails?.name}
          </span>
        </h1>
        <div className="flex gap-2 items-center text-zinc-700">
          <Image src="/coin.png" alt="coin" width={40} height={40} />
          <span className="text-xl font-medium">
            {userDetails?.credits} Credits left
          </span>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col md:items-start gap-2 justify-center">
        <Link
          href="/create"
          className="text-sm text-zinc-50 hover:bg-zinc-600 flex items-center py-2 px-3 bg-zinc-700 rounded-md gap-2"
        >
          <Images className="h-4 w-4" />
          <span>Generate New logo</span>
        </Link>
        <Link
          href="/"
          className="text-sm text-zinc-50 hover:bg-zinc-600 flex items-center py-2 px-3 bg-zinc-700 rounded-md gap-2"
        >
          <Plus className="h-4 w-4" />
          <span className="text-sm">Add more credits</span>
        </Link>
      </div>
    </div>
  );
}
export default Info;
