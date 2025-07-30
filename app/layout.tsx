// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razorpay Gateway | MyOrderBox",
  description: "Simple and secure Razorpay payment portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header className="w-full shadow-sm bg-white dark:bg-gray-900 border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href="/">
                  <Image
                    src="/razorpay-logo.svg"
                    alt="Razorpay Logo"
                    width={130}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/pay"
                  className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white"
                >
                  Pay
                </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
