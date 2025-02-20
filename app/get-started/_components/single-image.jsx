import Image from "next/image";

function SingleImage() {
  return (
    <div className="aspect-square relative size-60 shadow-sm shrink">
      <Image
        src="https://images.pexels.com/photos/30394204/pexels-photo-30394204/free-photo-of-vibrant-historic-architecture-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="single-image"
        fill
        className="rounded-lg"
      />
    </div>
  );
}
export default SingleImage;
