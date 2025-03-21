"use client";

import { pricePlan } from "@/constants/credit-options";
import Image from "next/image";
import { useState } from "react";

function CreditOptions({ plan, setPlan }) {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {pricePlan.map((p) => (
        <div
          key={p.id}
          className={`flex flex-col flex-1 items-center gap-2 p-4 shadow-sm bg-zinc-50 rounded-md hover:cursor-pointer ${
            plan?.name === p.name && "border border-zinc-800"
          }`}
          onClick={() => setPlan(p)}
        >
          <h1 className="text-lg text-muted-foreground">{p.name}</h1>
          <span className="text-4xl font-bold">${p.price}</span>
          <div className="flex gap-2  items-center text-zinc-700">
            <Image src="/coin.png" alt="coin" width={20} height={20} />
            <span className="text-lg font-medium">{p.credits} credits</span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CreditOptions;
