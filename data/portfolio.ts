export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;  // Live deployed project URL
  githubUrl?: string;  // GitHub repository URL
  status?: string;
  // Deprecated: keeping for backwards compatibility
  href?: string;
};

export const portfolio = {
  name: "Enginron",
  handle: "@daniel",
  location: "India",
  headline: "Developer • Design-minded • Always learning",
  bio: [
    "I'm Daniel, (Aka danish) a developer living in India. I love to code and sometimes break things just to see how they work then (hopefully) fix them better. I'm that rare mix who enjoys both development and design, which means I can make things not just function but actually look good too. Crazy, right?",
    "Whether it's building full-stack apps, tweaking UI details, or debugging something at 2 AM with a cup of coffee, I'm all in. I'm obsessed with learning always chasing new technologies, solving weird bugs, or just experimenting with something random that popped into my head.",
    "When I'm not deep in code, you'll probably catch me watching movies, playing chess, cycling through the city, lifting weights at the gym, or catching up on some much-needed sleep (which I never get enough of).",
    "Let's be honest I'm still trying to explain my job to my parents in a way that doesn't end with \"beta, computer mein hi kuch karta hai na?\" But hey, maybe one day it'll click.",
  ],
  cta: {
    availabilityText: "Available for new opportunities",
    cvLabel: "Download",
    cvHref: "Mirza-Danish-Resume.pdf",
  },
  links: {
    email: "mailto:danishmirzamirza001@gmail.com",
    github: "https://github.com/Daniel001x",
    linkedin: "https://www.linkedin.com/in/mirza-danish-384b33245/",
    x: "https://x.com/enginron",
    blog: "https://medium.com/@enginron",
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
      title: "Short-URL Generator",
      description:
        "A fully backend-based URL shortener Built using server-side rendering to handle all logic and responses.",
      tags: ["ServerSide Rendering", "Express.js", "MongoDB"],
      status: "Done",
      liveUrl: "https://short-url-a79d.onrender.com/",
      githubUrl: "https://github.com/Daniel001x/short-url",  // Add your actual GitHub repo URL
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real‑time updates and team features.",
      tags: ["Next.js", "Express.js", "MongoDB"],
      status: "Coming Soon",
      githubUrl: "https://github.com/Daniel001x/task-management",  // Add your actual GitHub repo URL
    },
  ] satisfies Project[],
};