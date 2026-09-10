// Blog content lives here in the repo. To publish a new post, add an entry to
// `posts` below and commit. Photos go in `public/blog/<slug>/` and are referenced
// by path (e.g. "/blog/my-post/photo-1.jpg"). Video is embedded from YouTube or
// Vimeo — never checked into the repo.

export type BlogImage = {
  /** Path under /public, e.g. "/blog/summer-picnic/1.jpg" */
  src: string;
  alt: string;
  caption?: string;
};

export type BlogVideo = {
  provider: "youtube" | "vimeo";
  /** The video ID only, not the full URL */
  id: string;
  title?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-09-10" */
  date: string;
  author: string;
  excerpt: string;
  /** Card / header image path under /public */
  cover?: string;
  /** Body paragraphs, rendered in order */
  body: string[];
  /** Optional photo carousel */
  gallery?: BlogImage[];
  /** Optional embedded video */
  video?: BlogVideo;
};

export const posts: BlogPost[] = [
  {
    slug: "welcome-to-the-nixon-blog",
    title: "Welcome to the Nixon Home Care Blog",
    date: "2026-09-10",
    author: "Nixon Home Care",
    excerpt:
      "We're starting a place to keep our families updated on what's happening at Nixon — events, milestones, photos, and news from our centers.",
    cover: "/hero-bg.jpg",
    body: [
      "For more than 26 years, Nixon Home Care has been part of daily life for Texans and their families across Harris County. Until now, most of what happens day to day at our centers has stayed within our walls. This blog changes that.",
      "Here we'll share photos from activities and celebrations, updates on our programs and transportation, seasonal reminders, and the small moments that make our community what it is. Our goal is simple: help the families who trust us with their loved ones feel closer to what those days look like.",
      "Check back regularly, and if there's something you'd like to see covered, let us know the next time you're at the center or on the phone with our team.",
    ],
  },
  {
    slug: "a-day-at-the-center",
    title: "A Day at the Center (Sample Post)",
    date: "2026-09-08",
    author: "Nixon Home Care",
    excerpt:
      "A placeholder post showing how photos and video appear. Replace the images in public/blog/a-day-at-the-center/ and swap in a real video link.",
    cover: "/hero-bg.jpg",
    body: [
      "This is a sample post so you can see the layout before real content is ready. The paragraphs here are placeholder text — replace them with a short write-up of the day or event you're covering.",
      "Below is the photo carousel. Drop your photos into public/blog/a-day-at-the-center/ and update the gallery list in src/content/blog.ts. Any images that aren't uploaded yet show a labeled placeholder tile instead of a broken image.",
      "Underneath the photos is a video block. Upload the video to YouTube or Vimeo (it can be unlisted), then set the provider and ID in the post's `video` field.",
    ],
    gallery: [
      {
        src: "/hero-bg.jpg",
        alt: "Nixon Home Care center exterior",
        caption: "This slide uses an existing site photo so you can see the carousel working.",
      },
      {
        src: "/blog/a-day-at-the-center/2.jpg",
        alt: "Placeholder — activity room",
        caption: "Replace: public/blog/a-day-at-the-center/2.jpg",
      },
      {
        src: "/blog/a-day-at-the-center/3.jpg",
        alt: "Placeholder — group activity",
        caption: "Replace: public/blog/a-day-at-the-center/3.jpg",
      },
      {
        src: "/blog/a-day-at-the-center/4.jpg",
        alt: "Placeholder — transportation van",
        caption: "Replace: public/blog/a-day-at-the-center/4.jpg",
      },
    ],
    // Example — uncomment and use a real ID once the video is uploaded:
    // video: { provider: "youtube", id: "XXXXXXXXXXX", title: "A day at the center" },
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
