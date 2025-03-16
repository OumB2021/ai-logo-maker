import { NextResponse } from "next/server";
import { db } from "@/config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { auth } from "@clerk/nextjs/server";

export async function GET(req) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = req.nextUrl.searchParams.get("email");
    if (!email) {
      return NextResponse.json(
        { error: "User email is required" },
        { status: 400 }
      );
    }

    const querySnapshot = await getDocs(
      collection(db, "users", email, "logos")
    );
    const logos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ logos }, { status: 200 });
  } catch (error) {
    console.error("Error fetching logos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
