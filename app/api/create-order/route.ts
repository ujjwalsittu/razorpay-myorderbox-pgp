import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { transid, userid, usertype, amount, name, email } = body;

    const payment_capture = 1;
    const currency = "INR";

    const options = {
      amount: parseInt(amount) * 100,
      currency,
      receipt: `receipt_${transid}_${userid}`,
      payment_capture,
      notes: {
        usertype,
        userid,
        transid,
        name,
        email,
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
