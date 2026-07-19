import type { Metadata } from "next";
import { AtSign, Mail, MapPin } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Café owner, business, or creator with an idea? Get in touch with The Brew Theory in Lucknow.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blush-soft/40 blur-3xl blob-drift-a" />

      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-10">
        <Reveal className="flex flex-col justify-center">
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="font-display text-4xl leading-tight text-brown md:text-5xl">
            Let&apos;s build something together
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-brown-soft md:text-lg">
            If you&apos;re a café owner, business, creator, or someone with an exciting idea,
            we&apos;d love to collaborate.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <a
              href="https://instagram.com/thebrewtheory.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-beige-soft/50 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-soft/50 text-blush-deep">
                <AtSign size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brown-soft">Instagram</p>
                <p className="text-sm font-medium text-brown">@thebrewtheory.co</p>
              </div>
            </a>

            <a
              href="mailto:thebrewtheory.co@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-beige-soft/50 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep hover:shadow-[0_12px_28px_rgba(207,118,132,0.15)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-soft/50 text-blush-deep">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brown-soft">Email</p>
                <p className="text-sm font-medium text-brown">thebrewtheory.co@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-beige-soft/50 bg-white/70 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-soft/50 text-blush-deep">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brown-soft">Location</p>
                <p className="text-sm font-medium text-brown">Lucknow, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-beige-soft/50 bg-white/70 p-6 backdrop-blur-sm md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
