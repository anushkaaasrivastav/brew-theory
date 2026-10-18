import { Reveal, SecondaryButton } from "@/components/ui";

/**
 * What's next, kept honest: The Brew Room is the newest experience and is
 * already live (see BrewRoomFeature). No further in-person event has been
 * announced, so this says exactly that and points to where news will land.
 */
export function MoreExperiences() {
  return (
    <section id="more-experiences" className="scroll-mt-20 mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
      <Reveal className="mx-auto max-w-xl rounded-3xl border border-beige-soft/50 bg-cream-deep/60 p-10 text-center">
        <h3 className="font-display text-2xl text-brown">The next in-person experience ☕</h3>
        <p className="mt-3 text-sm leading-relaxed text-brown-soft md:text-base">
          We haven&apos;t announced our next café event yet. When we do, it will show up on
          Instagram first, so that&apos;s the best place to follow along.
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
