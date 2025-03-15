import { Coins, CoinsIcon } from "lucide-react";

function Info() {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex items-center justify-between px-14 w-full">
        {/* left */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">
            Hi,{" "}
            <span className="text-purple-500 font-extrabold">Oumar Barry</span>
          </h1>
          <p className="text-muted-foreground ">
            Find all your generated images and download them as you wish
          </p>
        </div>

        {/* right */}
        <div>
          <span className="flex items-center gap-2">
            {" "}
            <CoinsIcon />{" "}
            <span className="text-lg font-semibold">4 credits left</span>{" "}
          </span>
          <button className="text-purple-500 hover:text-purple-400 font-semibold">
            Add more credits
          </button>
        </div>
      </div>
    </div>
  );
}
export default Info;
