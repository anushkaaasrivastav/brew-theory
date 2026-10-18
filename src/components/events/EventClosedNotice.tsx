import { Reveal, SecondaryButton } from "@/components/ui";

export function EventClosedNotice() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 text-center md:px-8 md:py-20">
      <Reveal>
        <p className="text-base leading-relaxed text-brown-soft md:text-lg">
          This experience has officially concluded. Thank you to every detective who joined us.
          The Receipt Never Lies was our first immersive, in-person experience, and our newest one
          is a different kind of thing altogether: a digital corner you can step into right now.
        </p>
        <div className="mt-7 flex justify-center">
          <SecondaryButton href="#brew-room">Meet The Brew Room</SecondaryButton>
        </div>
      </Reveal>
    </section>
  );
}
