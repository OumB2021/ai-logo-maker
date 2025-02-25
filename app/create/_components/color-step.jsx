import HeaderDesc from "@/components/header-desc";
import ColorPalette from "./color-palette";

function ColorStep({ onHandleInputChange }) {
  return (
    <>
      <HeaderDesc
        title="Select Your Color Palette"
        description="Colors influence emotions and brand perception. Choose a color palette that aligns with your brand's identity and message."
      />

      <ColorPalette
        onHandleInputChange={(v) => onHandleInputChange("title", v)}
      />
    </>
  );
}
export default ColorStep;
