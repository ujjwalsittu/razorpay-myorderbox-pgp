// app/status/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react";

// Separate component that uses useSearchParams
function StatusContent() {
  const searchParams = useSearchParams();

  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const redirectUrl = searchParams.get("redirecturl");
  const status = searchParams.get("status");

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev <= 1 && redirectUrl) {
          window.location.href = buildRedirectUrl();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const buildRedirectUrl = () => {
    const keys = Array.from(searchParams.keys());
    const baseUrl = redirectUrl || "";
    const paramString = keys
      .filter((key) => key !== "redirecturl")
      .map((key) => `${key}=${encodeURIComponent(searchParams.get(key) || "")}`)
      .join("&");
    return `${baseUrl}?${paramString}`;
  };

  const getStatusUI = () => {
    switch (status) {
      case "success":
        return {
          title: "Payment Successful",
          icon: <CheckCircle className="text-green-500 h-6 w-6" />,
          desc: "Your payment has been completed successfully.",
        };
      case "failed":
        return {
          title: "Payment Failed",
          icon: <XCircle className="text-red-500 h-6 w-6" />,
          desc: "There was a problem with your payment.",
        };
      default:
        return {
          title: "Payment Pending",
          icon: <Clock className="text-yellow-500 h-6 w-6" />,
          desc: "Your payment is being processed.",
        };
    }
  };

  const { title, icon, desc } = getStatusUI();

  return (
    <div className="min-h-screen flex items-center justify-center p-1">
      <div className="max-w-md w-full space-y-2 text-center">
        <Alert>
          <div className="flex items-center justify-center space-x-2">
            {icon}
            <AlertTitle className="text-xl font-bold">{title}</AlertTitle>
          </div>
          <AlertDescription className="mt-0.5 text-sm text-muted-foreground">
            {desc}
          </AlertDescription>
        </Alert>

        <p className="text-sm text-gray-500 mt-1">
          Redirecting in{" "}
          <span className="font-medium text-gray-900">{redirectCountdown}</span>{" "}
          seconds...
        </p>

        <Button onClick={() => (window.location.href = buildRedirectUrl())}>
          Click here if not redirected
        </Button>
      </div>
    </div>
  );
}

// Main component that wraps StatusContent in a Suspense boundary
export default function StatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>}>
      <StatusContent />
    </Suspense>
  );
}
