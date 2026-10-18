/** Single source of truth for every link out to The Brew Room. */
export const BREW_ROOM_URL = "https://thebrewroom.vercel.app/";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

/** Footer keeps its original link set (including Services) unchanged. */
export const footerLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: BREW_ROOM_URL, label: "The Brew Room ↗", external: true },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon:
    | "calendar"
    | "handshake"
    | "users"
    | "network"
    | "mic"
    | "palette"
    | "dice"
    | "share2"
    | "megaphone"
    | "sparkles";
};

export const services: Service[] = [
  {
    slug: "cafe-event-planning",
    title: "Café Event Planning",
    description: "End-to-end planning for one-off or recurring experiences inside your café.",
    detail:
      "From concept to run of show, we plan events that fit your space, your hours, and your regulars, so you get a full experience without touching a checklist.",
    icon: "calendar",
  },
  {
    slug: "brand-collaborations",
    title: "Brand Collaborations",
    description: "We connect cafés with brands, creators, and local businesses for joint experiences.",
    detail:
      "We broker partnerships that make sense, like a stationery brand at a journaling night or a local roastery at a tasting, so everyone brings their own audience to the table.",
    icon: "handshake",
  },
  {
    slug: "community-meetups",
    title: "Community Meetups",
    description: "Casual, recurring gatherings that turn strangers into regulars.",
    detail:
      "Book clubs, hobby circles, and interest-based meetups hosted in your café, built to bring the same faces back week after week.",
    icon: "users",
  },
  {
    slug: "networking-sessions",
    title: "Networking Sessions",
    description: "Structured mixers for students, founders, and professionals in Lucknow.",
    detail:
      "We design the icebreakers, the flow, and the guest mix so your café becomes the place where the right people meet each other.",
    icon: "network",
  },
  {
    slug: "open-mic-events",
    title: "Open Mic Events",
    description: "A stage, a mic, and a room full of people ready to listen.",
    detail:
      "We handle sign ups, sound, sequencing, and hosting, so poets, musicians, and storytellers just need to show up.",
    icon: "mic",
  },
  {
    slug: "creative-workshops",
    title: "Creative Workshops",
    description: "Hands-on sessions in art, journaling, crafts, and more.",
    detail:
      "We source instructors, plan materials, and manage sign-ups for workshops that give your café a reason to be visited on a Tuesday afternoon.",
    icon: "palette",
  },
  {
    slug: "game-nights",
    title: "Game Nights",
    description: "Board games, quizzes, and social play that fill tables and turn up the noise.",
    detail:
      "Curated formats like trivia, mafia, and board game flights, with hosts who keep the energy up from the first team to the last.",
    icon: "dice",
  },
  {
    slug: "social-media-promotions",
    title: "Social Media Promotions",
    description: "Content and campaigns that put your event in front of the right crowd.",
    detail:
      "Reels, event pages, and cross posts across our community channels so your event doesn't just happen, it gets seen.",
    icon: "share2",
  },
  {
    slug: "event-marketing",
    title: "Event Marketing",
    description: "Full-funnel promotion, from the first teaser to the last reminder.",
    detail:
      "We plan the countdown, from teaser posts to RSVP pushes to day of reminders, so your event fills up instead of trickling in.",
    icon: "megaphone",
  },
  {
    slug: "audience-engagement",
    title: "Audience Engagement",
    description: "On-ground hosting and interaction design that keeps energy high.",
    detail:
      "Icebreakers, activities, and live hosting that turn a room of quiet strangers into a room that doesn't want to leave.",
    icon: "sparkles",
  },
];

