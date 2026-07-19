"use client";

import { Eyebrow, Reveal } from "@/components/ui";
import { Quote, Store, ExternalLink } from "lucide-react";
import { FeaturedEventCard, PlaceholderEventCard } from "@/components/home/EventCard";

export function UpcomingEvents() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Our Events</Eyebrow>
        <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
          Our first experience, and what&apos;s brewing next
        </h2>
        <p className="mt-4 text-base text-brown-soft">
          Follow us on Instagram to be first to know when new dates drop.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        <Reveal>
          <FeaturedEventCard />
        </Reveal>
        <Reveal delay={0.08}>
          <PlaceholderEventCard />
        </Reveal>
        <Reveal delay={0.16}>
          <PlaceholderEventCard />
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Community Voices</Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            Stories from our first experiences
          </h2>
          <p className="mt-4 text-base text-brown-soft">
            We&apos;re gathering voices from our earliest events. Check back soon.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-beige-soft/50 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/50 hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]">
                <Quote size={22} className="text-blush-soft" />
                <div className="mt-6 flex flex-col gap-2">
                  <div className="skeleton h-3 w-full rounded-full" />
                  <div className="skeleton h-3 w-4/5 rounded-full" />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="skeleton h-9 w-9 rounded-full" />
                  <div className="skeleton h-3 w-24 rounded-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerCafes() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Partner Cafés</Eyebrow>
        <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
          Building our first café partnerships
        </h2>
        <p className="mt-4 text-base text-brown-soft">
          Want your café featured here first? Let&apos;s talk.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
        <Reveal>
          <a
            href="https://share.google/VNrA60flUTPvQJaQa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-beige-soft/60 bg-white/70 p-3 text-center text-brown transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/60 hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]"
          >
            <Store size={24} className="text-blush-deep" />
            <span className="text-sm font-semibold leading-tight">VIJ HOUSE CAFE</span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-brown-soft opacity-0 transition-opacity group-hover:opacity-100">
              View location <ExternalLink size={11} />
            </span>
          </a>
        </Reveal>
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={(i + 1) * 0.06}>
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-beige-soft bg-white/50 text-brown-soft/50">
              <Store size={26} />
              <span className="text-xs">Coming soon</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
