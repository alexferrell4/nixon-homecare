"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { BlogVideo } from "@/content/blog";

type VideoEmbedProps = {
  video: BlogVideo;
};

function embedSrc(video: BlogVideo, autoplay: boolean): string {
  if (video.provider === "youtube") {
    const params = autoplay ? "?autoplay=1&rel=0" : "?rel=0";
    return `https://www.youtube-nocookie.com/embed/${video.id}${params}`;
  }
  const params = autoplay ? "?autoplay=1" : "";
  return `https://player.vimeo.com/video/${video.id}${params}`;
}

export default function VideoEmbed({ video }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const label = video.title ?? "Play video";

  // Lightweight facade: show a poster with a play button, only load the
  // iframe after the visitor clicks. Keeps the page fast.
  const poster =
    video.provider === "youtube"
      ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
      : null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-foreground">
      {playing ? (
        <iframe
          src={embedSrc(video, true)}
          title={label}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 flex items-center justify-center"
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
            />
          ) : null}
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-105">
            <Play className="ml-1 h-7 w-7" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
