"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Phone } from "lucide-react";

export default function SignatureEstates() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Now Leasing
            </span>
            <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">
              An Intentional Living Community
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif mb-6 text-balance">
              Nixon Signature Estates
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Nixon Signature Estates brings Nixon Assisted Living and Nixon Independent Living
              together under one roof — a new three-story community where residents live
              independently with support close at hand. Every suite includes chef-prepared meals,
              resident transportation, and housekeeping, with elevator access, secure controlled
              entry, a community lounge, landscaped grounds, and an emergency response system
              throughout the building.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://nixon-estates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Visit nixon-estates.com
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:713-419-2653"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (713) 419-2653
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="/blog/nse-soft-opening-carnival/estates.jpg"
              alt="Evening rendering of Nixon Signature Estates, a three-story living community with the NSE sign lit on the facade"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
