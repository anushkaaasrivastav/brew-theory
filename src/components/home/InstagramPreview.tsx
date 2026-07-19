"use client";

import { AtSign, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";

export function InstagramPreview() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" eyebrow="Follow Along" title={<>@thebrewtheory.co</>} align="center" />
        <div className="mt-4 flex justify-center">
          <a
            href="https://instagram.com/thebrewtheory.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blush-deep hover:text-brown"
          >
            <AtSign size={16} /> See every event as it happens
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/thebrewtheory.co"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              className="skeleton group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl text-brown-soft/40"
            >
              <motion.span variants={{ hover: { scale: 1.12 } }} transition={{ duration: 0.4 }} className="absolute inset-0">
                <AtSign size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </motion.span>
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-brown/70 via-brown/10 to-transparent p-2"
              >
                <motion.span
                  variants={{ hover: { x: 0, opacity: 1 } }}
                  initial={{ x: -6, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brown"
                >
                  <ArrowUpRight size={13} />
                </motion.span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
