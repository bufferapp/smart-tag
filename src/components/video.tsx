"use client";

import { motion } from "motion/react";
import { Play, Clock3 } from "lucide-react";

export function VideoSection() {
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
            Watch it{" "}
            <span className="font-serif italic text-buffer">move</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            A short film on the whole thing — design, 3D print, flash the chip,
            tap, publish. Dropping at Team Retreat.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl border border-hairline bg-surface/80"
        >
          {/* grain / scanlines */}
          <div className="absolute inset-0 grain" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* timecode + meta */}
          <div className="absolute left-6 top-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-buffer" />
            REC · 00:00:00:00
          </div>
          <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            CH-01 / smart-tag.mov
          </div>

          {/* centered play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-buffer/40 bg-surface/60 backdrop-blur">
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
              <div className="flex items-center gap-2 rounded-full border border-hairline bg-surface/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                <Clock3 className="h-3 w-3 text-buffer" />
                Coming at Team Retreat
              </div>
            </div>
          </div>

          {/* bottom gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <div>
              <div className="text-foreground">BUFFER SMART TAG — THE FILM</div>
              <div className="mt-1">DIR: BRUNO PAULINO</div>
            </div>
            <div className="text-right">
              <div>RUNTIME ~02:30</div>
              <div className="mt-1">SHOT IN 4K</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
