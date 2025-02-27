import HeaderDesc from "@/components/header-desc";
import LogoDesign from "./logo-design";

function DesignStep({ onHandleInputChange, formData }) {
  return (
    <>
      <HeaderDesc
        title="Pick Your Logo Style"
        description="Do you prefer a sleek modern look, a playful cartoon style, or something realistic? Choose a design style that fits your brand personality."
      />

      <LogoDesign
        onHandleInputChange={onHandleInputChange}
        formData={formData}
      />
    </>
  );
}
export default DesignStep;
