"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Countdown from "./Countdown";
import { LAUNCH_DATE } from "@/lib/constants";

const e = "easeOut" as const;

const STATS = [
  { l: "Moc",        v: "1200 W"       },
  { l: "Prędkość",   v: "600–6500 rpm" },
  { l: "Skok tłoka", v: "8 mm"         },
  { l: "Waga",       v: "2,4 kg"       },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">

      {/* ── single ambient red glow, right side ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-280px] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px] opacity-90"
          style={{
            background: "radial-gradient(circle, rgba(227,0,15,0.16) 0%, transparent 55%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* ── grid ── */}
      <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] items-center pt-28 lg:pt-32 pb-16 gap-10 lg:gap-16">

        {/* LEFT */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: e }}
            className="flex items-center gap-2.5 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e3000f] animate-pulse" />
            <span className="label">Pre-order · Premiera 10.06.2026</span>
          </motion.div>

          {/* Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: e, delay: 0.08 }}
            className="font-extrabold text-white leading-[0.92] tracking-[-0.045em] mb-7"
            style={{ fontSize: "clamp(3.5rem, 8.5vw, 8rem)" }}
          >
            CF<span className="text-[#e3000f]">–</span>01
          </motion.h1>

          {/* Tagline + sub */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: e, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-white text-xl lg:text-[1.35rem] font-medium tracking-[-0.01em] leading-snug mb-4">
              {/* TODO: final copy */}
              Polerka mimośrodowa. <span className="text-[#555555] font-normal">Made in Gdynia.</span>
            </p>
            <p className="text-[#555555] text-[15px] leading-[1.75] max-w-[440px]">
              {/* TODO: final copy */}
              Profesjonalne polerowanie zaprojektowane przez detailerów. Moc
              przemysłowa i&nbsp;precyzja warsztatowa &mdash; w&nbsp;jednym urządzeniu.
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: e, delay: 0.32 }}
            className="mb-12"
          >
            <p className="label mb-3">Premiera za</p>
            <Countdown target={LAUNCH_DATE} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: e, delay: 0.42 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="group flex items-center gap-2 h-12 px-8 text-[12px] font-bold tracking-[0.1em] uppercase bg-[#e3000f] text-white rounded-[3px] hover:bg-[#b8000c] transition-all shadow-[0_4px_30px_rgba(227,0,15,0.3)] hover:shadow-[0_4px_55px_rgba(227,0,15,0.5)]"
            >
              {/* TODO: final copy */}
              Zarezerwuj pre-order
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("specs")}
              className="h-12 px-8 text-[12px] font-semibold tracking-[0.1em] uppercase border border-[#1e1e1e] text-[#777777] rounded-[3px] hover:border-[#e3000f]/40 hover:text-white transition-all"
            >
              Specyfikacja
            </button>
          </motion.div>
        </div>

        {/* RIGHT — product stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: e, delay: 0.15 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Deep glow */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto w-[110%] h-[110%] animate-pulse-glow"
            style={{
              background: "radial-gradient(ellipse, rgba(227,0,15,0.28) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 w-full max-w-[440px]"
            style={{ aspectRatio: "3/4" }}
          >
            {/* TODO: when machine render is ready, replace inner block with:
                <Image src="/images/machine/cf-01.png" alt="CarForce CF-01"
                       fill className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]" priority />
            */}
            <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,#0d0d0d_55%,#070707_100%)] border border-[#1a1a1a]">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                <p className="text-[#444444] text-[10px] font-semibold tracking-[0.32em] uppercase mb-6">
                  Polerka mimośrodowa
                </p>
                <h2 className="font-extrabold text-white tracking-[-0.06em] leading-none" style={{ fontSize: "clamp(4rem,8vw,6.5rem)" }}>
                  CF<span className="text-[#e3000f]">–</span>01
                </h2>
                <p className="text-[#1f1f1f] text-[9px] tracking-[0.3em] uppercase mt-10">
                  {/* TODO: swap with product render */}
                  Render produktu wkrótce
                </p>
              </div>
              {/* Subtle bottom red glow */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(227,0,15,0.06)] to-transparent pointer-events-none" />
              {/* Subtle inner top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* ── spec strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: e, delay: 0.55 }}
        className="relative z-10 border-t border-[#141414]"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#141414]">
          {STATS.map((s) => (
            <div key={s.l} className="px-6 py-6 first:pl-0">
              <p className="text-[#2e2e2e] text-[10px] font-semibold tracking-[0.18em] uppercase mb-1.5">{s.l}</p>
              <p className="text-white text-2xl font-extrabold tracking-[-0.02em]">{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
