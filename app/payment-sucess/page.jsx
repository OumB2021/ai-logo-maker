"use client";

import { db } from "@/config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function page() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const credits = searchParams.get("credits");
  const user = searchParams.get("user");
  const payment_intent = searchParams.get("payment_intent");
  console.log("amount: " + amount + " credits: " + credits + " user: " + user);
  const [creditsUpdated, setCreditsUpdated] = useState(false);

  useEffect(() => {
    const updateUserCredits = async () => {
      // Check if credits have already been updated for this payment
      const paymentProcessed = localStorage.getItem(
        `paymentProcessed_${payment_intent}`
      );
      if (paymentProcessed) {
        console.log("Credits already updated for this payment.");
        return;
      }

      try {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const currentCredits = docSnap.data().credits || 0;
          await updateDoc(docRef, {
            credits: Number(currentCredits) + Number(credits),
          });

          // Set a flag in localStorage to prevent duplicate updates
          localStorage.setItem(`paymentProcessed_${payment_intent}`, "true");
          setCreditsUpdated(true);
          toast.success("User credits updated successfully!");
        } else {
          console.error("User document does not exist.");
        }
      } catch (error) {
        console.error("Error updating user credits:", error);
        toast.error("Failed to update user credits.");
      }
    };

    updateUserCredits();
  }, [user, credits]);

  return (
    <div className="flex flex-col items-center justify-center mt-32 gap-4 w-full px-10 p-10 rounded-lg">
      <Image src="/checkmark.svg" alt="checkmark" width={70} height={70} />
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p className="text-base text-muted-foreground">
        Your payment of <span className="font-bold text-black">${amount}</span>{" "}
        has been successfully processed.
      </p>
      <p className="text-base text-muted-foreground">
        <span className="font-bold text-black">${credits}</span> credits was
        added to your account.
      </p>
      <Link
        href="/dashboard"
        className="text-zinc-50 py-2 px-4 rounded-md bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700 mt-4"
      >
        <LayoutDashboard className="h-4 w-4" />
        <span>Dashboard</span>
      </Link>
    </div>
  );
}
export default page;
