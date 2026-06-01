"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground font-serif mb-8 text-balance">
              About Nixon Home Care, Inc.
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                NIXON HOME CARE, INC. - NIXON ADULT DAY CARE, NIXON INDEPENDENT LIVING, NIXON ASSISTED LIVING CENTERS
              </p>
              <p>
                Nixon Home Care, Inc. specializes in providing hard-to-serve impaired adults and the frail elderly with transportation, day supervision, social activities, and healthy meals while their caregivers work or take much-needed respite.
              </p>
              <p>
                We also offer caregivers the option of allowing their loved ones to stay at home as opposed to costly institutionalization. We are a much-needed adult daycare facility in Houston.
              </p>
              <p>
                From inception, Debora Nixon vigorously pursued addressing the gap in services for quality adult daycare services for impaired adults while their caregivers work. Especially low-income individuals eligible for Medicare or Medicaid.
              </p>
              <p className="text-lg font-semibold text-accent">
                Take action today, our doors are always open.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary rounded-lg p-8 lg:p-12">
              <h3 className="text-2xl font-normal text-foreground font-serif mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {"At Nixon Home Care, Inc., our mission is to enrich the lives of those we serve by offering compassionate, personalized care in supportive, home-like environments."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {"We've created a continuum of alternative living options designed to meet each individual's unique needs and preferences."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {"Whether it's assisted living, independent living, or adult day care, we are dedicated to helping every person feel safe, valued, and at home—wherever they choose to be."}
              </p>
            </div>

            {/* Business Structure Note */}
            <div className="mt-8 bg-accent/10 border border-accent/20 rounded-lg p-6">
              <p className="text-sm font-medium text-foreground mb-3">
                Nixon Home Care Inc. has a dual business structure:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-accent mb-1">For Profit Entities:</p>
                  <p className="text-muted-foreground">Nixon Assisted Living & Nixon Independent Living</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-1">Non-Profit 501 C3 Entities:</p>
                  <p className="text-muted-foreground">Nixon Adult Day Care of Houston & Shepherd Texas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
