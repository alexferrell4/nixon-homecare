"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Importance of Self-Care for Seniors: How Adult Day Care and Home Care Support Healthy Living",
    excerpt: "Prioritizing Self-Care at Every Stage of Life Self-care is more than relaxation or taking a break — it is an essential part of maintaining overall well-being...",
    date: "May 7, 2026",
  },
  {
    title: "What to Do When Living at Home Is No Longer a Safe Option for Your Loved One",
    excerpt: "Caring for an aging parent or loved one is one of the most meaningful responsibilities you can undertake. But there comes a time when difficult decisions must be made...",
    date: "April 22, 2025",
  },
  {
    title: "Feeling Great Inside and Out: A Guide for World Health Day From Nixon Home Care",
    excerpt: "Happy World Health Day from all of us at Nixon Home Care! Today, we want to chat about health—not just physical health, but holistic wellness...",
    date: "April 7, 2024",
  },
  {
    title: "Celebrating Black History Month: A Tribute to Excellence and Resilience",
    excerpt: "Nixon Home Care is honoring the Legacy and Achievements of African Americans. February marks Black History Month, a period dedicated to recognizing contributions...",
    date: "February 6, 2024",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Latest News</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-playfair)] mb-6 text-balance">
            Latest Blog Posts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
