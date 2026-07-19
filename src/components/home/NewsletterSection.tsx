import { SectionHeading } from "@/components/ui";
import { NewsletterForm } from "@/components/NewsletterForm";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="scroll-mt-20 mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
      <SectionHeading
        index="06"
        eyebrow="Stay In The Loop"
        title={<>Never miss an experience</>}
        description="One email, whenever there's something worth showing up for."
        align="center"
      />
      <div className="mt-8">
        <NewsletterForm />
      </div>
    </section>
  );
}
