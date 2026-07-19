"use client";

import { SectionHeading, Reveal } from "@/components/ui";
import { ThreadNode } from "@/components/SteamThread";

const steps = [
  {
    title: "We connect with a café",
    description: "We reach out, or a café reaches out to us, to explore the space, the regulars, and what's missing.",
  },
  {
    title: "We design the experience",
    description: "Together, we shape a format that fits: a workshop, a mic night, a mixer, built around the café's personality.",
  },
  {
    title: "We fill the room",
    description: "Our community channels and event marketing bring the right crowd through the door.",
  },
  {
    title: "We host the event",
    description: "Our volunteers run the show on the day, handling hosting, energy, and flow, so the café just has to open its doors.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading index="03" eyebrow="How It Works" title={<>From first conversation to full house</>} />

      <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-beige-soft/70 md:block" />
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1} className="relative flex flex-col items-center text-center md:items-center">
            <ThreadNode label={i + 1} active={i === 0} />
            <h3 className="mt-5 font-display text-xl text-brown">{step.title}</h3>
            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-brown-soft">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
