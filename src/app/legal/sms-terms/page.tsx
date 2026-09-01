import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions | Nixon Home Care",
  description:
    "The terms that govern participation in the Nixon Home Care, Inc. text-message (SMS) announcement program.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const BUSINESS_PHONE = "713-633-4700";
const CONTACT_EMAIL = "Nixon_homecare@msn.com";
const LAST_UPDATED = "September 1, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="text-sm text-primary hover:underline">
          &larr; Nixon Home Care, Inc.
        </Link>

        <article className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
            SMS Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            By providing your mobile phone number and opting in, you agree to
            receive text-message announcements from Nixon Home Care Inc. These
            Terms &amp; Conditions govern your participation in the program.
          </p>

          <Section title="Program description">
            <p>
              Nixon Home Care sends SMS announcements &mdash; including facility
              closures, holiday and schedule notices, weather or emergency alerts,
              and general service updates &mdash; to clients and their authorized
              guardians, caregivers, and family members who have opted in.
            </p>
          </Section>

          <Section title="Consent">
            <p>
              Enrollment is based on prior express consent obtained by Nixon Home
              Care. By opting in, you confirm you are the account holder for the
              mobile number provided or are authorized to enroll it. Consent to
              receive messages is not a condition of receiving any care, service,
              or purchase.
            </p>
          </Section>

          <Section title="Message frequency">
            <p>
              Message frequency varies; messages are sent only as announcements
              arise.
            </p>
          </Section>

          <Section title="Cost">
            <p>
              Message and data rates may apply. Your mobile carrier&rsquo;s
              standard rates apply according to your plan.
            </p>
          </Section>

          <Section title="Opt out — STOP">
            <p>
              You may opt out at any time by replying STOP to any message. You will
              receive a single confirmation message and then no further texts
              unless you opt in again.
            </p>
          </Section>

          <Section title="Help — HELP">
            <p>
              For assistance, reply HELP to any message, or contact Nixon Home Care
              at{" "}
              <a
                href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                className="text-primary hover:underline"
              >
                {BUSINESS_PHONE}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Carriers">
            <p>
              Supported carriers are not liable for delayed or undelivered
              messages. Delivery is subject to carrier and network availability.
            </p>
          </Section>

          <Section title="Privacy">
            <p>
              Your participation is also governed by our{" "}
              <Link href="/legal/sms" className="text-primary hover:underline">
                SMS Privacy Policy
              </Link>
              , which confirms that we do not sell or share mobile opt-in
              information with third parties for marketing.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update these terms from time to time. Material changes will be
              posted on this page with a revised &ldquo;last updated&rdquo; date.
            </p>
          </Section>

          <p className="mt-12 text-sm text-muted-foreground">
            &copy; 2026 Nixon Home Care Inc. All rights reserved.
          </p>
        </article>
      </div>
    </div>
  );
}
