import type { Experience } from "@/data/portfolio";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/40 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/40 dark:backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          {/* Icon */}
          {/* FIX 1: Changed flex-shrink-0 to shrink-0 */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>

          {/* Text */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {experience.role}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {experience.company} · {experience.type}
            </p>
          </div>
        </div>

        {/* Date range */}
        {/* FIX 2: Changed flex-shrink-0 to shrink-0 */}
        <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500">
          {experience.from} - {experience.to}
        </span>
      </div>
    </div>
  );
}