import Link from "next/link";
import Logo from "./logo";

function Navbar() {
  return (
    <div className="border-b-[0.5px]  border-zinc-800 p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Link href="/">
          <button className="px-4 py-2 bg-zinc-100 hover:bg-white rounded-md text-sm">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
