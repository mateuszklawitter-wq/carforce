"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Loader2,
  Tag,
  Truck,
  Gift,
} from "lucide-react";
import { SHOPIFY_URL } from "@/lib/constants";

// TODO: replace with live count from DB / API endpoint
const SIGNUP_COUNT = 147;

const BENEFITS = [
  { icon: Tag,  label: "Cena premierowa", sub: "Niższa tylko dla zapisanych" },
  { icon: Truck, label: "Priorytetowa wysyłka", sub: "Jako pierwsi dostaniecie produkt" },
  { icon: Gift,  label: "Pakiet akcesoriów", sub: "Gratis dla pierwszych 100 osób" },
];

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
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(227,0,15,0.09) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e3000f]/25 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-full px-4 py-2">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#e3000f] text-[10px]">★</span>
              ))}
            </span>
            <span className="text-[#555555] text-xs font-medium">
              {/* TODO: replace with live count */}
              <span className="text-white font-bold">{SIGNUP_COUNT}</span> detailerów już na&nbsp;liście
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.05 }}
          className="font-extrabold text-white text-center tracking-[-0.03em] leading-[1.05] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          {/* TODO: final copy */}
          Bądź pierwszy.<br />
          Odbierz ofertę&nbsp;<span className="text-[#e3000f]">pre-order.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
          className="text-[#555555] text-center text-sm leading-[1.9] mb-10 max-w-lg mx-auto"
        >
          {/* TODO: final copy */}
          Zostaw adres email i&nbsp;otrzymasz powiadomienie o premierze
          z&nbsp;linkiem do zakupu w specjalnej cenie — zanim maszyna
          trafi do ogólnej sprzedaży.
        </motion.p>

        {/* 3 benefit chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {BENEFITS.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-[#0f0f0f] border border-[#1e1e1e] rounded-[4px] px-4 py-3"
            >
              <Icon size={14} className="text-[#e3000f] shrink-0" />
              <div>
                <p className="text-white text-[11px] font-semibold">{label}</p>
                <p className="text-[#444444] text-[10px]">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form / success */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-14 h-14 rounded-full bg-[rgba(227,0,15,0.08)] border border-[rgba(227,0,15,0.2)] flex items-center justify-center">
                  <CheckCircle2 size={26} className="text-[#e3000f]" />
                </div>
                <p className="text-white text-xl font-bold">
                  {/* TODO: final copy */}
                  Jesteś na liście!
                </p>
                <p className="text-[#555555] text-sm text-center max-w-xs leading-relaxed">
                  {/* TODO: final copy */}
                  Wyślemy Ci link do zakupu w specjalnej cenie premierowej
                  w&nbsp;dniu premiery — 10&nbsp;czerwca&nbsp;2026.
                </p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    placeholder="twoj@email.pl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    aria-label="Adres email"
                    className="flex-1 h-12 bg-[#0a0a0a] border border-[#1e1e1e] focus:border-[#e3000f] focus:outline-none focus:shadow-[0_0_0_1px_rgba(227,0,15,0.15)] rounded-[4px] px-4 text-white text-sm placeholder:text-[#2e2e2e] transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 h-12 px-6 text-[12px] font-semibold tracking-[0.07em] uppercase bg-[#e3000f] text-white rounded-[4px] hover:bg-[#b8000c] disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 shadow-[0_0_25px_rgba(227,0,15,0.2)] hover:shadow-[0_0_40px_rgba(227,0,15,0.4)] flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      /* TODO: final copy */
                      "Powiadom mnie o premierze"
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[#e3000f] text-xs">{errorMsg}</p>
                )}
                <p className="text-[#2e2e2e] text-[11px] text-center mt-1">
                  {/* TODO: final copy */}
                  Bez spamu. Jeden email w dniu premiery z ofertą specjalną.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Divider + shop link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-[#111111] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs"
        >
          <p className="text-[#333333]">
            {/* TODO: final copy */}
            Chcesz zamówić już teraz?
          </p>
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#666666] hover:text-white transition-colors tracking-wide uppercase"
          >
            Przejdź do sklepu CarForce
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
