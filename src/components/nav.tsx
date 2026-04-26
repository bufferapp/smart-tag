import Link from "next/link";
import { ChevronMark } from "./chevron-mark";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <ChevronMark className="h-4 text-buffer" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/90">
            buffer<span className="text-muted-foreground">/</span>smart-tag
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#object"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            What
          </a>
          <a
            href="#flow"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            The Flow
          </a>
          <a
            href="#demo"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </a>
          <a
            href="#specs"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Specs
          </a>
          <a
            href="#program"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Program
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Team Retreat · 2026
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-buffer opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-buffer" />
          </span>
        </div>
      </div>
    </header>
  );
}
