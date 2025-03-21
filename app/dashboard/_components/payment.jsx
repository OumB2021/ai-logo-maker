"use client";

import { Elements } from "@stripe/react-stripe-js";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import CreditOptions from "./credit-options";
import { useState } from "react";

function AddCredits({ amount }) {
  const [plan, setPlan] = useState({});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-zinc-50 hover:bg-zinc-600 flex items-center py-2 px-3 bg-zinc-700 rounded-md gap-2">
          <Plus className="h-4 w-4" />
          <span className="text-sm">Add more credits</span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-100">
        <DialogTitle>Add more credits</DialogTitle>
        <DialogDescription>
          You can add more credits to your account by using your credit card.
        </DialogDescription>
        <CreditOptions plan={plan} setPlan={setPlan} />
      </DialogContent>
    </Dialog>
  );
}
export default AddCredits;
