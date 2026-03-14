export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
  href?: string;
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  from: string;
  to: string;
};

export type Book = {
  title: string;
  author: string;
  color: string;
  cover?: string;
};

export const portfolio = {
  name: "Enginron",
  handle: "@enginron",
  location: "India",
  headline: "Developer • Design-minded • Always learning",
  bio: [
    "I'm Danish, a developer living in India. I love to code and sometimes break things just to see how they work then (hopefully) fix them better. I'm that rare mix who enjoys both development and design, which means I can make things not just function but actually look good too. Crazy, right?",
    "Whether it's building full-stack apps, tweaking UI details, or debugging something at 2 AM with a cup of coffee, I'm all in. I'm obsessed with learning always chasing new technologies, solving weird bugs, or just experimenting with something random that popped into my head.",
    "When I'm not deep in code, you'll probably catch me watching movies, playing chess, cycling through the city, lifting weights at the gym, or catching up on some much-needed sleep (which I never get enough of).",
    "Let's be honest I'm still trying to explain my job to my parents in a way that doesn't end with \"beta, computer mein hi kuch karta hai na?\" But hey, maybe one day it'll click.",
  ],
  cta: {
    availabilityText: "Available for new opportunities",
    cvLabel: "Download",
    cvHref: "MirzaDanishresume2026.pdf",
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
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Self-Initiated Projects",
      type: "Project-Based",
      from: "2025",
      to: "Present",
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Short-URL Generator",
      description:
        "A fully backend-based URL shortener Built using server-side rendering to handle all logic and responses.",
      tags: ["ServerSide Rendering", "Express.js", "MongoDB"],
      status: "Done",
      liveUrl: "https://short-url-a79d.onrender.com/",
      githubUrl: "https://github.com/Daniel001x/short-url",
    },
    {
      title: "Tars-chat",
      description:
        "A real-time chat app built with Next.js, Convex, and Clerk. Supports 1:1 & group messaging, typing indicators, and online presence.",
      tags: ["Next.js", "Convex", "Clerk"],
      status: "Done",
      liveUrl: "https://tars-chat-pearl.vercel.app/sign-in",
      githubUrl: "https://github.com/Daniel001x/Tars-chat",
    },

     {
      title: "Proxxy",
      description:
        "Post any task and let a people get your work done for you.",
      tags: ["React.js", "Express.js", "MongoDB"],
      status: "Comming soon",
      liveUrl: "#",
      githubUrl: "#",
    },
  ] satisfies Project[],
  books: [
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      color: "#E8531A",
      cover: "/newsub.webp",
    },
    {
      title: "Start with Why",
      author: "Simon Sinek",
      color: "#F5C518",
      cover: "/realstart.jpg",
    },
    {
      title: "Do It Today",
      author: "Darius Foroux",
      color: "#F0A500",
      cover: "/doit.png",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      color: "#2E86AB",
      cover: "/deepwork.jpg",
    },
  ] satisfies Book[],
};