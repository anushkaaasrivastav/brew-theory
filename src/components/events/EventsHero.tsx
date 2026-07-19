import { CheckCircle2 } from "lucide-react";
import { Reveal, PrimaryButton, SlidingArrow } from "@/components/ui";

export function EventsHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
      <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-blush-soft/40 blur-3xl blob-drift-a" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-beige-soft/40 blur-3xl blob-drift-b" />

      <Reveal className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl leading-tight text-brown md:text-5xl">
          The Receipt Never Lies
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brown-soft md:text-lg">
          On July 15, 2026, detectives gathered at Vij House Café for Brew Theory&apos;s first
          immersive murder mystery experience. Participants investigated evidence, questioned
          suspects, debated theories, and raced against other teams to uncover the truth. What
          started as coffee turned into one of the most memorable afternoons we&apos;ve ever
          hosted.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brown/5 px-3.5 py-1.5 text-xs font-semibold text-brown">
            <CheckCircle2 size={14} className="text-blush-deep" /> House Full
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blush-soft/40 px-3.5 py-1.5 text-xs font-semibold text-blush-deep">
            <CheckCircle2 size={14} /> Event Concluded
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <PrimaryButton href="#gallery">
            View Event Gallery <SlidingArrow />
          </PrimaryButton>
        </div>
      </Reveal>
    </section>
  );
}
