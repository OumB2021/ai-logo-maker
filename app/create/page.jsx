"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import BackPage from "./_components/back-page";
import LogoIdea from "./_components/logo-idea";
import DescriptionStep from "./_components/description-step";
import InputStep from "./_components/Input-step";
import ColorStep from "./_components/color-step";
import DesignStep from "./_components/design-step";
import IdeaStep from "./_components/idea-step";

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
        {step === 1 ? (
          <InputStep
            onHandleInputChange={(v) => onHandleInputChange("title", v)}
          />
        ) : step === 2 ? (
          <DescriptionStep
            onHandleInputChange={(v) => onHandleInputChange("desc", v)}
          />
        ) : step === 3 ? (
          <ColorStep
            onHandleInputChange={(v) => onHandleInputChange("palette", v)}
          />
        ) : step === 4 ? (
          <DesignStep
            onHandleInputChange={(v) => onHandleInputChange("design", v)}
          />
        ) : (
          step === 5 && (
            <IdeaStep
              onHandleInputChange={(v) => onHandleInputChange("idea", v)}
            />
          )
        )}

        {/* Continue button */}
        <div className="flex md:justify-between justify-center items-center w-full gap-4">
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
            <span className="text-sm md:text-base">Previous</span>
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
            <span className="text-sm md:text-base">Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateLogo;
