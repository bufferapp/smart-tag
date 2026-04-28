"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Nfc, Magnet, Sparkles } from "lucide-react";

const chips = [
  { icon: Nfc, label: "NFC-enabled" },
  { icon: Magnet, label: "Magnetic" },
  { icon: Sparkles, label: "Hand-assembled" },
];

export function Hero() {
  return (
    <section
      id="object"
      className="relative overflow-hidden border-b border-hairline/60 grain"
    >
      <div className="absolute inset-0 grid-lines mask-fade-b opacity-80" />
      <div className="absolute -top-40 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-buffer/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-28 lg:pb-36">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-surface/50 py-1.5 pl-1.5 pr-4 backdrop-blur"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-buffer/15">
              <span className="h-1.5 w-1.5 rounded-full bg-buffer" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Buffer · Team Retreat
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-balance font-sans text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            A physical trigger{" "}
            <span className="text-muted-foreground">for your</span>{" "}
            <span className="font-serif italic text-buffer">digital</span>{" "}
            workflows.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            The Buffer Smart Tag is a handmade, 3D-printed, NFC-enabled token,
            one for every teammate at the 2026 Team Retreat. Tap it to publish,
            schedule, or orchestrate any Buffer workflow. Automations now live
            on your fridge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
              >
                <Icon className="h-3 w-3 text-buffer" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center gap-3 text-muted-foreground"
          >
            <ArrowDown className="h-3 w-3 animate-bounce" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
              Keep scrolling
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <TokenShowcase />
        </motion.div>
      </div>
    </section>
  );
}

function TokenShowcase() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* corner brackets */}
      <CornerBracket className="absolute left-0 top-0" />
      <CornerBracket className="absolute right-0 top-0 rotate-90" />
      <CornerBracket className="absolute right-0 bottom-0 rotate-180" />
      <CornerBracket className="absolute left-0 bottom-0 -rotate-90" />

      {/* meta labels */}
      <div className="absolute -top-6 left-8 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/70">
        NFC · ISO/IEC 14443-A
      </div>
      <div className="absolute -bottom-6 right-8 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/70">
        40 × 40 × 6 mm
      </div>

      {/* pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="absolute h-[55%] w-[55%] rounded-full border border-buffer/40"
          style={{
            animation: "pulse-ring 3s ease-out infinite",
          }}
        />
        <span
          className="absolute h-[55%] w-[55%] rounded-full border border-buffer/30"
          style={{
            animation: "pulse-ring 3s ease-out infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* the token image */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-[62%] w-[62%] overflow-hidden rounded-full glow-buffer">
          <Image
            src="/tag_no_bg.png"
            alt="Buffer Smart Tag: a 3D-printed black token with the green Buffer chevron logo"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
            style={{
              transform: "translateX(-1.5%) translateY(4%) scale(1.25)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-tr from-background/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* corner readout */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+12px)] hidden lg:flex flex-col items-end gap-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-buffer">
          ● live
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          tag_id://brn-001
        </span>
      </div>
    </div>
  );
}

function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-buffer/60 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 10 L2 2 L10 2" strokeLinecap="square" />
    </svg>
  );
}
