import SingleImage from "./single-image";

function GridImages() {
  return (
    <div className="flex flex-col items-center  mt-20">
      <h2 className="text-2xl font-bold text-gray-700">
        Generate 100% Orginal Logo Graphics with Ai
      </h2>
      <div className="flex flex-wrap gap-10 rounded-lg p-4 items-center justify-center">
        {[...Array(8)].map((_, index) => (
          <SingleImage key={index} />
        ))}
      </div>
    </div>
  );
}
export default GridImages;
