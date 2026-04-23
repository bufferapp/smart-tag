"use client";

import { motion } from "motion/react";
import {
  Magnet,
  Nfc,
  Printer,
  Shield,
  Users,
  Infinity as InfinityIcon,
} from "lucide-react";

const specs = [
  {
    icon: Printer,
    title: "3D-printed body",
    detail: "Black Graphite PLA with a raised, glow-in-the-dark Buffer logo.",
    stat: "40 × 40 × 6 mm",
  },
  {
    icon: Nfc,
    title: "NFC inside",
    detail:
      "NTAG 215 chip, 504 bytes of rewritable memory. Programmable from any smartphone.",
    stat: "NTAG 215",
  },
  {
    icon: Shield,
    title: "Metal-shielded",
    detail:
      "Ferrite backing so the tag reads reliably on a fridge, server rack, or anywhere metal.",
    stat: "read on steel",
  },
  {
    icon: Magnet,
    title: "Magnet-mounted",
    detail:
      "Four neodymium magnets snap it to any ferrous surface. Sticks hard, peels off clean.",
    stat: "4 × N52",
  },
  {
    icon: Users,
    title: "One per teammate",
    detail:
      "Hand-assembled, one by one, for every Buffer teammate attending Team Retreat.",
    stat: "made with care",
  },
  {
    icon: InfinityIcon,
    title: "Rewrite anytime",
    detail:
      "The URL on each tag can be re-flashed. New triggers, new automations, same object.",
    stat: "∞ rewrites",
  },
];

export function Specs() {
  return (
    <section
      id="specs"
      className="relative border-b border-hairline/60 py-28 lg:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-buffer" />
              03 · The Object
            </div>
            <h2 className="text-balance text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Small object,{" "}
              <span className="font-serif italic text-buffer">serious</span>{" "}
              engineering.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg lg:justify-self-end">
            PLA, a NFC chip, neodymium magnets, and enough love to make this
            glow in the dark. And I mean it. Try it out in the dark, it glows!
            💚
          </p>
        </div>

        <div className="grid gap-0 overflow-hidden rounded-2xl border border-hairline bg-surface/40 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex flex-col justify-between gap-10 border-b border-hairline/70 p-8 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-hairline/70 lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-child(3n-1)]:border-x lg:[&:nth-child(odd)]:border-r-0"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="h-5 w-5 text-buffer/70 transition-colors group-hover:text-buffer"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    /0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {spec.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {spec.detail}
                  </p>
                  <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-buffer/70">
                    {spec.stat}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
