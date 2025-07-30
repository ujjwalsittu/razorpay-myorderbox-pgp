import { Suspense } from "react";
import { PayPageClient } from "@/app/components/pay-page-client";

export default function PayPage() {
  return (
    <Suspense
      fallback={<div className="text-center p-8">Loading payment page...</div>}
    >
      <PayPageClient />
    </Suspense>
  );
}
