import HeaderDesc from "@/components/header-desc";
import LogoDesign from "./logo-design";
import LogoIdea from "./logo-idea";

function IdeaStep({ onHandleInputChange, formData }) {
  return (
    <>
      <HeaderDesc
        title="Select your Design Idea"
        description="Choose your favorite design style that aligns with your vision, or skip to receive a random suggestion."
      />

      <LogoIdea onHandleInputChange={onHandleInputChange} formData={formData} />
    </>
  );
}
export default IdeaStep;
