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
              Debora Nixon explains why you should consider Nixon Home Care for your loved ones. With decades of experience and a genuine passion for caring, we provide a home away from home for those who need it most.
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
            <div className="aspect-video bg-primary-foreground/10 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-accent rounded-full flex items-center justify-center relative z-10 shadow-xl"
              >
                <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
              </motion.button>
              <p className="absolute bottom-6 left-6 text-sm font-medium">Watch Debora Nixon&apos;s Message</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
