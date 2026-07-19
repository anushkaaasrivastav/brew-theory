import { Trophy, Medal } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/ui";
import { StampBadge } from "@/components/events/StampBadge";
import { winningTeam } from "@/lib/data";

export function WinningTeamSection() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            <Trophy size={12} className="mr-1 inline -translate-y-px" /> Winning Detectives
          </Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            Brew Theory&apos;s First Detective Champions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10 overflow-hidden rounded-3xl border border-beige-soft/60 bg-white p-8 text-center shadow-[0_8px_32px_rgba(74,52,44,0.08)] md:p-12">
          <StampBadge className="inline-flex items-center gap-1.5 rounded-full bg-blush-soft/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-blush-deep">
            Case Solved
          </StampBadge>

          <div className="mt-5 flex items-center justify-center gap-2">
            <Medal size={22} className="text-beige" />
            <h3 className="font-display text-2xl text-brown md:text-3xl">{winningTeam.name}</h3>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {winningTeam.members.map((member) => (
              <span key={member} className="rounded-full bg-beige-soft/40 px-3.5 py-1.5 text-sm font-medium text-brown">
                {member}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-brown-soft md:text-base">
            {winningTeam.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
