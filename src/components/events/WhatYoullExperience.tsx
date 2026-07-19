import { Eyebrow, Reveal } from "@/components/ui";
import { ExperienceCard } from "@/components/events/EventPieces";
import { experienceHighlights } from "@/lib/data";

export function WhatYoullExperience() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>What Detectives Experienced</Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            A night of clues, coffee, and collaboration
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceHighlights.map((item, i) => (
            <ExperienceCard key={item.title} icon={item.icon} title={item.title} description={item.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
