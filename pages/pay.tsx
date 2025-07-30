import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import Footer from "@/components/footer";

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => Promise<void>;
  modal: {
    ondismiss: () => void;
  };
}

interface PaymentData {
  paymenttypeid: string;
  transid: string;
  userid: string;
  usertype: string;
  transactiontype: string;
  invoiceids: string;
  debitnoteids: string;
  description: string;
  sellingcurrencyamount: string;
  accountingcurrencyamount: string;
  redirecturl: string;
  checksum: string;
  name?: string;
  email?: string;
  company?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  telNoCc?: string;
  telNo?: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

export default function PaymentPage() {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;
      const data: PaymentData = {
        paymenttypeid: (query.paymenttypeid as string) || "",
        transid: (query.transid as string) || "",
        userid: (query.userid as string) || "",
        usertype: (query.usertype as string) || "",
        transactiontype: (query.transactiontype as string) || "",
        invoiceids: (query.invoiceids as string) || "",
        debitnoteids: (query.debitnoteids as string) || "",
        description: decodeURIComponent((query.description as string) || ""),
        sellingcurrencyamount: (query.sellingcurrencyamount as string) || "",
        accountingcurrencyamount:
          (query.accountingcurrencyamount as string) || "",
        redirecturl: decodeURIComponent((query.redirecturl as string) || ""),
        checksum: (query.checksum as string) || "",
        name: decodeURIComponent((query.name as string) || ""),
        email: decodeURIComponent((query.emailAddr as string) || ""),
        company: decodeURIComponent((query.company as string) || ""),
        address1: (query.address1 as string) || "",
        city: (query.city as string) || "",
        state: (query.state as string) || "",
        country: (query.country as string) || "",
        zip: (query.zip as string) || "",
        telNo: (query.telNo as string) || "",
      };

      setPaymentData(data);

      // Verify checksum
      verifyPaymentData(data);
    }
  }, [router.isReady, router.query]);

  const verifyPaymentData = async (data: PaymentData) => {
    try {
      const response = await fetch("/api/verify-checksum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setVerified(result.valid);

      if (!result.valid) {
        setError("Checksum verification failed. Invalid request.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setError("Verification failed. Please try again.");
    }
  };

  const handlePayment = async () => {
    if (!paymentData || !verified) return;

    // Add type guard for Razorpay key
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      setError("Payment configuration error. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      const amount = parseFloat(paymentData.sellingcurrencyamount);

      // Create Razorpay order
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          receipt: `receipt_${paymentData.transid}`,
        }),
      });

      const order = await orderResponse.json();

      const options: RazorpayOptions = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "MyOrderBox Payment",
        description: paymentData.description || "Payment for services",
        order_id: order.id,
        prefill: {
          name: paymentData.name || "",
          email: paymentData.email || "",
          contact: paymentData.telNo || "",
        },
        theme: {
          color: "#3B82F6",
        },
        handler: async function (response: RazorpayResponse) {
          // Verify payment
          const verifyResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyResult = await verifyResponse.json();

          // Redirect to status page with payment result
          router.push(
            `/status?transid=${paymentData.transid}&status=${
              verifyResult.success ? "Y" : "N"
            }&redirecturl=${encodeURIComponent(
              paymentData.redirecturl
            )}&sellingamount=${
              paymentData.sellingcurrencyamount
            }&accountingamount=${paymentData.accountingcurrencyamount}`
          );
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            // Redirect to status with failed status
            router.push(
              `/status?transid=${
                paymentData.transid
              }&status=N&redirecturl=${encodeURIComponent(
                paymentData.redirecturl
              )}&sellingamount=${
                paymentData.sellingcurrencyamount
              }&accountingamount=${paymentData.accountingcurrencyamount}`
            );
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
      setError("Payment failed. Please try again.");
    }
  };

  if (!router.isReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Payment Gateway - MyOrderBox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-2xl mx-auto pt-16 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {verified ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error ? (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-red-800">{error}</span>
                  </div>
                </div>
              ) : verified && paymentData ? (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-800">
                        Payment details verified successfully
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Transaction Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Transaction ID:</span>{" "}
                          {paymentData.transid}
                        </p>
                        <p>
                          <span className="font-medium">User Type:</span>{" "}
                          {paymentData.usertype}
                        </p>
                        <p>
                          <span className="font-medium">Transaction Type:</span>{" "}
                          {paymentData.transactiontype}
                        </p>
                        <p>
                          <span className="font-medium">Amount:</span> ₹
                          {paymentData.sellingcurrencyamount}
                        </p>
                        {paymentData.description && (
                          <p>
                            <span className="font-medium">Description:</span>{" "}
                            {paymentData.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {(paymentData.name || paymentData.email) && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Customer Details
                        </h3>
                        <div className="space-y-2 text-sm">
                          {paymentData.name && (
                            <p>
                              <span className="font-medium">Name:</span>{" "}
                              {paymentData.name}
                            </p>
                          )}
                          {paymentData.email && (
                            <p>
                              <span className="font-medium">Email:</span>{" "}
                              {paymentData.email}
                            </p>
                          )}
                          {paymentData.company && (
                            <p>
                              <span className="font-medium">Company:</span>{" "}
                              {paymentData.company}
                            </p>
                          )}
                          {paymentData.telNo && (
                            <p>
                              <span className="font-medium">Phone:</span>{" "}
                              {paymentData.telNo}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Total Amount</h3>
                        <p className="text-sm text-gray-600">
                          Secure payment via Razorpay
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">
                          ₹{paymentData.sellingcurrencyamount}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full"
                    size="lg"
                  >
                    {loading ? "Processing..." : "Pay with Razorpay"}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Loading payment details...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}
