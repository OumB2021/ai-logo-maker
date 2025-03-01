import { db } from "@/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userEmail, userName } = await req.json();
  console.log(userEmail, userName);
  try {
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      const data = {
        name: userName,
        email: userEmail,
        credits: 5,
      };
      await setDoc(doc(db, "users", userEmail), {
        ...data,
      });

      return NextResponse.json(data);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      succes: false,
      message: "Failed to create user",
    });
  }
}
