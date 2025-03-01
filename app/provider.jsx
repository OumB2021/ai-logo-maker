"use client";

import NavRender from "@/components/navbar/nav-render";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function Provider({ children }) {
  const { user, isLoaded } = useUser();

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
    console.log("API Response:", data);
  };
  return (
    <>
      <NavRender />
      <div className="">{children}</div>
    </>
  );
}
export default Provider;
