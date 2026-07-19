"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import confetti from "canvas-confetti";

const fields = [
  { id: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { id: "phone", label: "Phone", type: "tel", required: false, placeholder: "+91 98765 43210" },
  { id: "organization", label: "Organization / Café Name", type: "text", required: false, placeholder: "Optional" },
];

function SuccessCheck() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    confetti({
      particleCount: 70,
      spread: 65,
      startVelocity: 32,
      origin: { y: 0.6 },
      colors: ["#e89aa5", "#cf7684", "#c6a180", "#fffdfb"],
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-3xl border border-beige-soft/50 bg-white/70 p-10 text-center"
    >
      <svg viewBox="0 0 60 60" className="h-14 w-14">
        <motion.circle
          cx="30"
          cy="30"
          r="27"
          fill="none"
          stroke="#e89aa5"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M18 31 L26 39 L42 21"
          fill="none"
          stroke="#cf7684"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
        />
      </svg>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 font-display text-xl text-brown"
      >
        Message sent
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-2 max-w-sm text-sm text-brown-soft"
      >
        Thank you for reaching out. We read every message and will get back to you soon.
      </motion.p>
    </motion.div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn(
        "Web3Forms is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment to enable real submissions."
      );
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey ?? "");
    formData.append("subject", "New partnership inquiry from The Brew Theory website");
    formData.append("from_name", "The Brew Theory Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessCheck />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "organization" ? "sm:col-span-2" : ""}>
            <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-brown">
              {field.label} {field.required && <span className="text-blush-deep">*</span>}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-beige-soft bg-white/80 px-4 py-3 text-sm text-brown placeholder:text-brown-soft/50 focus:border-blush-deep"
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brown">
          Message <span className="text-blush-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your café, your audience, or your idea…"
          className="w-full resize-none rounded-xl border border-beige-soft bg-white/80 px-4 py-3 text-sm text-brown placeholder:text-brown-soft/50 focus:border-blush-deep"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-blush-deep">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href="mailto:thebrewtheory.co@gmail.com" className="font-semibold underline">
            thebrewtheory.co@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brown px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(74,52,44,0.18)] transition-all hover:scale-[1.02] hover:bg-blush-deep disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={status} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            {status === "loading" ? "Sending…" : "Send Message"}
            {status === "idle" && <Send size={16} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </form>
  );
}
