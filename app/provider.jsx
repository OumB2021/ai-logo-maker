"use client";

import NavRender from "@/components/navbar/nav-render";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { UserDetailContext } from "./_context/user-detail-context";

function Provider({ children }) {
  const { user, isLoaded } = useUser();
  const [userDetails, setUserDetails] = useState(user);
  useEffect(() => {
    if (isLoaded && user) {
      checkUserAuth();
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
        <div className="">{children}</div>
      </UserDetailContext.Provider>
    </>
  );
}
export default Provider;
