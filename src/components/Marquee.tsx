"use client";

import { motion } from "framer-motion";

const services = [
  "Assisted Living",
  "Independent Living", 
  "Adult Day Care",
  "Transportation",
  "Nutritious Meals",
  "Social Activities",
  "Respite Care",
  "Personal Care",
];

export default function Marquee() {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...services, ...services, ...services, ...services].map((service, i) => (
          <span key={i} className="mx-8 text-primary-foreground font-medium flex items-center gap-4">
            {service}
            <span className="text-accent">+++</span>
          </span>
        ))}
      </div>
    </div>
  );
}
