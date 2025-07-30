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
  if (req.method !== "POST") return res.status(405).end();

  const { amount, currency = "INR", receipt } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100), // Convert to paise
      currency,
      receipt,
    });

    res.status(200).json(order);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
