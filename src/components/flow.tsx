"use client";

import { motion } from "motion/react";
import { Hand, Radio, Zap, Send } from "lucide-react";

const stages = [
  {
    id: "01",
    icon: Hand,
    title: "You tap.",
    detail: "Bring your phone near the tag. That's the whole UI.",
    meta: "tap",
  },
  {
    id: "02",
    icon: Radio,
    title: "Tag fires.",
    detail: "NFC payload resolves to a private URL with a signed action token.",
    meta: "nfc://resolve",
  },
  {
    id: "03",
    icon: Zap,
    title: "Agent runs.",
    detail: "AI agent picks up the trigger, drafts the post, and hits Buffer's API.",
    meta: "POST /1/updates/create",
  },
  {
    id: "04",
    icon: Send,
    title: "It's live.",
    detail: "Your content ships across socials. No dashboards opened.",
    meta: "200 OK",
  },
];

export function Flow() {
  return (
    <section
      id="flow"
      className="relative border-b border-hairline/60 py-28 lg:py-40"
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-buffer" />
            02 · The Flow
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            One tap.{" "}
            <span className="font-serif italic text-buffer">Zero</span> dashboards.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            The tag is the interface. Behind it, an agent decides what to post,
            when, and where — using the same Buffer API you already know.
          </p>
        </div>

        <div className="relative mt-24 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group relative rounded-2xl border border-hairline bg-surface/60 p-6 backdrop-blur transition-colors hover:border-buffer/30 hover:bg-surface"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    /{stage.id}
                  </span>
                  <Icon className="h-4 w-4 text-buffer/80 transition-colors group-hover:text-buffer" />
                </div>
                <div className="text-2xl font-medium leading-tight tracking-tight text-foreground">
                  {stage.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
                <div className="mt-6 border-t border-hairline/60 pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-buffer/70">
                    › {stage.meta}
                  </span>
                </div>

                {/* connecting line, hidden on mobile and last */}
                {i < stages.length - 1 && (
                  <div className="pointer-events-none absolute left-full top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-buffer/40 to-transparent lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        <CodeSample />
      </div>
    </section>
  );
}

function CodeSample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto mt-24 max-w-3xl overflow-hidden rounded-2xl border border-hairline bg-surface/80 backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-hairline/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        </div>
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          tap-handler.ts
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-buffer">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-buffer" />
          live
        </span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-muted-foreground">{"// "}tag tapped → agent decides → buffer publishes</span>
          {"\n"}
          <span className="text-buffer">const</span>{" "}
          <span className="text-foreground">post</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-buffer">await</span>{" "}
          <span className="text-foreground">agent</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">draft</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-buffer">{'"launch-announcement"'}</span>
          <span className="text-muted-foreground">);</span>
          {"\n"}
          {"\n"}
          <span className="text-buffer">await</span>{" "}
          <span className="text-foreground">buffer</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">updates</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">create</span>
          <span className="text-muted-foreground">(</span>
          <span className="text-muted-foreground">{"{"}</span>
          {"\n  "}
          <span className="text-foreground">profile_ids</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-foreground">team</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">socials</span>
          <span className="text-muted-foreground">,</span>
          {"\n  "}
          <span className="text-foreground">text</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-foreground">post</span>
          <span className="text-muted-foreground">.</span>
          <span className="text-foreground">body</span>
          <span className="text-muted-foreground">,</span>
          {"\n  "}
          <span className="text-foreground">now</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-buffer">true</span>
          <span className="text-muted-foreground">,</span>
          {"\n"}
          <span className="text-muted-foreground">{"});"}</span>
          {"\n"}
          {"\n"}
          <span className="text-muted-foreground">{"// → "}</span>
          <span className="text-buffer">✓ published to 4 channels (184ms)</span>
        </code>
      </pre>
    </motion.div>
  );
}
