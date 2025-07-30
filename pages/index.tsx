// pages/index.tsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { trans_id, amount, currency = "INR", return_url } = router.query;

  const [isLoading, setLoading] = useState(false);

  const startPayment = async () => {
    setLoading(true);
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency, trans_id, return_url }),
    });

    const data = await res.json();
    if (!data.orderId) return alert("Failed to create order");

    const options = {
      key: data.razorpayKey,
      amount: amount + "00",
      currency,
      name: "MyOrderBox Payment",
      description: "Pay for Order " + trans_id,
      order_id: data.orderId,
      handler: (response: any) => {
        router.push(
          `/payment/success?trans_id=${trans_id}&return_url=${return_url}`
        );
      },
      modal: {
        ondismiss: () => {
          router.push(
            `/payment/failure?trans_id=${trans_id}&return_url=${return_url}`
          );
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    if (trans_id && amount && return_url) startPayment();
  }, [trans_id, amount, return_url]);

  if (!trans_id || !amount || !return_url) return <p>Invalid request</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Processing Payment...</h1>
      <p>Order ID: {trans_id}</p>
      <p>
        Amount: {amount} {currency}
      </p>
      <p>Redirecting to payment...</p>
    </div>
  );
}
