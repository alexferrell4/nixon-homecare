"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Home, Users, Sun, Building2, Brain, Plus, Minus, ArrowRight } from "lucide-react";

const services = [
  {
    id: "assisted-living",
    icon: Home,
    title: "Assisted Living",
    shortDesc: "An assisted living facility is a senior living option for those with minimal needs for assistance with daily living and care.",
    fullDesc: "Nixon Assisted Living unlike Nixon Adult Day Care Center is a for-profit entity accepting clients via private pay and approved medical insurance providers. Our skilled personal care attendants assist clients with performing activities of daily living which includes dressing, meal support, grooming, bathing, toileting, and self-administration of medications. We also provide physical rehabilitative services per physician orders such as movement, balance and flexibility exercises. Tours are available upon request. Please feel free to call for an appointment or additional information: 713-419-2653 or email: Nixon_homecareinc@msn.com",
  },
  {
    id: "independent-living",
    icon: Users,
    title: "Independent Living",
    shortDesc: "Independent living is ideal for individuals who can still live independently but enjoy having access to assistance when needed.",
    fullDesc: "Nixon Independent Living, located in Northeast Houston, is a place where seniors can live independently, carving out their lives without the stress of living or juggling the various tasks that accompany living alone in a traditional home setting or residence. This is a for-profit service company where our residents enjoy private apartments with classic comfort, amenities, and engaging activities. We provide services to all eligible clients, which include our veteran community.",
  },
  {
    id: "adult-day-care",
    icon: Sun,
    title: "Adult Day Care Center",
    shortDesc: "Normally, adult day care is used to relieve the caregiver of his or her duties for the day while ensuring that the care recipient will receive quality care.",
    fullDesc: "Open Monday-Friday from 7:00 Am to 5:00 Pm and Closed on weekends, we provide adult supervision and social activities including physical activities based on each client's physical and mental capabilities, weekly arts and crafts, games such as cards, checkers, bingo and dominoes, books and assistance with reading, weekly Bible study and community field trips as well as birthday and holiday celebrations.",
  },
  {
    id: "signature-estates",
    icon: Building2,
    title: "Nixon Signature Estates",
    shortDesc: "Now leasing: an intentional living community bringing Nixon Assisted Living and Nixon Independent Living together in one place.",
    fullDesc: "Nixon Signature Estates is a new three-story, 17-unit community where residents live independently with support close at hand. Every suite includes chef-prepared meals, resident transportation, and housekeeping, with elevator access, secure controlled entry, a community lounge, landscaped grounds, and an emergency response system throughout the building. Leasing is open now, with a grand opening planned for fall 2026.",
    href: "/signature-estates",
    linkLabel: "Learn more & lease at nixon-estates.com",
  },
  {
    id: "counseling-services",
    icon: Brain,
    title: "Nixon Counseling Services",
    shortDesc: "Compassionate behavioral health services for adults, children, and families throughout Houston.",
    fullDesc: "Nixon Counseling Services offers psychosocial rehabilitation, adult behavioral health, child and adolescent support, school advocacy, behavioral health assessments, mental health skills training, and individual, family, and case management services. Molina Healthcare, Superior HealthPlan, and self-pay are accepted.",
    href: "/counseling-services",
    linkLabel: "Learn more at nixoncounselingservices.org",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">What We Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground font-serif mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"At Nixon Home Care, Inc., we're dedicated to enriching lives through compassionate care and personalized living options. From assisted and independent living to adult day care, we provide safe, supportive environments where individuals feel valued, comfortable, and at home."}
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 hidden sm:block">{service.shortDesc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  {expandedId === service.id ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent" />
                  )}
                </div>
              </button>
              
              <div
                className={`accordion-content ${
                  expandedId === service.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-muted-foreground leading-relaxed sm:hidden mb-4">{service.shortDesc}</p>
                  <p className="text-muted-foreground leading-relaxed">{service.fullDesc}</p>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      {service.linkLabel ?? "Learn more"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
