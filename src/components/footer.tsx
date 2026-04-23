import { ChevronMark } from "./chevron-mark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-buffer/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-hairline/60 pb-12 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <ChevronMark className="h-6 text-buffer" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Buffer · Smart Tag
              </span>
            </div>
            <p className="mt-8 max-w-md text-balance font-serif text-3xl italic leading-[1.1] text-foreground">
              Handmade, one by one,
              <br />
              <span className="text-buffer">for every teammate.</span>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                The Object
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>3D-printed black PLA</li>
                <li>NTAG 215 chip</li>
                <li>Ferrite + 4× N52 magnets</li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                The Event
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Buffer Team Retreat 2026</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} · Made with care for the Buffer team
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-buffer" />
            tag_id://brn-001 · operational
          </span>
        </div>
      </div>
    </footer>
  );
}
