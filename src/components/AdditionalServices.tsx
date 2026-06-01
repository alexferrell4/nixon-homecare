"use client";

import { motion } from "framer-motion";
import { Utensils, Truck, Heart, HandHeart } from "lucide-react";

const additionalServices = [
  {
    icon: Utensils,
    title: "Nutritious Congregate Meals",
    description: "We prepare and serve healthy congregate meals daily that include one hot noon meal with two ounces of meat, 1/2 cup of fruit and/or vegetables, one cup of milk and two servings of bread. We serve mid-morning and mid-afternoon snacks between 11 a.m. and 1 p.m. Clients are provided with feeding assistance (i.e. spoon feeding, bread buttering and milk opening) when necessary. All meals are prepared at our facilities and served according to federal and state nutrition and food handling guidelines and in accordance with doctor-ordered dietary restrictions.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Our seven-van fleet provides clients with door-to-door round trip transportation to and from our centers between 7 a.m. and 5 p.m. weekly and to and from social activities and appointments. We serve the entire 1,729 square mile Harris County, Texas region and all drivers are certified and licensed to ensure the safety of our clients during transport regardless of their level of disability.",
  },
  {
    icon: Heart,
    title: "Volunteer With Us!",
    description: "We are actively seeking volunteers. Make sure to send us a message below if you are interested in making a difference. Please message us in order to volunteer with us.",
  },
  {
    icon: HandHeart,
    title: "Donate to Nixon Home Care",
    description: "If you would like to make a contribution to our non-profit organization simply email us or contact us through the form below.",
  },
];

export default function AdditionalServices() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
