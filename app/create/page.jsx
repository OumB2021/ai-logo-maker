"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import HeaderDesc from "@/components/header-desc";
import InputField from "@/components/input-field";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  console.log(step);
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
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
        <HeaderDesc
          title="Logo Title"
          description="Enter your brand name to create a custom, AI-generated logo."
        />

        {step === 1 ? (
          <InputField onHandleInputChange={onHandleInputChange} />
        ) : null}

        {/* Continue button */}
        <div className="flex justify-between items-center w-full">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className={`mt-10 flex items-center gap-2 md:self-end md:size-fit border-zinc-200 border-[1px] rounded-xl p-3 transition ${
              step === 1
                ? "bg-zinc-400 cursor-not-allowed text-zinc-300"
                : "bg-purple-500 hover:bg-purple-700 text-zinc-50"
            }`}
          >
            <ArrowLeft size={20} />
            <span>Previous</span>
          </button>
          <button
            onClick={() => setStep(step + 1)}
            className="mt-10 flex items-center gap-2 bg-purple-500 md:self-end  md:size-fit text-zinc-50 border-zinc-200 border-[1px] rounded-xl p-3 hover:bg-purple-700 "
          >
            <ArrowRight size={20} />
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateLogo;
