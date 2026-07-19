import { Star, Quote } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/ui";
import { eventTestimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Detective Reviews</Eyebrow>
        <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
          What Our Detectives Had to Say
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {eventTestimonials.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={(i % 3) * 0.07} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-beige-soft/40 bg-white/70 p-6 shadow-[0_4px_20px_rgba(74,52,44,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blush-deep/50 hover:shadow-[0_14px_32px_rgba(207,118,132,0.15)] md:p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-blush-deep" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote size={20} className="text-blush-soft" aria-hidden="true" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brown-soft">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-5 font-display text-base text-brown">{testimonial.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
