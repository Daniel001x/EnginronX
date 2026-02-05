"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

function getUsernameFromGitHubUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname !== "github.com") return null;
    const parts = u.pathname.split("/").filter(Boolean);
    if (!parts[0]) return null;
    return parts[0];
  } catch {
    return null;
  }
}

export function GitHubContributions({
  githubUrl,
  username,
  className,
}: {
  githubUrl?: string;
  username?: string;
  className?: string;
}) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  const resolvedUsername =
    username ?? (githubUrl ? getUsernameFromGitHubUrl(githubUrl) : null);

  useEffect(() => {
    if (!resolvedUsername) return;

    // Fetch contribution count from GitHub API
    async function fetchContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${resolvedUsername}?y=last`
        );
        const data = await response.json();
        
        // Calculate total contributions
        const total = data.total?.lastYear || 0;
        setTotalContributions(total);
      } catch (error) {
        console.error("Failed to fetch contribution count:", error);
      }
    }

    fetchContributions();
  }, [resolvedUsername, refreshKey]);

  if (!resolvedUsername) return null;

  // Force a daily refresh in the browser cache + manual refresh key
  const dailyCacheKey = new Date().toISOString().slice(0, 10);
  const src = `https://ghchart.rshah.org/${resolvedUsername}.svg?v=${dailyCacheKey}&r=${refreshKey}`;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshKey((prev) => prev + 1);
    
    // Reset loading state after animation
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className={cn("", className)}>
      {/* Header with title and refresh button */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
          github stats
        </h3>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          aria-label="Refresh contributions"
          title="Refresh contributions"
        >
          <svg
            viewBox="0 0 24 24"
            className={cn("h-4 w-4", isRefreshing && "animate-spin")}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
        </button>
      </div>

      {/* Contributions Graph */}
      <div className="overflow-x-auto rounded-lg">
        <Image
          src={src}
          alt={`${resolvedUsername}'s GitHub contribution graph`}
          width={720}
          height={140}
          unoptimized
          className="h-auto min-w-[720px] max-w-none"
          key={refreshKey}
        />
      </div>

      {/* Total Contributions Count */}
      <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        {totalContributions !== null ? (
          <span>
            <span className="font-semibold">{totalContributions.toLocaleString()}</span> contributions in the last year
          </span>
        ) : (
          <span className="text-zinc-400 dark:text-zinc-500">Loading contributions...</span>
        )}
      </div>
    </div>
  );
}
