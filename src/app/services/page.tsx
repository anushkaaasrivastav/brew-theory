import type { Metadata } from "next";
import { Eyebrow, Reveal, PrimaryButton, SlidingArrow } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { services } from "@/lib/data";
import { TrendingUp, MessageCircle, Share2, Sparkles as SparklesIcon, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From open mics to networking sessions, explore the experience formats The Brew Theory brings into partner cafés across Lucknow.",
};

const benefits = [
  { icon: TrendingUp, title: "Higher Footfall", body: "New faces walk through your door for the event, and stay for the coffee." },
  { icon: MessageCircle, title: "Better Customer Engagement", body: "Structured experiences give regulars a reason to talk, return, and bring friends." },
  { icon: Share2, title: "Increased Social Visibility", body: "Every event is promoted across our channels, putting your café in front of a wider audience." },
  { icon: SparklesIcon, title: "Fresh Experiences", body: "Your regulars get something new to look forward to, without you managing the logistics." },
  { icon: Users2, title: "Community Building", body: "Your café becomes known as a hub, the place where Lucknow's community actually happens." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-beige-soft/40 blur-3xl blob-drift-b" />
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display text-4xl leading-tight text-brown md:text-5xl">
            Experience formats, built for your café
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brown-soft md:text-lg">
            Ten ways we help cafés across Lucknow turn ordinary afternoons into experiences people
            plan their week around.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>The Partnership</Eyebrow>
            <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
              Why Partner With The Brew Theory?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-beige-soft/50 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blush-deep/60 hover:shadow-[0_18px_40px_rgba(207,118,132,0.18)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-soft to-beige-soft text-blush-deep">
                    <benefit.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-brown">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brown-soft">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <PrimaryButton href="/contact">
              Start A Partnership <SlidingArrow />
            </PrimaryButton>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-12">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
