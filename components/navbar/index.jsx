import Link from "next/link";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const navlinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];
function Navbar({ className = false }) {
  return (
    <div className="absolute top-0 w-full p-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo className={className} />
        <div className="flex items-center gap-6">
          <div
            className={cn(
              "flex items-center gap-6 lg:pr-32 md:pr-5 pr-0 text-sm",
              className
            )}
          >
            {navlinks.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                className=" hover:text-purple-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Link href="/">
            <button className="px-3 py-2 text-sm bg-purple-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
