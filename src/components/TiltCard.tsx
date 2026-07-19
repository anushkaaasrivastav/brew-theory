"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

/**
 * Flat, confident hover: a small lift only. No 3D rotation, no tilt —
 * removed per design direction in favor of one clear, tactile signal.
 */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -6 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
