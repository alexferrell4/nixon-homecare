"use client";

import { motion } from "framer-motion";
import { Brain, Users, GraduationCap, ClipboardCheck, ExternalLink, Phone } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Adult Behavioral Health",
    description: "Support for mental health conditions and substance use.",
  },
  {
    icon: Users,
    title: "Individual & Family Counseling",
    description: "Therapy and case management for individuals and families.",
  },
  {
    icon: GraduationCap,
    title: "Child & School Advocacy",
    description: "Emotional and behavioral support, plus IEP/504 advocacy.",
  },
  {
    icon: ClipboardCheck,
    title: "Behavioral Health Assessments",
    description: "Assessments and mental health skills training.",
  },
];

export default function CounselingServices() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">
              Hope. Healing. Growth.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif mb-6 text-foreground text-balance">
              Nixon Counseling Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Compassionate behavioral health services for adults, children, and families
              throughout Houston. Nixon Counseling Services offers individual and family therapy,
              psychosocial rehabilitation, and case management, in a safe, supportive environment.
              Molina Healthcare, Superior HealthPlan, and self-pay are accepted.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://nixoncounselingservices.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Visit nixoncounselingservices.org
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:713-419-2653"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (713) 419-2653
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
