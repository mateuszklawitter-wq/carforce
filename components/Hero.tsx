"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = "easeOut" as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease, delay },
});

const STATS = [
  { label: "Moc", value: "1200 W" },
  { label: "Obr./min", value: "600–6500" },
  { label: "Gwarancja", value: "12 miesięcy" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d] pt-16">
      {/* Red radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(227,0,15,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* LEFT: text */}
        <div className="flex flex-col gap-6">
          <motion.span
            {...fadeUp(0)}
            className="section-badge w-fit border border-[rgba(227,0,15,0.3)] px-3 py-1 rounded-[4px]"
          >
            {/* TODO: final copy */}
            Wkrótce w sprzedaży &mdash; 10 czerwca 2025
          </motion.span>

          <motion.h1
            {...fadeUp(0.12)}
            className="font-extrabold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}
          >
            {/* TODO: final copy */}
            Profesjonalne{" "}
            <span className="text-[#e3000f]">polerowanie.</span>
            <br />W Twoich rękach.
          </motion.h1>

          <motion.p
            {...fadeUp(0.24)}
            className="text-[#888888] text-lg leading-relaxed max-w-lg"
          >
            {/* TODO: final copy */}
            Pierwsza maszyna polerska pod marką CarForce — zaprojektowana przez
            detailerów dla detailerów. Precyzja, moc i niezawodność w jednym
            urządzeniu.
          </motion.p>

          <motion.div
            {...fadeUp(0.36)}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button size="lg" onClick={() => scrollTo("waitlist")}>
              {/* TODO: final copy */}
              Zapisz się na pre-order
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollTo("specs")}>
              {/* TODO: final copy */}
              Zobacz specyfikację
            </Button>
          </motion.div>
        </div>

        {/* RIGHT: product image placeholder */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind product */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(227,0,15,0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          {/* TODO: replace with real product <Image> once renders are ready */}
          <div className="relative z-10 w-full" style={{ aspectRatio: "4/3" }}>
            <div
              className="relative w-full h-full rounded-[6px] border border-[#222222] flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #161616 0%, #1a1a1a 50%, #111111 100%)",
              }}
            >
              {/* Shimmer overlay */}
              <div
                aria-hidden
                className="absolute inset-0 animate-shimmer"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <div className="text-center select-none relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#222222] flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#e3000f] opacity-60" />
                </div>
                <p className="text-[#555555] text-sm font-medium tracking-widest uppercase">
                  [ ZDJĘCIE PRODUKTU ]
                </p>
                <p className="text-[#333333] text-xs mt-1">Render wkrótce</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        {...fadeUp(0.48)}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full"
      >
        <div className="flex flex-wrap gap-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 bg-[#111111] border border-[#222222] rounded-[4px] px-4 py-2.5"
            >
              <div className="w-0.5 h-6 bg-[#e3000f] rounded-full shrink-0" />
              <div>
                <p className="text-[#888888] text-xs uppercase tracking-wide font-medium">
                  {s.label}
                </p>
                <p className="text-white text-sm font-bold">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("video")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#444444] hover:text-[#e3000f] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
