"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-blush-deep ${
        active ? "text-blush-deep" : "text-brown-soft"
      }`}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-blush-deep"
        />
      ) : (
        <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-blush-deep/60 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const rawPadding = useTransform(scrollY, [0, 100], [14, 7]);
  const paddingY = useSpring(rawPadding, { stiffness: 200, damping: 30 });
  const rawLogoScale = useTransform(scrollY, [0, 100], [1, 0.82]);
  const logoScale = useSpring(rawLogoScale, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-[0_2px_20px_rgba(74,52,44,0.06)]" : "bg-transparent"
      }`}
    >
      <motion.nav
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
        className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label="The Brew Theory home">
            <motion.span style={{ scale: logoScale }} className="flex origin-left items-center gap-2.5">
              <Image src="/images/logo.png" alt="The Brew Theory" width={44} height={44} priority className="h-10 w-10 md:h-11 md:w-11" />
              <span className="font-display text-lg tracking-wide text-brown md:text-xl">The Brew Theory</span>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <motion.span
              key={link.href}
              variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <NavLink href={link.href} label={link.label} active={pathname === link.href} />
            </motion.span>
          ))}
          <motion.a
            variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } }}
            href="mailto:thebrewtheory.co@gmail.com?subject=Partnership%20Inquiry%20-%20The%20Brew%20Theory"
            className="rounded-full bg-brown px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-blush-deep"
          >
            Partner With Us
          </motion.a>
        </motion.div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-brown md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 border-t border-beige-soft/60 bg-white/90 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    pathname === link.href ? "bg-blush-soft/40 text-blush-deep" : "text-brown-soft"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:thebrewtheory.co@gmail.com?subject=Partnership%20Inquiry%20-%20The%20Brew%20Theory"
                className="mt-2 rounded-full bg-brown px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
