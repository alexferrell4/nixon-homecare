import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Nixon Home Care",
  description:
    "News, events, photos, and updates from Nixon Home Care in Houston, Texas.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Latest News
            </p>
            <h1 className="mb-6 font-serif text-3xl font-normal text-foreground text-balance md:text-4xl lg:text-5xl">
              The Nixon Home Care Blog
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Updates, events, and photos from our centers and the families we
              serve across Harris County.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
              >
                {post.cover ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <h2 className="mb-4 text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
