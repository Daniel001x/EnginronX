import { portfolio } from "@/data/portfolio";
import { Pill } from "@/components/Pill";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SocialButton } from "@/components/SocialButton";
import { GitHubContributions } from "@/components/GitHubContributions";

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="-ml-1 inline-flex h-5 w-5 items-center">{children}</span>;
}

// Skill color mapping
const skillColors: Record<string, string> = {
  "JavaScript": "bg-yellow-500",
  "TypeScript": "bg-blue-500",
  "HTML": "bg-orange-500",
  "CSS": "bg-blue-400",
  "React": "bg-cyan-400",
  "Next.js": "bg-zinc-800 dark:bg-zinc-300",
  "Express.js": "bg-green-500",
  "Tailwind CSS": "bg-cyan-400",
  "Node.js": "bg-green-600",
  "MongoDB": "bg-green-500",
  "Git": "bg-red-500",
  "GitHub": "bg-zinc-800 dark:bg-zinc-300",
  "Docker": "bg-blue-500",
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-14">
      <main className="rounded-2xl bg-white p-6 dark:bg-zinc-950 sm:p-10">
        {/* HERO */}
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xl font-semibold text-white">
                {portfolio.name.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {portfolio.name.toUpperCase()}
                </h1>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  {portfolio.handle} • {portfolio.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-100 px-4 text-sm font-medium text-emerald-800 transition hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-900/40">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {portfolio.cta.availabilityText}
              </button>

              <a
                href={portfolio.cta.cvHref}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                {portfolio.cta.cvLabel}
              </a>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
            {portfolio.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </header>

        {/* SOCIAL */}
        <section className="mt-10">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Where to find me <span className="font-semibold">(digitally)</span> if you
            wish to
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <SocialButton
              href={portfolio.links.email}
              label="Email Me"
              icon={
                <Icon>
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
                </Icon>
              }
            />
            <SocialButton
              href={portfolio.links.github}
              label="GitHub"
              icon={
                <Icon>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.38-2.02 1-2.74-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.72 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.89-1.32 2.72-1.05 2.72-1.05.54 1.41.2 2.45.1 2.71.62.72 1 1.63 1 2.74 0 3.92-2.34 4.79-4.57 5.05.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
                  </svg>
                </Icon>
              }
            />
            <SocialButton
              href={portfolio.links.linkedin}
              label="LinkedIn"
              icon={
                <Icon>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5zM8.5 8.5H12.3V10.4h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V23h-4V15.6c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V23h-4V8.5z" />
                  </svg>
                </Icon>
              }
            />
            <SocialButton href={portfolio.links.discord} label="Discord" />
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-12">
          <SectionTitle>Skills</SectionTitle>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            These are the technologies I've learned and worked with. This list is
            constantly evolving as I continue to learn and grow as a developer.
          </p>

          <div className="mt-8 space-y-6">
            {portfolio.skills.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                  &lt; {group.label} /&gt;
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item} className="text-xs">
                      <span className={`h-2 w-2 rounded-full ${skillColors[item] || "bg-indigo-500"}`} />
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB CONTRIBUTIONS */}
        <section className="mt-12">
          <SectionTitle>GitHub Contributions</SectionTitle>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            A live snapshot of my recent GitHub activity.
          </p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-zinc-50 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/20 sm:p-6">
            <GitHubContributions githubUrl={portfolio.links.github} />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-12">
          <SectionTitle>Here are some of my Projects</SectionTitle>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Web</p>

          <div className="mt-6 space-y-4">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="mt-14">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 px-6 py-10 text-center shadow-sm dark:border-white/10 dark:bg-zinc-900/20 sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I&apos;m always open to discussing new opportunities, interesting projects, or
              just having a conversation about technology and development.
            </p>

            <a
              href={portfolio.links.email}
              className="mx-auto mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85"
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
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              Get in touch
            </a>
          </div>
        </section>

        <footer className="mt-12 pt-6 text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {portfolio.name}. Built with Next.js & Tailwind.
        </footer>
      </main>
    </div>
  );
}
