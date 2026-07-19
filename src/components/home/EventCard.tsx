"use client";

import { useState } from "react";
import { CheckCircle2, Search, MapPin, Calendar, ChevronDown } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { SecondaryButton } from "@/components/ui";
import { featuredEvent } from "@/lib/data";

export function FeaturedEventCard() {
  const [open, setOpen] = useState(false);

  return (
    <TiltCard className="receipt-edge relative flex h-full flex-col overflow-hidden rounded-2xl border border-beige-soft/60 bg-white p-6 pb-8 shadow-[0_4px_20px_rgba(74,52,44,0.06)]">
      {/* faint paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #4a342c 0px, transparent 1px, transparent 3px)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="-rotate-3 rounded-md border border-dashed border-blush-deep/50 bg-blush-soft/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blush-deep">
          {featuredEvent.category}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige-soft/40 text-brown-soft">
          <Search size={16} />
        </span>
      </div>

      <h3 className="relative mt-4 font-display text-xl text-brown">{featuredEvent.title}</h3>

      <div className="relative mt-2 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-brown/5 px-2.5 py-1 text-[10px] font-semibold text-brown">
          <CheckCircle2 size={12} className="text-blush-deep" /> Event Successfully Concluded
        </span>
        <span className="inline-flex items-center rounded-full bg-blush-soft/40 px-2.5 py-1 text-[10px] font-semibold text-blush-deep">
          {featuredEvent.statusBadge}
        </span>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-brown-soft">{featuredEvent.description}</p>

      <p className="relative mt-2 text-sm leading-relaxed text-brown-soft/90">{featuredEvent.thankYouNote}</p>

      <div
        className={`relative overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${
          open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-brown-soft/90">{featuredEvent.detail}</p>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative mt-4 flex items-center gap-1.5 text-sm font-semibold text-blush-deep transition-colors hover:text-brown"
      >
        {open ? "Show Less" : "Read The Case File"}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className="relative mt-auto flex flex-col gap-3 pt-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wide text-brown-soft/70">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} /> {featuredEvent.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {featuredEvent.date}
          </span>
        </div>
        <SecondaryButton href="/events#gallery">View Event Gallery</SecondaryButton>
      </div>
    </TiltCard>
  );
}

export function PlaceholderEventCard() {
  return (
    <TiltCard className="flex h-full flex-col overflow-hidden rounded-2xl border border-beige-soft/50 bg-white/60">
      <div className="skeleton h-32 w-full" />
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blush-deep">
          <Calendar size={13} /> Announcing soon
        </div>
        <div className="skeleton h-3.5 w-4/5 rounded-full" />
        <div className="skeleton h-3 w-3/5 rounded-full" />
      </div>
    </TiltCard>
  );
}
