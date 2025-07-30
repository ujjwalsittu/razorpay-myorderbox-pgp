import { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    redirecturl,
  } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generatedSignature === razorpay_signature) {
    return res.status(200).json({
      status: "success",
      message: "Payment successful",
      redirecturl,
    });
  } else {
    return res.status(400).json({
      status: "failure",
      message: "Payment verification failed",
      redirecturl,
    });
  }
}
