"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { PrimaryButton, SecondaryButton, SlidingArrow } from "@/components/ui";
import { Sparkle } from "lucide-react";

function RisingSteam({ boosted }: { boosted: boolean }) {
  const strands = [
    { x: 0, delay: 0, duration: 4.2 },
    { x: 6, delay: 1.1, duration: 4.8 },
    { x: -5, delay: 2.1, duration: 4.4 },
  ];
  return (
    <g>
      {strands.map((s, i) => (
        <motion.path
          key={i}
          d="M0 0 C -6 -10, 6 -18, 0 -28 C -6 -36, 6 -44, 0 -52"
          fill="none"
          stroke="#c6a180"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: boosted ? [0, 1, 0] : [0, 0.7, 0], y: -30, x: [0, s.x, 0] }}
          transition={{ duration: boosted ? s.duration * 0.75 : s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
          transform={`translate(${88 + i * 12}, 60)`}
        />
      ))}
    </g>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    left: `${8 + ((i * 37) % 90)}%`,
    size: 3 + (i % 3),
    duration: 9 + (i % 5) * 2,
    delay: i * 0.8,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-blush/40"
          style={{ left: p.left, bottom: "-10px", width: p.size, height: p.size }}
          animate={{ y: [-10, -320], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

const headlineEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cupHovered, setCupHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cupX = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 60, damping: 14 });
  const cupY = useSpring(useTransform(my, [-1, 1], [-10, 10]), { stiffness: 60, damping: 14 });
  const glowX = useSpring(useTransform(mx, [-1, 1], [-24, 24]), { stiffness: 40, damping: 18 });
  const glowY = useSpring(useTransform(my, [-1, 1], [-24, 24]), { stiffness: 40, damping: 18 });

  // A gentle parallax as the reader begins turning past the hero, not a hard pin.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const scrollLift = useSpring(useTransform(scrollYProgress, [0, 1], [0, -36]), { stiffness: 80, damping: 24 });
  const scrollFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20"
    >
      {/* ambient gradient blobs: slow independent drift + breathing scale/opacity + subtle cursor parallax */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blush-soft/50 blur-3xl"
        style={{ x: glowX, y: glowY }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.96, 1], opacity: [0.9, 1, 0.85, 0.9] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-beige-soft/50 blur-3xl"
        style={{ x: useTransform(glowX, (v) => -v), y: useTransform(glowY, (v) => -v) }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0], scale: [1, 0.94, 1.06, 1], opacity: [0.85, 0.95, 0.8, 0.85] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingParticles />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row md:gap-10">
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: headlineEase }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-beige-soft bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brown-soft backdrop-blur-sm"
          >
            <Sparkle size={13} className="text-blush-deep" /> Volunteer-led · Lucknow
          </motion.div>

          <h1 className="font-display text-6xl leading-[0.92] tracking-tight text-brown sm:text-7xl md:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: headlineEase }}
              className="block"
            >
              Brewing{" "}
              <span className="word-highlight text-gradient">Experiences.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: headlineEase }}
              className="block"
            >
              Building Communities.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: headlineEase }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-soft md:mx-0 md:text-lg"
          >
            The Brew Theory is a volunteer-led initiative that partners with cafés across Lucknow to
            create unforgettable events, workshops, game nights, networking sessions, open mics,
            creative meetups, and community experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.56, ease: headlineEase }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
          >
            <PrimaryButton href="mailto:thebrewtheory.co@gmail.com?subject=Partnership%20Inquiry%20-%20The%20Brew%20Theory" magnetic>
              Partner With Us <SlidingArrow />
            </PrimaryButton>
            <SecondaryButton href="/events">Explore Events</SecondaryButton>
          </motion.div>
        </div>

        <motion.div style={{ y: scrollLift, opacity: scrollFade }} className="relative z-10 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{ x: cupX, y: cupY }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: 3, scale: 1.06 }}
              onHoverStart={() => setCupHovered(true)}
              onHoverEnd={() => setCupHovered(false)}
              className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blush-soft/40 shadow-[0_20px_60px_rgba(207,118,132,0.25)] backdrop-blur-sm md:h-80 md:w-80"
            >
              <svg viewBox="0 0 200 200" className="h-40 w-40 md:h-52 md:w-52" aria-hidden="true">
                <circle cx="100" cy="100" r="90" fill="none" stroke="#e89aa5" strokeWidth="1.5" strokeDasharray="4 7" />
                <path d="M55 100 C55 130, 145 130, 145 100 L145 90 L55 90 Z" fill="#e89aa5" opacity="0.9" />
                <path d="M145 100 h12 a15 15 0 0 1 0 30 h-12" fill="none" stroke="#c6a180" strokeWidth="7" />
                <RisingSteam boosted={cupHovered} />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
