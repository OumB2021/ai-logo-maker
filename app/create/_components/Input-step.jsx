import HeaderDesc from "@/components/header-desc";
import InputField from "@/components/input-field";

function InputStep({ onHandleInputChange, formData }) {
  return (
    <>
      <HeaderDesc
        title="Logo Title"
        description="Enter your brand name to create a custom, AI-generated logo."
      />

      <InputField
        onHandleInputChange={onHandleInputChange}
        formData={formData}
      />
    </>
  );
}
export default InputStep;
