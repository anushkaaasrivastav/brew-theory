"use client";

import { motion } from "framer-motion";
import { Reveal, PrimaryButton } from "@/components/ui";

export function ClosingBanner() {
  return (
    <section className="relative mx-5 mb-20 overflow-hidden rounded-[2.5rem] bg-brown px-6 py-16 text-center md:mx-8 md:py-20">
      <motion.div
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blush/20 blur-3xl"
        animate={{ x: [0, 26, -10, 0], y: [0, -18, 12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-beige/20 blur-3xl"
        animate={{ x: [0, -22, 14, 0], y: [0, 16, -12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl">
          This case may be closed&hellip;
        </h2>
        <p className="mt-4 text-base text-cream/80 md:text-lg">
          &hellip;but the next mystery is already brewing.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton href="/#newsletter" variant="light">
            Stay Updated
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
