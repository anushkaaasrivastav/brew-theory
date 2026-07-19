"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode, useRef, useState } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block rounded-full bg-blush-soft/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blush-deep">
      {children}
    </span>
  );
}

/**
 * A section header with an explicit index number and a heavy top rule — the
 * layout break is meant to register at a glance, not on close inspection.
 * `align="split"` puts the label/number on the left and the headline on the
 * right for a masthead feel; `align="center"` keeps the simple centered form.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "split",
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "split" | "center";
  light?: boolean;
}) {
  const textColor = light ? "text-white" : "text-brown";
  const softColor = light ? "text-cream/80" : "text-brown-soft";

  if (align === "center") {
    return (
      <div className={`section-break mx-auto max-w-2xl pt-8 text-center ${light ? "border-white/20" : ""}`}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={`font-display text-4xl leading-[0.95] ${textColor} md:text-6xl`}>{title}</h2>
        {description ? <p className={`mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg ${softColor}`}>{description}</p> : null}
      </div>
    );
  }

  return (
    <div className={`section-break grid gap-6 pt-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-14 ${light ? "border-white/20" : ""}`}>
      <div className="flex items-start gap-3 md:flex-col md:items-start md:gap-4">
        <span className={`font-display text-sm font-bold tabular-nums ${softColor}`}>{index}</span>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <div>
        <h2 className={`font-display text-4xl leading-[0.95] ${textColor} md:text-6xl`}>{title}</h2>
        {description ? <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${softColor}`}>{description}</p> : null}
      </div>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Arrow that shifts right on hover only (no idle animation), matching Apple/Linear-style restraint. */
export function SlidingArrow({ size = 16 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      variants={{ rest: { x: 0 }, hover: { x: 3 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

type ButtonProps = {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Only Hero and Final CTA "Partner With Us" buttons should set this to true. */
  magnetic?: boolean;
  /** "light" is a white pill for use on dark backgrounds (e.g. the CTA banner). */
  variant?: "dark" | "light";
  /** Opens href in a new tab with rel="noopener noreferrer", for external destinations. */
  external?: boolean;
};

function useMagnetic(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}

export function PrimaryButton({
  href,
  children,
  onClick,
  type = "button",
  magnetic = false,
  variant = "dark",
  external = false,
}: ButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(magnetic);
  const [pressed, setPressed] = useState(false);

  const classes =
    variant === "light"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brown shadow-lg transition-[background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-blush-soft"
      : "inline-flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(74,52,44,0.16)] transition-[background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-blush-deep hover:shadow-[0_10px_26px_rgba(207,118,132,0.28)]";

  const wrapperProps = magnetic
    ? {
        style: { x: springX, y: springY, scale: pressed ? 0.96 : 1 },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        transition: { scale: { type: "spring" as const, stiffness: 400, damping: 16 } },
      }
    : { style: { scale: pressed ? 0.96 : 1 }, transition: { scale: { type: "spring" as const, stiffness: 400, damping: 16 } } };

  const content = (
    <motion.div
      initial="rest"
      whileHover="hover"
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <motion.div ref={ref as React.RefObject<HTMLDivElement>} {...wrapperProps} className="inline-block">
        <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {content}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button ref={ref as React.RefObject<HTMLButtonElement>} type={type} onClick={onClick} className={classes} {...wrapperProps}>
      {content}
    </motion.button>
  );
}

export function SecondaryButton({ href, children, onClick, external = false }: Omit<ButtonProps, "type" | "magnetic">) {
  const [pressed, setPressed] = useState(false);
  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-brown/15 bg-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brown backdrop-blur-sm transition-[color,border-color] duration-300 hover:-translate-y-0.5 hover:border-blush-deep hover:text-blush-deep";

  const content = (
    <motion.div
      initial="rest"
      whileHover="hover"
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
    >
      {children}
    </motion.div>
  );

  const style = { scale: pressed ? 0.96 : 1 };
  const transition = { scale: { type: "spring" as const, stiffness: 400, damping: 16 } };

  if (href) {
    return (
      <motion.div style={style} transition={transition} className="inline-block">
        <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {content}
        </Link>
      </motion.div>
    );
  }
  return (
    <motion.button onClick={onClick} className={classes} style={style} transition={transition}>
      {content}
    </motion.button>
  );
}
