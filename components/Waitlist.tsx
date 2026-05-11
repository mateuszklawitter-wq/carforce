"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2, Users } from "lucide-react";
import { SHOPIFY_URL } from "@/lib/constants";

// TODO: replace with real count from DB / API
const SIGNUP_COUNT = 147;

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error ?? "Coś poszło nie tak. Spróbuj ponownie.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Błąd połączenia. Sprawdź internet i spróbuj ponownie.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative py-32 px-6 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(227,0,15,0.08) 0%, transparent 55%)",
        }}
      />
      {/* Top edge line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e3000f]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 bg-[#111111] border border-[#222222] rounded-full px-4 py-2">
            <Users size={13} className="text-[#e3000f]" />
            <span className="text-[#888888] text-xs font-medium">
              {/* TODO: replace with live count from DB */}
              <span className="text-white font-bold">{SIGNUP_COUNT}</span> osób już na liście
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.05 }}
          className="font-extrabold text-white text-center tracking-[-0.03em] leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          {/* TODO: final copy */}
          Bądź pierwszy.<br />
          Odbierz ofertę&nbsp;<span className="text-[#e3000f]">pre-order.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
          className="text-[#555555] text-center text-sm leading-[1.9] mb-12 max-w-lg mx-auto"
        >
          {/* TODO: final copy */}
          Zapisz się i zyskaj specjalną cenę premierową, priorytetową wysyłkę
          oraz ekskluzywny pakiet akcesoriów gratis — dla pierwszych 100&nbsp;zamawiających.
        </motion.p>

        {/* Form or success */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(227,0,15,0.08)] border border-[rgba(227,0,15,0.2)] flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-[#e3000f]" />
                </div>
                <p className="text-white text-xl font-bold">
                  {/* TODO: final copy */}
                  Zapisano!
                </p>
                <p className="text-[#555555] text-sm text-center max-w-xs">
                  {/* TODO: final copy */}
                  Damy Ci znać jako pierwszemu. Sprawdź skrzynkę —
                  wyślemy potwierdzenie.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="twoj@email.pl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    aria-label="Adres email"
                    className="flex-1 h-12 bg-[#0f0f0f] border border-[#222222] focus:border-[#e3000f] focus:outline-none focus:shadow-[0_0_0_1px_rgba(227,0,15,0.2)] rounded-[4px] px-4 text-white text-sm placeholder:text-[#333333] transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 h-12 px-7 text-[12px] font-semibold tracking-[0.08em] uppercase bg-[#e3000f] text-white rounded-[4px] hover:bg-[#b8000c] disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 shadow-[0_0_25px_rgba(227,0,15,0.2)] hover:shadow-[0_0_40px_rgba(227,0,15,0.4)] flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      /* TODO: final copy */
                      "Zapisz mnie na listę"
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-[#e3000f] text-xs">{errorMsg}</p>
                )}

                <p className="text-[#333333] text-xs text-center mt-1">
                  {/* TODO: final copy */}
                  Bez spamu. Tylko informacja o premierze i ofercie specjalnej.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Secondary shop link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 pt-8 border-t border-[#161616] text-center"
        >
          <p className="text-[#444444] text-xs">
            {/* TODO: final copy */}
            Chcesz zamówić już teraz?{" "}
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Przejdź do sklepu
              <ArrowRight size={12} />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
