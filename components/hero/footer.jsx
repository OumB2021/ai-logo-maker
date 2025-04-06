"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  // Hide footer if on the homepage ("/")
  if (pathname === "/") return null;

  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-4 text-zinc-600 text-sm ">
      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/OumB2021/ai-logo-maker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="text-zinc-800 h-5 w-5 hover:text-black transition" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/oumar-barry-ab8000239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogoIcon className="text-zinc-800 h-5 w-5 hover:text-black transition" />
        </Link>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LogoPilot. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
