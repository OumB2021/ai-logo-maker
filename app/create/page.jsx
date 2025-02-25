import { ArrowLeft, ArrowRight } from "lucide-react";
import HeaderDesc from "../../components/header-desc";
import InputField from "../../components/input-field";
import Link from "next/link";

function CreateLogo({ search }) {
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-6 w-full px-10 md:px-6 lg:px-4 xl:px-0 max-w-7xl mx-auto">
      <Link
        href="/get-started"
        className="flex items-center gap-2 bg-zinc-50 border-zinc-200 border-[1px] rounded-xl p-3 hover:bg-zinc-100 self-start"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </Link>

      <div className="flex flex-col items-center gap-4 w-full bg-zinc-50/50 border-zinc-200/50 border-[1px] rounded-lg py-10 px-10 shadow-sm">
        <HeaderDesc title="Logo Title" description="title" />
        <InputField />
        <button className="mt-10 flex items-center gap-2 bg-purple-500 md:self-end  md:size-fit text-zinc-50 border-zinc-200 border-[1px] rounded-xl p-3 hover:bg-purple-700 ">
          <ArrowRight size={20} />
          <span>Continue</span>
        </button>
      </div>
    </div>
  );
}
export default CreateLogo;
