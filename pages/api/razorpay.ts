// pages/api/razorpay.ts

import Razorpay from "razorpay";
import type { NextApiRequest, NextApiResponse } from "next";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { amount, currency = "INR", trans_id, return_url } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: parseInt(amount) * 100, // in paise
      currency,
      receipt: trans_id,
      notes: { return_url },
    });

    res
      .status(200)
      .json({ orderId: order.id, razorpayKey: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
}
