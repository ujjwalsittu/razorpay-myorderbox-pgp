import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateChecksum, generateRandomKey } from "@/lib/utils";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export default function StatusPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (router.isReady && router.query.redirecturl) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleRedirect();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [router.isReady, router.query]);

  const handleRedirect = async () => {
    if (!router.query.redirecturl) return;

    setRedirecting(true);

    const transid = router.query.transid as string;
    const status = router.query.status as string;
    const redirecturl = decodeURIComponent(router.query.redirecturl as string);
    const sellingamount = router.query.sellingamount as string;
    const accountingamount = router.query.accountingamount as string;

    // Generate random key and checksum for MyOrderBox
    const rkey = generateRandomKey();
    const key = process.env.MYORDERBOX_KEY || "";
    const checksum = generateChecksum(
      transid,
      sellingamount,
      accountingamount,
      status,
      rkey,
      key
    );

    // Create form and submit to MyOrderBox
    const form = document.createElement("form");
    form.method = "POST";
    form.action = redirecturl;

    const fields = {
      transid,
      status,
      rkey,
      checksum,
      sellingamount,
      accountingamount,
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  const getStatusIcon = () => {
    switch (router.query.status) {
      case "Y":
        return <CheckCircle className="h-16 w-16 text-green-500" />;
      case "N":
        return <XCircle className="h-16 w-16 text-red-500" />;
      default:
        return <Clock className="h-16 w-16 text-yellow-500" />;
    }
  };

  const getStatusTitle = () => {
    switch (router.query.status) {
      case "Y":
        return "Payment Successful!";
      case "N":
        return "Payment Failed!";
      default:
        return "Payment Processing";
    }
  };

  const getStatusMessage = () => {
    switch (router.query.status) {
      case "Y":
        return "Your payment has been processed successfully. You will be redirected back to continue.";
      case "N":
        return "Your payment could not be processed. Please try again or contact support.";
      default:
        return "Your payment is being processed. Please wait...";
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
        <title>Payment Status - MyOrderBox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-md mx-auto pt-16 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Payment Status</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center">{getStatusIcon()}</div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {getStatusTitle()}
                </h2>
                <p className="text-gray-600">{getStatusMessage()}</p>
              </div>

              {router.query.transid && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Transaction ID:</span>{" "}
                    {router.query.transid}
                  </p>
                </div>
              )}

              {router.query.redirecturl && countdown > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    Redirecting in {countdown} second
                    {countdown !== 1 ? "s" : ""}...
                  </p>
                </div>
              )}

              {router.query.redirecturl && (
                <Button
                  onClick={handleRedirect}
                  disabled={redirecting}
                  className="w-full"
                  size="lg"
                >
                  {redirecting ? "Redirecting..." : "Continue"}
                </Button>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
