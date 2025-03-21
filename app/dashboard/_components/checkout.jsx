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
    if (amount && amount > 0.5) {
      fetch("api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: converToSubCurrency(amount) }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setError(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-sucess?amount=${amount}`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {clientSecret && <PaymentElement />}
      {error && <p className="text-red-500">{error}</p>}
      {clientSecret && (
        <button
          className="w-full bg-zinc-900 hover:bg-zinc-800 p-4 rounded-md text-white font-bold text-lg disabled:opacity-50 disabled:animate-pulse"
          disabled={!stripe || loading}
        >
          {!loading ? `Pay $${amount}` : "processing..."}
        </button>
      )}
    </form>
  );
}
export default Checkout;
