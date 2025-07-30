"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PayPage() {
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);

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

  const handlePayment = () => {
    if (!razorpayKey) {
      alert("Razorpay key is missing. Please check environment setup.");
      return;
    }

    const razorpayOptions: any = {
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
        color: "#3399cc",
      },
    };

    const rzp = new (window as any).Razorpay(razorpayOptions);
    rzp.open();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md p-6">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Pay via Razorpay</h2>
          <p>
            Transaction ID: <strong>{transid}</strong>
          </p>
          <p>Amount: ₹{sellingcurrencyamount}</p>
          <Button className="w-full" onClick={handlePayment} disabled={loading}>
            {loading ? "Processing..." : "Pay with Razorpay"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
