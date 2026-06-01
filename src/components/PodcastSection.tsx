"use client";

import { motion } from "framer-motion";
import { Podcast, ExternalLink } from "lucide-react";

export default function PodcastSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Podcast className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Featured Podcast</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6 text-balance">
              The MLK Unity Parade Black Heritage Society Inc. Podcast
            </h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-background/60 text-sm uppercase tracking-wide mb-1">Guests:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Teresa Brewer, President of Black Heritage Society Inc.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Deborah Nixon, Co-Grand Marshal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {"Freddie Jackson, Retired Firefighter & Co-Grand Marshal"}
                  </li>
                </ul>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Stream and Download
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-background/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center p-8">
                <Podcast className="w-24 h-24 text-accent mx-auto mb-6" />
                <p className="text-xl font-semibold">Listen to the Episode</p>
                <p className="text-background/60 text-sm mt-2">Available on all major platforms</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
