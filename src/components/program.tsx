"use client";

import { motion } from "motion/react";
import {
  Link as LinkIcon,
  Wifi,
  Contact,
  Workflow,
  FileText,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const useCases = [
  {
    icon: LinkIcon,
    title: "Open any URL",
    detail: "A Buffer dashboard, a Google Doc, a YouTube video — whatever.",
  },
  {
    icon: Workflow,
    title: "Trigger a webhook",
    detail: "Hit a Zapier, n8n, or your own endpoint. Fire an agent. Ship a post.",
  },
  {
    icon: Smartphone,
    title: "Launch an app",
    detail: "Deep-link straight into Buffer, Slack, Notion, or your camera roll.",
  },
  {
    icon: Wifi,
    title: "Share Wi-Fi",
    detail: "Guest SSID + password. Tap once, connect — no typing.",
  },
  {
    icon: Contact,
    title: "Share a contact",
    detail: "vCard with your name, role, socials. Better than business cards.",
  },
  {
    icon: FileText,
    title: "Drop a note",
    detail: "Plain text up to 504 bytes. A secret, a haiku, a reminder.",
  },
];

const apps = [
  {
    platform: "iOS",
    name: "NFC Tools",
    meta: "App Store · Free",
    tagline: "The industry standard for reading & writing NFC tags on iPhone.",
    href: "https://apps.apple.com/us/app/nfc-tools/id1252962749",
    Icon: AppleIcon,
  },
  {
    platform: "Android",
    name: "NFC Writer",
    meta: "Google Play · Free",
    tagline: "Simple, reliable writer for NTAG chips — URLs, text, and more.",
    href: "https://play.google.com/store/apps/details?id=com.manjul.utility.nfc.writer",
    Icon: PlayIcon,
  },
];

export function Program() {
  return (
    <section
      id="program"
      className="relative border-b border-hairline/60 py-28 lg:py-40"
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-buffer" />
              04 · Program It
            </div>
            <h2 className="text-balance text-4xl font-medium leading-[1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Make it{" "}
              <span className="font-serif italic text-buffer">yours</span>.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg lg:justify-self-end">
            Grab a free NFC writer app, point it at the tag, and flash whatever
            payload you want. Rewrite it a thousand times — same tag, new trick.
          </p>
        </div>

        {/* app cards */}
        <div className="grid gap-4 lg:grid-cols-2">
          {apps.map((app, i) => {
            const Icon = app.Icon;
            return (
              <motion.a
                key={app.platform}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-hairline bg-surface/60 p-7 backdrop-blur transition-colors hover:border-buffer/40 hover:bg-surface"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 20% 0%, rgba(159, 232, 112, 0.08), transparent 60%)",
                  }}
                />

                <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-xl border border-hairline bg-background">
                  <Icon className="h-7 w-7 text-foreground" />
                </div>

                <div className="relative flex-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-buffer/80">
                    <span className="h-1 w-1 rounded-full bg-buffer" />
                    {app.platform}
                  </div>
                  <div className="mt-1 text-2xl font-medium tracking-tight text-foreground">
                    {app.name}
                  </div>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {app.tagline}
                  </p>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
                    {app.meta}
                  </div>
                </div>

                <div className="relative hidden flex-none items-center justify-center rounded-full border border-hairline bg-background/60 p-3 transition-colors group-hover:border-buffer/50 group-hover:text-buffer sm:flex">
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-buffer"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* use-case grid */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-hairline/80" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              What you can flash onto it
            </span>
            <span className="h-px flex-1 bg-hairline/80" />
          </div>

          <div className="grid gap-0 overflow-hidden rounded-2xl border border-hairline bg-surface/40 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative flex items-start gap-4 border-b border-hairline/70 p-6 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-hairline/70 lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-child(3n-1)]:border-x lg:[&:nth-child(odd)]:border-r-0"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-hairline bg-background/60">
                    <Icon
                      className="h-4 w-4 text-buffer/80 transition-colors group-hover:text-buffer"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-foreground">
                      {useCase.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {useCase.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* tip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-xl border border-buffer/20 bg-buffer/[0.04] p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-buffer/15 sm:mt-0">
              <span className="h-1.5 w-1.5 rounded-full bg-buffer" />
            </span>
            <p className="text-sm text-foreground/90">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-buffer">
                Pro tip ·{" "}
              </span>
              Write a URL that points at an iOS Shortcut or an Android Tasker
              task — then the tag can run <em>any</em> automation on your phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.04c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 2.2c-.3.2-.5.6-.5 1.1v17.4c0 .5.2.9.5 1.1l9.8-9.8L3.5 2.2z"
        fill="#9fe870"
        opacity="0.9"
      />
      <path
        d="M13.3 12l3.1-3.1-12.9-7.4c-.3-.2-.7-.2-1 0l10.8 10.5z"
        fill="#9fe870"
        opacity="0.6"
      />
      <path
        d="M13.3 12L3.5 21.8c.3.2.7.2 1 0l12.9-7.4-4.1-2.4z"
        fill="#9fe870"
        opacity="0.75"
      />
      <path
        d="M20.5 10.8l-3.1-1.8-3.6 3 3.6 3 3.1-1.8c.9-.5.9-1.9 0-2.4z"
        fill="#9fe870"
      />
    </svg>
  );
}
