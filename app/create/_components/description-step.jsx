import HeaderDesc from "@/components/header-desc";
import LogoDescription from "./logo-description";

function DescriptionStep({ onHandleInputChange }) {
  return (
    <>
      <HeaderDesc
        title="Describe Your Brand"
        description="Tell us what your brand stands for. Describe your business, values, or any key message you'd like your logo to convey."
      />

      <LogoDescription
        onHandleInputChange={(v) => onHandleInputChange("title", v)}
      />
    </>
  );
}
export default DescriptionStep;
