"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Home, Users, Sun, Plus, Minus } from "lucide-react";

const services = [
  {
    id: "assisted-living",
    icon: Home,
    title: "Assisted Living",
    shortDesc: "An assisted living facility is a senior living option for those with minimal needs for assistance with daily living and care.",
    fullDesc: "Nixon Assisted Living unlike Nixon Adult Care is a for-profit entity accepting clients via private pay and approved medical insurance providers. Our skilled personal care attendants assist clients with performing activities of daily living which includes dressing, meal support, grooming, bathing, toileting, and self-administration of medications. We also provide physical rehabilitative services per physician orders such as movement, balance and flexibility exercises. Tours are available upon request. Please feel free to call for an appointment or additional information: 713-419-2653 or email: Nixon_homecareinc@msn.com",
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
    title: "Adult Day Care",
    shortDesc: "Normally, adult day care is used to relieve the caregiver of his or her duties for the day while ensuring that the care recipient will receive quality care.",
    fullDesc: "We provide adult supervision and social activities including physical activities based on each client's physical and mental capabilities, weekly arts and crafts, games such as cards, checkers, bingo and dominoes, books and assistance with reading, weekly Bible study and community field trips as well as birthday and holiday celebrations.",
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
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">What We Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-playfair)] mb-6 text-balance">
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
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 hidden sm:block">{service.shortDesc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {expandedId === service.id ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
