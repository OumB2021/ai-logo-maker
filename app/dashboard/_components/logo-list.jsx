"use client";

import SingleLogo from "./single-logo";
import { useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { UserDetailContext } from "@/app/_context/user-detail-context";
import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "sonner";

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
      toast.success("Logo fetched successfully!");
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
    return (
      <Loader2 className="w-full flex items-center justify-center text-muted-foreground animate-spin" />
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full px-14">
      <p className="border-b w-full text-muted-foreground md:text-left text-center">
        Find and download all your generated images.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {logos.map((logo) => (
          <SingleLogo logo={logo} key={logo.id} />
        ))}{" "}
      </div>
    </div>
  );
}
