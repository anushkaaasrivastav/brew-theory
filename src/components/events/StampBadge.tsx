"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StampBadge({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.7, rotate: -16 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ type: "spring", stiffness: 340, damping: 16, delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
