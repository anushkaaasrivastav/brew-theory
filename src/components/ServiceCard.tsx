"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Handshake,
  Users,
  Share2 as NetworkIcon,
  Mic,
  Palette,
  Dices,
  Share2,
  Megaphone,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import type { Service } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";

const icons = {
  calendar: Calendar,
  handshake: Handshake,
  users: Users,
  network: NetworkIcon,
  mic: Mic,
  palette: Palette,
  dice: Dices,
  share2: Share2,
  megaphone: Megaphone,
  sparkles: Sparkles,
};

export function ServiceCard({
  service,
  index,
  tilt = false,
}: {
  service: Service;
  index: number;
  /** Only true for Featured Experience cards on the homepage, per design spec. */
  tilt?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = icons[service.icon];

  const cardClasses =
    "group relative flex h-full flex-col rounded-3xl border border-beige-soft/40 bg-white/70 p-6 shadow-[0_4px_20px_rgba(74,52,44,0.05)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blush-deep/60 hover:shadow-[0_18px_40px_rgba(207,118,132,0.2)] md:p-7";

  const inner = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-display text-xl text-brown">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brown-soft">{service.description}</p>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="mt-3 text-sm leading-relaxed text-brown-soft/90">{service.detail}</p>
      </motion.div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blush-deep transition-colors hover:text-brown"
      >
        {open ? "Show Less" : "Learn More"}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );

  const revealProps = {
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (tilt) {
    return (
      <motion.div {...revealProps} className="h-full">
        <TiltCard className={cardClasses}>{inner}</TiltCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...revealProps}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cardClasses}
    >
      {inner}
    </motion.div>
  );
}
