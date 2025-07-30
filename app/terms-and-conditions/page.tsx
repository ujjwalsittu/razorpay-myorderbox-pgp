// app/terms-and-conditions/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto max-w-3xl p-3">
      <Card>
        <CardContent className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
          <h1 className="text-2xl font-semibold mb-2">Terms and Conditions</h1>

          <p>
            These Terms and Conditions (“Terms”) govern your access to and use
            of the website and services provided by{" "}
            <strong>Growthia Technology and Consulting</strong> (“we”, “us”,
            “our”). By using our services, you agree to these Terms.
          </p>

          <h2 className="font-semibold text-lg mt-3">1. Services Offered</h2>
          <p>
            We provide Information Technology, Business Consulting, Domain
            Registration, Hosting, Email Services, Web & Mobile App Development,
            and other related digital services.
          </p>

          <h2 className="font-semibold text-lg mt-4">2. Digital Delivery</h2>
          <p>
            All our services are digital in nature and are delivered via email
            or customer dashboard. No physical products are shipped.
          </p>

          <h2 className="font-semibold text-lg mt-4">
            3. Payments & Invoicing
          </h2>
          <p>
            All payments must be made in INR via supported gateways like
            Razorpay. An invoice will be generated upon payment. Services
            commence post-confirmation.
          </p>

          <h2 className="font-semibold text-lg mt-4">
            4. Refund & Cancellation Policy
          </h2>
          <p>
            No refund shall be processed unless mentioned specifically on the
            product/service page. Once a digital service is sold or activated,
            it is non-refundable. For exceptions, refer to our{" "}
            <a
              href="/refund-and-cancellation"
              className="text-blue-600 underline"
            >
              Refund Policy
            </a>
            .
          </p>

          <h2 className="font-semibold text-lg mt-4">5. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes. You shall
            not misuse, copy, or resell any part of our services without
            permission.
          </p>

          <h2 className="font-semibold text-lg mt-4">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services
            if you breach these Terms or misuse the platform.
          </p>

          <h2 className="font-semibold text-lg mt-4">
            7. Limitation of Liability
          </h2>
          <p>
            We are not liable for indirect, incidental, or consequential
            damages. All services are provided “as is” without warranties.
          </p>

          <h2 className="font-semibold text-lg mt-4">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            settled via arbitration and under the jurisdiction of Odisha courts.
          </p>

          <h2 className="font-semibold text-lg mt-4">9. Contact Information</h2>
          <p>
            Proprietor: <strong>Ujjwal Kumar Sittu</strong> <br />
            Brand: <strong>Growthia</strong> (also known as Growthia Technology
            and Consulting) <br />
            Support Email:{" "}
            <a
              href="mailto:hi@growthia.tech"
              className="text-blue-600 underline"
            >
              hi@growthia.tech
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
