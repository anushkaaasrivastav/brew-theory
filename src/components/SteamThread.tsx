"use client";

import { motion } from "framer-motion";

/**
 * The Brew Theory's signature motif: a single continuous ribbon,
 * echoing the steam curl in the logo, used to thread ideas together,
 * literally connecting cafes, events and people along one line.
 */
export function SteamThread({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 120"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 60 C 100 10, 160 110, 260 60 S 420 10, 500 60 S 560 100, 598 60"
        stroke="url(#steamGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="steamGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e89aa5" stopOpacity="0" />
          <stop offset="15%" stopColor="#e89aa5" />
          <stop offset="50%" stopColor="#c6a180" />
          <stop offset="85%" stopColor="#cf7684" />
          <stop offset="100%" stopColor="#cf7684" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Small node dot used to mark a stop along the thread (for sequences that are genuinely ordered, like a journey or process). */
export function ThreadNode({ label, active = false }: { label: string | number; active?: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-display text-sm ${
          active
            ? "border-blush-deep bg-blush text-white"
            : "border-beige-soft bg-white text-brown-soft"
        }`}
      >
        {label}
      </motion.div>
    </div>
  );
}
