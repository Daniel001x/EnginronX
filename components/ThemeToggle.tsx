"use client";

import { flushSync } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Direction = "to-dark" | "to-light";
type SoundName = "pop" | "switch" | "chime" | "bubble" | "whoosh";

// Change this to pick a sound: "pop" | "switch" | "chime" | "bubble" | "whoosh"
const SOUND: SoundName = "pop";

const SPRING = "ease-[cubic-bezier(0.34,1.56,0.64,1)]"; // overshoot = bouncy

/* ------------------------------------------------------------------ */
/* Sounds (synthesized with the Web Audio API, no audio files needed)  */
/* ------------------------------------------------------------------ */

function tone(
  ctx: AudioContext,
  type: OscillatorType,
  f1: number,
  f2: number,
  delay: number,
  dur: number,
  vol: number,
) {
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(f1, t);
  if (f2 !== f1) osc.frequency.exponentialRampToValueAtTime(f2, t + dur);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function whoosh(ctx: AudioContext, dark: boolean) {
  const t = ctx.currentTime;
  const length = Math.floor(ctx.sampleRate * 0.35);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;

  const src = ctx.createBufferSource();
  src.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 1.5;
  filter.frequency.setValueAtTime(dark ? 3000 : 300, t);
  filter.frequency.exponentialRampToValueAtTime(dark ? 300 : 3000, t + 0.3);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.35, t + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.33);

  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(t);
}

function playClickSound(direction: Direction, ctx: AudioContext) {
  const dark = direction === "to-dark";

  switch (SOUND) {
    case "pop":
      tone(ctx, "sine", dark ? 500 : 800, dark ? 200 : 350, 0, 0.09, 0.4);
      break;
    case "switch":
      tone(ctx, "triangle", dark ? 300 : 500, dark ? 300 : 500, 0, 0.05, 0.25);
      tone(ctx, "triangle", dark ? 200 : 700, dark ? 200 : 700, 0.06, 0.07, 0.25);
      break;
    case "chime": {
      const [a, b] = dark ? [392, 587] : [659, 988];
      tone(ctx, "sine", a, a, 0, 0.5, 0.25);
      tone(ctx, "sine", b, b, 0.08, 0.6, 0.2);
      break;
    }
    case "bubble":
      tone(ctx, "sine", dark ? 250 : 400, dark ? 700 : 1100, 0, 0.14, 0.4);
      break;
    case "whoosh":
      whoosh(ctx, dark);
      break;
  }
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [ripple, setRipple] = useState(0); // key to restart the ripple animation
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
  /* eslint-disable react-hooks/set-state-in-effect */
  setMounted(true);
  setIsDark(document.documentElement.classList.contains("dark"));
  /* eslint-enable react-hooks/set-state-in-effect */
}, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const goingDark = !root.classList.contains("dark");
    const direction: Direction = goingDark ? "to-dark" : "to-light";

    // Center of the clicked button (origin of the circular reveal)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Sound (AudioContext is created on the first click, as browsers require)
    try {
      if (!audioRef.current) {
        const AC =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        audioRef.current = new AC();
      }
      const ctx = audioRef.current;
      if (ctx.state === "suspended") void ctx.resume();
      playClickSound(direction, ctx);
    } catch {
      // audio unsupported, ignore
    }

    // Tiny haptic tap on supported phones
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    setRipple((r) => r + 1);

    const applyTheme = () => {
      root.classList.toggle("dark", goingDark);
      try {
        localStorage.setItem("theme", goingDark ? "dark" : "light");
      } catch {
        // ignore storage failures
      }
      setIsDark(goingDark);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    // Fallback: no support, or reduced motion -> instant switch
    if (!doc.startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    const transition = doc.startViewTransition(() => {
      flushSync(applyTheme);
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={cn(
        "group relative grid h-10 w-10 place-items-center rounded-full text-zinc-700",
        "transition-[transform,background-color] duration-200 hover:scale-110 active:scale-90",
        "hover:bg-zinc-200/70 dark:text-zinc-200 dark:hover:bg-zinc-800/50",
      )}
    >
      {/* Expanding ring on every click */}
      {ripple > 0 ? (
        <span
          key={ripple}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-current"
          style={{ animation: "theme-ripple 600ms ease-out forwards" }}
        />
      ) : null}

      {mounted ? (
        <>
          {/* Sun: spins in, rays rotate */}
          <svg
            viewBox="0 0 24 24"
            className={cn(
              "absolute h-5 w-5 transition-all duration-500",
              SPRING,
              isDark
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-180 opacity-0",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <g
              style={{
                transformOrigin: "12px 12px",
                animation: isDark
                  ? "theme-rays 6s linear infinite"
                  : undefined,
              }}
            >
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </g>
          </svg>

          {/* Moon: swings in, stars twinkle */}
          <svg
            viewBox="0 0 24 24"
            className={cn(
              "absolute h-5 w-5 transition-all duration-500",
              SPRING,
              isDark
                ? "scale-0 rotate-180 opacity-0"
                : "scale-100 rotate-0 opacity-100",
            )}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            <g
              fill="currentColor"
              stroke="none"
              style={{
                animation: !isDark
                  ? "theme-twinkle 2.4s ease-in-out infinite"
                  : undefined,
              }}
            >
              <circle cx="18" cy="5" r="0.9" />
              <circle cx="21" cy="9" r="0.6" />
            </g>
          </svg>
        </>
      ) : null}
    </button>
  );
}