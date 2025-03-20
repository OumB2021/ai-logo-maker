import { useState } from "react";
import Image from "next/image";
import { Eye, Download, Trash, Trash2 } from "lucide-react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import DeleteDialog from "./delete-dialog";
import ViewComponent from "./view-component";

function SingleLogo({ userDetails, logo }) {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = logo.image;
    link.download = logo.title || "logo.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        className="relative group w-[300px] h-[300px] flex flex-col items-center text-center overflow-hidden rounded-md "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Logo Image */}
        <Image
          src={logo.image}
          alt={logo.title || "Generated Logo"}
          width={300}
          height={300}
          className="rounded-md object-cover w-full h-full "
        />

        {/* Dark Overlay & Icons (Hidden by default) */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <ViewComponent logo={logo} />

          {/* Download Icon */}
          <button
            onClick={handleDownload}
            className=" p-2 rounded-full hover:scale-110 transition-transform"
          >
            <Download className="text-zinc-300 w- 5 h-5" strokeWidth={1.5} />
          </button>

          {/* Delete Icon */}
          <DeleteDialog logo={logo} userDetails={userDetails} />
        </div>
      </div>
      {/* Logo Info */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-base font-semibold">{logo.title}</p>
        <p className="text-sm text-muted-foreground">{logo.desc}</p>
      </div>
    </div>
  );
}

export default SingleLogo;
