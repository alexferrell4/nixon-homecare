"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "I can tell that Jason loves coming here. He cannot communicate verbally. But, he has learned to show us his excitement and joy the closer we get to the Nixon Home Care, Inc. Adult Day Care Center door.",
    author: "B. Bowen",
    role: "Caregiver",
    title: "...Loves Coming Here",
  },
  {
    quote: "I like coming to Nixon because it's fun! And, I like the food. The food is real good.",
    author: "Betty Taylor",
    role: "Client",
    title: "The food is real good!",
  },
  {
    quote: "My brother and I have been on this lifelong journey together as we navigate his special needs to maximize his opportunity and potential towards a quality life. Growing up, HOME was a very special place for he and I. We felt love and inclusion. We were safe and secure. We were important. At Nixon's, our souls experience HOME.",
    author: "Myra Mitchell",
    role: "Family Member",
    title: "Love and INCLUSION.",
  },
];

const googleReviews = [
  { text: "Great place to work. I love working with the clients", date: "Aug 2023" },
  { text: "A place where your loved one will feel at home, and treated like family.", date: "Jun 2023" },
  { text: "My uncle and grandma who passed away went here for a long time. My uncle still attends the daycare center in the daytime while we work..they have activities and field trips for the residents...", date: "Jul 2022" },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground font-serif mb-6 text-balance">
            Our Testimonials
          </h2>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border relative group hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <h3 className="text-xl font-semibold text-accent mb-4 font-serif">
                {`"${testimonial.title}"`}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg border border-border p-8"
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-bold text-2xl text-foreground">4.9</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">powered by Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{review.text}</p>
                <p className="text-xs text-muted-foreground/60">{review.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
