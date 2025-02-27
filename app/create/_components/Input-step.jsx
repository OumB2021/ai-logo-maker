import HeaderDesc from "@/components/header-desc";
import InputField from "@/components/input-field";

function InputStep({ onHandleInputChange }) {
  return (
    <>
      <HeaderDesc
        title="Logo Title"
        description="Enter your brand name to create a custom, AI-generated logo."
      />

      <InputField onHandleInputChange={onHandleInputChange} />
    </>
  );
}
export default InputStep;
