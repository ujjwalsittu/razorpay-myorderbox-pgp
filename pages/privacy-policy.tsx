import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Growthia</title>
        <meta
          name="description"
          content="Privacy Policy for Growthia Technology & Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto pt-16 px-4 pb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Privacy Policy
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  Growthia Technology & Consulting (&quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;) collects the following
                  information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Personal Information:</strong> Name, Email address,
                    Phone number
                  </li>
                  <li>
                    <strong>Business Information:</strong> Organization name,
                    GST number
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser
                    information
                  </li>
                  <li>
                    <strong>Service-Related Information:</strong> Information
                    required to deliver requested services
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide and maintain our services</li>
                  <li>Process payments and transactions</li>
                  <li>Communicate with you about services</li>
                  <li>Comply with legal obligations</li>
                  <li>Improve our services and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  3. Data Retention
                </h2>
                <p className="text-gray-700">
                  We retain your personal data for 2-3 years based on the
                  service opted. Retention periods may vary based on legal
                  requirements and service agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Deletion</h2>
                <p className="text-gray-700 mb-4">
                  You may request deletion of your personal data in accordance
                  with applicable laws. Data deletion is subject to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Deletion of Personally Identifiable Information (PII) data
                  </li>
                  <li>
                    Basic identifiers and service history may be retained as per
                    legal requirements
                  </li>
                  <li>Compliance with country laws and DPDP Act provisions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  6. Contact Information
                </h2>
                <div className="text-gray-700">
                  <p>
                    <strong>Proprietor:</strong> Ujjwal Kumar Sittu
                  </p>
                  <p>
                    <strong>Business Address:</strong> Patrapada, Bhubaneswar,
                    Odisha, India, 751019
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