export const faqs = [
  {
    question: "Is The Brew Theory a café?",
    answer:
      "No. We don't own or run any café. We're a volunteer-led community that designs and hosts events inside cafés we partner with across Lucknow.",
  },
  {
    question: "How can my café partner with you?",
    answer:
      "Reach out through our contact form or DM us on Instagram. We'll set up a quick call to understand your space, your regulars, and the kind of experience that fits best.",
  },
  {
    question: "Is there a cost for cafés to partner with The Brew Theory?",
    answer:
      "It depends on the event format. Some collaborations are fully sponsored by us, others are shared, and we'll walk you through the model that fits once we understand your café.",
  },
  {
    question: "Can I attend an event as a regular person, not a café owner?",
    answer:
      "Absolutely, that's the whole point. Follow @thebrewtheory.co on Instagram to hear about upcoming events near you first.",
  },
  {
    question: "What kind of cafés do you work with?",
    answer:
      "Any café in Lucknow looking to bring in new faces and give existing regulars something to look forward to, big or small, quiet or buzzing.",
  },
];

export const stats = [
  { label: "Cafés We Own", value: 0, suffix: "", note: "that's the whole point" },
  { label: "Experience Formats", value: services.length, suffix: "", note: "and counting" },
  { label: "City We Call Home", value: 1, suffix: "", note: "Lucknow" },
  { label: "Volunteer-Led", value: 100, suffix: "%", note: "no shareholders, just people" },
];

export const featuredEvent = {
  title: "The Receipt Never Lies",
  category: "Murder Mystery Investigation",
  description:
    "A customer has been found dead in the café, and the only clue left behind is their final receipt.",
  detail:
    "Step into the role of a detective as you analyze evidence, uncover hidden motives, and piece together the truth. Work with your team to examine witness statements, receipts, timelines, and confidential case files released throughout the investigation. Every clue matters, and every detail could expose the killer.",
  concluded: true,
  statusBadge: "House Full • Completed",
  location: "Vij House Café, Lucknow",
  date: "15 July 2026",
  thankYouNote:
    "Thank you to everyone who joined us for our very first immersive murder mystery experience. Every slot was filled, and the enthusiasm, detective work, and unforgettable atmosphere made this event an incredible success. This was only the beginning.",
};

export const eventStats = [
  { icon: "home" as const, label: "House Full" },
  { icon: "users" as const, label: "Detective Teams Competed" },
  { icon: "trophy" as const, label: "One Winning Team" },
  { icon: "coffee" as const, label: "Hosted at Vij House Café, Lucknow" },
];

export const winningTeam = {
  badge: "CASE SOLVED",
  name: "TEAM AGNI",
  members: ["Vartika Agnihotri", "Akanksha Agnihotri"],
  description:
    "After carefully analysing every clue, connecting witness statements, and reconstructing the timeline, Team AGNI successfully solved the mystery and emerged as the winners of The Receipt Never Lies. Their teamwork, observation skills, and logical reasoning earned them the title of Brew Theory's very first Detective Champions.",
};

export const galleryImages = [
  { src: "/images/gallery/event-04.jpg", alt: "A detective holds up the Vij House Café business expansion agreement, a key piece of evidence" },
  { src: "/images/gallery/event-05.jpg", alt: "Case documents laid out on the table, including forensic reports, a floor plan, and fingerprint evidence" },
  { src: "/images/gallery/event-01.jpg", alt: "A Brew Theory organizer preparing case materials ahead of the investigation" },
  { src: "/images/gallery/event-03.jpg", alt: "A team of detectives huddled together, examining evidence and case files" },
  { src: "/images/gallery/event-06.jpg", alt: "A Brew Theory host briefing a table of detectives at the start of the investigation" },
  { src: "/images/gallery/event-07.jpg", alt: "Detectives sorting through the case dossier over coffee, evidence cards spread across the table" },
  { src: "/images/gallery/event-02.jpg", alt: "Two detectives reviewing witness statements and case notes together" },
];

