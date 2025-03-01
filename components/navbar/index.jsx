"use client";

import Link from "next/link";
import Logo from "./logo";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

function Navbar({ className = false }) {
  const { user } = useUser();
  return (
    <div className="absolute top-0 w-full p-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo className={className} />
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="text-sm text-zinc-50 py-1 px-3 rounded-md bg-zinc-800"
              >
                Dashboard
              </Link>
              <ClerkLoading>
                <Loader2 className="text-muted-foreground animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton />
              </ClerkLoaded>
            </div>
          ) : (
            <Link href="/get-started">
              <button className="px-3 py-2 text-sm bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
