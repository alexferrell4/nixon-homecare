import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import VideoEmbed from "@/components/VideoEmbed";
import { getAllPosts, getPost, formatDate } from "@/content/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found | Nixon Home Care" };
  return {
    title: `${post.title} | Nixon Home Care`,
    description: post.excerpt,
    openGraph: post.cover
      ? { title: post.title, description: post.excerpt, images: [post.cover] }
      : { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>

          <header className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
              <span aria-hidden="true">&middot;</span>
              <span>{post.author}</span>
            </div>
            <h1 className="font-serif text-3xl font-normal text-foreground text-balance md:text-4xl">
              {post.title}
            </h1>
          </header>

          {post.cover ? (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={post.cover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {post.registration ? (
            <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
              <a
                href={post.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {post.registration.label ?? "Register"}
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                {post.registration.url.replace(/^https?:\/\/(www\.)?/, "")}
              </p>
              {post.registration.note ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  {post.registration.note}
                </p>
              ) : null}
            </div>
          ) : null}

          {post.flyers && post.flyers.length > 0
            ? post.flyers.map((flyer, i) => (
                <figure key={flyer.src} className={i === 0 ? "mt-12" : "mt-8"}>
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    width={1000}
                    height={1500}
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="mx-auto h-auto w-full max-w-xl rounded-lg border border-border"
                  />
                  {flyer.caption ? (
                    <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                      {flyer.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))
            : null}

          {post.gallery && post.gallery.length > 0 ? (
            <section className="mt-12" aria-label="Photos">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Photos
              </h2>
              <Carousel images={post.gallery} />

              {post.albumUrl ? (
                <a
                  href={post.albumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {post.albumLabel ?? "View the full photo album"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </section>
          ) : null}

          {post.video ? (
            <section className="mt-12" aria-label="Video">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Video
              </h2>
              <VideoEmbed video={post.video} />
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}
