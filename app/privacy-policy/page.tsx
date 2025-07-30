// app/privacy-policy/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl p-3">
      <Card>
        <CardContent className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
          <h1 className="text-2xl font-semibold mb-2">Privacy Policy</h1>

          <p>
            At <strong>Growthia Technology and Consulting</strong> (“we”, “our”,
            “us”), your privacy is important to us. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services.
          </p>

          <h2 className="font-semibold text-lg mt-3">
            1. Information We Collect
          </h2>
          <p>
            We may collect the following types of personal information
            ("Personal Data") from users ("you", "your"):
          </p>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>IP Address & Device Information</li>
            <li>Billing and Payment Information</li>
            <li>Usage Data (e.g., pages visited, actions taken)</li>
          </ul>

          <h2 className="font-semibold text-lg mt-3">
            2. Purpose of Data Collection
          </h2>
          <p>We collect this data to:</p>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>Process orders and provide requested services</li>
            <li>
              Send order confirmations, invoices, and support communications
            </li>
            <li>
              Personalize user experience and enhance our website performance
            </li>
            <li>
              Enable payments through trusted third-party payment gateways like
              Razorpay
            </li>
            <li>
              Monitor analytics and traffic via tools like Google Analytics
            </li>
          </ul>

          <h2 className="font-semibold text-lg mt-3">
            3. Sharing Your Information
          </h2>
          <p>
            We only share your data with third-party processors (e.g., hosting
            providers, payment gateways, analytics services) where required to
            fulfill a contract or service (e.g., payment, hosting, email
            delivery). We never sell your personal data.
          </p>

          <h2 className="font-semibold text-lg mt-3">
            4. Data Retention & Deletion
          </h2>
          <p>
            We retain your data for as long as necessary to provide services and
            comply with legal obligations. You may request deletion of your
            personal data by emailing us at{" "}
            <a
              href="mailto:hi@growthia.tech"
              className="text-blue-600 underline"
            >
              hi@growthia.tech
            </a>
            . Upon verification, all personally identifiable information (PII)
            will be deleted, except for minimal identifiers required for service
            history, accounting, or regulatory compliance.
          </p>

          <h2 className="font-semibold text-lg mt-3">5. Data Security</h2>
          <p>
            We use encryption, secure servers, and access controls to safeguard
            your data. However, no method of electronic transmission is 100%
            secure.
          </p>

          <h2 className="font-semibold text-lg mt-3">6. Legal Jurisdiction</h2>
          <p>
            All disputes shall be subject to arbitration and the jurisdiction of
            the courts in Odisha, India.
          </p>

          <h2 className="font-semibold text-lg mt-3">7. Contact</h2>
          <p>
            Proprietor: <strong>Ujjwal Kumar Sittu</strong> <br />
            Brand: <strong>Growthia</strong> (also known as Growthia Technology
            and Consulting) <br />
            Email:{" "}
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
