import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Growthia</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Secure Payment Terminal
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
