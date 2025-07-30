"use client";

import { useSearchParams } from "next/navigation";

export default function ThanksPage() {
  const params = useSearchParams();
  const paymentId = params.get("payment_id");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      <h1 className="text-2xl font-bold text-green-700">
        Thank You for Your Payment!
      </h1>
      <p className="mt-4 text-gray-700">
        Your payment {paymentId ? `(#${paymentId})` : ""} was successful.
      </p>
      <p className="mt-2 text-gray-600">
        You will receive a confirmation email within 24 hours. <br />
        For any queries, contact our support.
      </p>
    </div>
  );
}
