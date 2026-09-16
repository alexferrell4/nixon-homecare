import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Phone,
  MapPin,
  ShieldCheck,
  Trees,
  Users2,
  Car,
  BellRing,
  ArrowUpDown,
  Utensils,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import type { BlogImage } from "@/content/blog";

export const metadata: Metadata = {
  title: "Nixon Signature Estates | Nixon Home Care",
  description:
    "Nixon Signature Estates is an intentional living community bringing Nixon Assisted Living and Nixon Independent Living together in Houston, TX. Now leasing.",
};

const buildingAmenities = [
  { icon: ArrowUpDown, label: "Elevator access" },
  { icon: ShieldCheck, label: "Secure controlled entry" },
  { icon: Trees, label: "Landscaped grounds" },
  { icon: Users2, label: "Community lounge" },
  { icon: Car, label: "On-site parking" },
  { icon: BellRing, label: "Emergency response system" },
];

const suiteFeatures = [
  { icon: Utensils, label: "Chef-prepared meals" },
  { icon: Truck, label: "Resident transportation" },
  { icon: Sparkles, label: "Housekeeping" },
];

const gallery: BlogImage[] = [
  {
    src: "/blog/nse-soft-opening-carnival/estates.jpg",
    alt: "Evening rendering of Nixon Signature Estates: a three-story building with the lit NSE sign on the facade, a landscaped courtyard, and residents walking the path",
    caption: "Nixon Signature Estates — a three-story, 17-unit community.",
  },
  {
    src: "/blog/nse-soft-opening-carnival/demo-bedroom.jpg",
    alt: "A furnished bedroom and sitting area in a Nixon Signature Estates suite",
    caption: "A private living and sleeping area in the furnished demo suite.",
  },
  {
    src: "/blog/nse-soft-opening-carnival/demo-kitchenette.jpg",
    alt: "A kitchenette with dark cabinets, sink, and compact refrigerator in a suite",
    caption: "Every suite has its own kitchenette and full bathroom.",
  },
];

export default function SignatureEstatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url('/blog/nse-soft-opening-carnival/estates.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
          <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-16">
            <span className="mb-6 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Now Leasing
            </span>
            <h1 className="mb-4 max-w-2xl font-serif text-4xl font-normal text-balance text-white md:text-5xl lg:text-6xl">
              Nixon Signature Estates
            </h1>
            <p className="max-w-xl text-lg text-white/85">
              An intentional living community bringing Nixon Assisted Living and Nixon
              Independent Living together, in Houston, Texas.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nixon Signature Estates is a new three-story, 17-unit community where residents
              live independently with support close at hand. It brings Nixon Assisted Living of
              Houston and Nixon Independent Living together under one roof, so families have a
              single place to call home as needs change over time. Leasing is open now, with a
              grand opening planned for fall 2026.
            </p>
          </div>
        </section>

        {/* Suite features */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-center font-serif text-2xl font-normal text-foreground md:text-3xl">
              Every Suite Includes
            </h2>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
              {suiteFeatures.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="mb-10 mt-16 text-center font-serif text-2xl font-normal text-foreground md:text-3xl">
              Building Amenities
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {buildingAmenities.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-center font-serif text-2xl font-normal text-foreground md:text-3xl">
              Take a Look Inside
            </h2>
            <Carousel images={gallery} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-serif text-2xl font-normal text-balance md:text-3xl">
              Ready to See It for Yourself?
            </h2>
            <p className="mb-8 flex items-center justify-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4 shrink-0" />
              6710 Bleker St., Houston, TX 77016
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://nixon-estates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Visit nixon-estates.com
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="tel:713-419-2653"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                (713) 419-2653
              </a>
            </div>
            <Link
              href="/blog/nse-soft-opening-carnival"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:underline"
            >
              Read about the Soft Opening Carnival
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
