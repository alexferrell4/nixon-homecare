"use client";

import { motion } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content //Enjoy a vibrant life of wellness and healthy longevity for your loved ones*/}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium mb-4 tracking-widest uppercase text-sm"
            >
              Senior Living in Houston
            </motion.p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6 font-serif text-balance">
              Helping Texans and their families live better lives
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
             
              Enjoy a vibrant life of wellness and healthy longevity for your loved ones.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Contact Us
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-colors text-center"
              >
                Our Services
              </motion.a>
            </div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 inline-flex items-center gap-4 bg-black/40 px-6 py-4 shadow-lg border border-white/10"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-white">4.9 Rating</p>
                <p className="text-sm text-white/70">Powered By Google</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur">
                  <div className="text-center p-6">
                    <p className="text-5xl font-normal text-white font-serif">26+</p>
                    <p className="text-sm text-white/70 mt-1">Years of Service</p>
                  </div>
                </div>

                <div className="h-64 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur">
                  <div className="text-center p-6">
                    <p className="text-4xl font-normal text-white font-serif">1,729</p>
                    <p className="text-sm text-white/70 mt-1">
                      Square Miles Served in Harris County
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="h-64 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur">
                  <div className="text-center p-6">
                    <p className="text-5xl font-normal text-white font-serif">7</p>
                    <p className="text-sm text-white/70 mt-1">Van Fleet for Transportation</p>
                  </div>
                </div>

                <div className="h-48 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur">
                  <div className="text-center p-6">
                    <p className="text-4xl font-normal text-white font-serif">2</p>
                    <p className="text-sm text-white/70 mt-1">Locations in Texas</p>
                  </div>
                </div>

             <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur relative">
  <img
    src="/your-image.png"
    alt="Locations"
    className="w-full h-auto object-contain"
  />
</div>


              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}