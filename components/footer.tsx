import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Growthia</span>
            </div>
            <p className="text-gray-300 mb-4">
              Technology & Consulting solutions for modern businesses. Secure
              payment processing with reliable service delivery.
            </p>
            {/* <p className="text-sm text-gray-400">
              Proprietor: Ujjwal Kumar Sittu
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hi@growthia.tech"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Growthia Technology & Consulting. All
              rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Patrapada, Bhubaneswar, Odisha, India - 751019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
