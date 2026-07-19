"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { galleryImages } from "@/lib/data";

function Lightbox({ index, onClose, onPrev, onNext }: { index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const image = galleryImages[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Event photo viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brown/90 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[80vh] w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
        </div>
        <p className="mt-3 text-center text-sm text-cream/80">{image.alt}</p>
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section id="gallery" className="scroll-mt-20 bg-cream-deep/50 px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="The Gallery"
          title={<>Moments from the Investigation</>}
          description="Relive some of our favourite moments from an afternoon filled with mystery, teamwork, coffee, accusations, laughter, and brilliant detective work."
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => {
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border-2 border-brown/10 bg-white shadow-[0_4px_16px_rgba(74,52,44,0.06)] transition-shadow duration-300 hover:border-brown/30 hover:shadow-[0_14px_32px_rgba(74,52,44,0.16)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-brown/0 transition-colors duration-300 group-hover:bg-brown/10">
                      <ZoomIn size={22} className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setActiveIndex(0)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brown/15 bg-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brown backdrop-blur-sm transition-[color,border-color] duration-300 hover:-translate-y-0.5 hover:border-blush-deep hover:text-blush-deep"
          >
            View Full Gallery
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && <Lightbox index={activeIndex} onClose={close} onPrev={prev} onNext={next} />}
      </AnimatePresence>
    </section>
  );
}
