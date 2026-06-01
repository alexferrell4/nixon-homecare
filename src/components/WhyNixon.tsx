"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function WhyNixon() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif mb-8 text-balance">
              Why Consider Nixon?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              At Nixon Home Care, Inc., our mission is to enrich the lives of those we serve by offering compassionate, personalized care in supportive, home-like environments. We’ve created a continuum of alternative living options designed to meet each individual’s unique needs and preferences. Whether it’s assisted living, independent living, or adult day care, we are dedicated to helping every person feel safe, valued, and at home—wherever they choose to be. Visit our website to learn more about how we’re committed to your care and comfort.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-foreground/10 px-6 py-3 rounded-full">
                <span className="font-semibold">Compassionate Care</span>
              </div>
              <div className="bg-primary-foreground/10 px-6 py-3 rounded-full">
                <span className="font-semibold">Experienced Staff</span>
              </div>
              <div className="bg-primary-foreground/10 px-6 py-3 rounded-full">
                <span className="font-semibold">Home-Like Environment</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
