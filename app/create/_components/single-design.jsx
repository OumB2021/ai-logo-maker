import Image from "next/image";

function SingleDesign({
  design,
  selectedOption,
  setSelectedOption,
  onHandleInputChange,
}) {
  return (
    <div
      className={`flex flex-col items-center shadow-sm rounded-lg overflow-hidden border ${
        selectedOption === design.title
          ? "border-zinc-800 border-2"
          : "border-zinc-200"
      }  hover:cursor-pointer hover:border-zinc-800`}
      onClick={() => {
        setSelectedOption(design.title);
        onHandleInputChange(design.title);
      }}
    >
      <div className="relative h-[200px] w-full bg-red-400">
        <Image
          src={design.image}
          alt={design.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-3 text-center w-full bg-zinc-50">
        <p className="text-sm font-semibold text-zinc-800">{design.title}</p>
      </div>
    </div>
  );
}
export default SingleDesign;
