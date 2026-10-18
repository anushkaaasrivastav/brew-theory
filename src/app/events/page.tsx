import type { Metadata } from "next";
import { EventsHero } from "@/components/events/EventsHero";
import { CaseRecap } from "@/components/events/CaseRecap";
import { WinningTeamSection } from "@/components/events/WinningTeamSection";
import { WhatYoullExperience } from "@/components/events/WhatYoullExperience";
import { EventTimeline } from "@/components/events/EventTimeline";
import { GallerySection } from "@/components/events/GallerySection";
import { TestimonialsSection } from "@/components/events/TestimonialsSection";
import { EventFAQ } from "@/components/events/EventFAQ";
import { EventClosedNotice } from "@/components/events/EventClosedNotice";
import { BrewRoomFeature } from "@/components/events/BrewRoomFeature";
import { MoreExperiences } from "@/components/events/MoreExperiences";
import { ClosingBanner } from "@/components/events/ClosingBanner";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The Receipt Never Lies: Brew Theory's first immersive murder mystery experience, hosted at Vij House Café, Lucknow. See how it went, the winning team, and the gallery from a sold-out afternoon. Plus The Brew Room, our newest digital experience.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <CaseRecap />
      <WinningTeamSection />
      <WhatYoullExperience />
      <EventTimeline />
      <GallerySection />
      <TestimonialsSection />
      <EventFAQ />
      <EventClosedNotice />
      <BrewRoomFeature />
      <MoreExperiences />
      <ClosingBanner />
    </>
  );
}
