"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * wrapperClassName: position + size + optional CSS keyframe drift animation (e.g. blob-drift-a).
 * blobClassName: color + blur + rounded, applied to the inner element that carries the
 * cursor-parallax transform. Splitting these avoids CSS animations (which take precedence
 * over inline transforms) silently cancelling the parallax offset.
 */
export function ParallaxBlob({
  wrapperClassName,
  blobClassName,
  range = 18,
}: {
  wrapperClassName: string;
  blobClassName: string;
  range?: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-1, 1], [-range, range]), { stiffness: 35, damping: 20 });
  const y = useSpring(useTransform(my, [-1, 1], [-range, range]), { stiffness: 35, damping: 20 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  return (
    <div className={wrapperClassName}>
      <motion.div style={{ x, y }} className={`h-full w-full ${blobClassName}`} />
    </div>
  );
}
