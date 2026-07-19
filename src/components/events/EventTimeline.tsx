"use client";

import { Eyebrow, Reveal } from "@/components/ui";
import { ThreadNode } from "@/components/SteamThread";
import { eventTimeline } from "@/lib/data";

export function EventTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>How It Unfolded</Eyebrow>
        <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
          From registration to revelation
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
        <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-beige-soft/70 md:block" />
        {eventTimeline.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} className="flex flex-col items-center text-center">
            <ThreadNode label={i + 1} active={i === eventTimeline.length - 1} />
            <h3 className="mt-5 font-display text-base text-brown md:text-lg">{step.title}</h3>
            <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-brown-soft">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
