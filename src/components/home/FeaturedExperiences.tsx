import { SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

const featured = services.slice(0, 6);

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="relative bg-cream-deep/50 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Featured Experiences"
          title={<>Formats we bring to life inside your café</>}
          description="A glimpse of what a Brew Theory collaboration can look like, each one shaped around your space and your regulars."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} tilt />
          ))}
        </div>
      </div>
    </section>
  );
}
