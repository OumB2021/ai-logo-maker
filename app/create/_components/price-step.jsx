import HeaderDesc from "@/components/header-desc";
import PriceOptions from "./price-options";

function PriceStep() {
  return (
    <>
      <HeaderDesc
        title="Select your Plan"
        description="Enter your brand name to create a custom, AI-generated logo."
      />

      <PriceOptions />
    </>
  );
}
export default PriceStep;
