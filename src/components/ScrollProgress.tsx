"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const fillY = useTransform(smooth, [0, 1], [24, 0]);
  const fillHeight = useTransform(smooth, [0, 1], [0, 24]);

  return (
    <div
      className="fixed right-4 top-3 z-[60] hidden h-8 w-8 items-center justify-center rounded-full bg-white/70 shadow-sm backdrop-blur-sm md:flex"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 overflow-visible">
        <defs>
          <clipPath id="beanClip">
            <path d="M12 1.5c4 0 8 4.2 8 9.4 0 5.6-4.3 11.6-8 11.6s-8-6-8-11.6C4 5.7 8 1.5 12 1.5z" />
          </clipPath>
        </defs>
        {/* outline */}
        <path
          d="M12 1.5c4 0 8 4.2 8 9.4 0 5.6-4.3 11.6-8 11.6s-8-6-8-11.6C4 5.7 8 1.5 12 1.5z"
          fill="none"
          stroke="#ddc4a6"
          strokeWidth="1.4"
        />
        {/* fill, clipped to bean shape, height driven by scroll progress */}
        <g clipPath="url(#beanClip)">
          <motion.rect x="3" width="18" height={fillHeight} y={fillY} fill="#cf7684" style={{ y: fillY, height: fillHeight }} />
        </g>
        {/* center crease */}
        <path
          d="M12 3.2c-1.6 3-1.9 6.1-1.9 8.3 0 3 .9 6.6 1.9 9.8"
          fill="none"
          stroke="#4a342c"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
