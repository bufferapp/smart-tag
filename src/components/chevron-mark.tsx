import { cn } from "@/lib/utils";

export function ChevronMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      className={cn("h-4 w-auto", className)}
      aria-hidden
    >
      <path d="M0 0 L14 16 L0 32 Z" fill="currentColor" />
      <path d="M18 0 L32 16 L18 32 Z" fill="currentColor" opacity="0.7" />
      <path d="M36 0 L48 16 L36 32 Z" fill="currentColor" opacity="0.45" />
    </svg>
  );
}
