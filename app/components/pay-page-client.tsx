"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PayPageClient() {
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const transid = params.get("transid") ?? "";
  const userid = params.get("userid") ?? "";
  const usertype = params.get("usertype") ?? "";
  const transactiontype = params.get("transactiontype") ?? "";
  const sellingcurrencyamount = params.get("sellingcurrencyamount") ?? "0";
  const redirecturl = params.get("redirecturl") ?? "";
  const checksum = params.get("checksum") ?? "";
  const name = params.get("name") ?? "";
  const email = params.get("emailAddr") ?? "";
  const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => console.log("Razorpay script loaded");
      document.body.appendChild(script);
    }
  }, []);

  const handlePayment = () => {
    if (!razorpayKey) {
      setError("Razorpay key missing. Please check environment setup.");
      return;
    }

    setLoading(true);

    const options: any = {
      key: razorpayKey,
      amount: Number(sellingcurrencyamount) * 100,
      currency: "INR",
      name: "MyOrderBox Fund Add",
      description: `Transaction ID: ${transid}`,
      handler: function (response: any) {
        const query = new URLSearchParams({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          transid,
          userid,
          usertype,
          transactiontype,
          sellingcurrencyamount,
          redirecturl,
          checksum,
        }).toString();

        window.location.href = `/status?${query}`;
      },
      prefill: {
        name,
        email,
      },
      theme: {
        color: "#1e40af", // blue-800
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <Card className="w-full max-w-md shadow-lg p-4 border border-gray-200">
        <CardContent className="space-y-4 p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-900">
              Pay via Razorpay
            </h2>
            <p className="text-sm text-gray-500 mt-1">Secure payment gateway</p>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-gray-500">Transaction ID:</span>{" "}
              <strong className="text-gray-800">{transid}</strong>
            </p>
            <p>
              <span className="text-gray-500">Amount:</span>{" "}
              <strong className="text-gray-800">
                ₹{sellingcurrencyamount}
              </strong>
            </p>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button
            className="w-full"
            onClick={handlePayment}
            disabled={loading || !razorpayKey}
          >
            {loading ? "Processing..." : "Pay with Razorpay"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
