import SingleImage from "./single-image";

function GridImages() {
  return (
    <div className="flex flex-col items-center  mt-20">
      <h2 className="text-2xl font-bold text-gray-700 text-center">
        Generate 100% Orginal Logo Graphics with Ai
      </h2>
      <div className="flex flex-wrap lg:gap-10 md:gap-6 gap-3 p-4 justify-center">
        {[...Array(8)].map((_, index) => (
          <SingleImage key={index} />
        ))}
      </div>
    </div>
  );
}
export default GridImages;
