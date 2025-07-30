import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy - Growthia</title>
        <meta
          name="description"
          content="Shipping Policy for Growthia Technology & Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto pt-16 px-4 pb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Shipping Policy
              </CardTitle>
              <p className="text-center text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Digital Service Delivery
                </h2>
                <p className="text-gray-700 mb-4">
                  Growthia Technology & Consulting exclusively provides digital
                  products and services. There is no physical shipping involved
                  in our service delivery process.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Service Delivery Method
                </h2>
                <p className="text-gray-700 mb-4">
                  All products and services are delivered digitally through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Email Delivery:</strong> Services and related
                    information will be sent to your registered email address
                  </li>
                  <li>
                    <strong>Digital Access:</strong> Online access to platforms,
                    dashboards, or digital resources
                  </li>
                  <li>
                    <strong>Electronic Communication:</strong> Documentation,
                    reports, and deliverables via secure digital channels
                  </li>
                  <li>
                    <strong>Cloud-based Solutions:</strong> Access to software,
                    applications, or consulting materials online
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Delivery Timeline
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Immediate Services:</strong> Digital access is
                    typically provided within 24 hours of payment confirmation
                  </p>
                  <p>
                    <strong>Consulting Services:</strong> Project timelines will
                    be communicated separately based on scope and requirements
                  </p>
                  <p>
                    <strong>Custom Development:</strong> Delivery schedules will
                    be agreed upon in the service agreement
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Access Requirements
                </h2>
                <p className="text-gray-700 mb-4">
                  To receive our digital services, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide a valid and accessible email address</li>
                  <li>
                    Ensure your email system can receive attachments and
                    communications from our domain
                  </li>
                  <li>
                    Have internet access for online services and platforms
                  </li>
                  <li>
                    Meet any specific technical requirements communicated during
                    service purchase
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Service Confirmation
                </h2>
                <p className="text-gray-700">
                  Upon successful payment and service activation, you will
                  receive a confirmation email with details about accessing your
                  purchased service. This email will be sent to the registered
                  email address provided during purchase.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Technical Support
                </h2>
                <p className="text-gray-700">
                  If you encounter any issues accessing your digital services or
                  need technical assistance, please contact our support team at{" "}
                  <a
                    href="mailto:hi@growthia.tech"
                    className="text-blue-600 hover:underline"
                  >
                    hi@growthia.tech
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Contact Information
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
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
}
