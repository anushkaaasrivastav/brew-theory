"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { stats } from "@/lib/data";
import { SteamThread } from "@/components/SteamThread";

const statContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const statItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WhyBrewTheory() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="01"
        eyebrow="Why The Brew Theory"
        title={<>Your regular café doesn&apos;t have to be ordinary.</>}
      />

      <div className="mt-10 grid gap-14 md:grid-cols-[minmax(0,220px)_1fr] md:gap-14">
        <div className="hidden md:block" aria-hidden="true" />
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <p className="text-base leading-relaxed text-brown-soft md:text-lg">
            With the right ideas, every visit can become an experience, and we&apos;re here to
            bring that vision to life. We don&apos;t run cafés. We partner with them, bringing
            fresh events into the spaces you already know and love, so cafés become places to
            connect, create, network, and learn, not just places to grab a coffee.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={statContainer}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                className="rounded-2xl border border-beige-soft/50 bg-white/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/50 hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-bold text-brown">{stat.label}</p>
                <p className="mt-0.5 text-xs text-brown-soft/80">{stat.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <SteamThread className="h-16 w-full max-w-2xl" />
      </div>
    </section>
  );
}
