"use client";

import NavRender from "@/components/navbar/nav-render";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { UserDetailContext } from "./_context/user-detail-context";
import Footer from "@/components/hero/footer";

function Provider({ children }) {
  const { user, isLoaded } = useUser();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    if (isLoaded && user) {
      checkUserAuth();
      setUserDetails(user);
    }
  }, [isLoaded, user]);

  const checkUserAuth = async () => {
    const result = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      }),
    });

    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }

    const data = await result.json();
    setUserDetails(data);
  };

  return (
    <>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <NavRender />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </UserDetailContext.Provider>
    </>
  );
}
export default Provider;
