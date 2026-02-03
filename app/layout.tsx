import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-zinc-50 antialiased dark:bg-black`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = saved ? saved === 'dark' : prefersDark;
    if (shouldDark) document.documentElement.classList.add('dark');
  } catch {}
})();`}
        </Script>

        <Navbar className="mt-4" />
        {children}
      </body>
    </html>
  );
}
