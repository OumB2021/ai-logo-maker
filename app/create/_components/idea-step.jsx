import HeaderDesc from "@/components/header-desc";
import LogoDesign from "./logo-design";
import LogoIdea from "./logo-idea";

function IdeaStep({ onHandleInputChange }) {
  return (
    <>
      <HeaderDesc
        title="Generated Logo Ideas"
        description="Based on your selections, here are AI-generated logo concepts tailored for your brand. Choose your favorite or refine your design."
      />

      <LogoIdea onHandleInputChange={(v) => onHandleInputChange("title", v)} />
    </>
  );
}
export default IdeaStep;
