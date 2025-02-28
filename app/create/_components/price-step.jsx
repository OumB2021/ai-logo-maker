import HeaderDesc from "@/components/header-desc";
import PriceOptions from "./price-options";

function PriceStep({ onHandleInputChange, formData }) {
  return (
    <>
      <HeaderDesc
        title="Select your Plan"
        description="Enter your brand name to create a custom, AI-generated logo."
      />

      <PriceOptions
        onHandleInputChange={onHandleInputChange}
        formData={formData}
      />
    </>
  );
}
export default PriceStep;
