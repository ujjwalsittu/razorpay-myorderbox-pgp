import "@/app/globals.css"; // Make sure Tailwind CSS is imported here
import { Metadata } from "next";
import { cn } from "@/app/lib/utils"; // Optional helper from shadcn
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razorpay Integration",
  description: "Razorpay payment gateway for MyOrderBox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background text-foreground"
        )}
      >
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/razorpay-logo.svg"
                alt="Razorpay Logo"
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline text-lg font-semibold text-gray-800">
                Razorpay + MyOrderBox
              </span>
            </div>
          </div>
        </header>
        <main className="px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
