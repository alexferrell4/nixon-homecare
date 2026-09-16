import type { Metadata } from "next";
import {
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Brain,
  HeartPulse,
  Users,
  GraduationCap,
  ClipboardCheck,
  ListChecks,
  UsersRound,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nixon Counseling Services | Nixon Home Care",
  description:
    "Nixon Counseling Services offers compassionate behavioral health services for adults, children, and families in Houston, TX — individual and family therapy, psychosocial rehabilitation, and case management.",
};

const services = [
  {
    icon: HeartPulse,
    title: "Psychosocial Rehabilitation",
    description: "Support for individuals living with severe or persistent mental illness.",
  },
  {
    icon: Brain,
    title: "Adult Behavioral Health",
    description: "Services addressing mental health conditions and substance use.",
  },
  {
    icon: Users,
    title: "Child & Adolescent Support",
    description: "Emotional and behavioral support for children and teens.",
  },
  {
    icon: GraduationCap,
    title: "School Advocacy",
    description: "Guidance through the IEP and 504 process.",
  },
  {
    icon: ClipboardCheck,
    title: "Behavioral Health Assessments",
    description: "Assessments to identify needs and guide a plan of care.",
  },
  {
    icon: ListChecks,
    title: "Mental Health Skills Training",
    description: "Skills training for individuals with serious mental illness.",
  },
  {
    icon: UsersRound,
    title: "Individual, Family & Case Management",
    description: "One-on-one therapy, family counseling, and ongoing case management.",
  },
];

const insurance = ["Molina Healthcare", "Superior HealthPlan", "Self-Pay"];

export default function CounselingServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Hope. Healing. Growth. Together We Can.
            </p>
            <h1 className="mb-6 font-serif text-4xl font-normal text-balance md:text-5xl">
              Nixon Counseling Services
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Compassionate behavioral health services for adults, children, and families
              throughout Houston, in a safe, supportive environment. Compassionate care.
              Stronger minds. Brighter futures.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-center font-serif text-2xl font-normal text-foreground md:text-3xl">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-6 font-serif text-2xl font-normal text-foreground md:text-3xl">
              Insurance Accepted
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {insurance.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-5 py-2 font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-serif text-2xl font-normal text-balance text-foreground md:text-3xl">
              Reach Out to Our Team
            </h2>
            <div className="mb-8 flex flex-col items-center gap-2 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                3719 Lynnfield St., Houston, TX 77016
              </span>
              <a
                href="mailto:tpersley.nixoncounseling@gmail.com"
                className="flex items-center gap-2 hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0" />
                tpersley.nixoncounseling@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://nixoncounselingservices.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Visit nixoncounselingservices.org
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="tel:713-419-2653"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" />
                (713) 419-2653
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
