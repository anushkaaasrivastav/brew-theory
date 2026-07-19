"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 800);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status !== "idle"}
          className="w-full rounded-full border border-beige-soft bg-white/80 px-5 py-3.5 text-sm text-brown placeholder:text-brown-soft/60 focus:border-blush-deep"
        />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-blush-deep disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <motion.span key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              <Check size={16} /> Subscribed
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              {status === "loading" ? "Sending…" : "Subscribe"}
              {status === "idle" && <ArrowRight size={16} />}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
