"use client";

import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { converToSubCurrency } from "@/lib/utils";
function Checkout({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: converToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  return (
    <form className="flex flex-col gap-4">
      {clientSecret && <PaymentElement />}
      {error && <p className="text-red-500">{error}</p>}
      {clientSecret && (
        <button
          className="w-full bg-zinc-800 hover:bg-zinc-700 p-4 rounded-md text-white font-medium"
          disabled={!stripe}
        >
          Pay
        </button>
      )}
    </form>
  );
}
export default Checkout;
