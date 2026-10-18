import { BookOpen, Camera, Gamepad2, Music, MessageSquareHeart } from "lucide-react";
import { Eyebrow, PrimaryButton, Reveal } from "@/components/ui";
import { TiltCard } from "@/components/TiltCard";
import { StampBadge } from "@/components/events/StampBadge";
import { brewRoom, featuredEvent } from "@/lib/data";

const featureIcons = { music: Music, camera: Camera, book: BookOpen, gamepad: Gamepad2 };

/**
 * The Brew Room, introduced on /events as something people can explore now.
 * It sits after the concluded Receipt Never Lies retrospective. The Receipt
 * card above it keeps its own "concluded" language; this section never uses
 * dates, tickets or "coming soon" wording.
 */
export function BrewRoomFeature() {
  return (
    <section id="brew-room" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      {/* Past -> present, so the two experiences are clearly different things. */}
      <Reveal className="mx-auto flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <div className="flex-1 rounded-2xl border border-beige-soft/60 bg-white/60 px-5 py-3 text-center sm:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brown-soft/70">
            In person · {featuredEvent.date} · Concluded
          </p>
          <p className="font-display text-base text-brown">{featuredEvent.title}</p>
        </div>
        <span className="hidden text-brown-soft/60 sm:block" aria-hidden="true">
          →
        </span>
        <div className="flex-1 rounded-2xl border border-brown bg-brown px-5 py-3 text-center text-white sm:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-blush-soft">Digital · Open now</p>
          <p className="font-display text-base">{brewRoom.title}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <div className="overflow-hidden rounded-3xl border border-beige-soft/60 bg-white/70 shadow-[0_8px_32px_rgba(74,52,44,0.08)]">
          <div className="gingham-strip h-4 w-full" aria-hidden="true" />

          <div className="grid gap-10 p-7 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:p-12">
            <div className="flex flex-col">
              <div>
                <Eyebrow>{brewRoom.eyebrow}</Eyebrow>
              </div>
              <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">{brewRoom.title}</h2>
              <p className="mt-4 font-display text-lg leading-snug text-blush-deep md:text-xl">{brewRoom.subheading}</p>

              <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-brown-soft md:text-lg">
                {brewRoom.eventsDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <PrimaryButton href={brewRoom.url} external>
                  {brewRoom.eventsCta} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </PrimaryButton>
              </div>
            </div>

            {/* The part that makes it its own thing: a note left on the table. */}
            <div className="flex items-center justify-center md:py-4">
              <StampBadge className="block w-full max-w-sm" delay={0.1}>
                <div className="relative -rotate-1 rounded-sm border border-beige-soft/70 bg-cream px-6 pb-7 pt-9 shadow-[0_10px_28px_rgba(74,52,44,0.14)]">
                  <span
                    className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-blush-soft/80"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-2 text-blush-deep">
                    <MessageSquareHeart size={18} strokeWidth={1.75} />
                    <h3 className="font-display text-lg text-brown">{brewRoom.leaveAtTheTable.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brown-soft">{brewRoom.leaveAtTheTable.description}</p>
                  <p className="mt-5 border-t border-dashed border-brown/20 pt-4 font-display text-sm leading-snug text-brown">
                    {brewRoom.leaveAtTheTable.motto}
                  </p>
                </div>
              </StampBadge>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {brewRoom.features.map((feature, i) => {
          const Icon = featureIcons[feature.icon];
          return (
            <Reveal key={feature.title} delay={i * 0.06} className="h-full">
              <TiltCard className="group flex h-full flex-col rounded-2xl border border-beige-soft/50 bg-white/70 p-6 transition-[box-shadow,border-color] duration-300 hover:border-blush-deep/60 hover:shadow-[0_14px_32px_rgba(207,118,132,0.18)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-lg text-brown">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brown-soft">{feature.description}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