export const eventTestimonials = [
  {
    name: "Vartika Agnihotri",
    quote:
      "I've never attended anything like this before. Every clue felt intentional, every suspect had us second-guessing ourselves, and the final reveal was incredible. Easily one of the most unique experiences I've had.",
  },
  {
    name: "Atharv",
    quote:
      "The production quality genuinely surprised me. From the detective badges to the forensic reports and interrogation website, everything felt extremely immersive. Looking forward to the next mystery.",
  },
  {
    name: "Shweta",
    quote:
      "The attention to detail was amazing. Every piece of evidence looked authentic, and solving the case with friends made it even more fun.",
  },
  {
    name: "Avyan",
    quote:
      "It didn't feel like a normal café event at all, we completely forgot we were sitting in a café because we were so invested in solving the mystery. Fantastic experience.",
  },
  {
    name: "Advik",
    quote:
      "The Brew Theory delivered something completely different. Amazing storytelling, clever puzzles, and an ending that genuinely surprised us. Can't wait for the next event.",
  },
];

export const experienceHighlights = [
  { icon: "search" as const, title: "Investigate the Crime", description: "Search through evidence and uncover hidden clues." },
  { icon: "receipt" as const, title: "Decode the Receipt", description: "The victim's final receipt hides more than it seems." },
  { icon: "fileSearch" as const, title: "Examine Evidence", description: "Analyze witness statements, timelines and confidential documents." },
  { icon: "users" as const, title: "Work as a Team", description: "Collaborate, debate theories and solve the mystery together." },
  { icon: "eye" as const, title: "Reveal the Killer", description: "Present your final accusation before the truth is revealed." },
];

export const eventTimeline = [
  { title: "Registered", description: "Detectives signed up individually or brought their team to secure a spot." },
  { title: "Arrived at Vij House Café", description: "Showed up at the venue ready to step into character as a detective." },
  { title: "Received Their Case File", description: "Got a confidential dossier of evidence, receipts, and witness statements." },
  { title: "Investigated the Evidence", description: "Worked through clues, timelines, and testimonies as a team." },
  { title: "Revealed the Killer", description: "Presented their final accusation before the truth came to light." },
];

export const eventFaqs = [
  {
    question: "Could detectives participate alone?",
    answer: "Yes. Individual registrations were welcome, and teams could also register together.",
  },
  {
    question: "Did participants need prior experience?",
    answer: "No. Everything was explained before the investigation began.",
  },
  {
    question: "How long did the event last?",
    answer: "Approximately 90 minutes.",
  },
  {
    question: "Where was it hosted?",
    answer: "Vij House Café, Lucknow.",
  },
];

/**
 * The Brew Room: a digital experience made under The Brew Theory. It is live
 * and open to anyone, so it has no date, venue, ticket or registration.
 * Every Brew Room link on this site reads its URL from here.
 */
export const brewRoom = {
  url: BREW_ROOM_URL,
  category: "Digital Experience",
  title: "The Brew Room",
  tagline: "Your little corner of the internet.",
  homeDescription:
    "A digital experience for custom playlists, photobooth moments, mini games, creative inspiration, and thoughts left behind by strangers. Step in, explore a little, and leave something of your own.",
  homeCta: "Enter The Brew Room",
  eyebrow: "A New Kind Of Brew Theory Experience",
  subheading: "A little world of your own, tucked away on the internet.",
  eventsDescription: [
    "Somewhere between a playlist that gets you, a photo you didn't plan on taking, a game you stumbled into, and a stranger's thoughts waiting at your table, there's The Brew Room.",
    "Explore the library, make the experience your own, and leave a little something for the next person who finds their way here.",
  ],
  eventsCta: "Explore The Brew Room",
  features: [
    { icon: "music" as const, title: "Customised playlists", description: "A personal soundtrack for the mood you're in." },
    { icon: "camera" as const, title: "Photobooth", description: "A space to capture moments." },
    { icon: "book" as const, title: "Library", description: "Browse ideas and find creative inspiration." },
    { icon: "gamepad" as const, title: "Mini games", description: "Small interactive experiences to explore and play." },
  ],
  leaveAtTheTable: {
    title: "Leave at the Table",
    description:
      "Leave a thought for someone else to discover, and read the ones left behind by strangers who sat here before you.",
    motto: "Make something. Leave something. Find something someone else left behind.",
  },
};
