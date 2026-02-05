import Link from "next/link";
import { cn } from "@/lib/cn";

export function SocialButton({
  href,
  label,
  icon,
  className,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const content = (
    <span className="inline-flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </span>
  );

  const base = cn(
    "inline-flex h-11 items-center justify-center rounded-xl bg-zinc-100 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    className,
  );

  if (isExternal) {
    return (
      <a className={base} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={base} href={href}>
      {content}
    </Link>
  );
}
