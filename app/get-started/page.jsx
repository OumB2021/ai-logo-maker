import GridImages from "./_components/grid-images";
import Header from "./_components/header";
import InputBar from "./_components/input-bar";

function page() {
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-4 w-full ">
      <Header />
      <InputBar />
      <GridImages />
    </div>
  );
}
export default page;
