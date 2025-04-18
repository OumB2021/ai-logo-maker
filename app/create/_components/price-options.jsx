"use client";
import { pricingPlans } from "@/constants/price";
import { SignInButton, useUser } from "@clerk/nextjs";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function PriceOptions({ onHandleInputChange, formData }) {
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (formData?.title && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between border rounded-xl p-6 shadow-sm bg-zinc-50 text-zinc-800 h-full ${
            plan.recommended ? "border-2 border-zinc-500" : "border-zinc-300"
          }`}
        >
          <div>
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-medium">{plan.title}</h3>
              {plan.recommended && (
                <span className="px-2 py-1 bg-orange-300 rounded-lg">
                  🔥 Most Popular
                </span>
              )}
            </div>
            <p className="text-4xl font-bold mt-2">{plan.price}</p>
            <p className="text-zinc-600 font-medium mt-4">{plan.description}</p>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <BadgeCheck className="text-muted-foreground" />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {user ? (
            <Link href={`/generate-logo?type=${plan.title}`}>
              <button
                className={`mt-6 w-full py-2 ${
                  plan.recommended
                    ? "bg-zinc-900"
                    : "bg-zinc-700 hover:bg-zinc-600"
                }  text-zinc-50 font-semibold rounded-lg transition`}
              >
                {plan.buttonText}
              </button>
            </Link>
          ) : (
            <SignInButton
              mode="modal"
              forceRedirectUrl={`/generate-logo?type=${plan.title}`}
            >
              <button
                className={`mt-6 w-full py-2 ${
                  plan.recommended
                    ? "bg-zinc-900"
                    : "bg-zinc-700 hover:bg-zinc-600"
                }  text-zinc-50 font-semibold rounded-lg transition`}
              >
                {plan.buttonText}
              </button>
            </SignInButton>
          )}
        </div>
      ))}
    </div>
  );
}

export default PriceOptions;
