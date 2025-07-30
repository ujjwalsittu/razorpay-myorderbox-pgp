import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Growthia</title>
        <meta
          name="description"
          content="Terms and Conditions for Growthia Technology & Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto pt-16 px-4 pb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Terms & Conditions
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700">
                  By accessing and using Growthia Technology & Consulting's
                  services, you accept and agree to be bound by the terms and
                  provision of this agreement. These terms apply to all
                  visitors, users, and others who access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  2. Service Description
                </h2>
                <p className="text-gray-700 mb-4">
                  Growthia provides technology and consulting services including
                  but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Digital payment processing solutions</li>
                  <li>Technology consulting and development</li>
                  <li>Business consulting services</li>
                  <li>Custom software solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  3. User Obligations
                </h2>
                <p className="text-gray-700 mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide accurate and complete information</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Not interfere with or disrupt the services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    All payments must be made in advance unless otherwise agreed
                  </li>
                  <li>Prices are subject to change with prior notice</li>
                  <li>Late payments may incur additional charges</li>
                  <li>
                    All transactions are processed securely through approved
                    payment gateways
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-700">
                  All content, features, and functionality of our services are
                  owned by Growthia, its licensors, or other providers and are
                  protected by copyright, trademark, and other intellectual
                  property laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  Growthia shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  7. Service Availability
                </h2>
                <p className="text-gray-700">
                  While we strive to maintain continuous service availability,
                  we do not guarantee uninterrupted access. Services may be
                  temporarily unavailable due to maintenance, updates, or
                  unforeseen circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                <p className="text-gray-700">
                  We may terminate or suspend your access to our services
                  immediately, without prior notice, for conduct that we believe
                  violates these Terms or is harmful to other users, us, or
                  third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  9. Dispute Resolution
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Arbitration Language:</strong> English, Hindi
                  </p>
                  <p>
                    <strong>Jurisdiction:</strong> Courts of Odisha, India
                  </p>
                  <p>
                    Any disputes arising from these terms shall be resolved
                    through binding arbitration in accordance with the laws of
                    India.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  10. Changes to Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time.
                  Updated terms will be posted on this page with a revised date.
                  Continued use of our services constitutes acceptance of the
                  modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  11. Contact Information
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
                    <strong>Address:</strong> Patrapada, Bhubaneswar, Odisha,
                    India, 751019
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
                </div>
              </section>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
}
