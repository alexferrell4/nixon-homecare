import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
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

          {post.gallery && post.gallery.length > 0 ? (
            <section className="mt-12" aria-label="Photos">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Photos
              </h2>
              <Carousel images={post.gallery} />
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
