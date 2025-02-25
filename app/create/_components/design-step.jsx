import HeaderDesc from "@/components/header-desc";
import LogoDesign from "./logo-design";

function DesignStep({ onHandleInputChange }) {
  return (
    <>
      <HeaderDesc
        title="Pick Your Logo Style"
        description="Do you prefer a sleek modern look, a playful cartoon style, or something realistic? Choose a design style that fits your brand personality."
      />

      <LogoDesign
        onHandleInputChange={(v) => onHandleInputChange("title", v)}
      />
    </>
  );
}
export default DesignStep;
