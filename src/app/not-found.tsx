import { PrimaryButton } from "@/components/ui";
import { Coffee, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center md:px-8">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-soft/40 blur-3xl blob-drift-a" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-beige-soft/40 blur-3xl blob-drift-b" />

      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-soft/50 text-blush-deep">
        <Coffee size={28} />
      </span>
      <h1 className="mt-6 font-display text-5xl text-brown md:text-6xl">This cup&apos;s empty</h1>
      <p className="mt-4 max-w-sm text-base text-brown-soft">
        The page you&apos;re looking for isn&apos;t brewing here. Let&apos;s get you back to something good.
      </p>
      <div className="mt-8">
        <PrimaryButton href="/">
          <ArrowLeft size={16} /> Back To Home
        </PrimaryButton>
      </div>
    </section>
  );
}
