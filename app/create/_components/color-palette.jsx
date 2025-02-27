import { colorPalettes } from "@/constants/color-palette";

function ColorPalette({ onHandleInputChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 w-full">
      {colorPalettes.map((palette, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-sm rounded-md overflow-hidden border border-zinc-200"
        >
          {/* Colors */}
          <div className="flex w-full">
            {palette.colors.map((color, i) => (
              <div
                key={i}
                className="flex-1 h-16"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          {/* Name */}
          <div className="p-3 text-center w-full bg-zinc-50">
            <p className="text-sm font-semibold text-gray-800">
              {palette.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ColorPalette;
