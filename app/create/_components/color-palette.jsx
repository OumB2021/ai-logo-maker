"use client";

import { useState } from "react";

import { colorPalettes } from "@/constants/color-palette";
import SingleColor from "./single-color";

function ColorPalette({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette || "");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 w-full">
      {colorPalettes.map((palette, index) => (
        <SingleColor
          key={index}
          palette={palette}
          onHandleInputChange={onHandleInputChange}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
}
export default ColorPalette;
