"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import HeaderDesc from "@/components/header-desc";
import InputField from "@/components/input-field";
import BackPage from "./_components/back-page";
import LogoDescription from "./_components/logo-description";
import ColorPalette from "./_components/color-palette";
import LogoDesign from "./_components/logo-design";
import LogoIdea from "./_components/logo-idea";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log(step);
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-6 w-full px-10 md:px-6 lg:px-4 xl:px-0 max-w-7xl mx-auto">
      <BackPage />

      <div className="flex flex-col items-center gap-4 w-full bg-zinc-50/50 border-zinc-200/50 border-[1px] rounded-lg py-10 px-10 shadow-sm">
        <HeaderDesc
          title="Logo Title"
          description="Enter your brand name to create a custom, AI-generated logo."
        />

        {step === 1 ? (
          <InputField onHandleInputChange={onHandleInputChange} />
        ) : step === 2 ? (
          <LogoDescription />
        ) : step === 3 ? (
          <ColorPalette />
        ) : step === 4 ? (
          <LogoDesign />
        ) : (
          step === 5 && <LogoIdea />
        )}

        {/* Continue button */}
        <div className="flex justify-between items-center w-full">
          <button
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className={`mt-10 flex items-center gap-2 md:self-end md:size-fit rounded-xl p-3 transition ${
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
            disabled={step === 5}
            className={`mt-10 flex items-center gap-2 md:self-end md:size-fit rounded-xl p-3 transition ${
              step === 5
                ? "bg-zinc-400 cursor-not-allowed text-zinc-300"
                : "bg-purple-500 hover:bg-purple-700 text-zinc-50"
            }`}
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
