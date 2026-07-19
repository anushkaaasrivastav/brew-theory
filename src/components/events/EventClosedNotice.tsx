import { Reveal, SecondaryButton } from "@/components/ui";

export function EventClosedNotice() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 text-center md:px-8 md:py-20">
      <Reveal>
        <p className="text-base leading-relaxed text-brown-soft md:text-lg">
          This experience has officially concluded. Thank you to every detective who joined us.
          More immersive experiences from Brew Theory are already brewing.
        </p>
        <div className="mt-7 flex justify-center">
          <SecondaryButton href="#more-experiences">Explore Upcoming Experiences</SecondaryButton>
        </div>
      </Reveal>
    </section>
  );
}
