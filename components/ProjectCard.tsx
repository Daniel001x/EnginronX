import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/portfolio";
import { Pill } from "@/components/Pill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/40 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/40 dark:backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 flex-shrink-0 rounded bg-zinc-300 dark:bg-zinc-700" />
            <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>
            {project.status && (
              <span className="ml-auto flex-shrink-0 text-xs font-medium text-orange-600 dark:text-orange-400">
                {project.status}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>
        </div>

        {/* GitHub Icon */}
        {project.href && (
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "shrink-0 rounded-lg border border-zinc-300 bg-white p-2 text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
            )}
            aria-label={`View ${project.title} on GitHub`}
            title="View on GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.38-2.02 1-2.74-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.72 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.89-1.32 2.72-1.05 2.72-1.05.54 1.41.2 2.45.1 2.71.62.72 1 1.63 1 2.74 0 3.92-2.34 4.79-4.57 5.05.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
            </svg>
          </Link>
        )}
      </div>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} className="text-xs">
              {tag}
            </Pill>
          ))}
        </div>
      ) : null}
    </div>
  );
}