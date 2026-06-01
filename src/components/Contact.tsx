"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    name: "Houston Center",
    address: "3719 Lynnfield Street Houston, TX 77016",
    phone: "(713) 633-4700",
    fax: "713-633-4700",
  },
  {
    name: "Shepherd Center",
    address: "931 N. Byrd Avenue, Shepherd, TX 77371",
    phone: "936-628-1200",
    tollFree: "888-900-6081",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-playfair)] mb-6 text-balance">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TO BOOK A CONSULTATION WITH ONE OF OUR DEDICATED STAFF AND TO SEE HOW WE CAN PROVIDE HELP TO YOU OR YOUR LOVED ONES, PLEASE CONTACT US.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-3xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Make Inquiry</h3>
              <p className="text-muted-foreground mb-8">
                If you have any questions or would like more information, our advisers will be happy to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name (required)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Email (required)
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Call Banner */}
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">CALL US TODAY</p>
              <a href="tel:713-633-4700" className="text-4xl font-bold font-[var(--font-playfair)] hover:text-accent transition-colors">
                713-633-4700
              </a>
            </div>

            {/* Location Cards */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h4 className="text-xl font-semibold text-foreground mb-4">{location.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      Tel: {location.phone}
                    </a>
                  </div>
                  {location.fax && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">FAX: {location.fax}</p>
                    </div>
                  )}
                  {location.tollFree && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${location.tollFree}`} className="text-muted-foreground hover:text-primary transition-colors">
                        TOLL FREE: {location.tollFree}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Award Badge */}
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
              <p className="text-sm font-medium text-foreground">
                Listed as one of the <span className="text-primary font-bold">Top Senior Living Communities in Houston</span> by Assisted Living Magazine
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
