import { db } from "@/config/firebase-config";
import { currentUser } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";

export async function getLogos() {
  const user = await currentUser();

  if (!user) {
    console.error("User not authenticated");
    return [];
  }

  const userEmail = user.emailAddresses?.[0]?.emailAddress;

  if (!userEmail) {
    console.error("User email not found");
    return [];
  }

  try {
    const querySnapshot = await getDocs(
      collection(db, "users", userEmail, "logos")
    );

    const logos = querySnapshot.docs.map((doc) => doc.data());
    return logos;
  } catch (error) {
    console.error("Error fetching logos:", error);
    return [];
  }
}
