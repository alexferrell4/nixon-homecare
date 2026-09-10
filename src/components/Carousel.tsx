"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { BlogImage } from "@/content/blog";

type CarouselProps = {
  images: BlogImage[];
};

export default function Carousel({ images }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, images.length - 1));
    track.scrollTo({ left: track.clientWidth * clamped, behavior: "smooth" });
  }, [images.length]);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full"
      role="group"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-lg"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollToIndex(active + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollToIndex(active - 1);
          }
        }}
      >
        {images.map((img, i) => (
          <figure
            key={img.src + i}
            className="relative w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <div className="relative aspect-[16/10] w-full bg-muted">
              {failed[i] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-muted-foreground">
                  <ImageOff className="h-8 w-8" />
                  <span className="text-sm">{img.alt}</span>
                </div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                  priority={i === 0}
                />
              )}
            </div>
            {img.caption ? (
              <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous photo"
            className="absolute left-3 top-[calc(50%-1rem)] -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background disabled:opacity-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === images.length - 1}
            aria-label="Next photo"
            className="absolute right-3 top-[calc(50%-1rem)] -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background disabled:opacity-0"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
