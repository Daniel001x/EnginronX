"use client";

import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ThemeToggle";

function ExternalIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 transition hover:bg-zinc-200/70 dark:text-zinc-200 dark:hover:bg-zinc-800/50"
    >
      {children}
    </a>
  );
}

export function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("sticky top-4 z-50 flex justify-center", className)}>
      <nav
        className={cn(
          "inline-flex items-center gap-1 rounded-full border border-black/10 bg-zinc-100/80 px-2 py-2 shadow-sm backdrop-blur",
          "dark:border-white/10 dark:bg-zinc-950/60",
        )}
      >
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 transition hover:bg-zinc-200/70 dark:text-zinc-200 dark:hover:bg-zinc-800/50"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 10v10h14V10" />
          </svg>
        </Link>

        {portfolio.links.x ? (
          <ExternalIconLink href={portfolio.links.x} label="X">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.2 22H3l7.4-8.5L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.2 3.8H5.4L17.8 20Z" />
            </svg>
          </ExternalIconLink>
        ) : null}

        <ExternalIconLink href={portfolio.links.github} label="GitHub">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.38-2.02 1-2.74-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.72 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.89-1.32 2.72-1.05 2.72-1.05.54 1.41.2 2.45.1 2.71.62.72 1 1.63 1 2.74 0 3.92-2.34 4.79-4.57 5.05.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
          </svg>
        </ExternalIconLink>

        <ExternalIconLink href={portfolio.links.email} label="Email">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </ExternalIconLink>

        <div className="mx-1 h-8 w-px bg-black/10 dark:bg-white/10" />

        <a
          href={portfolio.links.blog}
          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
        >
          My Blog
        </a>

        <ThemeToggle />
      </nav>
    </div>
  );
}