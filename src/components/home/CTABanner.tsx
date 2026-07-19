"use client";

import { motion } from "framer-motion";
import { Reveal, PrimaryButton, SlidingArrow } from "@/components/ui";

export function CTABanner() {
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
          Looking for fun events in Lucknow?
        </h2>
        <p className="mt-4 text-base text-cream/80 md:text-lg">
          Stay tuned. The next unforgettable café experience could be just around the corner.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton
            href="mailto:thebrewtheory.co@gmail.com?subject=Partnership%20Inquiry%20-%20The%20Brew%20Theory"
            variant="light"
            magnetic
          >
            Partner With Us <SlidingArrow />
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
