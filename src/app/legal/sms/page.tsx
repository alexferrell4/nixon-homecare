import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Privacy Policy | Nixon Home Care",
  description:
    "How Nixon Home Care, Inc. handles information collected through its text-message (SMS) announcement program.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const BUSINESS_PHONE = "713-633-4700";
const CONTACT_EMAIL = "Nixon_homecare@msn.com";
const MAILING_ADDRESS = "3719 Lynnfield Street, Houston, TX 77016";
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

export default function SmsPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="text-sm text-primary hover:underline">
          &larr; Nixon Home Care, Inc.
        </Link>

        <article className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
            SMS Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nixon Home Care Inc. (&ldquo;Nixon Home Care,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates a text-message (SMS)
            program to send announcements &mdash; such as facility closures,
            holiday schedules, weather emergencies, and service notices &mdash; to
            clients and their authorized guardians, caregivers, and family members
            who have consented to receive them. This policy explains how we handle
            information collected through that program.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We do not sell, rent, trade, or share your mobile phone number or SMS
            opt-in information with any third parties or affiliates for their
            marketing or promotional purposes. Mobile information is used solely to
            deliver the messages you have consented to receive.
          </p>

          <Section title="Information we collect">
            <p>
              For the SMS program we collect and store your name, mobile phone
              number, the client or household you are associated with, and your
              consent status. We do not collect health information through this
              text-message channel.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              Your mobile number is used only to send the organizational
              announcements described above and to process opt-out and help
              requests. We do not use it for any other purpose.
            </p>
          </Section>

          <Section title="Sharing of information">
            <p>
              We share your mobile number only with the messaging service
              providers that operate the program on our behalf (for example, our
              SMS delivery provider) strictly so they can transmit our messages to
              you. These providers are contractually prohibited from using your
              information for any other purpose. We never share mobile opt-in data
              with third parties for marketing. We may disclose information only
              where required by law.
            </p>
          </Section>

          <Section title="Message frequency">
            <p>
              Message frequency varies. You will receive messages only when Nixon
              Home Care has an announcement to send; there is no fixed or recurring
              number of messages.
            </p>
          </Section>

          <Section title="Costs">
            <p>
              Message and data rates may apply. Nixon Home Care does not charge for
              the messages, but your mobile carrier&rsquo;s standard messaging and
              data rates may apply depending on your plan.
            </p>
          </Section>

          <Section title="Opting out">
            <p>
              You can cancel the SMS service at any time by replying STOP to any
              message. After you send STOP, we will send a one-time confirmation
              and will not send further messages unless you re-enroll. For help,
              reply HELP or contact us using the details below.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Nixon Home Care Inc.
              <br />
              Phone:{" "}
              <a
                href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                className="text-primary hover:underline"
              >
                {BUSINESS_PHONE}
              </a>
              <br />
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <br />
              Address: {MAILING_ADDRESS}
            </p>
          </Section>

          <p className="mt-12 text-sm text-muted-foreground">
            See also our{" "}
            <Link href="/legal/sms-terms" className="text-primary hover:underline">
              SMS Terms &amp; Conditions
            </Link>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
