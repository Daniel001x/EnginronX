export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
};

export const portfolio = {
  name: "Daniel",
  handle: "@daniel",
  location: "India",
  headline: "Developer • Design-minded • Always learning",
  bio: [
    "I'm Daniel, a developer living in India. I love to code and sometimes break things just to see how they work then (hopefully) fix them better. I'm that rare mix who enjoys both development and design, which means I can make things not just function but actually look good too. Crazy, right?",
    "Whether it's building full-stack apps, tweaking UI details, or debugging something at 2 AM with a cup of chai, I'm all in. I'm obsessed with learning always chasing new technologies, solving weird bugs, or just experimenting with something random that popped into my head.",
    "When I'm not deep in code, you'll probably catch me watching movies, playing chess, cycling through the city, lifting weights at the gym, or catching up on some much-needed sleep (which I never get enough of).",
    "Let's be honest I'm still trying to explain my job to my parents in a way that doesn't end with \"beta, computer mein hi kuch karta hai na?\" But hey, maybe one day it'll click.",
  ],
  cta: {
    availabilityText: "Available for new opportunities",
    cvLabel: "Download CV",
    cvHref: "#",
  },
  links: {
    email: "mailto:you@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
    x: "https://x.com/your-handle",
    blog: "#",
    discord: "#",
  },
  skills: [
    {
      label: "LANGUAGES",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      label: "FRAMEWORKS / LIBRARIES",
      items: ["React", "Next.js", "Express.js", "Tailwind CSS"],
    },
    {
      label: "BACKEND & RUNTIME",
      items: ["Node.js"],
    },
    {
      label: "DATABASE",
      items: ["MongoDB"],
    },
    {
      label: "DEVELOPER TOOLS",
      items: ["Git", "GitHub", "Docker"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "E‑Commerce Platform",
      description:
        "Full‑stack e‑commerce solution with modern UI and secure payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      status: "Coming Soon",
      href: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real‑time updates and team features.",
      tags: ["Next.js", "Express.js", "MongoDB"],
      status: "Coming Soon",
      href: "#",
    },
  ] satisfies Project[],
};
