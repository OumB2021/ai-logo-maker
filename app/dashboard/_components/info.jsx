"use client";

import { UserDetailContext } from "@/app/_context/user-detail-context";
import { Coins, CoinsIcon, ImageDown, Images, Plus } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AddCredits from "./payment";

function Info() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-14 w-full gap-4 py-4 rounded-md">
      {/* left */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-2xl sm:text-3xl md:text-4xl ">
          Hello,{" "}
          <span className="font-bold capitalize">{userDetails?.name}</span>
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
        <AddCredits />
      </div>
    </div>
  );
}
export default Info;
