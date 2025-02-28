import Image from "next/image";

function SingleImage({ image }) {
  return (
    <div className="aspect-square relative lg:size-60 md:size-52 size-44  shadow-sm shrink  min-w-0">
      <Image
        src={`/hero-images/image${image}.webp`}
        alt="single-image"
        fill
        className="rounded-lg"
      />
    </div>
  );
}
export default SingleImage;
