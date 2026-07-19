import { Eyebrow, Reveal } from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import { eventFaqs } from "@/lib/data";

export function EventFAQ() {
  return (
    <section className="bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-4xl leading-[0.95] text-brown md:text-6xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mt-12">
          <FAQAccordion items={eventFaqs} />
        </div>
      </div>
    </section>
  );
}
