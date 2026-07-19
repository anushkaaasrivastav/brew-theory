"use client";

import { useState } from "react";
import { CheckCircle2, Search, MapPin, Calendar, ChevronDown } from "lucide-react";
import { Eyebrow, Reveal, SecondaryButton } from "@/components/ui";
import { TiltCard } from "@/components/TiltCard";
import { EventStatCard } from "@/components/events/EventPieces";
import { StampBadge } from "@/components/events/StampBadge";
import { featuredEvent, eventStats } from "@/lib/data";

export function CaseRecap() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
      <Reveal className="relative">
        {/* stacked paper shadows peeking from behind, detective-page-only motif */}
        <div
          className="pointer-events-none absolute inset-3 -z-10 rotate-[2.2deg] rounded-3xl border border-beige-soft/50 bg-white/80"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-3 -z-20 -rotate-[1.6deg] rounded-3xl border border-beige-soft/40 bg-cream-deep/70"
          aria-hidden="true"
        />
        <TiltCard className="receipt-edge relative overflow-hidden rounded-3xl border border-beige-soft/60 bg-white p-8 pb-12 shadow-[0_8px_32px_rgba(74,52,44,0.08)] md:p-12 md:pb-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, #4a342c 0px, transparent 1px, transparent 3px)" }}
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-4">
            <span className="-rotate-2 rounded-md border border-dashed border-blush-deep/50 bg-blush-soft/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-blush-deep">
              {featuredEvent.category}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige-soft/40 text-brown-soft">
              <Search size={19} />
            </span>
          </div>

          <h2 className="relative mt-6 font-display text-3xl leading-[0.95] text-brown md:text-5xl">
            {featuredEvent.title}
          </h2>

          <div className="relative mt-4 flex flex-wrap items-center gap-2">
            <StampBadge className="inline-flex items-center gap-1.5 rounded-full bg-brown/5 px-3 py-1.5 text-xs font-semibold text-brown">
              <CheckCircle2 size={14} className="text-blush-deep" /> Event Successfully Concluded
            </StampBadge>
            <StampBadge delay={0.1} className="inline-flex items-center rounded-full bg-blush-soft/40 px-3 py-1.5 text-xs font-semibold text-blush-deep">
              {featuredEvent.statusBadge}
            </StampBadge>
          </div>

          <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-brown-soft md:text-lg">
            {featuredEvent.description}
          </p>

          <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-brown-soft/90 md:text-base">
            {featuredEvent.thankYouNote}
          </p>

          <div
            className={`relative overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              open ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
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

          <div className="relative mt-8 flex flex-col gap-3 border-t border-beige-soft/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brown-soft">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-blush-deep" /> {featuredEvent.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-blush-deep" /> {featuredEvent.date}
              </span>
            </div>
            <SecondaryButton href="#gallery">View Event Gallery</SecondaryButton>
          </div>
        </TiltCard>
      </Reveal>

      <div className="mt-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>By The Numbers</Eyebrow>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {eventStats.map((stat, i) => (
            <EventStatCard key={stat.label} icon={stat.icon} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
