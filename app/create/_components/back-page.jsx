import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function BackPage() {
  return (
    <Link
      href="/get-started"
      className="flex items-center gap-2 bg-zinc-50 border-zinc-200 border-[1px] rounded-xl p-3 hover:bg-zinc-100 self-start"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </Link>
  );
}
export default BackPage;
