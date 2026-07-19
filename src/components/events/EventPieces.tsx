"use client";

import { Users, Search, Receipt, FileSearch, Eye, Home, Trophy, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const experienceIcons = { search: Search, receipt: Receipt, fileSearch: FileSearch, users: Users, eye: Eye };
const statIcons = { home: Home, users: Users, trophy: Trophy, coffee: Coffee };

export function EventStatCard({ icon, label, index }: { icon: keyof typeof statIcons; label: string; index: number }) {
  const Icon = statIcons[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3 rounded-2xl border border-beige-soft/50 bg-white/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/50 hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep">
        <Icon size={21} strokeWidth={1.75} />
      </span>
      <span className="font-display text-base leading-snug text-brown">{label}</span>
    </motion.div>
  );
}

export function ExperienceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: keyof typeof experienceIcons;
  title: string;
  description: string;
  index: number;
}) {
  const Icon = experienceIcons[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard className="group flex h-full flex-col rounded-3xl border border-beige-soft/40 bg-white/70 p-6 shadow-[0_4px_20px_rgba(74,52,44,0.05)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blush-deep/60 hover:shadow-[0_18px_40px_rgba(207,118,132,0.2)] md:p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-xl text-brown">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brown-soft">{description}</p>
      </TiltCard>
    </motion.div>
  );
}

export function ComingSoonCard({ description, index }: { description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl border border-dashed border-beige-soft bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/50 hover:shadow-[0_12px_28px_rgba(207,118,132,0.12)]"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-beige-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brown-soft">
        Coming Soon
      </span>
      <p className="mt-4 text-sm leading-relaxed text-brown-soft">{description}</p>
    </motion.div>
  );
}
