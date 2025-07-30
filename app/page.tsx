"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handlePayment = () => {
    if (!amount || !phone || !email || !name) {
      return alert("Please fill all fields");
    }

    const options: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: parseInt(amount) * 100,
      currency: "INR",
      name: "Custom Payment",
      description: "Payment via Razorpay",
      handler: function (response: any) {
        router.push(`/thanks?payment_id=${response.razorpay_payment_id}`);
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      theme: {
        color: "#2e69ff",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden flex items-center justify-center">
      {/* Payment Card */}
      <Card className="relative z-10 w-full max-w-sm p-3 shadow-xl rounded-2xl border border-gray-200 bg-white dark:bg-gray-900">
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold text-center">Make a Payment</h2>

          <div className="space-y-0.5">
            <Label>Name</Label>
            <Input
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-0.5">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-0.5">
            <Label>Phone (India)</Label>
            <Input
              type="tel"
              placeholder="10-digit phone"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="space-y-0.5">
            <Label>Amount (INR)</Label>
            <Input
              type="number"
              placeholder="Amount in ₹"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <Button className="w-full mt-0.5" onClick={handlePayment}>
            Pay with Razorpay
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
