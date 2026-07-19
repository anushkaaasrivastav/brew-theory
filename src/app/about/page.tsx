import type { Metadata } from "next";
import { Eyebrow, Reveal, PrimaryButton, SlidingArrow } from "@/components/ui";
import { ThreadNode, SteamThread } from "@/components/SteamThread";
import { ParallaxBlob } from "@/components/ParallaxBlob";
import { Coffee, Target, Telescope, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Brew Theory is a volunteer-led initiative bringing people together through curated café experiences across Lucknow.",
};

const journey = [
  { title: "The Idea", description: "A small group of volunteers noticed Lucknow's cafés were full of empty afternoons, and full of potential." },
  { title: "First Collaborations", description: "We began reaching out to cafés willing to try something different with their space." },
  { title: "Finding Our Formats", description: "Game nights, open mics, and workshops helped us learn what actually brings a room to life." },
  { title: "Building The Community", description: "Regulars became a community: people who now show up because of what's happening, not just what's brewing." },
];

const futureGoals = [
  "Partner with cafés in every corner of Lucknow, not just the popular ones.",
  "Build a recurring calendar so there's always something to look forward to.",
  "Grow a volunteer network that gives students and young professionals real event experience.",
  "Take the model to more cities once Lucknow feels truly covered.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
        <ParallaxBlob
          wrapperClassName="pointer-events-none absolute -right-24 -top-20 h-72 w-72 blob-drift-a"
          blobClassName="rounded-full bg-blush-soft/40 blur-3xl"
        />
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>About Us</Eyebrow>
          <h1 className="font-display text-4xl leading-tight text-brown md:text-5xl">
            We&apos;re not a café. We&apos;re the reason to visit one.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brown-soft md:text-lg">
            The Brew Theory is a volunteer-led initiative passionate about bringing people together
            through thoughtfully curated café experiences.
          </p>
        </Reveal>
      </section>

      {/* Who We Are / Mission / Vision */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Coffee,
              title: "Who We Are",
              body: "A volunteer-led community that designs and hosts events inside cafés across Lucknow, built by people who simply wanted their city's cafés to be more alive.",
            },
            {
              icon: Target,
              title: "Our Mission",
              body: "To make cafés more than just places to grab coffee by helping them become vibrant community hubs through engaging events.",
            },
            {
              icon: Telescope,
              title: "Our Vision",
              body: "To build Lucknow's most active café-community ecosystem, where every café has something exciting to offer.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-beige-soft/50 bg-white/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blush-deep/60 hover:shadow-[0_18px_40px_rgba(207,118,132,0.18)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep">
                  <card.icon size={22} strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 font-display text-xl text-brown">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-brown-soft">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>What Makes Us Different</Eyebrow>
            <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
              We don&apos;t own or operate cafés
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brown-soft md:text-lg">
              Instead, we collaborate with cafés and businesses to bring fresh experiences into
              their existing spaces. That means every café keeps its own identity, its own menu,
              its own regulars. We simply bring the ideas, the crowd, and the energy that turns an
              ordinary visit into something worth remembering.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-beige-soft/50 bg-white/70 p-8">
              <ul className="flex flex-col gap-5">
                {[
                  "We plan, promote, and host: cafés provide the space and the atmosphere.",
                  "Every event is designed around the café's existing character, not a generic template.",
                  "Cafés keep full ownership of their brand; we bring the audience and the format.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Sparkles size={18} className="mt-0.5 shrink-0 text-blush-deep" />
                    <span className="text-sm leading-relaxed text-brown-soft">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            How we got here
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-beige-soft/70 md:block" />
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="flex flex-col items-center text-center">
              <ThreadNode label={i + 1} active={i === journey.length - 1} />
              <h3 className="mt-5 font-display text-xl text-brown">{step.title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-brown-soft">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <SteamThread className="h-14 w-full max-w-xl" flip />
        </div>
      </section>

      {/* Future Goals */}
      <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <Eyebrow>Future Goals</Eyebrow>
            <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
              Where we&apos;re headed next
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {futureGoals.map((goal) => (
                <div key={goal} className="flex items-start gap-3 rounded-2xl border border-beige-soft/50 bg-white/70 p-5">
                  <ArrowRight size={18} className="mt-0.5 shrink-0 text-blush-deep" />
                  <span className="text-sm leading-relaxed text-brown-soft">{goal}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">
              Join The Journey <SlidingArrow />
            </PrimaryButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
