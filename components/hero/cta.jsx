import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Cta() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/get-started">
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200">
          Get Started
        </button>
      </Link>
      <Link href="/about">
        <button className="px-6 py-3 text-purple-500 rounded-lg font-semibold hover:bg-purple-200 transition duration-200 flex items-center gap-2">
          Learn More <ChevronRight size={20} />
        </button>
      </Link>
    </div>
  );
}
export default Cta;
