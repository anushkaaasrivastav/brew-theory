import { Hero } from "@/components/home/Hero";
import { WhyBrewTheory } from "@/components/home/WhyBrewTheory";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UpcomingEvents, Testimonials, PartnerCafes } from "@/components/home/PlaceholderSections";
import { InstagramPreview } from "@/components/home/InstagramPreview";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyBrewTheory />
      <FeaturedExperiences />
      <HowItWorks />
      <UpcomingEvents />
      <Testimonials />
      <PartnerCafes />
      <InstagramPreview />
      <NewsletterSection />
      <CTABanner />
    </>
  );
}
