"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Play, Clock3 } from "lucide-react";

const YOUTUBE_ID = "fhjrJQ8aKcM";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="demo"
      className="relative border-b border-hairline/60 py-28 lg:py-40"
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-buffer" />
            05 · The Demo
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Watch it <span className="font-serif italic text-buffer">move</span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            A short film on the whole thing — design, 3D print, flash the chip,
            tap, publish.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl border border-hairline bg-surface/80"
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Buffer Smart Tag — Instructions Manual"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              aria-label="Play Buffer Smart Tag film"
              onClick={() => setIsPlaying(true)}
              className="group absolute inset-0 cursor-pointer text-left"
            >
              {/* background cover */}
              <Image
                src="/video_cover.jpg"
                alt="Buffer Smart Tag — film cover"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                loading="eager"
                className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-background/30" />

              {/* centered play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-buffer/40 bg-surface/60 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <span
                      className="absolute inset-0 rounded-full border border-buffer/30"
                      style={{
                        animation: "pulse-ring 2.4s ease-out infinite",
                      }}
                    />
                    <Play
                      className="h-8 w-8 fill-buffer text-buffer"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-hairline bg-surface/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur transition-colors group-hover:border-buffer/40 group-hover:text-foreground">
                    <Clock3 className="h-3 w-3 text-buffer" />
                    Press play · 02:00
                  </div>
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
