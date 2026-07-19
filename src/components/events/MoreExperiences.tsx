import { Eyebrow, Reveal, SecondaryButton } from "@/components/ui";
import { ComingSoonCard } from "@/components/events/EventPieces";
import { comingSoonEvents } from "@/lib/data";

export function MoreExperiences() {
  return (
    <section id="more-experiences" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>What&apos;s Next</Eyebrow>
        <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
          More Experiences Are Brewing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-brown-soft md:text-lg">
          The Receipt Never Lies is just the beginning. We&apos;re constantly crafting new
          immersive experiences, café collaborations, workshops, game nights, and community
          events. Stay tuned as we reveal what&apos;s coming next.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {comingSoonEvents.map((item, i) => (
          <ComingSoonCard key={i} description={item.description} index={i} />
        ))}
      </div>

      <Reveal delay={0.15} className="mx-auto mt-16 max-w-xl rounded-3xl border border-beige-soft/50 bg-cream-deep/60 p-10 text-center">
        <h3 className="font-display text-2xl text-brown">More Experiences Coming Soon ☕</h3>
        <p className="mt-3 text-sm leading-relaxed text-brown-soft md:text-base">
          We&apos;re just getting started. Stay tuned for upcoming mystery investigations,
          workshops, social experiences, and café collaborations. Follow Brew Theory on Instagram
          and check back regularly for new event announcements.
        </p>
        <div className="mt-6 flex justify-center">
          <SecondaryButton href="https://instagram.com/thebrewtheory.co" external>
            Follow Our Journey
          </SecondaryButton>
        </div>
      </Reveal>
    </section>
  );
}
