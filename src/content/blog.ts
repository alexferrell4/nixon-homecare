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
  /** Optional full-size image (e.g. an event flyer), shown uncropped */
  flyer?: BlogImage;
  /** Optional photo carousel */
  gallery?: BlogImage[];
  /** Optional embedded video */
  video?: BlogVideo;
};

export const posts: BlogPost[] = [
  {
    slug: "compudopt-computer-giveaway",
    title: "Free Computers for the Community: Nixon Home Care Partners with Compudopt",
    date: "2026-09-10",
    author: "Nixon Home Care",
    excerpt:
      "Join us Thursday, September 17 for a Community Computer Giveaway with Compudopt — free computers for eligible neighbors, followed by a free 10-week digital literacy class.",
    cover: "/blog/compudopt-computer-giveaway/cover.jpg",
    body: [
      "Nixon Home Care is teaming up with Compudopt, a Houston nonprofit working to bridge the digital divide, for a Community Computer Giveaway. The goal is simple: help our neighbors get connected, with the tools and the know-how to make it count.",
      "The giveaway is Thursday, September 17, 2026, from 10:00 a.m. to 12:00 p.m. at 6803 Bleker St., Houston, TX 77019. Free computers will be available for eligible community members.",
      "Compudopt provides free computers and technology education to families across Houston, generally serving households that don't already have a working computer at home. Visit compudopt.org/houston for current eligibility details and to register.",
      "It doesn't stop with the hardware. Beginning the following Wednesday, Compudopt will host a free 10-week Computer and Digital Literacy class — every Wednesday from 10:00 a.m. to 12:00 p.m. at 6800 Bleker St., Houston, TX 77016. The class covers the real skills that turn a computer into an opportunity.",
      "More than just computers: real skills, bigger opportunities, and a stronger community. To learn more, call Nixon Home Care at (713) 633-4700 or email Nixon_homecare@msn.com.",
      "The full flyer is below — please share it with anyone who could use it.",
    ],
    flyer: {
      src: "/blog/compudopt-computer-giveaway/flyer.jpg",
      alt: "Nixon Home Care and Compudopt Community Computer Giveaway flyer: Thursday 9/17/26, 10 a.m. to 12 p.m., 6803 Bleker St., Houston, TX 77019. Free computers for eligible community members, followed by a free 10-week digital literacy class every Wednesday at 6800 Bleker St., Houston, TX 77016.",
    },
  },
  {
    slug: "nixon-26th-birthday-brunch",
    title: "Celebrating 26 Years: The Nixon Home Care Birthday Brunch",
    date: "2026-09-08",
    author: "Nixon Home Care",
    excerpt:
      "On August 29, family, staff, supporters, and friends gathered in a Houston ballroom to mark 26 years of Nixon Home Care — with proclamations, live music, and a fund-a-need for the centers.",
    cover: "/blog/nixon-26th-birthday-brunch/brunch-01.jpg",
    body: [
      "On August 29, 2026, family, staff, supporters, and friends of Nixon Home Care filled a Houston ballroom to celebrate the organization's 26th birthday. Debora Nixon, RN, founded Nixon Home Care in 2000 to put quality adult day care within reach of the families who need it most, and the brunch was a chance to mark how far that work has come.",
      "Guests were seated for a plated brunch among fresh flowers and Southern iced tea while a saxophonist played. Ms. Nixon and members of the team offered remarks, and officials presented proclamations recognizing Nixon Home Care's more than two decades of service across Harris County.",
      "The program also made time to honor the people behind the work — longtime clients and their families, staff, and community partners — each recognized with a gift and a warm round of applause.",
      "A fund-a-need appeal invited guests to give toward everyday needs at the centers: transportation, meals, and activities. Paddles went up all over the room.",
      "Our thanks to everyone who came out and gave. Twenty-six years in, the mission hasn't changed: helping Texans and their families live better lives.",
      "A few moments from the afternoon are below. We'll add a short video from the brunch once it's posted online.",
    ],
    gallery: [
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-01.jpg",
        alt: "A full ballroom of seated guests applauding",
        caption:
          "The ballroom on August 29, set for Nixon Home Care's 26th-birthday brunch.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-02.jpg",
        alt: "An elegant ballroom with round tables set and chandeliers overhead",
        caption: "Tables set and waiting before doors opened.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-03.jpg",
        alt: "A floral centerpiece on a set table",
        caption: "Fresh flowers on every table.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-04.jpg",
        alt: "Gift bags lined up on a skirted table",
        caption: "Gifts ready for the honorees.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-05.jpg",
        alt: "A large group of guests posing together",
        caption: "Family, friends, and staff of Nixon Home Care.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-06.jpg",
        alt: "A group of women posing for a photo with Debora Nixon seated at center",
        caption:
          "Guests gather for a group photo, with Debora Nixon seated at center.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-07.jpg",
        alt: "Debora Nixon in a cream suit",
        caption:
          "Founder Debora Nixon, RN, who started Nixon Home Care in 2000.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-08.jpg",
        alt: "A musician playing saxophone on the dance floor",
        caption: "Live saxophone during the reception.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-09.jpg",
        alt: "Debora Nixon speaking at a podium",
        caption: "Debora Nixon addresses the room.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-10.jpg",
        alt: "Debora Nixon accepting a proclamation folder from an official",
        caption:
          "Accepting a proclamation recognizing 26 years of service.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-11.jpg",
        alt: "Debora Nixon receiving a framed proclamation from an official",
        caption: "Another proclamation presented during the program.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-12.jpg",
        alt: "A group on stage honoring guests with gifts",
        caption: "Honoring longtime members of the Nixon Home Care family.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-13.jpg",
        alt: "Two women embracing while holding a gift",
        caption: "A warm moment during the presentations.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-14.jpg",
        alt: "A guest raising a bidding paddle",
        caption: "A guest takes part in the fund-a-need.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-15.jpg",
        alt: "Two guests raising a bidding paddle together",
        caption: "Paddles up for a good cause.",
      },
      {
        src: "/blog/nixon-26th-birthday-brunch/brunch-16.jpg",
        alt: "Guests seated at tables applauding",
        caption: "Guests applaud during the program.",
      },
    ],
    // Add the brunch video once it's uploaded to YouTube/Vimeo (source file: Brunch_1.mp4):
    // video: { provider: "youtube", id: "XXXXXXXXXXX", title: "Nixon Home Care 26th birthday brunch" },
  },
  {
    slug: "welcome-to-the-nixon-blog",
    title: "Welcome to the Nixon Home Care Blog",
    date: "2026-09-02",
    author: "Nixon Home Care",
    excerpt:
      "We're starting a place to keep our families updated on what's happening at Nixon — events, milestones, photos, and news from our centers.",
    cover: "/hero-bg.jpg",
    body: [
      "For 26 years, Nixon Home Care has been part of daily life for Texans and their families across Harris County. Until now, most of what happens day to day at our centers has stayed within our walls. This blog changes that.",
      "Here we'll share photos from activities and celebrations, updates on our programs and transportation, seasonal reminders, and the small moments that make our community what it is. Our goal is simple: help the families who trust us with their loved ones feel closer to what those days look like.",
      "Check back regularly, and if there's something you'd like to see covered, let us know the next time you're at the center or on the phone with our team.",
    ],
  },
  {
    slug: "a-day-at-the-center",
    title: "A Day at the Nixon Adult Day Center",
    date: "2026-09-05",
    author: "Nixon Home Care",
    excerpt:
      "From the morning van route to the afternoon ride home, here is what a typical day looks like for the adults we care for at our Houston and Shepherd centers.",
    cover: "/hero-bg.jpg",
    body: [
      "Nixon Home Care has been part of daily life in Harris County for more than two decades. Debora Nixon, RN, started the organization in 2000 to close a gap she kept seeing as a nurse: quality adult day care that low-income families could actually reach, including those covered by Medicaid or Medicare. Today our licensed adult day centers in Houston and Shepherd are open Monday through Friday, 7 a.m. to 5 p.m., serving frail elderly adults and adults with disabilities while their families work or take a needed break.",
      "The day starts on the road. Our seven-van fleet runs door-to-door across the 1,729 square miles of Harris County, so a client's morning begins with a familiar driver and a safe ride to the center. Every driver is certified and licensed, and routes are planned so no one spends longer than necessary in the van. When clients arrive, staff greet each person by name, check in on how they are feeling, and get everyone settled with a mid-morning snack.",
      "Mornings are for staying active and connected. Depending on the day, that means weekly arts and crafts projects, card games, checkers, dominoes, and bingo, and reading time with staff assistance. Physical activity is built in too, adapted to each person's ability, along with music and conversation. Birthdays never pass unnoticed — we celebrate them together.",
      "Lunch is a hot, balanced meal prepared in our own kitchen to federal and state nutrition guidelines, with a mid-morning and mid-afternoon snack on either side of it. Staff provide feeding assistance for anyone who needs it, and mealtime doubles as social time.",
      "Some days the group heads out. Past outings have included bowling, museum visits, and trips to the movies, and throughout the year we host holiday celebrations with local community groups, music, and food. These trips and gatherings are one of the things clients look forward to most.",
      "For families, the center is also respite. Each client receives personal care and supervision for at least six hours a day, five days a week, which means a caregiver can hold down a job, keep a medical appointment, or simply rest, knowing their loved one is safe, fed, and engaged.",
      "If you are considering the program for a family member, you are welcome to tour either center. Call us at (713) 633-4700 or email Nixon_homecare@msn.com and we will walk you through eligibility, transportation, and what to bring on a first day.",
    ],
    // Photos from a day at the center can be added here later — drop files in
    // public/blog/a-day-at-the-center/ and list them in a `gallery` array.
  },
];

export function getAllPosts(): BlogPost[] {
  // Newest first. Sort is stable, so posts sharing a date keep their order
  // in the `posts` array above.
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
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
