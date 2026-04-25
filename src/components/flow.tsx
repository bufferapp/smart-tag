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
      className="relative border-b border-hairline/60 py-14 lg:py-40"
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
            when, and where, using the same Buffer API you already know.
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

const Muted = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted-foreground">{children}</span>
);
const Fg = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground">{children}</span>
);
const Acc = ({ children }: { children: React.ReactNode }) => (
  <span className="text-buffer">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground/90">{children}</span>
);

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
          tap-handler.sh
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-buffer">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-buffer" />
          live
        </span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed">
        <code>
          <Muted>{"#!/usr/bin/env bash"}</Muted>
          {"\n"}
          <Muted>{"# fires when the Smart Tag is tapped → drafts a post → ships it"}</Muted>
          {"\n\n"}
          <Muted>{"# 1. an AI agent drafts the copy for this trigger"}</Muted>
          {"\n"}
          <Fg>POST</Fg>
          <Muted>=$(</Muted>
          <Acc>claude</Acc>{" "}
          <Str>{'"Draft a launch tweet for the Buffer Smart Tag."'}</Str>{" "}
          <Muted>{"\\"}</Muted>
          {"\n  "}
          <Muted>--max-tokens</Muted> <Fg>280</Fg>
          <Muted>)</Muted>
          {"\n\n"}
          <Muted>{"# 2. push it through the Buffer CLI to every channel in the queue"}</Muted>
          {"\n"}
          <Acc>buffer</Acc> <Fg>posts create</Fg> <Muted>{"\\"}</Muted>
          {"\n  "}
          <Muted>--channel-id</Muted>{" "}
          <Str>{'"$BUFFER_CHANNEL_ID"'}</Str>{" "}
          <Muted>{"\\"}</Muted>
          {"\n  "}
          <Muted>--mode</Muted> <Str>addToQueue</Str>{" "}
          <Muted>{"\\"}</Muted>
          {"\n  "}
          <Muted>--text</Muted> <Str>{'"$POST"'}</Str>{" "}
          <Muted>{"\\"}</Muted>
          {"\n  "}
          <Muted>--fields</Muted> <Str>id,status,scheduledAt</Str>
          {"\n\n"}
          <Muted>{"# → "}</Muted>
          <Acc>{'{ "id": "post_01HXZ...", "status": "queued", "scheduledAt": "2026-04-23T17:30Z" }'}</Acc>
        </code>
      </pre>
    </motion.div>
  );
}
