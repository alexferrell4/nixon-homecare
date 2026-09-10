"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/content/blog";

const blogPosts = getAllPosts().slice(0, 4);

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
          <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">Latest News</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground font-serif mb-6 text-balance">
            Latest Blog Posts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
