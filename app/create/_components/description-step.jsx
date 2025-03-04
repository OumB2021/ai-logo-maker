import HeaderDesc from "@/components/header-desc";
import { useState } from "react";

function DescriptionStep({ onHandleInputChange, formData }) {
  const [desc, setDesc] = useState(formData.desc);

  return (
    <>
      <HeaderDesc
        title="Describe Your Brand"
        description="Tell us what your brand stands for. Describe your business, values, or any key message you'd like your logo to convey."
      />

      <form className="mt-4 flex items-center gap-3 w-full">
        <input
          type="text"
          defaultValue={desc || ""}
          onChange={(e) => {
            setDesc(e.target.value);
            onHandleInputChange(e.target.value);
          }}
          placeholder="Enter your brand description"
          className="placeholder:text-zinc-400 flex-1 w-full text-base md:text-lg rounded-md placeholder:text-base border border-[2px]-input bg-transparent px-3 py-4  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
        />
      </form>
    </>
  );
}
export default DescriptionStep;
