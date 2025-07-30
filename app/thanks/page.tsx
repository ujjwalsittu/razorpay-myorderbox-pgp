"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

// Separate component that uses useSearchParams
function ThanksContent() {
  const params = useSearchParams();
  const paymentId = params.get("payment_id");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-1 text-center bg-gray-100">
      <h1 className="text-2xl font-bold text-green-700">
        Thank You for Your Payment!
      </h1>
      <p className="mt-1 text-gray-700">
        Your payment {paymentId ? `(#${paymentId})` : ""} was successful.
      </p>
      <p className="mt-0.5 text-gray-600">
        You will receive a confirmation email within 24 hours. <br />
        For any queries, contact our support.
      </p>
    </div>
  );
}

// Main component that wraps ThanksContent in a Suspense boundary
export default function ThanksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>}>
      <ThanksContent />
    </Suspense>
  );
}
