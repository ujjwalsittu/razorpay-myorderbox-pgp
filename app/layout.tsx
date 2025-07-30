// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import SpaceTrailBackground from "@/app/components/SpaceTrailBackground"; // NEW
import Link from "next/link";

export const metadata = {
  title: "Razorpay Integration | Growthia",
  description: "Razorpay payment gateway for MyOrderBox powered by Growthia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SpaceTrailBackground /> {/* NEW SPACE TRAIL BACKGROUND */}
          <header className="bg-white/70 backdrop-blur dark:bg-gray-900/70 shadow py-1 px-2 z-10 relative">
            <div className="container mx-auto flex justify-center">
              <img
                src="/logo-black.png"
                alt="growthia"
                className="h-10 md:h-12"
              />
            </div>
          </header>
          <main className="container mx-auto px-1 py-1 flex-1 w-full relative z-10">
            {children}
          </main>
          <footer className="bg-gray-100/80 backdrop-blur dark:bg-gray-800/70 py-1 text-center text-sm text-gray-600 dark:text-gray-300 z-10 relative">
            <div className="space-x-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/shipping-policy" className="hover:underline">
                Shipping Policy
              </Link>
              <Link href="/refund-and-cancellation" className="hover:underline">
                Refund Policy
              </Link>
            </div>
            <p className="mt-0.5">
              © {new Date().getFullYear()} Growthia Technology And Consulting
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
