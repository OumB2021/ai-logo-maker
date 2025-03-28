"use client";

import SingleLogo from "./single-logo";
import { useContext, useEffect, useState } from "react";
import { Images } from "lucide-react";
import { UserDetailContext } from "@/app/_context/user-detail-context";
import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "sonner";
import Link from "next/link";

export default function Logolist() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserLogos = async () => {
    if (!userDetails?.email) return; // ✅ Prevent fetching if email is missing

    setLoading(true);

    try {
      const querySnapshot = await getDocs(
        collection(db, "users", userDetails.email, "logos")
      );
      const logosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLogos(logosData);
    } catch (error) {
      toast.error("Error fetching logos");
      console.error("Error fetching logos:", error);
    }

    setLoading(false);
  };

  // ✅ Fetch logos when component mounts
  useEffect(() => {
    getUserLogos();
  }, [userDetails?.email]); //

  if (loading) {
    return <LogoListSkeleton />;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full px-14 py-4 border rounded-md bg-zinc-50">
      <div className="flex flex-col items-center gap-4 justify-center w-full">
        <p className="w-full text-muted-foreground text-center flex-1">
          Find and download all your generated images.
        </p>
        <Link
          href="/create"
          className="text-sm font-medium size-fit border text-zinc-800 hover:bg-zinc-100 flex items-center justify-center py-2 px-3 rounded-md gap-2 "
        >
          <Images className="h-4 w-4" strokeWidth={2} />
          <span>Generate new logo</span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {logos
          .slice()
          .reverse()
          .map((logo) => (
            <SingleLogo userDetails={userDetails} logo={logo} key={logo.id} />
          ))}
      </div>
    </div>
  );
}

function LogoListSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-[300px] h-[300px] bg-zinc-300 animate-pulse rounded-md" />
          <div className="w-[200px] h-5 bg-zinc-300 animate-pulse rounded-md" />
          <div className="w-[150px] h-3 bg-zinc-300 animate-pulse rounded-md" />
        </div>
      ))}
    </div>
  );
}
