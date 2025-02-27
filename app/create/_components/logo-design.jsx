"use client";

import { logoDesign } from "@/constants/logo-design";
import { useState } from "react";
import SingleDesign from "./single-design";

function LogoDesign({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(
    formData?.design?.title || ""
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 w-full">
      {logoDesign.map((design, index) => (
        <SingleDesign
          key={index}
          design={design}
          onHandleInputChange={onHandleInputChange}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
}
export default LogoDesign;
