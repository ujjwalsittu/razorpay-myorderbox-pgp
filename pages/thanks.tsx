import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export default function ThanksPage() {
  const router = useRouter();
  const status = router.query.status as string;

  const isSuccess = status === "success";

  return (
    <>
      <Head>
        <title>
          {isSuccess ? "Payment Successful" : "Payment Failed"} - MyOrderBox
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="max-w-md mx-auto pt-16 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                {isSuccess ? "Thank You!" : "Payment Failed"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center">
                {isSuccess ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {isSuccess ? "Payment Successful!" : "Payment Failed!"}
                </h2>
                <p className="text-gray-600">
                  {isSuccess
                    ? "Your payment has been processed successfully. Thank you for your business!"
                    : "Your payment could not be processed. Please try again or contact support."}
                </p>
              </div>

              <Link href="/">
                <Button className="w-full" size="lg">
                  {isSuccess ? "Make Another Payment" : "Try Again"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
