import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { db } from "@/config/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const handleDelete = async (logo, email) => {
  try {
    await deleteDoc(doc(db, "users", email, "logos", logo.id));
    toast.success("Logo deleted successfully");
    // window.location.reload();
  } catch (error) {
    toast.error("Error deleting logo");
    console.error("Error deleting logo:", error);
  }
};

function DeleteDialog({ logo, userDetails }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="p-2 rounded-full hover:scale-110 transition-transform">
          <Trash2 className="text-zinc-300 w- 5 h-5" strokeWidth={1.5} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently your logo from
            your database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={() => handleDelete(logo, userDetails.email)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default DeleteDialog;
