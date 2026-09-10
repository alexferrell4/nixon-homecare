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
    title: "A Day at the Nixon Adult Day Center",
    date: "2026-09-09",
    author: "Nixon Home Care",
    excerpt:
      "From the morning van route to the afternoon ride home, here is what a typical day looks like for the adults we care for at our Houston and Shepherd centers.",
    cover: "/hero-bg.jpg",
    body: [
      "Nixon Home Care has been part of daily life in Harris County for more than 26 years. Debora Nixon, RN, started the organization in 1997 to close a gap she kept seeing as a nurse: quality adult day care that low-income families could actually reach, including those covered by Medicaid or Medicare. Today our licensed adult day centers in Houston and Shepherd are open Monday through Friday, 7 a.m. to 5 p.m., serving frail elderly adults and adults with disabilities while their families work or take a needed break.",
      "The day starts on the road. Our seven-van fleet runs door-to-door across the 1,729 square miles of Harris County, so a client's morning begins with a familiar driver and a safe ride to the center. Every driver is certified and licensed, and routes are planned so no one spends longer than necessary in the van. When clients arrive, staff greet each person by name, check in on how they are feeling, and get everyone settled with a mid-morning snack.",
      "Mornings are for staying active and connected. Depending on the day, that means weekly arts and crafts projects, card games, checkers, dominoes, and bingo, reading time with staff assistance, and a weekly Bible study for those who want it. Physical activity is built in too, adapted to each person's ability, along with music and conversation. Birthdays never pass unnoticed — we celebrate them together.",
      "Lunch is a hot, balanced meal prepared in our own kitchen to federal and state nutrition guidelines, with a mid-morning and mid-afternoon snack on either side of it. Staff provide feeding assistance for anyone who needs it, and mealtime doubles as social time.",
      "Some days the group heads out. Past outings have included bowling, museum visits, and trips to the movies, and throughout the year we host holiday celebrations with local community groups, music, and food. These trips and gatherings are one of the things clients look forward to most.",
      "For families, the center is also respite. Each client receives personal care and supervision for at least six hours a day, five days a week, which means a caregiver can hold down a job, keep a medical appointment, or simply rest, knowing their loved one is safe, fed, and engaged.",
      "If you are considering the program for a family member, you are welcome to tour either center. Call us at (713) 633-4700 or email Nixon_homecare@msn.com and we will walk you through eligibility, transportation, and what to bring on a first day.",
    ],
    gallery: [
      {
        src: "/hero-bg.jpg",
        alt: "An older adult smiling with a caregiver",
        caption:
          "Nixon Home Care has served Harris County families for more than 26 years.",
      },
      {
        src: "/blog/a-day-at-the-center/arts-and-crafts.jpg",
        alt: "Clients working on a group arts and crafts project at a table",
        caption:
          "Weekly arts and crafts is a favorite — projects change with the seasons and holidays.",
      },
      {
        src: "/blog/a-day-at-the-center/lunch.jpg",
        alt: "A hot lunch being served in the center's dining room",
        caption:
          "A hot midday meal is prepared in our own kitchen every day, with morning and afternoon snacks.",
      },
      {
        src: "/blog/a-day-at-the-center/transportation.jpg",
        alt: "One of the Nixon Home Care transportation vans",
        caption:
          "Our seven-van fleet brings clients door to door from across Harris County.",
      },
    ],
    // Add a real video once it's uploaded to YouTube/Vimeo:
    // video: { provider: "youtube", id: "XXXXXXXXXXX", title: "A day at the Nixon Adult Day Center" },
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
