"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import { LAUNCH_DATE } from "@/lib/constants";

const ease = "easeOut" as const;

const STATS = [
  { label: "Moc", value: "1200 W" },
  { label: "Prędkość", value: "600–6500 rpm" },
  { label: "Waga", value: "2,4 kg" },
  { label: "Gwarancja", value: "12 miesięcy" },
];

/* Corner bracket overlay */
function Brackets() {
  const corner = "absolute w-6 h-6 border-[#e3000f]/50 border-solid";
  return (
    <>
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

function ProductVisual() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
      {/* Glow pool underneath */}
      <div
        aria-hidden
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse, rgba(227,0,15,0.35) 0%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Main container — floats */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        className="relative z-10 w-full h-full"
      >
        <div className="relative w-full h-full rounded-[6px] border border-[#222222] bg-[#0f0f0f] overflow-hidden flex items-center justify-center">
          <Brackets />

          {/* Inner subtle grid lines */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Scan line animation */}
          <div
            aria-hidden
            className="absolute inset-x-0 h-16 animate-scan opacity-[0.04] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(227,0,15,0.8), transparent)",
            }}
          />

          {/* HUD ring */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border border-[#222222] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-[rgba(227,0,15,0.4)]" />
                </div>
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e3000f]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                style={{ originX: "50%", originY: "3rem" }}
              />
            </div>
            <div className="text-center">
              <p className="text-[#3a3a3a] text-[10px] font-semibold tracking-[0.22em] uppercase mb-1">
                {/* TODO: replace with product <Image> */}
                Zdjęcie produktu
              </p>
              <p className="text-[#252525] text-[9px] tracking-widest uppercase">
                Render wkrótce
              </p>
            </div>
          </div>

          {/* Corner labels */}
          <span className="absolute top-3 left-4 text-[#2a2a2a] text-[8px] font-mono tracking-wider">
            CF-01
          </span>
          <span className="absolute bottom-3 right-4 text-[#2a2a2a] text-[8px] font-mono tracking-wider">
            1200W
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0d0d0d] overflow-hidden pt-16">
      {/* Large ambient red glow — bottom centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[1000px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(227,0,15,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Secondary glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 w-[400px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(227,0,15,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ─────────── MAIN GRID ─────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-12 xl:gap-20 items-center py-20 lg:py-28">

        {/* LEFT */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-3 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e3000f] animate-pulse" />
            <span className="label">
              {/* TODO: final copy */}
              Wkrótce w sprzedaży &nbsp;·&nbsp; 10 Czerwca 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-extrabold text-white leading-[1.04] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {/* TODO: final copy */}
            Profesjonalne<br />
            <span className="text-[#e3000f]">polerowanie.</span><br />
            W Twoich rękach.
          </motion.h1>

          {/* Red hairline */}
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.25 }}
            style={{ originX: 0 }}
            className="hairline"
          />

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.22 }}
            className="text-[#666666] text-base leading-[1.75] max-w-[480px]"
          >
            {/* TODO: final copy */}
            Pierwsza maszyna polerska pod marką CarForce — zaprojektowana przez
            detailerów z&nbsp;Gdyni dla detailerów. Moc, precyzja i niezawodność
            w&nbsp;jednym urządzeniu.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.34 }}
          >
            <p className="label mb-3">Do premiery pozostało</p>
            <Countdown target={LAUNCH_DATE} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.46 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="group flex items-center gap-2 h-12 px-7 text-[13px] font-semibold tracking-[0.07em] uppercase bg-[#e3000f] text-white rounded-[4px] hover:bg-[#b8000c] transition-all duration-200 shadow-[0_0_30px_rgba(227,0,15,0.25)] hover:shadow-[0_0_45px_rgba(227,0,15,0.45)]"
            >
              {/* TODO: final copy */}
              Zapisz się na pre-order
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("specs")}
              className="flex items-center gap-2 h-12 px-7 text-[13px] font-semibold tracking-[0.07em] uppercase border border-[#2a2a2a] text-[#888888] rounded-[4px] hover:border-[#e3000f]/40 hover:text-white transition-all duration-200"
            >
              {/* TODO: final copy */}
              Specyfikacja
            </button>
          </motion.div>
        </div>

        {/* RIGHT — product visual */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <ProductVisual />
        </motion.div>
      </div>

      {/* ─────────── STAT CHIPS ─────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full"
      >
        <div className="flex flex-wrap gap-2">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group flex items-center gap-3 bg-[#0f0f0f] border border-[#1e1e1e] hover:border-[#2e2e2e] rounded-[4px] px-4 py-3 transition-colors"
            >
              <div className="w-px h-5 bg-[#e3000f] opacity-70 shrink-0" />
              <div>
                <p className="text-[#444444] text-[9px] uppercase tracking-[0.16em] font-semibold">
                  {s.label}
                </p>
                <p className="text-white text-sm font-bold leading-tight">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollTo("video")}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1.5 text-[#333333] hover:text-[#e3000f] transition-colors group"
        >
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
