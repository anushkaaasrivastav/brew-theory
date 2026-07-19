import Link from "next/link";
import Image from "next/image";
import { AtSign, Mail, MapPin } from "lucide-react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-beige-soft/50 bg-cream-deep/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="The Brew Theory" width={40} height={40} className="h-9 w-9" />
            <span className="font-display text-xl text-brown">The Brew Theory</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brown-soft">
            Making cafés more than just cafés.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base text-brown">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brown-soft transition-colors hover:text-blush-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-brown">Get In Touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-brown-soft">
            <li className="flex items-center gap-2.5">
              <AtSign size={16} className="text-blush-deep" />
              <a href="https://instagram.com/thebrewtheory.co" target="_blank" rel="noopener noreferrer" className="hover:text-blush-deep">
                @thebrewtheory.co
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-blush-deep" />
              <a href="mailto:thebrewtheory.co@gmail.com" className="hover:text-blush-deep">
                thebrewtheory.co@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="text-blush-deep" />
              <span>Lucknow, Uttar Pradesh</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige-soft/50 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-brown-soft">
          © 2026 The Brew Theory. Making cafés more than just cafés.
        </p>
      </div>
    </footer>
  );
}
