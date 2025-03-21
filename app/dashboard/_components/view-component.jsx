import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import Image from "next/image";

function ViewComponent({ logo }) {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <button className="p-2 rounded-full hover:scale-110 transition-transform">
          <Eye className="text-zinc-300 w- 5 h-5" strokeWidth={1.5} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center w-full ">View Logo</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Image
            className="w-full h-full"
            src={logo.image}
            alt="Logo"
            width={500}
            height={500}
            className="rounded-md"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
export default ViewComponent;
