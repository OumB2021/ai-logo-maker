import { Brain } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-2 ">
      <Brain className="text-zinc-50" size={30} />
      <p className="text-xl font-semibold text-zinc-50">
        Logo<span className="text-red-400">Pilot</span>
      </p>
    </Link>
  );
}
export default Logo;
