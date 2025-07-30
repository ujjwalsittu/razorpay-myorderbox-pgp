import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy - Growthia</title>
        <meta
          name="description"
          content="Refund Policy for Growthia Technology & Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto pt-16 px-4 pb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Refund Policy
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  General Refund Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  Growthia Technology & Consulting operates a{" "}
                  <strong>no-refund policy</strong> for digital products and
                  services. Due to the intangible nature of digital services and
                  immediate access provided upon purchase, all sales are
                  considered final.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Exceptions to No-Refund Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  Refunds may be considered only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service-Specific Refund Terms:</strong> If
                    explicitly mentioned in the product description at the time
                    of purchase
                  </li>
                  <li>
                    <strong>Purchase Receipt Documentation:</strong> Refund
                    eligibility is verified through purchase receipts stored on
                    our server
                  </li>
                  <li>
                    <strong>Technical Service Failure:</strong> If we are unable
                    to deliver the promised service due to technical issues on
                    our end
                  </li>
                  <li>
                    <strong>Billing Errors:</strong> If there was an error in
                    billing or duplicate charges
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Refund Request Process
                </h2>
                <p className="text-gray-700 mb-4">
                  If you believe you qualify for a refund under the exceptions
                  mentioned above:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    Contact our support team at{" "}
                    <a
                      href="mailto:hi@growthia.tech"
                      className="text-blue-600 hover:underline"
                    >
                      hi@growthia.tech
                    </a>
                  </li>
                  <li>Provide your purchase receipt or transaction ID</li>
                  <li>Explain the reason for your refund request</li>
                  <li>Allow 5-7 business days for review and response</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Refund Processing
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Review Period:</strong> 5-7 business days for
                    request evaluation
                  </p>
                  <p>
                    <strong>Approval Process:</strong> Refunds are subject to
                    verification and approval
                  </p>
                  <p>
                    <strong>Processing Time:</strong> Approved refunds will be
                    processed within 7-14 business days
                  </p>
                  <p>
                    <strong>Refund Method:</strong> Refunds will be credited to
                    the original payment method used for purchase
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Non-Refundable Services
                </h2>
                <p className="text-gray-700 mb-4">
                  The following services are strictly non-refundable:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Completed consulting sessions or calls</li>
                  <li>Digital downloads that have been accessed</li>
                  <li>Custom development work that has been initiated</li>
                  <li>Subscription services after the first billing cycle</li>
                  <li>Services consumed or partially consumed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Chargeback Policy
                </h2>
                <p className="text-gray-700">
                  Initiating a chargeback without first contacting our support
                  team may result in suspension of services and may be subject
                  to chargeback fees. We encourage customers to work with us
                  directly to resolve any payment disputes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Service Cancellation
                </h2>
                <p className="text-gray-700">
                  While we do not offer refunds, you may cancel ongoing services
                  or subscriptions to prevent future charges. Cancellation
                  requests should be made at least 24 hours before the next
                  billing cycle.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Contact for Refund Requests
                </h2>
                <div className="text-gray-700">
                  <p>
                    <strong>Business Name:</strong> Growthia Technology &
                    Consulting
                  </p>
                  <p>
                    <strong>Proprietor:</strong> Ujjwal Kumar Sittu
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:hi@growthia.tech"
                      className="text-blue-600 hover:underline"
                    >
                      hi@growthia.tech
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Patrapada, Bhubaneswar, Odisha,
                    India, 751019
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Policy Updates</h2>
                <p className="text-gray-700">
                  This refund policy may be updated from time to time. Any
                  changes will be posted on this page with an updated revision
                  date. Continued use of our services after policy changes
                  constitutes acceptance of the updated terms.
                </p>
              </section>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
}
