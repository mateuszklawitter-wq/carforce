"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Countdown from "./Countdown";
import { LAUNCH_DATE } from "@/lib/constants";

const e = "easeOut" as const;

const STATS = [
  { label: "Moc silnika",    value: "1200 W"         },
  { label: "Prędkość",       value: "600–6500 rpm"   },
  { label: "Skok tłoka",     value: "8 mm"           },
  { label: "Waga",           value: "2,4 kg"         },
];

/* ─── tiny corner brackets ─── */
function Brackets({ size = 20, opacity = 0.4 }: { size?: number; opacity?: number }) {
  const s = `${size}px`;
  const base = `absolute border-[#e3000f]` as const;
  return (
    <>
      <span style={{ width: s, height: s, opacity }} className={`${base} top-0 left-0 border-t border-l`} />
      <span style={{ width: s, height: s, opacity }} className={`${base} top-0 right-0 border-t border-r`} />
      <span style={{ width: s, height: s, opacity }} className={`${base} bottom-0 left-0 border-b border-l`} />
      <span style={{ width: s, height: s, opacity }} className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">

      {/* ── ambient glow ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[700px] h-[700px] opacity-30"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(227,0,15,0.12) 0%, transparent 65%)" }} />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(227,0,15,0.08) 0%, transparent 60%)" }} />
      </div>

      {/* ── main grid ── */}
      <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-6 grid lg:grid-cols-[1fr_1fr] gap-0 items-stretch pt-16">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center py-20 lg:py-32 lg:pr-16">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: e }}
            className="flex items-center gap-2.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e3000f] animate-pulse" />
            <span className="label">Pre-order · Premiera 10 Czerwca 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: e, delay: 0.08 }}
            className="font-extrabold text-white leading-[1.02] tracking-[-0.035em] mb-5"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.2rem)" }}
          >
            {/* TODO: final product name */}
            CarForce<br />
            <span className="text-[#e3000f]">CF&#8209;01</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: e, delay: 0.18 }}
            className="text-[#555555] text-base leading-[1.8] max-w-[420px] mb-10"
          >
            {/* TODO: final copy */}
            Profesjonalna polerka mimośrodowa stworzona przez detailerów
            z&nbsp;Gdyni. Moc przemysłowa, precyzja warsztatowa —
            w&nbsp;jednym urządzeniu.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: e, delay: 0.28 }}
            className="mb-10"
          >
            <p className="label mb-3">Do premiery pozostało</p>
            <Countdown target={LAUNCH_DATE} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: e, delay: 0.38 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="group flex items-center gap-2 h-12 px-8 text-[12px] font-bold tracking-[0.1em] uppercase bg-[#e3000f] text-white rounded-[3px] hover:bg-[#b8000c] transition-all shadow-[0_4px_30px_rgba(227,0,15,0.3)] hover:shadow-[0_4px_45px_rgba(227,0,15,0.5)]"
            >
              {/* TODO: final copy */}
              Zapisz się na pre-order
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("specs")}
              className="h-12 px-8 text-[12px] font-semibold tracking-[0.1em] uppercase border border-[#242424] text-[#666666] rounded-[3px] hover:border-[#e3000f]/30 hover:text-white transition-all"
            >
              Specyfikacja
            </button>
          </motion.div>
        </div>

        {/* RIGHT — product visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: e, delay: 0.1 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Product glow */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full animate-pulse-glow"
              style={{ background: "radial-gradient(ellipse, rgba(227,0,15,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
          </div>

          {/* Product image container */}
          {/* TODO: replace placeholder div with:
              <Image
                src="/images/maszyna-cf01.png"
                alt="CarForce CF-01 polerka mimośrodowa"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                priority
              />
          */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <div className="relative w-[480px] h-[480px]">
              <Brackets size={22} opacity={0.35} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {/* ── product image placeholder ── */}
                <div className="w-48 h-48 rounded-full border border-[#1e1e1e] flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-full border border-[#2a2a2a] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[rgba(227,0,15,0.3)]" />
                  </div>
                  {/* orbiting dot */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#e3000f]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                    style={{ originX: "50%", originY: "6rem" }}
                  />
                </div>
                <p className="text-[#222222] text-[10px] font-semibold tracking-[0.25em] uppercase">
                  {/* TODO: product render */}
                  Render produktu wkrótce
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── spec strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: e, delay: 0.5 }}
        className="relative z-10 border-t border-[#141414]"
      >
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#141414]">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-5 first:pl-0">
              <p className="text-[#333333] text-[10px] font-semibold tracking-[0.16em] uppercase mb-1">{s.label}</p>
              <p className="text-white text-xl font-extrabold tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
